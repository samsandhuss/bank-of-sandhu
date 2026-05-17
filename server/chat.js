// server/chat.js — Block E. RAG over docs/compliance/ + Claude grounded answers.
//
// TEACH inline (Checkpoint 12 — RAG basics):
// Three steps to retrieval-augmented generation:
//   1. CHUNK   — split the corpus into passages small enough to be relevant individually
//   2. RETRIEVE — score chunks against the user's question, take the top-k
//   3. GENERATE — call the LLM with [top-k chunks] + [user question], told to answer
//                 ONLY from the chunks and to cite them
//
// We deliberately avoid embeddings here. The corpus is 6 markdown files at <200 lines each.
// A simple BM25-ish lexical score over chunks does the job, demonstrates the pattern
// clearly, and avoids a vector DB dependency for a weekend prototype.
// In production for Mal you'd swap this for OpenSearch / pgvector / Pinecone — but the
// shape of the code (chunk → retrieve → generate with refusal) is identical.
//
// TEACH inline (Checkpoint 13 — grounded generation & guardrails):
// The system prompt is the cheapest, most effective guardrail. Two rules:
//   1. "Answer ONLY from provided context. If not in context, say so plainly."
//   2. "Cite the source filename for each claim."
// Citation enforcement is double-checked downstream — we attach the chunks
// actually retrieved to the response so the UI can show them even if the model
// forgets to.

import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs';
import path from 'node:path';

const CHUNK_TARGET_CHARS = 800;     // ~150 words; small enough to be precise, big enough to carry context
const CHUNK_OVERLAP_CHARS = 120;    // overlap so a sentence near a boundary still appears in one chunk whole
const TOP_K = 4;                    // how many chunks we send to Claude per question
const MIN_SCORE = 3.5;              // top chunk must score above this to be considered in-corpus
const MIN_DISTINCT_MATCHES = 2;     // top chunk must match at least this many distinct query terms
const MODEL = 'claude-haiku-4-5-20251001';

// ---- Corpus loading & chunking ---------------------------------------------

let CORPUS = null; // { chunks: [{id, source, text, terms}] }

function tokenize(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 2);
}

function buildChunks(text, source) {
  // Split on blank lines first to keep paragraphs together where possible.
  const paragraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  const chunks = [];
  let buf = '';
  for (const p of paragraphs) {
    if ((buf + '\n\n' + p).length > CHUNK_TARGET_CHARS && buf) {
      chunks.push(buf.trim());
      // start next chunk with overlap from end of previous
      buf = buf.slice(-CHUNK_OVERLAP_CHARS) + '\n\n' + p;
    } else {
      buf = buf ? buf + '\n\n' + p : p;
    }
  }
  if (buf.trim()) chunks.push(buf.trim());

  return chunks.map((text, i) => ({
    id: `${source}#${i}`,
    source,
    text,
    terms: tokenize(text),
  }));
}

export function loadCorpus(docsDir) {
  const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));
  const chunks = [];
  for (const file of files) {
    const full = fs.readFileSync(path.join(docsDir, file), 'utf8');
    chunks.push(...buildChunks(full, file));
  }
  CORPUS = { chunks, loadedAt: new Date().toISOString() };
  return { chunkCount: chunks.length, files };
}

// ---- Retrieval --------------------------------------------------------------
//
// Simple TF score with IDF-like boost for rarer terms. Faithful to the BM25
// spirit without the full formula — sufficient for 6 documents of compliance text.

function scoreChunk(queryTerms, chunk) {
  let score = 0;
  for (const qt of queryTerms) {
    const tf = chunk.terms.filter(t => t === qt).length;
    if (tf === 0) continue;
    // crude IDF: chunks containing the term
    const df = CORPUS.chunks.filter(c => c.terms.includes(qt)).length;
    const idf = Math.log((CORPUS.chunks.length - df + 0.5) / (df + 0.5) + 1);
    score += tf * idf;
  }
  return score;
}

export function retrieve(question, k = TOP_K) {
  if (!CORPUS) throw new Error('Corpus not loaded. Call loadCorpus(docsDir) first.');
  const qTerms = tokenize(question);
  if (qTerms.length === 0) return [];

  const scored = CORPUS.chunks.map(c => ({
    chunk: c,
    score: scoreChunk(qTerms, c),
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.filter(s => s.score > 0).slice(0, k);
}

// ---- Generation -------------------------------------------------------------

const SYSTEM_PROMPT = `You are a compliance and product assistant for a demo digital bank.

You have access to the bank's compliance documentation as CONTEXT below. You MUST follow these rules:

1. Answer ONLY from the provided CONTEXT. Do not use outside knowledge about FCA, CBUAE, AAOIFI, GDPR, PDPL, or Consumer Duty even if you "know" the answer.
2. If the answer is not in the CONTEXT, respond exactly: "I don't have that in our compliance documentation. Please contact support for accurate information."
3. Cite the source filename for every factual claim, like this: [source: fca.md] or [source: aaoifi.md].
4. Keep answers concise (2-4 sentences typically). Plain English. No jargon unless the user asked for it.
5. This is a demo prototype. Numerical examples (rates, FRNs, licence numbers) are illustrative — note this when relevant.
6. Never invent regulatory clauses, fee structures, or product features. If asked for specifics not in the context, refuse cleanly.

Refusal example:
  User: "What is the exact fee for international transfers?"
  You: "I don't have that in our compliance documentation. Please contact support for accurate information."

Good answer example:
  User: "What does the SSB do?"
  You: "The Sharia Supervisory Board reviews and approves every product structure before launch. In our Islamic mode, the SSB sign-off panel appears on every product summary, and contracts include a Sharia governance clause directing Sharia-specific disputes to the Board before conventional courts. [source: aaoifi.md]"
`;

function formatContext(retrieved) {
  if (retrieved.length === 0) return '(no relevant context found)';
  return retrieved
    .map(({ chunk }, i) => `--- CHUNK ${i + 1}: ${chunk.id} ---\n${chunk.text}`)
    .join('\n\n');
}

export async function answerQuestion(question, opts = {}) {
  const retrieved = retrieve(question, opts.k || TOP_K);
  const topScore = retrieved[0]?.score || 0;
  const qTerms = tokenize(question);

  // Count how many distinct query terms the top chunk actually matches.
  // This guards against generic words like "what/is/the" piling up a score
  // without the chunk really being about the question's subject.
  let distinctMatches = 0;
  if (retrieved[0]) {
    distinctMatches = qTerms.filter(qt => retrieved[0].chunk.terms.includes(qt)).length;
  }

  // Hard refusal short-circuit: low score OR too few distinct term hits → out of corpus.
  // Cheaper (no API call) and more deterministic for clearly off-topic questions.
  if (topScore < MIN_SCORE || distinctMatches < MIN_DISTINCT_MATCHES) {
    return {
      answer: "I don't have that in our compliance documentation. Please contact support for accurate information.",
      citations: [],
      retrieved: [],
      refused: true,
      topScore: Math.round(topScore * 100) / 100,
      distinctMatches,
    };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey || apiKey.startsWith('sk-ant-...')) {
    // Graceful degradation when no API key is configured. The retrieval still runs,
    // so we return the matching chunks to prove the RAG layer works. Useful for local
    // dev without burning credits.
    return {
      answer: `(No ANTHROPIC_API_KEY set — returning retrieval results only.)\n\nTop match: ${retrieved[0].chunk.id}\n\n${retrieved[0].chunk.text.slice(0, 400)}…`,
      citations: retrieved.map(r => r.chunk.source),
      retrieved: retrieved.map(r => ({ source: r.chunk.source, score: r.score })),
      noApiKey: true,
      topScore,
    };
  }

  const client = new Anthropic({ apiKey });
  const context = formatContext(retrieved);

  const userContent = `CONTEXT:\n\n${context}\n\n---\n\nUSER QUESTION: ${question}`;

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 600,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: userContent }],
  });

  const answer = response.content
    .filter(b => b.type === 'text')
    .map(b => b.text)
    .join('\n')
    .trim();

  return {
    answer,
    citations: [...new Set(retrieved.map(r => r.chunk.source))],
    retrieved: retrieved.map(r => ({ source: r.chunk.source, score: Math.round(r.score * 100) / 100 })),
    topScore: Math.round(topScore * 100) / 100,
    model: MODEL,
    usage: response.usage,
  };
}
