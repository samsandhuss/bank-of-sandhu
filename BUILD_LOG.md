# BUILD & LEARN LOG — bank-of-sandhu

**Owner:** Sam Sandhu (Subhpreet Singh Sandhu)
**Repo:** `C:\Users\user\Downloads\bank-of-sandhu`
**Live demo:** https://bank-of-sandhu.onrender.com
**Mantra:** stay learning, stay happy
**Goal:** be genuinely job-ready for senior AI product roles and to represent platform/CICD strategy credibly in my current role.

---

## ⚠️ PERMANENT RULE — read first, every session

This file lives in a public repo. Therefore:

- **Never name real colleagues or leaders by name.** Use generic terms: *"a senior engineering leader"*, *"a platform leader"*, *"a delivery lead"*, *"a stakeholder"*.
- **Never name the current employer or past employers.** Use generic terms: *"current employer"*, *"a major UK financial services organisation"*, *"a regulated UK bank"*, *"a previous fintech employer"*, *"a previous retail org"*.
- **Never name internal tools or terms that identify the employer.** Generic equivalents: *"internal application portfolio system"*, *"internal change management tool"*, *"firewall change request process"*.
- **Specific named CI/CD tools are fine** (GitHub Actions, SonarQube, Snyk, Artifactory, Docker, Jenkins, Buildkite, Azure DevOps, Harness, Port.io) — these aren't employer-identifying.
- **Job application targets I own (ADCB, Mal) CAN be named.** These are mine, not someone else's secrets.

This rule overrides any framing used in chat history. If Claude is reading this file as session opener, **apply this rule to everything generated for the rest of the session**.

---

## How this file works

This file is the single source of truth for what I've built, what I've been taught, what I own, and what I still need to learn. It replaces every prior log. It is **paste-able as the opener** for every new Claude session.

### Three sections that matter most each session
1. **§4 Concept curriculum** — every concept I'm expected to know, with status, definition, last spot-check date, JD relevance.
2. **§5 Spot-check log** — running record of when each owned concept was last checked and whether it held.
3. **§6 NEXT — resume here** — what tomorrow's session does, in order, with the exact opener line.

### How I learn (do not deviate)
- **I learn by doing.** Concepts taught at the moment an artefact is created, not in parallel docs.
- **Plain English first.** No jargon until the pizza-style analogy is owned.
- **Slow is correct.** Don't advance until the current concept is explained back in my own words.
- **Owned ≠ owned forever.** Every concept marked `OWNED` must be spot-checked at random intervals. Memory fades. If I drift, status drops from `OWNED` to `PARTIAL` and we re-teach.
- **Watch my two named failure modes**, especially when I'm tired:
  1. Reaching for technical-sounding words instead of the plain idea.
  2. When a redo gets uncomfortable, the brain reaches for a fresh shiny topic.

### Session ritual (every close-out)
1. ✅ Green ticks of what got done in plain English.
2. 📍 Where we got to — files, what works, what's stub.
3. 🎤 Talking points — short sentences for work/interviews/recruiters, never AI-generated-sounding.
4. 🌅 Tomorrow's opener — exact line to paste.
5. 🗺️ Now / Next / Later snapshot.

---

## §1 — What this build is

**bank-of-sandhu** is a white-labelable Islamic digital banking prototype:
- **Primary brand:** Mal (Islamic digital finance venture I'm building).
- **White-label test brand:** Bank of Sandhu (proves the theme/brand abstraction works).
- **Two journeys:** leasing flow (Murabaha auto finance), and a RAG chatbot answering Sharia-finance questions with citations.
- **Stack:** Vite + React frontend, Node BFF, Claude Haiku 4.5 (`claude-haiku-4-5-20251001`), in-repo knowledge files (`aaoifi.md`), Render deployment.

It is **dual-purpose**:
1. **Portfolio piece** — shareable URL anyone can walk through; demonstrates RAG end-to-end with real Sharia source citations and refusal guardrails.
2. **Hands-on learning vehicle** — mirrors IDP patterns (env provisioning, golden paths, team autonomy, service discovery) so I can explain each concept by pointing to working code in my own repo.

---

## §2 — Modules (curriculum running alongside the build)

Five modules, each ties a worked example in `bank-of-sandhu` to a real concept I need to own. Each module follows the structure: **What we built → Why → What it taught me → Interview bridge → Work bridge → Now/Next/Later**.

| # | Module | Status | Worked example anchor |
|---|---|---|---|
| M1 | GitHub + Actions for non-devs | NOT STARTED | The repo's own CI workflow (`.github/workflows/`) |
| M2 | Code quality gates (SonarQube, Snyk in PR pipeline) | NOT STARTED | STATION 1 findings already triaged in `server/index.js` |
| M3 | Artefact management (Artifactory, GH Packages, semver) | NOT STARTED | Docker image versioning for the Node BFF |
| M4 | IDP capabilities applied (catalog, golden paths, scorecards, self-service) | NOT STARTED | The repo itself as a golden-path template; README as service catalog entry |
| M5 | AI in the SDLC (RAG, agents, MCP) | IN PROGRESS — Chunk 1 owned (Session 05) | `server/chat.js` walkthrough, chunk by chunk |

**Currently active:** M5, Chunk 1 of `server/chat.js`.

---

## §3 — Session history (chronological)

### Session 01 — Clean repo, deploy, RAG chatbot
**What:** Flattened repo history, made repo public, deployed to Render (one URL), built RAG chatbot with in-repo knowledge file + source citation + refusal threshold, set up professional GitHub profile.
**Why:** A live link beats a code-only repo for recruiters. Original knowledge file = zero copyright risk in public repo.
**Status:** ✅ Done. (Detail of the Session 01 teaching framings is **deprecated** — pizza analogy from Session 05 is now canonical for RAG concepts. Do not regress to Session 01 phrasings like "retrieve, ground, generate, cite".)

### Sessions 02–04 — Block A–E build + RAG concept attempts
**What:** Built blocks A–E of bank-of-sandhu: PDF contract, cookie consent gating, automated tests, GitHub push, working chatbot with Claude Haiku 4.5 + AAOIFI citations. Began the chunked walkthrough of `server/chat.js`.
**Status:** ✅ Build complete. RAG concept ownership = partial after Session 04 (only "chunk concept" + half of "retrieve" owned; augment and generate had drifted into jargon).
**Failure modes that fired:** Both — jargon reach on augment ("searching"), shiny topic pull mid-redo (firewall change topics, containerised testing, and headless browser CI all surfaced and were correctly deferred).

### Session 05 — Chunk 1 of `server/chat.js` FULLY OWNED ✅
**What:** Locked all four foundational RAG concepts in plain English / pizza terms.
**Concepts owned tonight:**
- **Chunking** = categorise into small chunks; the fridge with ingredients in various boxes. Prep work that fills the fridge.
- **Retrieve** = once the order is read, scan the fridge and only get the matching ingredients ready (no pineapple, extra cheese). Fridge → counter. MATCHING.
- **Augment** = getting the order AND the ingredients in the chef's hands. Counter → chef's hands. HANDOVER. Not picking, not matching, not searching.
- **Generate** = chef only cooks what's on the cards — nothing else, no added sprinkle of something, because the customer may have allergies. The one strict rule: cook only from handed cards, refuse if missing, label each fact = citations. **Allergies = hallucinations.**

**Failure modes:** Both fired and both beaten. Shiny-topic pull caught and deferred. Jargon reach on augment caught on second redo with "handover".
**Best line produced (keep for interviews):** *"no added sprinkle of something — the customer may have allergies."*

### Session 06 — PLANNED
**What:** Pizza recap (5 min spot-check), then the on-prem + cloud + GitHub Actions bundle taught as ONE worked example. See §6.

---

## §4 — Concept curriculum

Legend:
- 🟢 **OWNED** = can explain in plain English to a non-technical stakeholder AND to a senior engineer.
- 🟡 **PARTIAL** = touched, partially clear, drifts when tired or pressed.
- 🔴 **NOT STARTED** = haven't been taught it yet, or admitted I can't explain it.
- 🟠 **STALE** = was owned, but spot-check failed. Re-teach needed.

**JD relevance:** `ADCB` (Abu Dhabi role) · `Mal` (own venture) · `WORK` (current day-job) · `ALL` (all three).

---

### 4A — AI / ML / GenAI concepts

| # | Concept | Status | Plain-English definition (when owned) | Last spot-check | JD |
|---|---|---|---|---|---|
| A1 | LLM (Large Language Model) | 🟡 PARTIAL | A model trained on huge amounts of text that generates human-like answers. On its own it can hallucinate. | — | ALL |
| A2 | Hallucination | 🟢 OWNED | The model adds a sprinkle of something the customer didn't ask for. Could be an allergy = harmful. | 2026-05-21 (Session 05) | ALL |
| A3 | RAG (Retrieval-Augmented Generation) | 🟢 OWNED | The full pizza pipeline: chunking, retrieve, augment, generate. Grounds the model in real source documents and cites them. | 2026-05-21 (Session 05) | ADCB, Mal |
| A4 | Chunking | 🟢 OWNED | Categorise into small chunks — the fridge with ingredients in various boxes. Prep work that fills the fridge. | 2026-05-21 (Session 05) | ADCB, Mal |
| A5 | Retrieve | 🟢 OWNED | Once the order is read, scan the fridge and only get the matching ingredients ready (no pineapple, extra cheese). Fridge → counter. MATCHING, not speed. | 2026-05-21 (Session 05) | ADCB, Mal |
| A6 | Augment | 🟢 OWNED | Getting the order AND the ingredients in the chef's hands. Counter → chef's hands. HANDOVER. | 2026-05-21 (Session 05) | ADCB, Mal |
| A7 | Generate | 🟢 OWNED | Chef cooks ONLY from handed cards. Refuses if missing. Labels each fact = citations. Allergies = hallucinations. | 2026-05-21 (Session 05) | ADCB, Mal |
| A8 | Refusal / guardrail threshold | 🟡 PARTIAL | The bot refuses when no card is good enough. Need to drill: what's the threshold actually scoring? | — | ADCB, Mal |
| A9 | Source attribution / citation | 🟢 OWNED | Labelling each ingredient with which box it came from. Why a regulator cares: auditability. | 2026-05-21 (Session 05) | ADCB, Mal |
| A10 | Embedding | 🔴 NOT STARTED | (Admitted gap — needs pizza-style drill.) | — | ADCB, Mal |
| A11 | Vector database | 🔴 NOT STARTED | (Admitted gap — drill priority.) | — | ADCB, Mal |
| A12 | Pinecone | 🔴 NOT STARTED | A specific managed vector database. Owned after A11 is owned. | — | ADCB |
| A13 | Lexical scoring vs vector scoring | 🟡 PARTIAL | Bank-of-sandhu uses lexical (word-match). Production usually uses vector (meaning-match). The leap from one to the other is the next learning jump. | — | ADCB, Mal |
| A14 | Context window | 🟡 PARTIAL | Why the chef can't hold the whole fridge. The model's limit on how much text it can process at once. | — | ALL |
| A15 | Prompt / system prompt | 🔴 NOT STARTED | The instructions written on the chef's apron. Needs drill. | — | ALL |
| A16 | Few-shot / zero-shot | 🔴 NOT STARTED | — | — | ADCB |
| A17 | Fine-tuning vs RAG | 🔴 NOT STARTED | Two ways to teach a model new things — important distinction for interviews. | — | ADCB, Mal |
| A18 | LangChain | 🔴 NOT STARTED | A framework for stitching RAG pieces together. Pizza-prep kit. | — | ADCB |
| A19 | LlamaIndex | 🔴 NOT STARTED | LangChain's main competitor. | — | ADCB |
| A20 | Azure OpenAI | 🔴 NOT STARTED | Microsoft's hosted version of OpenAI models. ADCB stack. | — | ADCB |
| A21 | Agentic AI | 🔴 NOT STARTED | The chef can pick up the phone and call the supplier. Models that take multi-step actions, not just answer. | — | ADCB, Mal |
| A22 | MCP (Model Context Protocol) | 🔴 NOT STARTED | A standardised way for models to call external tools. Anthropic's spec. | — | ADCB, Mal |
| A23 | Evals / RAGAS metrics | 🔴 NOT STARTED | How you measure if your RAG is any good. Critical for governance answers. | — | ADCB |
| A24 | Governance / responsible AI | 🔴 NOT STARTED | The framework around audit, refusal, bias, transparency. Banking-critical. | — | ADCB, Mal |
| A25 | Token / tokenisation | 🔴 NOT STARTED | The chef counts ingredients in tokens, not words. Why API pricing matters. | — | ALL |
| A26 | Temperature / top-p | 🔴 NOT STARTED | How adventurous the chef is allowed to be. | — | ALL |
| A27 | Streaming vs batch responses | 🔴 NOT STARTED | The pizza arrives slice by slice, or all at once. | — | ALL |

---

### 4B — CI/CD daily-work stack (5+ years in this environment — should own all of these)

Honest position: I've worked with these for years but my instinct is that I can't always explain them cleanly to a non-technical stakeholder. Treat every one as needing drill until owned.

| # | Concept | Status | Plain-English definition (when owned) | Last spot-check | JD |
|---|---|---|---|---|---|
| B1 | CI (Continuous Integration) | 🟡 PARTIAL | Every code change automatically gets built and tested before it's allowed into the main codebase. | — | WORK, ALL |
| B2 | CD (Continuous Delivery / Deployment) | 🟡 PARTIAL | Every change that passes CI automatically goes to a staging or production environment. Delivery = ready to deploy. Deployment = actually deployed. | — | WORK, ALL |
| B3 | Pipeline | 🟡 PARTIAL | The end-to-end conveyor belt from `git push` to running in production. | — | WORK |
| B4 | Build | 🔴 NOT STARTED | Turning source code into a runnable artefact (a JAR, a Docker image, a bundled JS file). | — | WORK |
| B5 | Artefact | 🔴 NOT STARTED | The output of a build. The thing you actually deploy. | — | WORK |
| B6 | Test stages (unit, integration, E2E) | 🔴 NOT STARTED | Tiny tests of one thing → tests of things working together → tests of the whole user journey. | — | WORK |
| B7 | Branch protection / rulesets | 🔴 NOT STARTED | Rules on what's allowed to be merged into main (review required, checks must pass). | — | WORK |
| B8 | GitHub Actions (GHA) | 🟡 PARTIAL | GitHub's own CI/CD runner. Workflows defined in YAML in `.github/workflows/`. | — | WORK, ALL |
| B9 | GHA self-hosted runner | 🔴 NOT STARTED | A worker process running inside your own network that GHA talks to — so it can deploy on-prem. **Session 06 topic.** | — | WORK |
| B10 | Firewall change request process | 🔴 NOT STARTED | The process for getting network access granted between systems — needed when a CI runner has to reach into an internal network. **Session 06 topic.** | — | WORK |
| B11 | Containerised app testing in CI | 🔴 NOT STARTED | Spinning the app up in Docker inside the pipeline and running tests against the real thing. **Session 06 topic.** | — | WORK |
| B12 | Headless browser testing in CI | 🔴 NOT STARTED | Playwright/Cypress/Selenium running E2E tests in the pipeline without a visible browser. **Session 06 topic.** | — | WORK |
| B13 | Cloud vs on-prem split | 🟡 PARTIAL | Where the app physically runs — public cloud (AWS/Azure) vs the org's own data centres. The reason all the rest exists. **Session 06 topic.** | — | WORK |
| B14 | Jenkins / CloudBees Jenkins | 🟡 PARTIAL | The old-school CI/CD server. Migrating off it onto GHA at current employer. | — | WORK |
| B15 | Buildkite | 🟡 PARTIAL | A CI/CD platform currently being migrated off. | — | WORK |
| B16 | Azure DevOps | 🟡 PARTIAL | Microsoft's CI/CD + project management platform. Currently being migrated off. | — | WORK |
| B17 | Harness | 🟡 PARTIAL | A CD-focused platform. Currently being migrated off. | — | WORK |
| B18 | SonarQube | 🔴 NOT STARTED | Static code analysis — finds bugs and code smells before code is merged. | — | WORK |
| B19 | Snyk | 🔴 NOT STARTED | Vulnerability scanning — finds known security holes in dependencies. | — | WORK |
| B20 | Artifactory | 🔴 NOT STARTED | A central library of all the built artefacts (Docker images, npm packages, JARs). | — | WORK |
| B21 | Docker | 🔴 NOT STARTED | Packaging an app + everything it needs to run into a single portable container. | — | WORK, ALL |
| B22 | Docker image vs container | 🔴 NOT STARTED | Image = the recipe. Container = a running instance cooked from the recipe. | — | WORK |
| B23 | Semver (semantic versioning) | 🔴 NOT STARTED | MAJOR.MINOR.PATCH — the rules for versioning artefacts. | — | WORK |
| B24 | Secret management | 🟡 PARTIAL | API keys live in env vars on the host, never in code. Rotate if exposed. (Session 01 touched this.) | — | WORK, ALL |
| B25 | DORA metrics (deployment frequency, lead time, MTTR, change failure rate) | 🔴 NOT STARTED | The four numbers that prove your delivery is actually improving. The "real release frequency" point depends on these. | — | WORK |

---

### 4C — Platform Engineering / IDP concepts (current day-job — own these tightest)

I'm the PO for an Internal Developer Portal POC at current employer (third-party SaaS vendor: Port.io). These are non-negotiable.

| # | Concept | Status | Plain-English definition (when owned) | Last spot-check | JD |
|---|---|---|---|---|---|
| C1 | Platform Engineering | 🟡 PARTIAL | Building internal tools so app teams can self-serve infrastructure and pipelines instead of raising tickets. | — | WORK |
| C2 | DevEx (Developer Experience) | 🟡 PARTIAL | How easy and fast it is for a developer to do their job. Measured. | — | WORK |
| C3 | IDP (Internal Developer Portal) | 🟡 PARTIAL | A single front door where developers find their services, run pipelines, see ownership, request resources. Port.io is the vendor at current employer. | — | WORK |
| C4 | Golden path template | 🟡 PARTIAL | A pre-built, known-good starting repo + pipeline so teams don't reinvent the wheel. | — | WORK |
| C5 | Service catalog | 🟡 PARTIAL | A searchable list of every service in the org with metadata (owner, repo, environment, status). | — | WORK |
| C6 | Scorecards | 🔴 NOT STARTED | A rubric the IDP applies to every service: does it have an owner? CI? security scan? SLOs? Surfaces gaps. | — | WORK |
| C7 | Self-service provisioning | 🔴 NOT STARTED | Developer clicks a button, gets a new environment / database / pipeline without raising a ticket. | — | WORK |
| C8 | Team autonomy | 🟡 PARTIAL | Teams can ship without depending on a central platform team for every change. | — | WORK |
| C9 | Application Portfolio Management (internal system) | 🔴 NOT STARTED | An internal system that tracks the org's apps and their status. Clarify exactly what "done" means in that system. **Session 06 topic.** | — | WORK |
| C10 | Port.io | 🟡 PARTIAL | The third-party SaaS IDP vendor used at current employer for the POC. Integrates GitHub, Azure AD (Entra ID), Jira. | — | WORK |

---

## §5 — Spot-check log

**Rule:** Every concept marked 🟢 OWNED gets spot-checked at random intervals. If I drift, status drops to 🟡 PARTIAL or 🟠 STALE. We re-teach. Owned today ≠ owned forever.

**How spot-checks work:** Claude picks an owned concept without warning, asks me to explain it in plain English (pizza terms where relevant). If I drift, we redo using the original method (slow, no jargon, my own analogy).

| Date | Concept checked | Method | Outcome | New status |
|---|---|---|---|---|
| 2026-05-21 | Chunking (A4) | Sam offered unprompted in Session 05 | "Categorise into small chunks — fridge with ingredients in various boxes." | 🟢 OWNED |
| 2026-05-21 | Retrieve (A5) | First attempt drifted to "speed". Redone — "scan fridge, get matching ingredients ready." | Locked second try. | 🟢 OWNED |
| 2026-05-21 | Augment (A6) | First attempt drifted into retrieve ("picking/matching"). Redone — "getting the order AND the ingredients in the chef's hands." | Locked third try. | 🟢 OWNED |
| 2026-05-21 | Generate (A7) | "Chef only cooks what's on the cards, no added sprinkle — customer may have allergies." | Locked first try. | 🟢 OWNED |

**Next spot-check candidates (Session 06 opener):** A3 (RAG end-to-end), A4–A7 (chunking/retrieve/augment/generate). If any drift after a night's sleep, redo before advancing.

---

## §6 — NEXT (resume here)

### Session 06 plan — locked

**STEP 1: Pizza recap (5 min spot-check)**
Quick check that A3–A7 (RAG, chunking, retrieve, augment, generate) are still locked after sleep. No jargon. If any drift, redo before moving on. *Slow is correct.*

**STEP 2: On-prem + cloud + GitHub Actions bundle — taught as ONE worked example**
Pick a representative cloud+on-prem app. Walk from `git push` → on-prem deployment. Teach the six stations in context along the way:

| Station | Concept | Curriculum ref |
|---|---|---|
| 1 | Cloud vs on-prem split | B13 |
| 2 | GHA reaching into an on-prem data centre | B8 |
| 3 | Self-hosted CD runner provisioning | B9 |
| 4 | Firewall change request process | B10 |
| 5 | Containerised app testing in CI | B11 |
| 6 | Headless browser testing in CI | B12 |

Same learning loop: Claude explains, Sam explains back in plain English, no advancing until owned. Watch for both named failure modes.

**STEP 3: Politics layer on top (only after mechanics owned)**
A senior platform leader is pushing for genuine release frequency improvement (right reasons, not just ticking off the internal portfolio system). Another senior leader is sharp enough to ask if "done in the portfolio system" really means fully automated end-to-end → close the on-prem gap honestly. Ties to C9 and B25.

**Do NOT this session:** advance to Chunks 2–6 of `server/chat.js`. Those stay queued. Don't touch ADCB Q3 ROI answer (still open from Session 05).

---

### Exact opener line for Session 06

> *Resume Session 06. Read BUILD_LEARN_LOG.md first — including the PERMANENT RULE at the top about never naming colleagues or employers. Quick pizza recap of A3–A7 (RAG, chunking, retrieve, augment, generate) — owned in Session 05, need spot-check after sleep. Then move into the on-prem + cloud + GHA bundle as ONE worked example, walking through stations B13, B8, B9, B10, B11, B12 in context. Politics framing (C9 + B25) sits on top once mechanics land. Same loop — slow is correct, plain English, no advancing until I explain each station back. Watch for my two failure modes.*

---

### Still open (not lost, not done)

- **ADCB Q3 ROI answer** — draft offered Session 05, needs Sam's call on which number he can stand behind.
- **Mal second role application materials** — flagged, details pending from Sam.
- **A8 (refusal threshold)** drill — partial, needs deeper pizza drill on what the threshold actually scores.
- **A10, A11, A12 (embeddings, vector DBs, Pinecone)** — admitted priority gap. Should be next AI block after on-prem/GHA bundle.

---

### Now / Next / Later

**NOW (just done):**
- ✅ Chunk 1 of `server/chat.js` owned (A3–A7).
- ✅ Both named failure modes fired and beaten.
- ✅ Curriculum built — every concept catalogued with status.

**NEXT (Session 06):**
- 🍕 Spot-check pizza concepts.
- 🚀 On-prem + cloud + GHA bundle as one worked example.
- 🏛️ Politics layer once mechanics owned.

**LATER (queued, prioritised):**
1. **AI block** — embeddings → vector DBs → Pinecone (A10–A12). Honest priority gap.
2. **Chunks 2–6 of `server/chat.js`** — chunking code, scoring, system prompt/guardrail, refusal short-circuit, API call/response shape.
3. **Module 2 (Code Quality Gates)** — SonarQube, Snyk drilled with STATION 1 findings as worked example.
4. **Module 3 (Artefact Management)** — Artifactory + Docker image versioning.
5. **Module 4 (IDP Capabilities)** — golden paths, service catalog, scorecards using bank-of-sandhu repo as the worked example.
6. **DORA metrics (B25)** — once CI/CD bundle owned, layer on the measurement.
7. **Governance / evals (A23, A24)** — once vector DBs owned, layer on the "how do we prove it works" question.

---

## §7 — Recruiter-ready talking points (banked)

These are short, in my own voice. Use directly without sounding AI-generated.

**On RAG (Session 05):**
> *"I'm currently building a RAG-based banking chatbot end-to-end — chunking source documents, scoring relevance per query, and enforcing source-only generation with citations. The architectural choices map directly to how I'd scope an internal developer onboarding bot at platform scale — same chunking, retrieve, augment, generate pipeline, just pointed at runbooks instead of compliance standards."*

**On hallucination safety (Session 05, original line):**
> *"Think of the model as a chef. Hallucination is the chef adding a sprinkle of something the customer didn't ask for. Could be an allergy. In banking, hallucination isn't an inconvenience — it's a compliance breach. RAG forces the chef to cook only from handed cards and label every ingredient."*

**On platform / on-prem (after Session 06):**
> *"On the platform side, my current focus is closing the cloud-on-prem automation gap — most enterprise apps have GitHub Actions covering cloud deploys but on-prem still manual. Getting self-hosted runners reaching into the on-prem network, with proper containerised testing in the pipeline, is what genuinely moves release frequency, not just internal portfolio status."*

---

## §8 — Job application answers (banked)

### ADCB Global Product Owner – Generative AI (Unstructured Data)
**Job code:** ADCB04679 · **Location:** Abu Dhabi · **Status:** in flight

**Q1:** Have you personally led at least one AI initiative end-to-end (use case identification → POC → MVP → full production deployment)?
**A1:** **Yes.**

**Q2:** How many AI/ML or Generative AI solutions have you successfully deployed into production (not POC)?
**A2:** **5.**
(Honest backing list — review before submission: a developer-productivity AI assistant scaled to ~1,700 engineers in current role; bank-of-sandhu RAG chatbot; a compliance flag detector portfolio tool; Zakat Intelligence Engine prototype for Mal; Murabaha ML scoring layer for Mal. Note: only the developer-productivity AI is at live enterprise scale. May want to swap in older deliveries if reviewer reads literally.)

**Q3:** Have you delivered a measurable ROI from an AI deployment?
**A3 (draft — needs final number):** *Yes. I led the enterprise rollout of a developer-productivity AI assistant to ~1,700 engineers in a regulated UK financial services environment, delivering measurable productivity uplift through reduced boilerplate time and faster code review cycles. I have also led platform consolidation across multiple CI/CD tools (Harness, CloudBees Jenkins, Buildkite, Azure DevOps → GitHub Enterprise), targeting multi-million-pound run-rate savings. Earlier in my career I won an industry award for Innovation (2018) for a delivery contributing to over £5M in cost savings.*

**Open:** swap in a hard measured productivity number if available; otherwise soften to "early measurement indicates uplift, formal ROI study in progress."

### Mal — second role
**Status:** application materials pending — details to follow.

---

## §9 — File and repo state (end of Session 05)

**Repo:** `C:\Users\user\Downloads\bank-of-sandhu`
**Live:** https://bank-of-sandhu.onrender.com
**Model in `.env`:** `claude-haiku-4-5-20251001`

**Working:**
- Blocks A–E built and tested.
- RAG chatbot answering Sharia-finance questions with `aaoifi.md` citations.
- Refusal works on off-topic queries.
- PDF contract, cookie consent gating, automated tests, GitHub push complete.

**Triaged but deliberately NOT fixed (interview asset):**
- 3 High findings in `server/index.js`:
  - Insecure randomness × 2 (~L166–167)
  - Missing rate limiting (~L273)
- **These are talking points for interviews, not bugs to fix.** STATION 1 is CLOSED.

**Stubs / placeholders:** none flagged at end of Session 05.

---

*End of file. Paste this whole file as the opener for Session 06.*
