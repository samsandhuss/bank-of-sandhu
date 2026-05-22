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
- **Specific named CI/CD tools are fine** (GitHub Actions, SonarQube, Snyk, Artifactory, Docker, Jenkins, CloudBees Jenkins, Buildkite, Azure DevOps, Harness, Port.io) — these aren't employer-identifying.
- **Job application targets I own (ADCB, Mal, Whiteshield) CAN be named.** These are mine, not someone else's secrets.
- **From Session 06 onward, all worked examples use a generic "imaginary bank" framing.** Never reference my current employer's specific architecture, tooling configuration, or internal patterns. The imaginary bank is plausibly real, regulated, hybrid — but is no real bank.

If Claude is reading this file as session opener, **apply this rule to everything generated for the rest of the session**.

---

## §0 — How I learn (do not deviate)

### Bronze / Silver / Gold layered teaching

Every concept gets taught in three layers, each only attempted after the previous is owned. Same as belts in martial arts — earn the next one, don't claim it.

| Layer | What it means | Test |
|---|---|---|
| 🥉 **Bronze** | Plain English. Analogy only. No tech jargon allowed. | Could I explain this to a non-technical family member? |
| 🥈 **Silver** | Analogy plus the real CI/CD / AI words mapped onto it. | Could I explain this to a junior engineer using both the analogy and the correct technical terms in the same sentence? |
| 🥇 **Gold** | Imaginary bank / imaginary client example, recruiter-ready. No analogy crutch. Concrete bank or policy context. | Could I say this to a recruiter or hiring manager in a 90-second answer without sounding rehearsed or AI-generated? |

**Status column in §4 tracks layer ownership**, e.g. 🥉🥈 = bronze + silver owned, gold not yet attempted.

### Core method
- **I learn by doing.** Concepts taught at the moment an artefact is created, not in parallel docs.
- **Plain English first.** No jargon until a working analogy is owned (bronze first).
- **Slow is correct.** Don't advance until the current concept is explained back in my own words.
- **Owned ≠ owned forever.** Every concept marked OWNED at any layer must be spot-checked. Memory fades. If I drift, status drops a layer and we re-teach.
- **Discipline beats appetite.** New build ideas are queued behind defined milestones on existing builds — not started in parallel. (Added Session 07 after Whiteshield-driven pipeline-visualiser temptation.)
- **Failure modes to watch**, especially when tired:
  1. Reaching for technical-sounding words instead of the plain idea.
  2. When a redo gets uncomfortable, the brain reaches for a fresh shiny topic.
  3. Saying *"depends on the use case"* when I don't know the real answer — sounds balanced, but it's jargon-reach in disguise.
  4. **(S07):** Adding *"historic records" / "old data"* framings to on-prem explanations. The regulator cares about *sensitivity*, not *age*.
  5. **(S07 close):** Scope expansion when a redo is hard. Multiple modules/tracks added in one tired session is mode #2 at module scale. *Watch for this when the temptation is to "do everything".*

### Session ritual (every close-out)
1. ✅ Green ticks of what got done in plain English.
2. 📍 Where we got to — files, what works, what's stub.
3. 🎤 Talking points — short sentences for work/interviews/recruiters, never AI-generated-sounding.
4. 🌅 Tomorrow's opener — exact line to paste.
5. 🗺️ Now / Next / Later snapshot.

---

## §1 — What this build is

**bank-of-sandhu** is a white-labelable Islamic digital banking prototype:
- **Primary brand:** Mal (Islamic digital finance venture).
- **White-label test brand:** Bank of Sandhu (proves theme/brand abstraction).
- **Two journeys:** leasing flow (Murabaha auto finance) + a RAG chatbot answering Sharia-finance questions with citations.
- **Stack:** Vite + React frontend, Node BFF, Claude Haiku 4.5, in-repo knowledge files (`aaoifi.md`), Render deployment.

It is **dual-purpose**:
1. **Portfolio piece** — shareable URL anyone can walk through; RAG end-to-end with real Sharia source citations and refusal guardrails.
2. **Hands-on learning vehicle** — mirrors IDP patterns (env provisioning, golden paths, team autonomy, service discovery) so I can explain each concept by pointing to working code in my own repo.

---

## §1A — Active job targets

Three live targets driving curriculum priority. The JD column in §4 uses these codes.

| Code | Target | Status | Why active | What it asks for that's not yet on the curriculum |
|---|---|---|---|---|
| **WS** | **Whiteshield** — Product Manager, Quantum X (Dubai). Career Navigator AI policy product, Google Cloud-partnered. | 🟢 **ACTIVE** (added Session 07) | Dubai-based, AI-native, govt-facing, names Cursor / Claude as tools. Direct fit on AI fluency, geographic moat in UAE, mission alignment. | Data-intensive analytics products, A/B testing + experimentation, KPI/measurement frameworks, GCP, UI/UX for data-rich interfaces. |
| **ADCB** | ADCB Global Product Owner – Generative AI (Unstructured Data), Abu Dhabi (job code ADCB04679). | 👀 **WATCHING** (downgraded Session 07) | Not converting. Prep materials already built (RAG, LangChain, Azure OpenAI, Pinecone, agentic AI, governance). Keep prep alive, don't pin hopes. | Vector DBs, LangChain, Azure OpenAI, agentic AI, evals/RAGAS, governance. |
| **Mal** | Mal — SVP Product Retail + second role (Abu Dhabi, Al Reem Island). | 👀 **WATCHING** (downgraded Session 07) | Not converting. Full prototype + SME Banking architecture artefacts already built. | Islamic finance domain depth, Murabaha mechanics, Zakat intelligence — already drilled. |
| **WORK** | Current employer (regulated UK financial services). | 🟢 **ACTIVE** (always-on) | Day-job credibility. Platform/DevEx/CICD authority. Speaking to developers daily. | The full CI/CD daily-work stack — see §4B. |

**Implication:** Whiteshield is now the primary AI-product-role lever. ADCB/Mal prep stays on the curriculum but moves to the "watching" pile — don't generate new ADCB/Mal artefacts unless explicitly requested.

---

## §1B — The Three-Track Architecture (committed Session 07 close)

**Added end of Session 07.** Layered *on top of* the M1–M6 modules in §2 — it doesn't replace them, it groups them into a higher-level shape that maps cleanly to the three live JDs.

**Principle:** one repo (bank-of-sandhu) acts as the single substrate for three parallel tracks. Each track has its own Now → Next → Later sequence (drawn from the M1–M6 modules in §2). The tracks are independent — finishing one is a win even if others slip.

```
                    ┌─────────────────────────────────────────┐
                    │     bank-of-sandhu  (single substrate)  │
                    └─────────────────────────────────────────┘
                                       │
            ┌──────────────────────────┼──────────────────────────┐
       ┌────▼─────┐              ┌─────▼─────┐              ┌─────▼─────┐
       │ TRACK A  │              │ TRACK B   │              │ TRACK C   │
       │ AI / RAG │              │ CI/CD     │              │ Dashboard │
       │ chatbot  │              │ Toolchain │              │ (converge)│
       │ deeper   │              │ wired in  │              │ + AI      │
       └──────────┘              └───────────┘              └───────────┘
```

### How tracks map onto the existing M1–M6 modules

| Track | Pulls from these modules | Adds new |
|---|---|---|
| **A — AI / RAG** | M5 (Chunks 2–6 of `chat.js`) | A/B testing layer, eval framework |
| **B — CI/CD Toolchain** | M1 (Stations 2–6), M2 (SonarQube + Snyk), M3 (Artefact mgmt), M4 (IDP) | Wires the real tools onto the bank-of-sandhu repo |
| **C — Dashboard + AI overlay** | M6 (Pipeline Visualiser, reframed) | DORA overlay + AI summarisation layer |

### Why each track exists

| Track | Serves WORK | Serves WS | Serves residual ADCB/Mal |
|---|---|---|---|
| **A — AI/RAG** | "I built one. I know what good looks like." | RAG + Cursor/Claude fluency | RAG / LangChain / vector fluency |
| **B — CI/CD toolchain** | **Closes the authority gap** — *"my current job which I don't know too well from firsthand build experience"*. | Engineering depth, not just product polish | Platform credibility |
| **C — Dashboard + AI overlay** | DORA + KPI fluency for any platform conversation | **The WS-shaped artefact** (data-intensive analytics product) | Analytics product proof |

### Two-week rough sequence

| Week | Focus | End-of-week output |
|---|---|---|
| **W1** | All three tracks NOW + first NEXT items | B8 gold; basic GHA workflow live on repo; dashboard skeleton deployed; Chunk 2 owned. |
| **W2** | All three tracks NEXT | SonarQube + Snyk wired; dashboard pulls real GitHub data; Chunks 3–4 owned; DORA overlay live. |
| **Post-W2** | LATER + STRETCH items | Vector upgrade, AI layer on dashboard, self-hosted runner demo. |

**Honest pacing assumption:** 3 hrs/day → W1+W2 plan holds. 1 hr/day → halve everything, that's fine. Each track is independent. If only Track A finishes by Whiteshield application time, you've still progressed. If only Track C skeleton exists, it's already a WS-shaped differentiator.

**Track B is the new authority-gap closer.** Wiring GitHub Actions + SonarQube + Snyk + Artifactory onto bank-of-sandhu's repo gives firsthand experience of the tools currently spoken about secondhand at WORK.

**Track C is the new WS-shaped artefact.** A `/dashboard` route on bank-of-sandhu showing pipeline runs, commits, build status, DORA metrics — with an optional later AI layer using Claude API to summarise pipeline health in natural language.

---

## §2 — Modules (sequenced Now / Next / Later roadmaps)

**Restructure principle (Session 07):** Each module is a sequence, not a single tick-box. Inside each module, work is ordered Now → Next → Later. CI/CD tool touchpoints are flagged inside the sequence so I always know *which tool teaches which concept*.

### M1 — GitHub + Actions for non-devs 🟢 IN PROGRESS

**Worked example:** Imaginary bank cloud → on-prem deployment, six stations. **Feeds Track B.**

| Step | What | Status | CI/CD touchpoint | Concept ref |
|---|---|---|---|---|
| Station 1 | Cloud vs on-prem split | 🥉🥈 OWNED | — | B13 |
| Station 2 | GHA reaching into on-prem | 🟡 PARTIAL (Session 08 redo pending) | **GitHub Actions** | B8 |
| Station 3 | Self-hosted CD runner provisioning | 🔴 NOT STARTED | **GitHub Actions, Harness** | B9 |
| Station 4 | Firewall change request process | 🔴 NOT STARTED | (organisational, not tooling) | B10 |
| Station 5 | Containerised app testing in CI | 🔴 NOT STARTED | **Docker, GHA, Buildkite** | B11, B21, B22 |
| Station 6 | Headless browser testing in CI | 🔴 NOT STARTED | **Playwright/Cypress in GHA** | B12 |
| Wrap | Recruiter-grade summary of the bundle | 🔴 NOT STARTED | All of above | — |

---

### M2 — Code quality gates 🔴 NOT STARTED

**Worked example:** Triage real findings in `server/index.js` (3 High findings parked from Security Station 1). **Feeds Track B.**

| Step | What | Status | CI/CD touchpoint | Concept ref |
|---|---|---|---|---|
| 1 | What is static code analysis vs vuln scanning | 🔴 | **SonarQube vs Snyk** | B18, B19 |
| 2 | Adding SonarQube to bank-of-sandhu's PR pipeline | 🔴 | **SonarQube, GHA** | B18 |
| 3 | Adding Snyk to scan npm dependencies | 🔴 | **Snyk, GHA** | B19 |
| 4 | Triaging the three parked High findings | 🔴 | SonarQube + manual | B18 |
| 5 | Branch protection rules + required checks | 🔴 | **GitHub** | B7 |
| Wrap | Imaginary bank: how a regulated dev shop wires quality gates | 🔴 | All | — |

---

### M3 — Artefact management 🔴 NOT STARTED

**Worked example:** Docker image versioning for the Node BFF. **Feeds Track B.**

| Step | What | Status | CI/CD touchpoint | Concept ref |
|---|---|---|---|---|
| 1 | What is an artefact, what is a build | 🔴 | — | B4, B5 |
| 2 | Containerising the Node BFF in Docker | 🔴 | **Docker** | B21, B22 |
| 3 | Semantic versioning the image | 🔴 | — | B23 |
| 4 | Pushing to a registry (GH Packages or Artifactory) | 🔴 | **Artifactory, GH Packages** | B20 |
| 5 | Pipeline pulls versioned image and deploys | 🔴 | **GHA** | B8 |
| Wrap | Why orgs centralise artefact storage | 🔴 | All | — |

---

### M4 — IDP capabilities applied 🔴 NOT STARTED

**Worked example:** The bank-of-sandhu repo *as* a golden-path template; README *as* a service-catalog entry. **Feeds Track B.**

| Step | What | Status | CI/CD touchpoint | Concept ref |
|---|---|---|---|---|
| 1 | Platform engineering / DevEx / IDP concepts | 🔴 | **Port.io as reference vendor** | C1, C2, C3, C9 |
| 2 | Golden path template — what the bank-of-sandhu repo demonstrates | 🔴 | — | C4 |
| 3 | Service catalog — README as the catalog entry | 🔴 | — | C5 |
| 4 | Scorecards — what would my repo score? | 🔴 | — | C6 |
| 5 | Self-service provisioning concept | 🔴 | — | C7 |
| Wrap | Imaginary bank: why IDPs unlock team autonomy | 🔴 | All | — |

---

### M5 — AI in the SDLC 🟢 IN PROGRESS

**Worked example:** `server/chat.js` walkthrough, chunk by chunk. **Feeds Track A.**

| Step | What | Status | Concept ref |
|---|---|---|---|
| Chunk 1 | Foundational RAG concepts | 🥉 OWNED (Session 05) | A3, A4, A5, A6, A7 |
| Chunk 2 | Chunking code — how aaoifi.md becomes chunks | 🔴 NOT STARTED | A4 silver/gold |
| Chunk 3 | Lexical scoring and the refusal threshold | 🔴 NOT STARTED | A8, A13 silver |
| Chunk 4 | System prompt construction and the citation guardrail | 🔴 NOT STARTED | A15 |
| Chunk 5 | The API call to Claude Haiku 4.5 | 🔴 NOT STARTED | A14, A25, A26 |
| Chunk 6 | Response handling, refusal short-circuit | 🔴 NOT STARTED | A7 silver |
| **Bonus AI block** | Embeddings → vector DBs → Pinecone | 🔴 NOT STARTED (priority gap for WS, ADCB) | A10, A11, A12 |
| **Bonus AI block** | Evals + experimentation (A/B testing for AI) | 🔴 NOT STARTED (priority gap for WS) | A23, A28 |
| Wrap | Recruiter-grade summary of RAG end-to-end | 🔴 NOT STARTED | All |

---

### M6 — Pipeline Visualiser → reframed as **Track C** 🔵 QUEUED

**Worked example:** A React dashboard, deployed alongside bank-of-sandhu, showing how the CI/CD ecosystem fits together. Originally scoped as a static visualiser; reframed in Session 07 close as **Track C — a working dashboard with mocked data first, real GitHub API data next, and an AI summarisation layer LATER.**

**Why queued, not started:** Discipline rule. Starting a second build before bank-of-sandhu hits a defined milestone is the shiny-topic-pull failure mode at module scale.

**Defined start trigger (must hit ALL three):**
1. M1 Station 2 (B8) owned at Gold (recruiter-ready).
2. M2 complete OR Chunks 2–3 of M5 complete (one of the two).
3. A10–A12 (embeddings, vector DBs, Pinecone) owned at Bronze.

**Planned sequence (when started — as Track C):**
| Step | What | CI/CD touchpoint | Concept ref |
|---|---|---|---|
| 1 | Sketch the dashboard — what visualises what | All tools | A30 bronze |
| 2 | Build the React shell (mock data) on a new `/dashboard` route | — | — |
| 3 | Pipeline-stage view: GHA → SonarQube → Snyk → Artifactory → Deploy | All | B8, B18, B19, B20 |
| 4 | Pull real data via GitHub REST API | All | A30 silver |
| 5 | DORA metrics overlay (mocked or real) | — | B25, A29 |
| 6 | **AI layer** — Claude API enriches dashboard with NL pipeline-health summaries | Claude API + Track A RAG | A21 bronze |
| Wrap | Recruiter-grade walkthrough | — | — |

**Why this serves all three active JDs:**
- **WS** — data-intensive analytics dashboard, exactly what they ask for. UI/UX for data-rich interfaces.
- **WORK** — directly maps to the day-job GitHub Enterprise migration (Harness/CBJ/Buildkite/ADO → GHA).
- **ADCB / Mal (watching)** — proves I can build analytical products end-to-end, not just bank UI.

---

## §3 — Session history (chronological)

### Session 01 — Clean repo, deploy, RAG chatbot ✅
Flattened repo, made public, deployed to Render, built RAG chatbot with in-repo knowledge + citations + refusal threshold, set up GitHub profile.
*Session 01 RAG framings deprecated. Pizza/kitchen analogy from Session 05 is canonical.*

### Sessions 02–04 — Blocks A–E + RAG concept attempts ✅
PDF contract, cookie consent gating, automated tests, GitHub push, working chatbot with Claude Haiku 4.5 + AAOIFI citations. Began chunked walkthrough of `server/chat.js`.

### Session 05 — Chunk 1 of `server/chat.js` FULLY OWNED 🥉 ✅
All four foundational RAG concepts locked via kitchen / pizza-prep analogy. Best line banked: *"no added sprinkle of something — the customer may have allergies."*

### Session 06 — Spot-check + Station 1 owned, Station 2 paused 🟡
A3–A7 recap (A5 redone). B13 Cloud vs on-prem owned at Bronze. B8 paused at PARTIAL — three slips diagnosed. Bronze/Silver/Gold rule introduced. Stopped honestly when tired.

### Session 07 — Spot-check + curriculum restructure + Whiteshield added + three-track architecture committed 🟢

**Spot-check outcomes:**
- **A5 Retrieve** drifted a *third* time — first to "speed" (S05), then to "no action" (S06), now to "checked" (S07). Re-owned with verb lock: action words must be "fetching / gathering / pulling", never "checking". **A5 stays on the spot-check rota for every session until it holds clean three sessions in a row.**
- **B13 Cloud vs on-prem** held overnight, promoted to **🥉🥈 (Bronze + Silver)**. Minor flags: avoid "historic records" (slides toward "old data" drift); drop "current market customer demands" (filler).

**Whiteshield JD reviewed and added as third active target** (7/10 fit). Geographic moat (UAE-based) + Cursor/Claude fluency + RAG-build proof are real differentiators. Biggest gap: data-intensive analytics products + A/B testing + experimentation frameworks.

**Curriculum restructured (mid-session):**
- Modules now sequenced Now → Next → Later with explicit CI/CD tool touchpoints.
- M6 Pipeline Visualiser added, queued behind a defined trigger.
- ADCB / Mal moved from active to watching.
- WS added as active third target.
- Failure mode #4 added: "historic records" / "old data" drift on on-prem.

**Three-track architecture committed (session close):**
- Track A (AI/RAG), Track B (CI/CD toolchain), Track C (Dashboard + AI overlay).
- Layered on top of M1–M6, not replacing them.
- Track B explicitly named as the "current job authority gap-closer" — wiring real tools onto bank-of-sandhu.
- Track C reframes M6 as a working dashboard with AI overlay.
- Two-week rough sequence committed.
- Failure mode #5 added: scope expansion under redo pressure.

**Station 2 (B8) redo:** Did not occur this session. Carries forward to Session 08.

---

## §4 — Concept curriculum

Legend:
- 🥉 = Bronze owned · 🥈 = Silver owned · 🥇 = Gold owned
- 🟡 = PARTIAL at target layer · 🟠 = STALE (was owned, spot-check failed) · 🔴 = NOT STARTED

**JD codes:** WS = Whiteshield (active) · ADCB / Mal = watching · WORK = current employer (active) · ALL = relevant to all.

---

### 4A — AI / ML / GenAI concepts

| # | Concept | Status | Plain-English (bronze) | Last check | JD |
|---|---|---|---|---|---|
| A2 | Hallucination | 🥉 OWNED | Chef adds a sprinkle of something the customer didn't ask for — could be an allergy. | 2026-05-22 | ALL |
| A3 | RAG (end-to-end) | 🥉 OWNED | Pipeline: chunking → retrieve → augment → generate. Grounds the model in real sources + cites them. | 2026-05-22 | WS, ADCB, Mal |
| A4 | Chunking | 🥉 OWNED | Fridge with ingredient boxes — prep work that fills the fridge. | 2026-05-22 | WS, ADCB, Mal |
| A5 | Retrieve | 🥉 OWNED ⚠️ ON WATCH (3 drifts) | Kitchen fetching and gathering the ingredients that match the order, ready for the next step. | 2026-05-22 (3rd redo) | WS, ADCB, Mal |
| A6 | Augment | 🥉 OWNED | Order + ingredients into chef's hands. Counter → chef. Handover. | 2026-05-22 | WS, ADCB, Mal |
| A7 | Generate | 🥉 OWNED | Chef cooks only from handed cards. Refuses if missing. Labels each fact = citations. | 2026-05-22 | WS, ADCB, Mal |
| A9 | Source attribution / citation | 🥉 OWNED | Labelling each ingredient with which box it came from. Auditability. | 2026-05-22 | WS, ADCB, Mal |
| A1 | LLM | 🟡 PARTIAL | Model trained on huge text → generates human-like answers. Can hallucinate on its own. | — | ALL |
| A8 | Refusal / guardrail threshold | 🟡 PARTIAL | Bot refuses when no card is good enough. Need drill: what's the threshold scoring? | — | WS, ADCB, Mal |
| A13 | Lexical vs vector scoring | 🟡 PARTIAL | bank-of-sandhu uses lexical (word-match). Production uses vector (meaning-match). | — | WS, ADCB, Mal |
| A14 | Context window | 🟡 PARTIAL | Why chef can't hold the whole fridge. Model's text-at-once limit. | — | ALL |
| A10 | Embedding | 🔴 NOT STARTED | — | — | **WS**, ADCB, Mal |
| A11 | Vector database | 🔴 NOT STARTED | — | — | **WS**, ADCB, Mal |
| A12 | Pinecone | 🔴 NOT STARTED | — | — | ADCB |
| A15 | Prompt / system prompt | 🔴 NOT STARTED | — | — | ALL |
| A16 | Few-shot / zero-shot | 🔴 NOT STARTED | — | — | ADCB |
| A17 | Fine-tuning vs RAG | 🔴 NOT STARTED | — | — | WS, ADCB, Mal |
| A18 | LangChain | 🔴 NOT STARTED | — | — | ADCB |
| A19 | LlamaIndex | 🔴 NOT STARTED | — | — | ADCB |
| A20 | Azure OpenAI | 🔴 NOT STARTED | — | — | ADCB |
| A21 | Agentic AI | 🔴 NOT STARTED | — | — | WS, ADCB, Mal |
| A22 | MCP | 🔴 NOT STARTED | — | — | ADCB, Mal |
| A23 | Evals / RAGAS | 🔴 NOT STARTED | — | — | **WS**, ADCB |
| A24 | Governance / responsible AI | 🔴 NOT STARTED | — | — | **WS**, ADCB, Mal |
| A25 | Tokens / tokenisation | 🔴 NOT STARTED | — | — | ALL |
| A26 | Temperature / top-p | 🔴 NOT STARTED | — | — | ALL |
| A27 | Streaming vs batch | 🔴 NOT STARTED | — | — | ALL |
| **A28** | **A/B testing for AI products** | 🔴 NOT STARTED — Session 07 | Feature validation, model testing, experimentation methodology. **Whiteshield-driven.** | — | **WS** |
| **A29** | **KPI / measurement frameworks for AI products** | 🔴 NOT STARTED — Session 07 | Defining what good looks like for a data/AI product. **Whiteshield-driven.** | — | **WS** |
| **A30** | **UI/UX for data-rich interfaces** | 🔴 NOT STARTED — Session 07 | Designing dashboards / decision-support tools end users can actually use. **Whiteshield-driven.** | — | **WS** |
| **A31** | **GCP (Google Cloud Platform) — AI services** | 🔴 NOT STARTED — Session 07 | Whiteshield is GCP-partnered. Vertex AI, Gemini, GCP RAG patterns. | — | **WS** |

---

### 4B — CI/CD daily-work stack

| # | Concept | Status | Plain-English (bronze) | Last check | JD |
|---|---|---|---|---|---|
| B13 | Cloud vs on-prem split | 🥉🥈 OWNED | Hybrid — on-prem for regulated workloads, cloud (AWS / Azure / GCP) for flexibility to scale and experiment. | 2026-05-22 | WORK |
| B8 | GitHub Actions (GHA) reaching on-prem | 🟡 PARTIAL | Drifted on direction (inside→out) and on Pattern A vs B. Re-teach pending Session 08. | — | WORK, ALL |
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
| B9 | GHA self-hosted runner | 🔴 NOT STARTED | M1 Station 3. | — | WORK |
| B10 | Firewall change request process | 🔴 NOT STARTED | M1 Station 4. | — | WORK |
| B11 | Containerised app testing in CI | 🔴 NOT STARTED | M1 Station 5. | — | WORK |
| B12 | Headless browser testing in CI | 🔴 NOT STARTED | M1 Station 6. | — | WORK |
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
| 2026-05-21 | A4 Chunking | S05 unprompted | "Fridge with ingredient boxes." | 🥉 |
| 2026-05-21 | A5 Retrieve | Drifted to "speed" → redone | "Scan fridge, get matching ingredients." | 🥉 |
| 2026-05-21 | A6 Augment | Drifted into retrieve → redone | "Order + ingredients in chef's hands." | 🥉 |
| 2026-05-21 | A7 Generate | First try | "Cook only from handed cards." | 🥉 |
| 2026-05-22 | A4 Chunking | S06 recap | Held. | 🥉 |
| 2026-05-22 | A5 Retrieve | S06 recap — drifted to "the order, no action" | Redone. | 🥉 |
| 2026-05-22 | A6 Augment | S06 recap | Held. | 🥉 |
| 2026-05-22 | A7 Generate | S06 recap | Held. | 🥉 |
| 2026-05-22 | B13 Cloud vs on-prem | Taught fresh, drifted to "data lives there" → redone | "Hybrid — on-prem for regulated workloads, cloud for scale and experiment." | 🥉 |
| 2026-05-22 | B8 GHA reaching on-prem | Taught fresh — three slips | Stopped honestly when tired. | 🟡 |
| 2026-05-22 | A5 Retrieve | S07 recap — drifted a 3rd time to "checked" | Redone with verb lock (fetch/gather/pull, not check). ON WATCH. | 🥉 |
| 2026-05-22 | B13 Cloud vs on-prem | S07 recap — held with minor "historic records" flag | Promoted to Silver. Recruiter-ready sentence locked. | 🥉🥈 |

**Next spot-check candidates (Session 08 opener):** A5 retrieve (3rd-drift watch — must hold three sessions in a row), one of A6 / A7 / B13.

---

## §6 — NEXT (resume here)

### Session 08 plan

**STEP 1: Recap spot-check (5 min)**
- A5 Retrieve (mandatory — 3rd-drift watch).
- One of A6 / A7 / B13 picked unprompted by Claude.

**STEP 2: Redo B8 — GHA reaching on-prem — bronze→silver→gold**
The plan that carried over from Session 07. This is **Track B's NOW item**.
- 🥉 **Bronze:** warehouse / gated estate / inside-van picture. Just the analogy.
- 🥈 **Silver:** map to real terms — cloud runner, self-hosted runner, polling, outbound, firewall.
- 🥇 **Gold:** how an imaginary regulated bank closes the cloud-on-prem gap during a CloudBees Jenkins → GitHub Enterprise migration. Recruiter-ready.

Three silver sentences I must own:
1. **Problem:** default GHA runs in the cloud and can't reach an on-prem network — firewalls block inbound traffic from the public internet.
2. **Fix:** self-hosted runner *inside* the on-prem network. Calls *outbound* to GitHub asking for work.
3. **Why it wins:** outbound is easy to permit. No inbound hole. Regulator and audit comfortable.

**STEP 3: If Step 2 lands gold — Whiteshield-prep AI block, Bronze pass on the priority gaps**
- A10 Embedding
- A11 Vector database
- A28 A/B testing for AI products

Bronze only. Don't push to Silver in the same session — slow is correct.

**Do NOT this session:**
- Advance to Chunks 2–6 of `server/chat.js` (still queued behind on-prem/GHA bundle).
- Start Track C / M6 (queued behind defined trigger — see §1B and §2 M6).
- Generate ADCB or Mal artefacts unless explicitly requested.
- Restructure the curriculum further. (Failure mode #5.)

---

### Exact opener line for Session 08

> *Resume Session 08. Read BUILD_LEARN_LOG.md first — including the PERMANENT RULE at the top, §0 Bronze/Silver/Gold rule, §1A active job targets (Whiteshield is now active, ADCB/Mal watching), and §1B the three-track architecture. Spot-check: A5 retrieve (mandatory — 3rd-drift watch) + one of A6/A7/B13 your pick. Then redo Station 2 (B8 GHA reaching on-prem) bronze→silver→gold with the gold layer being an imaginary regulated bank migrating CloudBees Jenkins → GitHub Enterprise. This is Track B's NOW item. If Step 2 hits gold, do a Bronze pass on A10 (embedding), A11 (vector DB), and A28 (A/B testing for AI). Slow is correct. Watch all five failure modes.*

---

### Still open (not lost, not done)

- **A8 (refusal threshold)** — drill on what the threshold actually scores.
- **A10–A12 (embeddings → vector DBs → Pinecone)** — biggest WS + ADCB gap.
- **A28 (A/B testing)** — Whiteshield-driven new gap.
- **A29 (KPI frameworks)** — Whiteshield-driven new gap.
- **A30 (UI/UX for data-rich interfaces)** — Whiteshield-driven new gap.
- **A31 (GCP AI services)** — Whiteshield-driven new gap.
- **Silver / Gold layers** for all A3–A7 and B13 — Bronze is locked, layered uplift queued.

---

### Now / Next / Later (build + curriculum)

**NOW (just done — Session 07):**
- ✅ A5 spot-check — 3rd drift caught and redone with verb lock.
- ✅ B13 promoted to 🥈 Silver.
- ✅ Whiteshield JD reviewed (7/10 fit), added as third active target.
- ✅ Curriculum restructured — modules now sequenced Now/Next/Later with CI/CD tool touchpoints.
- ✅ M6 Pipeline Visualiser added, queued behind defined trigger.
- ✅ Three-track architecture (§1B) committed at session close — Track A (AI/RAG), Track B (CI/CD toolchain), Track C (Dashboard + AI overlay).
- ✅ Track B explicitly framed as the WORK authority-gap closer.
- ✅ ADCB / Mal moved to watching.
- ✅ Four new concepts added (A28–A31) for Whiteshield gap-closing.
- ✅ Failure modes #4 and #5 added.

**NEXT (Session 08):**
- 🔁 Spot-check A5 + one other.
- 🚀 Redo Station 2 (B8) bronze→silver→gold (Track B NOW).
- 🚀 If energy holds — Bronze pass on A10, A11, A28.

**LATER (queued, in priority order):**
1. **M1 Stations 3–6** — self-hosted runner, firewall request, containerised testing, headless browser testing.
2. **M5 Chunks 2–6** — chunking code, scoring, system prompt, API call, response handling.
3. **AI block** — A10, A11, A12, A28, A29, A30, A31 (Whiteshield gap-closing pass).
4. **Silver + Gold uplift** for already-Bronze concepts.
5. **M2 Code quality gates** (SonarQube + Snyk worked example).
6. **M3 Artefact management**.
7. **M4 IDP capabilities applied**.
8. **Track C / M6 Pipeline Visualiser** — only when start trigger conditions met.
9. **DORA metrics (B25)** — layered on top of CI/CD bundle.
10. **Governance / evals (A23, A24)** — once vector DBs owned.

---

## §7 — Recruiter-ready talking points (banked)

**On RAG (Session 05 — gold-level):**
> *"I'm building a RAG-based banking chatbot end-to-end — chunking source documents, scoring relevance per query, and enforcing source-only generation with citations. The architectural choices map directly to how I'd scope an internal developer onboarding bot at platform scale — same chunking, retrieve, augment, generate pipeline, just pointed at runbooks instead of compliance standards."*

**On hallucination safety (Session 05 — gold-level):**
> *"Think of the model as a chef. Hallucination is the chef adding a sprinkle of something the customer didn't ask for — could be an allergy. In banking, hallucination isn't an inconvenience, it's a compliance breach. RAG forces the chef to cook only from handed cards and label every ingredient."*

**On R-A-G end-to-end (Session 06 — silver, single sentence):**
> *"Retrieve is the kitchen fetching and gathering the ingredients that match the order. Augment is handing the order plus those ingredients to the chef. Generate is the chef cooking only from what's been handed over, with the customer's allergies in mind."*

**On cloud-on-prem split (Session 07 — silver, polished):**
> *"At my current bank we run a hybrid model. We use AWS, Azure and GCP for experimentation, scale and performance. On-prem is for regulated and sensitive workloads. The split is workload-driven — sensitivity decides which side a workload sits on."*

**On the Whiteshield angle (Session 07 — draft, 90s):**
> *"I'm a Senior Product Manager based in the UAE region with six years owning regulated, data-intensive platforms in financial services. Most recently I've been shipping AI-native products end-to-end — I'm currently building a Sharia-finance RAG chatbot from scratch with Claude, which has forced me to learn embeddings, retrieval, citation guardrails and refusal logic at code level, not just slide level. What attracts me to Whiteshield is the combination of policy impact and analytical product depth — the Career Navigator's mission sits close to my own interest in workforce and financial mobility."*

**On why I'm building a three-track CI/CD + AI repo (Session 07 close — draft):**
> *"My day job involves representing platform and CI/CD strategy to leadership, but most of my exposure to the toolchain has been at policy and roadmap level rather than firsthand build. So I've wired GitHub Actions, SonarQube, Snyk and Artifactory onto a regulated-banking prototype I run on my own GitHub — same shape as an enterprise pipeline at smaller scale. On top of it sits an analytics dashboard with AI summarisation, which gives me the data-intensive product portfolio piece I was missing. One repo, three tracks, real tools."*

**On GHA → on-prem (pending — gold once Session 08 completes):**
> *(To be written after Station 2 is locked at gold.)*

---

*End of file. Paste this whole file as the opener for the next session.*
