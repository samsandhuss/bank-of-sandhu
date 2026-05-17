// server/index.js — Express BFF.
//
// TEACH inline: A BFF (Backend-for-Frontend) is the single API surface the
// frontend talks to. It:
//   - Hides secrets (Anthropic API key never reaches the browser)
//   - Composes calls (one frontend request can fan out to several services)
//   - Normalises shapes (frontend gets one consistent JSON contract regardless
//     of what's behind it)
//   - Enforces auth, rate limits, audit logging (none of which we do here, but
//     the BFF is the natural place for them)
//
// This file is deliberately small. In a real bank, each endpoint would be a
// service. Here, every endpoint is mock — but the *shape* of the contract is
// production-credible.

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadCorpus, answerQuestion } from './chat.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const BRAND = process.env.BRAND || 'sandhu';
const DEMO_MODE = process.env.DEMO_MODE !== 'false';

// ---- helpers ---------------------------------------------------------------
function loadBrandConfig(brandId) {
  const p = path.join(ROOT, 'brands', brandId, 'config.json');
  if (!fs.existsSync(p)) {
    throw new Error(`Brand config not found: ${brandId}`);
  }
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function loadComplianceDoc(name) {
  const p = path.join(ROOT, 'docs', 'compliance', `${name}.md`);
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, 'utf8');
}

// Simple in-memory "database". Resets on restart. Deliberate — no persistence
// in a prototype means no migration debt.
const db = {
  applications: new Map(),
  accounts: new Map(),
  leases: new Map(),
  contracts: new Map(),
};

function id(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

// ---- routes ----------------------------------------------------------------

// GET /api/health — liveness check. Always first endpoint in any BFF.
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', brand: BRAND, demoMode: DEMO_MODE, ts: new Date().toISOString() });
});

// GET /api/brand — returns the active brand config for the frontend to theme + label.
app.get('/api/brand', (req, res) => {
  try {
    const cfg = loadBrandConfig(BRAND);
    res.json(cfg);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /api/products?mode=neutral|islamic&jurisdiction=uk|uae
// Returns the products visible to the user given mode + jurisdiction.
app.get('/api/products', (req, res) => {
  const cfg = loadBrandConfig(BRAND);
  const { mode = 'neutral', jurisdiction = 'uk' } = req.query;

  const modeConfig = cfg.modes[mode];
  if (!modeConfig) return res.status(400).json({ error: `Unknown mode: ${mode}` });

  const entity = cfg.entities[jurisdiction];
  if (!entity) return res.status(400).json({ error: `Unknown jurisdiction: ${jurisdiction}` });

  const products = {};
  for (const [key, product] of Object.entries(cfg.products || {})) {
    if (!product.enabled) continue;
    const variant = product.variants?.[mode];
    if (!variant) continue;
    products[key] = {
      ...variant,
      currency: entity.currency,
      currencySymbol: entity.currencySymbol,
      modeLabel: modeConfig.label,
    };
  }

  res.json({
    mode,
    jurisdiction,
    entity,
    terminology: modeConfig.productTerminology,
    disclosureSet: modeConfig.disclosureSet,
    products,
  });
});

// POST /api/onboarding/start
// Creates an application record. Returns prefilled demo data in demo mode.
app.post('/api/onboarding/start', (req, res) => {
  const cfg = loadBrandConfig(BRAND);
  const { mode, jurisdiction } = req.body || {};
  const applicationId = id('app');
  db.applications.set(applicationId, {
    applicationId,
    mode,
    jurisdiction,
    status: 'started',
    createdAt: new Date().toISOString(),
  });
  res.json({
    applicationId,
    prefilledUser: DEMO_MODE ? cfg.demoMode?.prefilledUser : null,
  });
});

// POST /api/kyc/submit
// Mock KYC. In demo mode always passes after a small delay (simulated).
app.post('/api/kyc/submit', (req, res) => {
  const { applicationId, identity } = req.body || {};
  const app = db.applications.get(applicationId);
  if (!app) return res.status(404).json({ error: 'Application not found' });

  app.status = 'kyc-submitted';
  app.identity = identity;

  // TEACH inline (Checkpoint 9): the response includes the AML disclosure
  // text *contextual to this step*. The frontend renders it inline, not on a
  // separate screen.
  res.json({
    applicationId,
    kycResult: 'pass',
    amlDisclosure: {
      short: 'We screened your details against sanctions and PEP lists in line with UAE Federal Decree-Law 20 of 2018 and the UK Money Laundering Regulations 2017.',
      lawfulBasis: 'Article 6(1)(c) — legal obligation (AML/CFT).',
      fullRef: 'docs/compliance/cbuae.md#amlcft',
    },
  });
});

// POST /api/accounts/open
// Opens a current account. Returns account number.
app.post('/api/accounts/open', (req, res) => {
  const { applicationId } = req.body || {};
  const app = db.applications.get(applicationId);
  if (!app) return res.status(404).json({ error: 'Application not found' });

  const accountId = id('acc');
  const accountNumber = (Math.floor(Math.random() * 9e9) + 1e9).toString();
  db.accounts.set(accountId, {
    accountId,
    accountNumber,
    applicationId,
    mode: app.mode,
    jurisdiction: app.jurisdiction,
    openedAt: new Date().toISOString(),
    balance: 0,
  });
  app.status = 'account-opened';
  app.accountId = accountId;
  res.json({ accountId, accountNumber });
});

// POST /api/leasing/quote
// Returns a lease quote given vehicle price, term, and mode.
app.post('/api/leasing/quote', (req, res) => {
  const cfg = loadBrandConfig(BRAND);
  const { mode = 'neutral', vehiclePrice = 100000, termMonths = 36 } = req.body || {};

  const variant = cfg.products?.leasing?.variants?.[mode];
  if (!variant) return res.status(400).json({ error: `No leasing variant for mode: ${mode}` });

  const rate = variant.exampleAPR ?? variant.exampleProfitRate ?? 7.9;
  const monthlyRate = rate / 100 / 12;
  const monthly = (vehiclePrice * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
  const total = monthly * termMonths;

  res.json({
    quoteId: id('quote'),
    mode,
    structureLabel: variant.structureLabel,
    productName: variant.name,
    vehiclePrice,
    termMonths,
    rateLabel: mode === 'islamic' ? 'Profit rate' : 'APR',
    ratePct: rate,
    monthlyPayment: Math.round(monthly * 100) / 100,
    totalPayable: Math.round(total * 100) / 100,
    earlySettlementRules: variant.earlySettlementRules,
  });
});

// POST /api/leasing/sign
// Records a signature event and produces a contract record.
app.post('/api/leasing/sign', (req, res) => {
  const { quoteId, applicationId, signatureName } = req.body || {};
  if (!signatureName) return res.status(400).json({ error: 'signatureName required' });

  const contractId = id('contract');
  const contract = {
    contractId,
    quoteId,
    applicationId,
    signatureName,
    signedAt: new Date().toISOString(),
    status: 'executed',
  };
  db.contracts.set(contractId, contract);
  res.json({ contractId, signedAt: contract.signedAt });
});

// GET /api/contracts/:id/download
// Returns a simple text-as-contract for now. PDF generation lands in Block D.
app.get('/api/contracts/:id/download', (req, res) => {
  const contract = db.contracts.get(req.params.id);
  if (!contract) return res.status(404).send('Contract not found');
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Disposition', `attachment; filename="${contract.contractId}.txt"`);
  res.send(`Demo contract\n\nContract ID: ${contract.contractId}\nSigned by: ${contract.signatureName}\nSigned at: ${contract.signedAt}\n\n(This is a placeholder. PDF rendering lands in Block D.)\n`);
});

// POST /api/chat
// Block E — RAG over docs/compliance/ + Claude grounded answer with citations.
app.post('/api/chat', async (req, res) => {
  const { question } = req.body || {};
  if (!question) return res.status(400).json({ error: 'question required' });

  try {
    const result = await answerQuestion(question);
    res.json({
      answer: result.answer,
      citations: result.citations,
      retrieved: result.retrieved,
      refused: result.refused || false,
      noApiKey: result.noApiKey || false,
      topScore: result.topScore,
    });
  } catch (e) {
    console.error('[chat] error:', e.message);
    res.status(500).json({
      error: e.message,
      answer: 'Sorry, the chatbot is unavailable right now. Please try again in a moment.',
      citations: [],
    });
  }
});

// ---- start -----------------------------------------------------------------
const PORT = process.env.PORT || 3001;

// Load the RAG corpus (Block E) before accepting traffic.
// TEACH inline (Checkpoint 12): we chunk at boot, not per request, because the
// corpus is small and immutable for the session. In production with a larger,
// changing corpus you'd back this with a vector store and a reload signal.
try {
  const { chunkCount, files } = loadCorpus(path.join(ROOT, 'docs', 'compliance'));
  console.log(`[BFF] RAG corpus loaded: ${chunkCount} chunks from ${files.length} files (${files.join(', ')})`);
} catch (e) {
  console.error('[BFF] Failed to load RAG corpus:', e.message);
}

app.listen(PORT, () => {
  console.log(`[BFF] Bank of Sandhu BFF listening on http://localhost:${PORT}`);
  console.log(`[BFF] Active brand: ${BRAND}`);
  console.log(`[BFF] Demo mode: ${DEMO_MODE ? 'ON' : 'OFF'}`);
  console.log(`[BFF] Anthropic API: ${process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_API_KEY.startsWith('sk-ant-...') ? 'configured' : 'NOT configured (chat will return retrieval-only responses)'}`);
});
