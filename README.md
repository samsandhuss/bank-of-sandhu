# Bank of Sandhu — White-Label Digital Bank Prototype

A working prototype of a dual-market digital bank with a faith-aware product layer and an AI-powered compliance assistant.

**Live demo:** https://bank-of-sandhu.onrender.com

## What this is

A weekend build that demonstrates:

1. Two product surfaces — current account opening and auto leasing
2. Faith-neutral OR Islamic banking mode — picked at onboarding, then drives product variants, contract language, fee terminology, and regulatory disclosures end-to-end
3. Multi-jurisdiction compliance — UK and Middle East regulatory regimes visibly reflected in the flows
4. White-labelable — one-command brand onboarding via scripts/new-brand.sh
5. AI-powered chatbot — retrieval-augmented generation over in-repo compliance docs, with grounded answers, source citations, and deterministic refusal on out-of-scope questions
6. E-sign and contract download — full leasing journey terminates in a downloadable, e-signable contract

## Why it exists

A portfolio piece exploring three things at once: dual-market regulated product design, white-label platform patterns, and grounded AI in compliance-heavy contexts.

## Quickstart

git clone <repo-url>
cd bank-of-sandhu
npm install
copy .env.example .env
(then edit .env and add your ANTHROPIC_API_KEY)
npm run dev

Open http://localhost:5173 in your browser.

## Tech stack

- Frontend: Vite, React
- Backend: Node 20, Express
- AI: Anthropic SDK (Claude Haiku 4.5)
- Retrieval: lexical scorer, no vector database
- CI: GitHub Actions

## Status

This is a prototype, not a deployed product. There is no real banking integration, no real authentication, no real money movement. The compliance posture is illustrative only.
