#!/usr/bin/env bash
# new-brand.sh — Golden path for adding a brand to the white-label platform.
#
# Usage:
#   ./scripts/new-brand.sh <brand-id> [--jurisdiction uk|uae|both] [--modes neutral,islamic]
#
# Examples:
#   ./scripts/new-brand.sh acme-bank --jurisdiction both --modes neutral,islamic
#   ./scripts/new-brand.sh halal-pay --jurisdiction uae --modes islamic
#
# What it does:
#   1. Validates the brand ID (lowercase, hyphens only, no collisions)
#   2. Creates brands/<id>/ from the template
#   3. Generates a config.json with sensible defaults you can edit
#   4. Adds a stub theme file
#   5. Registers the brand in brands/index.json
#   6. Prints the next 3 things to do
#
# Pedagogical note: this script *is* the golden path Checkpoint 3 teaches.
# Read it. It is small on purpose. The smaller and more opinionated the path,
# the more it scales.

set -euo pipefail

# ---- args & defaults --------------------------------------------------------
BRAND_ID="${1:-}"
JURISDICTION="both"
MODES="neutral,islamic"

if [[ -z "$BRAND_ID" ]]; then
  echo "ERROR: brand id required."
  echo "Usage: $0 <brand-id> [--jurisdiction uk|uae|both] [--modes neutral,islamic]"
  exit 1
fi

shift || true
while [[ $# -gt 0 ]]; do
  case "$1" in
    --jurisdiction) JURISDICTION="$2"; shift 2;;
    --modes) MODES="$2"; shift 2;;
    *) echo "Unknown arg: $1"; exit 1;;
  esac
done

# ---- validation -------------------------------------------------------------
if [[ ! "$BRAND_ID" =~ ^[a-z][a-z0-9-]*$ ]]; then
  echo "ERROR: brand id must be lowercase letters, numbers, and hyphens; must start with a letter."
  exit 1
fi

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BRAND_DIR="$REPO_ROOT/brands/$BRAND_ID"

if [[ -d "$BRAND_DIR" ]]; then
  echo "ERROR: brand '$BRAND_ID' already exists at $BRAND_DIR"
  exit 1
fi

# ---- scaffold ---------------------------------------------------------------
mkdir -p "$BRAND_DIR"

# Build entities block based on jurisdiction
UK_ENTITY=""
UAE_ENTITY=""
if [[ "$JURISDICTION" == "uk" || "$JURISDICTION" == "both" ]]; then
  UK_ENTITY='    "uk": {
      "legalName": "'"$BRAND_ID"' UK Limited",
      "regulator": "FCA",
      "regulatorReference": "FRN: TBD",
      "address": "TBD, London, UK",
      "currency": "GBP",
      "currencySymbol": "£"
    }'
fi
if [[ "$JURISDICTION" == "uae" || "$JURISDICTION" == "both" ]]; then
  UAE_ENTITY='    "uae": {
      "legalName": "'"$BRAND_ID"' UAE PJSC",
      "regulator": "CBUAE",
      "regulatorReference": "CBUAE Licence: TBD",
      "address": "TBD, Abu Dhabi, UAE",
      "currency": "AED",
      "currencySymbol": "AED"
    }'
fi

# Join entities with comma if both
if [[ -n "$UK_ENTITY" && -n "$UAE_ENTITY" ]]; then
  ENTITIES_BLOCK="$UK_ENTITY,
$UAE_ENTITY"
else
  ENTITIES_BLOCK="$UK_ENTITY$UAE_ENTITY"
fi

# Build modes block
INCLUDE_NEUTRAL=$(echo "$MODES" | grep -q "neutral" && echo "yes" || echo "no")
INCLUDE_ISLAMIC=$(echo "$MODES" | grep -q "islamic" && echo "yes" || echo "no")

cat > "$BRAND_DIR/config.json" <<EOF
{
  "brand": {
    "id": "$BRAND_ID",
    "displayName": "TBD",
    "shortName": "TBD",
    "tagline": "TBD",
    "domain": "$BRAND_ID.demo"
  },
  "identity": {
    "primaryColor": "#000000",
    "accentColor": "#888888",
    "background": "#FFFFFF",
    "fontFamily": "Inter, system-ui, sans-serif",
    "logoText": "$(echo "$BRAND_ID" | tr '[:lower:]' '[:upper:]')"
  },
  "entities": {
$ENTITIES_BLOCK
  },
  "modes": {
$( [[ "$INCLUDE_NEUTRAL" == "yes" ]] && cat <<NEUTRAL
    "neutral": {
      "label": "Standard banking",
      "subLabel": "TBD",
      "productTerminology": { "lease": "Lease", "fee": "APR", "feeShortLabel": "APR", "account": "Current account" },
      "contractTemplate": "conventional",
      "disclosureSet": ["fca", "cbuae", "gdpr", "pdpl", "consumer-duty"]
    }$( [[ "$INCLUDE_ISLAMIC" == "yes" ]] && echo "," )
NEUTRAL
)
$( [[ "$INCLUDE_ISLAMIC" == "yes" ]] && cat <<ISLAMIC
    "islamic": {
      "label": "Islamic banking",
      "subLabel": "TBD",
      "productTerminology": { "lease": "Ijara", "fee": "Profit rate", "feeShortLabel": "Profit", "account": "Wadiah account" },
      "contractTemplate": "islamic",
      "disclosureSet": ["cbuae", "aaoifi", "pdpl"],
      "sharia": {
        "supervisoryBoardLabel": "Sharia Supervisory Board",
        "complianceStatement": "TBD"
      }
    }
ISLAMIC
)
  },
  "products": {
    "currentAccount": { "enabled": true, "variants": {} },
    "leasing": { "enabled": true, "variants": {} }
  },
  "demoMode": {
    "enabled": true,
    "prefilledUser": { "name": "Demo User", "email": "demo@$BRAND_ID.test" },
    "chatbotSampleQuestions": []
  },
  "compliance": {
    "regimes": [],
    "complianceDocsPath": "docs/compliance/"
  }
}
EOF

# Theme stub
cat > "$BRAND_DIR/theme.css" <<EOF
/* Auto-generated theme for $BRAND_ID. Edit colours to match brand. */
:root[data-brand="$BRAND_ID"] {
  --brand-primary: #000000;
  --brand-accent: #888888;
  --brand-background: #FFFFFF;
  --brand-font: 'Inter', system-ui, sans-serif;
}
EOF

# Register in brands/index.json (create if missing)
INDEX="$REPO_ROOT/brands/index.json"
if [[ ! -f "$INDEX" ]]; then
  echo '{ "brands": [] }' > "$INDEX"
fi

# Append using node so we don't depend on jq
node -e "
const fs = require('fs');
const idx = JSON.parse(fs.readFileSync('$INDEX', 'utf8'));
if (!idx.brands.includes('$BRAND_ID')) idx.brands.push('$BRAND_ID');
fs.writeFileSync('$INDEX', JSON.stringify(idx, null, 2) + '\n');
"

# ---- success message --------------------------------------------------------
echo ""
echo "✓ Brand '$BRAND_ID' scaffolded at $BRAND_DIR"
echo ""
echo "Next 3 things to do:"
echo "  1. Edit brands/$BRAND_ID/config.json — set displayName, regulators, products"
echo "  2. Edit brands/$BRAND_ID/theme.css — set brand colours"
echo "  3. Run: BRAND=$BRAND_ID npm run dev"
echo ""
echo "Need to remove it? rm -rf $BRAND_DIR && edit brands/index.json"
