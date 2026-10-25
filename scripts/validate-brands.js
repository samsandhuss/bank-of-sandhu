#!/usr/bin/env node
/**
 * validate-brands.js — validates every brands/<id>/config.json against required shape.
 *
 * Pedagogical note (TEACH.md Checkpoint 2):
 * A brand config is a *schema-driven product surface*. If we treat it as a product,
 * it gets tests like any other product. This file is those tests.
 *
 * Wired into CI so that a malformed brand config blocks merge.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BRANDS_DIR = path.join(__dirname, '..', 'brands');
const INDEX_PATH = path.join(BRANDS_DIR, 'index.json');

const REQUIRED_TOP_LEVEL = ['brand', 'identity', 'entities', 'modes', 'products', 'demoMode', 'compliance'];
const REQUIRED_BRAND_FIELDS = ['id', 'displayName', 'shortName', 'tagline', 'domain'];
const REQUIRED_IDENTITY = ['primaryColor', 'accentColor', 'background', 'fontFamily', 'logoText'];

let errors = 0;

function fail(brand, msg) {
  console.error(`✗ [${brand}] ${msg}`);
  errors++;
}

function validateBrand(brandId) {
  const cfgPath = path.join(BRANDS_DIR, brandId, 'config.json');
  if (!fs.existsSync(cfgPath)) {
    fail(brandId, `config.json missing at ${cfgPath}`);
    return;
  }

  let cfg;
  try {
    cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
  } catch (e) {
    fail(brandId, `invalid JSON: ${e.message}`);
    return;
  }

  for (const key of REQUIRED_TOP_LEVEL) {
    if (!(key in cfg)) fail(brandId, `missing top-level key: ${key}`);
  }

  if (cfg.brand) {
    for (const key of REQUIRED_BRAND_FIELDS) {
      if (!cfg.brand[key]) fail(brandId, `brand.${key} missing or empty`);
    }
    if (cfg.brand.id !== brandId) {
      fail(brandId, `brand.id (${cfg.brand.id}) does not match folder name (${brandId})`);
    }
  }

  if (cfg.identity) {
    for (const key of REQUIRED_IDENTITY) {
      if (!cfg.identity[key]) fail(brandId, `identity.${key} missing`);
    }
    if (cfg.identity.primaryColor && !/^#[0-9A-Fa-f]{6}$/.test(cfg.identity.primaryColor)) {
      fail(brandId, `identity.primaryColor must be a #RRGGBB hex; got: ${cfg.identity.primaryColor}`);
    }
  }

  if (cfg.entities && Object.keys(cfg.entities).length === 0) {
    fail(brandId, 'must declare at least one entity (uk and/or uae)');
  }

  if (cfg.modes && Object.keys(cfg.modes).length === 0) {
    fail(brandId, 'must declare at least one mode (neutral and/or islamic)');
  }

  if (cfg.modes) {
    for (const [modeName, mode] of Object.entries(cfg.modes)) {
      if (!mode.contractTemplate) {
        fail(brandId, `modes.${modeName}.contractTemplate missing`);
      }
      if (!mode.disclosureSet || !Array.isArray(mode.disclosureSet)) {
        fail(brandId, `modes.${modeName}.disclosureSet must be an array`);
      }
    }
  }

  if (cfg.compliance && cfg.compliance.regimes) {
    const docDir = path.join(__dirname, '..', 'docs', 'compliance');
    const regimeToDoc = {
      'FCA': 'fca.md',
      'CBUAE': 'cbuae.md',
      'AAOIFI': 'aaoifi.md',
      'GDPR': 'gdpr-ukdpa.md',
      'UK-DPA': 'gdpr-ukdpa.md',
      'UAE-PDPL': 'uae-pdpl.md',
      'Consumer-Duty': 'consumer-duty.md'
    };
    for (const regime of cfg.compliance.regimes) {
      const doc = regimeToDoc[regime];
      if (!doc) {
        fail(brandId, `unknown compliance regime: ${regime}`);
        continue;
      }
      if (!fs.existsSync(path.join(docDir, doc))) {
        fail(brandId, `regime ${regime} references docs/compliance/${doc} which is missing`);
      }
    }
  }

  if (errors === 0) console.log(`✓ ${brandId}`);
}

if (!fs.existsSync(INDEX_PATH)) {
  console.error('brands/index.json missing');
  process.exit(1);
}

const index = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
console.log(`Validating ${index.brands.length} brand(s)...`);

const startErrors = errors;
for (const brandId of index.brands) {
  validateBrand(brandId);
}

if (errors > startErrors) {
  console.error(`\n✗ ${errors} validation error(s).`);
  process.exit(1);
}
console.log('\n✓ All brand configs valid.');
