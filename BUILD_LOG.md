# BUILD & LEARN LOG — bank-of-sandhu

**Owner:** Sam Sandhu (Subhpreet Singh Sandhu)
**Repo:** `bank-of-sandhu`
**Live demo:** https://bank-of-sandhu.onrender.com
**Mantra:** stay learning, stay happy
**Goal:** be genuinely job-ready for senior AI product roles and to represent platform/CICD strategy credibly.

---

## ⚠️ PERMANENT RULE — read first, every session

This file lives in a public repo. Therefore:

- **Never name real colleagues or leaders.** Use generic terms: *"a senior engineering leader"*, *"a platform leader"*, *"a delivery lead"*, *"a stakeholder"*.
- **Never name the current employer or past employers.** Use generic terms: *"current employer"*, *"a major UK financial services organisation"*, *"a regulated UK bank"*, *"a previous fintech employer"*.
- **Never name internal tools or terms that identify the employer.**
- **Specific named CI/CD tools are fine** (GitHub Actions, SonarQube, Snyk, Artifactory, Docker, Jenkins, Buildkite, Azure DevOps, Harness, Port.io) — these aren't employer-identifying.
- **Job application targets I own (ADCB, Mal) CAN be named.** These are mine, not someone else's secrets.
- **From Session 06 onward, all worked examples use a generic "imaginary bank" framing.** Never reference my current employer's specific architecture, tooling configuration, or internal patterns. The imaginary bank is plausibly real, regulated, hybrid — but is no real bank.

If Claude is reading this file as session opener, **apply this rule to everything generated for the rest of the session**.

---

## §0 — How I learn (do not deviate)

### Bronze / Silver / Gold layered teaching (added Session 06)

Every concept now gets taught in three layers, each only attempted after the previous is owned. Same as belts in martial arts — earn the next one, don't claim it.

| Layer | What it means | Test |
|---|---|---|
| 🥉 **Bronze** | Plain English. Analogy only. No tech jargon allowed. | Could I explain this to a non-technical family member? |
| 🥈 **Silver** | Analogy plus the real CI/CD / AI words mapped onto it. | Could I explain this to a junior engineer using both the analogy and the correct technical terms in the same sentence? |
| 🥇 **Gold** | Imaginary bank example, recruiter-ready. No analogy crutch. Concrete bank context. | Could I say this to a recruiter or hiring manager in a 90-second answer without sounding rehearsed or AI-generated? |

**Status column in §4 now tracks layer ownership**, e.g. 🥉🥈 = bronze + silver owned, gold not yet attempted.

### Core method (unchanged)
- **I learn by doing.** Concepts taught at the moment an artefact is created, not in parallel docs.
- **Plain English first.** No jargon until a working analogy is owned (bronze first).
- **Slow is correct.** Don't advance until the current concept is explained back in my own words.
- **Owned ≠ owned forever.** Every concept marked OWNED at any layer must be spot-checked. Memory fades. If I drift, status drops a layer and we re-teach.
- **Watch my two named failure modes**, especially when I'm tired:
  1. Reaching for technical-sounding words instead of the plain idea.
  2. When a redo gets uncomfortable, the brain reaches for a fresh shiny topic.
  3. **New (Session 06):** Saying *"depends on the use case"* when I don't know the real answer — sounds balanced, but it's the jargon-reach failure mode wearing a different costume.

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
- **Stack:** Vite + React frontend, Node BFF, Claude Haiku 4.5, in-repo knowledge files (`aaoifi.md`), Render deployment.

It is **dual-purpose**:
1. **Portfolio piece** — shareable URL anyone can walk through; demonstrates RAG end-to-end with real Sharia source citations and refusal guardrails.
2. **Hands-on learning vehicle** — mirrors IDP patterns (env provisioning, golden paths, team autonomy, service discovery) so I can explain each concept by pointing to working code in my own repo.

---

## §2 — Modules

| # | Module | Status | Worked example anchor |
|---|---|---|---|
| M1 | GitHub + Actions for non-devs | IN PROGRESS — Station 1 owned, Station 2 partial | Imaginary bank cloud→on-prem deployment |
| M2 | Code quality gates (SonarQube, Snyk) | NOT STARTED | Triaged findings in `server/index.js` |
| M3 | Artefact management (Artifactory, GH Packages, semver) | NOT STARTED | Docker image versioning for Node BFF |
| M4 | IDP capabilities (catalog, golden paths, scorecards, self-service) | NOT STARTED | The repo itself as golden-path template |
| M5 | AI in the SDLC (RAG, agents, MCP) | IN PROGRESS — Chunk 1 owned 🥉 | `server/chat.js` walkthrough |

**Currently active:** M1, on-prem + cloud + GHA bundle.

---

## §3 — Session history

### Session 01 — Clean repo, deploy, RAG chatbot ✅
Flattened repo history, made repo public, deployed to Render, built RAG chatbot with in-repo knowledge file + citation + refusal threshold, set up professional GitHub profile.
*Session 01 RAG framings are deprecated. Pizza/kitchen analogy from Session 05 is canonical.*

### Sessions 02–04 — Blocks A–E + RAG concept attempts ✅
PDF contract, cookie consent gating, automated tests, GitHub push, working chatbot with Claude Haiku 4.5 + AAOIFI citations. Began chunked walkthrough of `server/chat.js`.

### Session 05 — Chunk 1 of `server/chat.js` FULLY OWNED 🥉 ✅
All four foundational RAG concepts locked in plain English using kitchen / pizza-prep analogy.
- **Chunking** = fridge with ingredient boxes
- **Retrieve** = scan fridge, get matching ingredients ready
- **Augment** = order + ingredients into chef's hands (handover)
- **Generate** = chef cooks only from handed cards, no added sprinkle, allergies = hallucinations
- Best line banked: *"no added sprinkle of something — the customer may have allergies."*

### Session 06 — Spot-check + Station 1 owned, Station 2 paused 🟡

**Spot-check (recap of A3–A7):**
- A4 Chunking — held first try ✅
- A5 Retrieve — drifted into "the order, no action" → redone → re-owned ✅
- A6 Augment — held first try ✅
- A7 Generate — held first try ✅

**Station 1 (B13 Cloud vs on-prem split) — 🥉 owned.**
First attempt drifted into "data lives there" / "years of old data". Redone after correction. Locked second try as: *"At my current bank we have a hybrid model — on-prem for regulated workloads, cloud (AWS / Azure) for flexibility to scale and experiment."*

**Station 2 (B8 GHA reaching into on-prem) — 🟡 PARTIAL. Did not complete.**
Three slips on first attempt:
1. Pattern A and Pattern B got mashed together.
2. Direction of travel confused — said *"asking internally to the outside world"* (should be inside → outside).
3. Reached for *"depends on the use case"* — the new third failure mode. Banks near-universally choose Pattern B (self-hosted runner, outbound polling). *"Depends"* sounded balanced but was jargon-reach in disguise.

**Session stopped honestly when tired** — before redo cemented as drift. Discipline working as designed.

**New teaching method introduced:** 🥉🥈🥇 Bronze/Silver/Gold layered ownership. Locked into §0.

---

## §4 — Concept curriculum

Legend (updated Session 06):
- 🥉 = Bronze owned (plain English, analogy)
- 🥈 = Silver owned (analogy + real terms)
- 🥇 = Gold owned (imaginary-bank example, recruiter-ready)
- 🟡 = PARTIAL at current target layer
- 🟠 = STALE (was owned, spot-check failed)
- 🔴 = NOT STARTED

---

### 4A — AI / ML / GenAI concepts

| # | Concept | Status | Plain-English (bronze) | Last check | JD |
|---|---|---|---|---|---|
| A2 | Hallucination | 🥉 OWNED | Chef adds a sprinkle of something the customer didn't ask for — could be an allergy. | 2026-05-22 | ALL |
| A3 | RAG (end-to-end) | 🥉 OWNED | Pipeline: chunking → retrieve → augment → generate. Grounds the model in real sources + cites them. | 2026-05-22 | ADCB, Mal |
| A4 | Chunking | 🥉 OWNED | Fridge with ingredient boxes — prep work that fills the fridge. | 2026-05-22 | ADCB, Mal |
| A5 | Retrieve | 🥉 OWNED | Matching ingredients to the order, preparing for the chef. Fridge → counter. | 2026-05-22 (redone) | ADCB, Mal |
| A6 | Augment | 🥉 OWNED | Order + ingredients into chef's hands. Counter → chef. Handover. | 2026-05-22 | ADCB, Mal |
| A7 | Generate | 🥉 OWNED | Chef cooks only from handed cards. Refuses if missing. Labels each fact = citations. | 2026-05-22 | ADCB, Mal |
| A9 | Source attribution / citation | 🥉 OWNED | Labelling each ingredient with which box it came from. Auditability. | 2026-05-22 | ADCB, Mal |
| A1 | LLM | 🟡 PARTIAL | Model trained on huge text → generates human-like answers. Can hallucinate on its own. | — | ALL |
| A8 | Refusal / guardrail threshold | 🟡 PARTIAL | Bot refuses when no card is good enough. Need drill: what's the threshold scoring? | — | ADCB, Mal |
| A13 | Lexical vs vector scoring | 🟡 PARTIAL | bank-of-sandhu uses lexical (word-match). Production uses vector (meaning-match). | — | ADCB, Mal |
| A14 | Context window | 🟡 PARTIAL | Why chef can't hold the whole fridge. Model's text-at-once limit. | — | ALL |
| A10 | Embedding | 🔴 NOT STARTED | — | — | ADCB, Mal |
| A11 | Vector database | 🔴 NOT STARTED | — | — | ADCB, Mal |
| A12 | Pinecone | 🔴 NOT STARTED | — | — | ADCB |
| A15 | Prompt / system prompt | 🔴 NOT STARTED | — | — | ALL |
| A16 | Few-shot / zero-shot | 🔴 NOT STARTED | — | — | ADCB |
| A17 | Fine-tuning vs RAG | 🔴 NOT STARTED | — | — | ADCB, Mal |
| A18 | LangChain | 🔴 NOT STARTED | — | — | ADCB |
| A19 | LlamaIndex | 🔴 NOT STARTED | — | — | ADCB |
| A20 | Azure OpenAI | 🔴 NOT STARTED | — | — | ADCB |
| A21 | Agentic AI | 🔴 NOT STARTED | — | — | ADCB, Mal |
| A22 | MCP | 🔴 NOT STARTED | — | — | ADCB, Mal |
| A23 | Evals / RAGAS | 🔴 NOT STARTED | — | — | ADCB |
| A24 | Governance / responsible AI | 🔴 NOT STARTED | — | — | ADCB, Mal |
| A25 | Tokens / tokenisation | 🔴 NOT STARTED | — | — | ALL |
| A26 | Temperature / top-p | 🔴 NOT STARTED | — | — | ALL |
| A27 | Streaming vs batch | 🔴 NOT STARTED | — | — | ALL |

---

### 4B — CI/CD daily-work stack

| # | Concept | Status | Plain-English (bronze) | Last check | JD |
|---|---|---|---|---|---|
| B13 | Cloud vs on-prem split | 🥉 OWNED | Hybrid — on-prem for regulated workloads, cloud (AWS / Azure) for flexibility to scale and experiment. | 2026-05-22 | WORK |
| B8 | GitHub Actions (GHA) reaching on-prem | 🟡 PARTIAL | Started Session 06. Drifted on direction (inside→out) and on Pattern A vs B distinction. Re-teach pending. | — | WORK, ALL |
| B1 | CI | 🟡 PARTIAL | Every code change auto-built and tested before merge. | — | WORK |
| B2 | CD | 🟡 PARTIAL | Every change that passes CI goes to staging/prod. Delivery=ready. Deployment=actually deployed. | — | WORK |
| B3 | Pipeline | 🟡 PARTIAL | End-to-end conveyor from `git push` to running in prod. | — | WORK |
| B14 | Jenkins / CloudBees Jenkins | 🟡 PARTIAL | Classic CI/CD server. Many orgs migrating off it to GHA. | — | WORK |
| B15 | Buildkite | 🟡 PARTIAL | A CI/CD platform. | — | WORK |
| B16 | Azure DevOps | 🟡 PARTIAL | Microsoft's CI/CD + project management platform. | — | WORK |
| B17 | Harness | 🟡 PARTIAL | A CD-focused platform. | — | WORK |
| B24 | Secret management | 🟡 PARTIAL | API keys in env vars on host, never in code. Rotate if exposed. | — | WORK, ALL |
| B4 | Build | 🔴 NOT STARTED | Source → runnable artefact (JAR / Docker image / bundled JS). | — | WORK |
| B5 | Artefact | 🔴 NOT STARTED | Output of a build. The thing you deploy. | — | WORK |
| B6 | Test stages | 🔴 NOT STARTED | Unit → integration → E2E. | — | WORK |
| B7 | Branch protection | 🔴 NOT STARTED | Rules on what's allowed into main. | — | WORK |
| B9 | GHA self-hosted runner | 🔴 NOT STARTED | **Session 07 — first concept**. | — | WORK |
| B10 | Firewall change request process | 🔴 NOT STARTED | **Session 07 topic.** | — | WORK |
| B11 | Containerised app testing in CI | 🔴 NOT STARTED | **Session 07 topic.** | — | WORK |
| B12 | Headless browser testing in CI | 🔴 NOT STARTED | **Session 07 topic.** | — | WORK |
| B18 | SonarQube | 🔴 NOT STARTED | Static code analysis — finds bugs and code smells pre-merge. | — | WORK |
| B19 | Snyk | 🔴 NOT STARTED | Vulnerability scanning — finds known security holes in dependencies. | — | WORK |
| B20 | Artifactory | 🔴 NOT STARTED | Central library of built artefacts (Docker images, npm, JARs). | — | WORK |
| B21 | Docker | 🔴 NOT STARTED | Packaging app + dependencies into a portable container. | — | WORK, ALL |
| B22 | Image vs container | 🔴 NOT STARTED | Image = recipe. Container = running instance. | — | WORK |
| B23 | Semver | 🔴 NOT STARTED | MAJOR.MINOR.PATCH. | — | WORK |
| B25 | DORA metrics | 🔴 NOT STARTED | Deployment frequency, lead time, MTTR, change failure rate. | — | WORK |

---

### 4C — Platform Engineering / IDP concepts

| # | Concept | Status | Plain-English (bronze) | Last check | JD |
|---|---|---|---|---|---|
| C1 | Platform Engineering | 🟡 PARTIAL | Internal tools so app teams self-serve infra/pipelines instead of raising tickets. | — | WORK |
| C2 | DevEx | 🟡 PARTIAL | How easy/fast it is for a developer to do their job. Measured. | — | WORK |
| C3 | IDP | 🟡 PARTIAL | Single front door for devs to find services, run pipelines, see ownership, request resources. | — | WORK |
| C4 | Golden path template | 🟡 PARTIAL | Pre-built starter repo + pipeline so teams don't reinvent the wheel. | — | WORK |
| C5 | Service catalog | 🟡 PARTIAL | Searchable list of every service with metadata. | — | WORK |
| C8 | Team autonomy | 🟡 PARTIAL | Teams ship without depending on a central platform team for every change. | — | WORK |
| C9 | Port.io | 🟡 PARTIAL | Third-party SaaS IDP vendor. Integrates GitHub, IdPs, Jira. | — | WORK |
| C6 | Scorecards | 🔴 NOT STARTED | A rubric the IDP applies to every service (owner, CI, security, SLOs). | — | WORK |
| C7 | Self-service provisioning | 🔴 NOT STARTED | Click button → new env/db/pipeline without a ticket. | — | WORK |

---

## §5 — Spot-check log

| Date | Concept | Method | Outcome | Status |
|---|---|---|---|---|
| 2026-05-21 | A4 Chunking | Session 05 unprompted | "Fridge with ingredient boxes." | 🥉 OWNED |
| 2026-05-21 | A5 Retrieve | Drifted to "speed" → redone | "Scan fridge, get matching ingredients." | 🥉 OWNED |
| 2026-05-21 | A6 Augment | Drifted into retrieve → redone | "Order + ingredients in chef's hands." | 🥉 OWNED |
| 2026-05-21 | A7 Generate | First try | "Cook only from handed cards, allergies = hallucinations." | 🥉 OWNED |
| 2026-05-22 | A4 Chunking | Session 06 recap | "Fridge with broken-down ingredient boxes." Held. | 🥉 OWNED |
| 2026-05-22 | A5 Retrieve | Session 06 recap — drifted into "the order, no action" | Redone with kitchen-vs-fridge correction. Locked as "matching ingredients to the order, preparing for the chef." | 🥉 OWNED |
| 2026-05-22 | A6 Augment | Session 06 recap | "Card + ingredients on the worktop ready for the chef." Held with small flag on word "matching". | 🥉 OWNED |
| 2026-05-22 | A7 Generate | Session 06 recap | "Chef cooks only what's available, no nuts/sauces, allergies, refusal." Held. | 🥉 OWNED |
| 2026-05-22 | B13 Cloud vs on-prem | Taught fresh via warehouse/estate analogy. Drifted into "data lives there" → redone. | "Hybrid — on-prem for regulated workloads, cloud for scale and experiment." | 🥉 OWNED |
| 2026-05-22 | B8 GHA reaching on-prem | Taught fresh — three slips fired. | Pattern A/B mash-up, direction confusion, "depends on use case" hedge. Stopped honestly when tired. | 🟡 PARTIAL |

**Next spot-check candidates (Session 07 opener):** B13 cloud vs on-prem, A5 retrieve (the one that's drifted twice now — watch it).

---

## §6 — NEXT (resume here)

### Session 07 plan

**STEP 1: Recap spot-check (5 min)**
B13 cloud vs on-prem, A5 retrieve. If A5 drifts a third time, mark it 🟠 STALE and book a full re-teach before anything else.

**STEP 2: Redo B8 — GHA reaching on-prem — properly this time**
Use 🥉🥈🥇 layered approach:
- 🥉 **Bronze:** the warehouse / gated estate / inside-van picture. Just the analogy.
- 🥈 **Silver:** map the analogy onto the real words — cloud runner, self-hosted runner, polling, outbound traffic, firewall.
- 🥇 **Gold:** describe how an imaginary regulated bank — call it **Imaginary Bank plc** — closes the cloud-on-prem gap when migrating from CloudBees Jenkins to GitHub Enterprise. Recruiter-ready.

The three sentences Sam must own at silver:
1. **Problem:** default GHA runs in the cloud and can't reach an on-prem network because firewalls block inbound traffic from the public internet.
2. **Fix:** put a self-hosted runner *inside* the on-prem network. It calls *outbound* to GitHub asking for work.
3. **Why it wins:** outbound is easy to permit. No inbound hole. Regulator and audit teams comfortable.

**STEP 3: Stations 3–6** — only if Step 2 hits gold. Otherwise hold.
- Station 3: Self-hosted CD runner provisioning (B9)
- Station 4: Firewall change request process (B10)
- Station 5: Containerised app testing in CI (B11)
- Station 6: Headless browser testing in CI (B12)

**Do NOT this session:** advance to Chunks 2–6 of `server/chat.js`. Those stay queued behind on-prem/GHA bundle.

---

### Exact opener line for Session 07

> *Resume Session 07. Read BUILD_LEARN_LOG.md first — including the PERMANENT RULE at the top and the new 🥉🥈🥇 layered teaching rule in §0. Quick recap spot-check of B13 and A5 (A5 has now drifted twice — watch it). Then redo Station 2 (B8 GHA reaching into on-prem) — bronze→silver→gold, with the gold layer being an imaginary-bank scenario, recruiter-ready. Slow is correct. Watch all three failure modes including the new one — "depends on the use case" is jargon-reach in disguise.*

---

### Still open (not lost, not done)

- **A8 (refusal threshold)** drill — partial, needs deeper drill on what the threshold actually scores.
- **A10–A12 (embeddings → vector DBs → Pinecone)** — honest priority gap. Next AI block after on-prem/GHA bundle.
- **Silver and Gold layers** for all A3–A7 and B13 — currently only Bronze.

---

### Now / Next / Later

**NOW (just done — Session 06):**
- ✅ Spot-checked A3–A7. Three held overnight, A5 drifted and was re-owned.
- ✅ Station 1 (B13 Cloud vs on-prem) owned at Bronze.
- ✅ Caught Pattern A/B confusion + direction confusion + new "depends" failure mode on B8.
- ✅ Stopped honestly when tired — before drift cemented.
- ✅ Bronze / Silver / Gold layered teaching rule introduced.

**NEXT (Session 07):**
- 🍕 Recap spot-check (B13, A5).
- 🚀 Redo Station 2 (B8 GHA reaching on-prem) bronze→silver→gold.
- 🚀 Then Stations 3–6 if bandwidth holds.

**LATER (queued, prioritised):**
1. **AI block** — embeddings → vector DBs → Pinecone (A10–A12).
2. **Chunks 2–6 of `server/chat.js`** — chunking code, scoring, system prompt/guardrail, refusal short-circuit, API call/response shape.
3. **Silver + Gold uplift** for already-Bronze concepts.
4. **Module 2 (Code Quality Gates)** — SonarQube, Snyk drilled with worked example.
5. **Module 3 (Artefact Management)** — Artifactory + Docker image versioning.
6. **Module 4 (IDP Capabilities)** — golden paths, service catalog, scorecards using bank-of-sandhu repo as worked example.
7. **DORA metrics (B25)**.
8. **Governance / evals (A23, A24)**.

---

## §7 — Recruiter-ready talking points (banked)

**On RAG (Session 05 — gold-level):**
> *"I'm building a RAG-based banking chatbot end-to-end — chunking source documents, scoring relevance per query, and enforcing source-only generation with citations. The architectural choices map directly to how I'd scope an internal developer onboarding bot at platform scale — same chunking, retrieve, augment, generate pipeline, just pointed at runbooks instead of compliance standards."*

**On hallucination safety (Session 05 — gold-level):**
> *"Think of the model as a chef. Hallucination is the chef adding a sprinkle of something the customer didn't ask for — could be an allergy. In banking, hallucination isn't an inconvenience, it's a compliance breach. RAG forces the chef to cook only from handed cards and label every ingredient."*

**On R-A-G end-to-end (Session 06 — silver, single sentence):**
> *"Retrieve is matching ingredients to the order and putting them on the counter. Augment is handing the order plus those ingredients to the chef. Generate is the chef cooking only from what's been handed over, with the customer's allergies in mind."*

**On cloud-on-prem split (Session 06 — silver):**
> *"At my current bank we run a hybrid — on-prem for regulated workloads, cloud (AWS / Azure) for flexibility to scale and experiment. The CI/CD challenge is making one pipeline deploy to both without compromising the on-prem perimeter."*

**On GHA → on-prem (pending — gold once Session 07 completes):**
> *(To be written after Station 2 is locked at gold.)*

---

*End of file. Paste this whole file as the opener for the next session.*
