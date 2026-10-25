# Specs

> The source-of-truth architecture documents for the Mal product, used as reference patterns for Bank of Sandhu.
>
> **Saturday action:** Drop the four PDF files below into this folder before starting Block C.

## Required files

| File | Owner | Status |
|---|---|---|
| `mal-architecture-v1.0.pdf` | Sam | TO BE ADDED Saturday morning |
| `mal-12-month-roadmap.pdf` | Sam | TO BE ADDED Saturday morning |
| `mal-murabaha-auto-finance-option-b.pdf` | Sam | TO BE ADDED Saturday morning |
| `mal-zakat-intelligence-engine.pdf` | Sam | TO BE ADDED Saturday morning |

## Why these matter for Bank of Sandhu

Bank of Sandhu is a simplified sibling of Mal. The architecture decisions (7-layer, Mambu BUY, Sharia Layer BUILD, AWS UAE region, SSB Ruleset Engine) inform Sandhu's design even though Sandhu is a prototype with mock everything.

| Mal artefact | What it tells Sandhu |
|---|---|
| Architecture v1.0 | 7-layer pattern — copy the layering; ignore the depth. Sandhu has frontend + BFF + mock services, but in the same shape. |
| 12-month Roadmap | MVP scope discipline — don't try to build what takes Mal 12 months in 2 days. |
| Murabaha Auto Option B | Contract structure — Sandhu's Ijara mode borrows from this. |
| Zakat Intelligence Engine | RAG + classification pattern — Sandhu's chatbot in Block E uses the same grounding pattern. |

## Reading guide for Claude Code

When Block C starts, ask Claude Code to:

1. Read `mal-architecture-v1.0.pdf` and `mal-murabaha-auto-finance-option-b.pdf`.
2. Identify the **3 things Sandhu must reflect** (in language, contract structure, governance signal).
3. Identify the **3 things Sandhu can safely simplify** (no real core, no real ML, no real SSB).
4. Propose Sandhu's leasing flow as a delta against Mal's, in 5 bullets.
