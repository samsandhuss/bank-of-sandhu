# BUILD & LEARN LOG — bank-of-sandhu

**Owner:** S.S.
**Repo:** `bank-of-sandhu`
**Live demo:** https://bank-of-sandhu.onrender.com
**Mantra:** stay learning, stay happy
**Goal:** build genuine, end-to-end fluency in AI product development and modern CI/CD toolchains by *building*, not just reading.

---

## ⚠️ PERMANENT RULE — read first, every session

This file lives in a public repo. Therefore:

- **Never name real colleagues or leaders.** Use generic terms: *"a senior engineering leader"*, *"a platform leader"*, *"a delivery lead"*, *"a stakeholder"*.
- **Never name any specific employer — current or past.** Use generic terms: *"a regulated bank"*, *"a major financial services organisation"*, *"a previous fintech employer"*.
- **Never name internal tools or terms that identify any employer.**
- **Specific named CI/CD / dev tools are fine** (GitHub Actions, SonarQube, Snyk, Artifactory, Docker, Jenkins, CloudBees Jenkins, Buildkite, Azure DevOps, Harness, Port.io) — these are general-industry, not employer-identifying.
- **Never name specific job adverts, companies I'm applying to, or external roles.** This is a learning log, not a job-search log.
- **All worked examples use a generic "imaginary bank" framing.** Plausibly real, regulated, hybrid — but no specific bank.

### 🧼 MANDATORY SCRUB REMINDER (every session)

**Before any close-out, Claude MUST run a scrub pass and confirm in the chat:**

1. No names of employers (current or past).
2. No names of colleagues, leaders, recruiters, hiring managers.
3. No names of specific external companies I'm applying to or interested in.
4. No names of specific job adverts, role titles tied to a known company, job codes, or company-specific products.
5. No geographic identifiers that pin me to a specific role (e.g. *"Dubai-based"*, *"UAE region"*, *"Abu Dhabi"* when tied to a role — general living location is fine).
6. No internal tool names, internal project names, or internal language only one employer would use.
7. No language framing the file as a job-hunt log. It is a *learning log*.

**Claude must say: *"Scrub pass complete — file safe to commit"* before generating the download. If the scrub finds anything, Claude flags it BEFORE producing the file, not after.**

If Claude is reading this file as session opener, **apply this rule to everything generated for the rest of the session**.

---

## §0 — How I learn (do not deviate)

### Bronze / Silver / Gold layered teaching

Every concept gets taught in three layers, each only attempted after the previous is owned. Like belts — earn the next, don't claim it.

| Layer | What it means | Test |
|---|---|---|
| 🥉 **Bronze** | Plain English. Analogy only. No tech jargon allowed. | Could I explain this to a non-technical family member? |
| 🥈 **Silver** | Analogy plus the real CI/CD / AI terms mapped onto it. | Could I explain this to a junior engineer using both the analogy and the correct technical terms in the same sentence? |
| 🥇 **Gold** | Imaginary bank example, professional-ready. No analogy crutch. | Could I say this in a senior conversation in a 90-second answer without sounding rehearsed or AI-generated? |

**Status column in §4 tracks layer ownership**, e.g. 🥉🥈 = bronze + silver owned, gold not yet attempted.

**Layer note (banked S09):** analogies are *bronze training wheels*, not professional answers. At Gold the analogy is dropped entirely — a senior conversation uses plain professional language, never the kitchen/kid/estate. Once a concept's *direction* is locked, switch from metaphor to the plain facts.

### Core method
- **Learn by doing.** Concepts taught at the moment an artefact is created, not in parallel docs.
- **Plain English first.** No jargon until a working analogy is owned (bronze first).
- **Slow is correct.** Don't advance until the current concept is explained back in my own words.
- **Owned ≠ owned forever.** Spot-checks happen. Drift drops the layer.
- **Discipline beats appetite.** New build ideas are queued behind defined milestones on existing builds.
- **Failure modes to watch**, especially when tired:
  1. Reaching for technical-sounding words instead of the plain idea.
  2. When a redo gets uncomfortable, the brain reaches for a fresh shiny topic.
  3. Saying *"depends on the use case"* when I don't know the real answer — sounds balanced, but jargon-reach in disguise.
  4. Adding *"historic records" / "old data"* framings to on-prem explanations. What matters is *sensitivity*, not *age*.
  5. Scope expansion when a redo is hard. Multiple modules/tracks added in one tired session is mode #2 at module scale.

### Session ritual (every close-out)
1. ✅ Green ticks of what got done in plain English.
2. 📍 Where we got to — files, what works, what's stub.
3. 🎤 Talking points — short sentences for general professional use, never AI-generated-sounding.
4. 🌅 Tomorrow's opener — exact line to paste.
5. 🗺️ Now / Next / Later snapshot.

---

## §1 — What this build is

**bank-of-sandhu** is a white-labelable Islamic digital banking prototype:
- **Knowledge domain:** Sharia-compliant finance (AAOIFI standards as the grounded knowledge base).
- **Two journeys:** a leasing flow, and a RAG chatbot answering Sharia-finance questions with citations.
- **Stack:** Vite + React frontend, Node BFF, Claude Haiku 4.5, in-repo knowledge files (`aaoifi.md`), Render deployment.

It is **dual-purpose**:
1. **Portfolio piece** — shareable URL anyone can walk through; RAG end-to-end with real Sharia source citations and refusal guardrails.
2. **Hands-on learning vehicle** — mirrors modern platform patterns (env provisioning, golden paths, team autonomy, service discovery) so I can explain each concept by pointing to working code in my own repo.

---

## §1B — The Three-Track Architecture

**Principle:** one repo (bank-of-sandhu) acts as the single substrate for three parallel learning tracks. Each track has its own Now → Next → Later sequence drawn from the M1–M6 modules in §2. Tracks are independent — finishing one is a win even if others slip.

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
| **B — CI/CD Toolchain** | M1 (Stations 2–6), M2 (SonarQube + Snyk), M3 (Artefact mgmt), M4 (Platform patterns) | Wires real tools onto the bank-of-sandhu repo |
| **C — Dashboard + AI overlay** | M6 (Pipeline Visualiser, reframed) | DORA overlay + AI summarisation layer |

### Why each track exists

| Track | What it gives me |
|---|---|
| **A — AI/RAG** | Genuine RAG fluency from a built artefact — chunking, retrieval, citation guardrails, refusal logic at code level. |
| **B — CI/CD toolchain** | First-hand experience of the modern toolchain (GHA, SonarQube, Snyk, Artifactory) wired onto my own repo — same shape as an enterprise pipeline at smaller scale. |
| **C — Dashboard + AI overlay** | Data-rich product UX practice + DORA/KPI fluency + an AI summarisation layer joining Tracks A and B. |

### Two-week rough sequence

| Week | Focus | End-of-week output |
|---|---|---|
| **W1** | All three tracks NOW + first NEXT items | B8 gold; basic GHA workflow live on repo; dashboard skeleton deployed; Chunk 2 owned. |
| **W2** | All three tracks NEXT | SonarQube + Snyk wired; dashboard pulls real GitHub data; Chunks 3–4 owned; DORA overlay live. |
| **Post-W2** | LATER + STRETCH items | Vector upgrade, AI layer on dashboard, self-hosted runner demo. |

**Honest pacing assumption:** 3 hrs/day → W1+W2 plan holds. 1 hr/day → halve everything. Each track is independent.

---

## §2 — Modules (sequenced Now / Next / Later roadmaps)

**Restructure principle:** Each module is a sequence, not a single tick-box. Inside each module, work is ordered Now → Next → Later. CI/CD tool touchpoints are flagged inside the sequence so I always know *which tool teaches which concept*.

### M1 — GitHub + Actions for non-devs 🟢 IN PROGRESS

**Worked example:** Imaginary bank cloud → on-prem deployment, six stations. **Feeds Track B.**

| Step | What | Status | CI/CD touchpoint | Concept ref |
|---|---|---|---|---|
| Station 1 | Cloud vs on-prem split | 🥉🥈 OWNED | — | B13 |
| Station 2 | GHA reaching into on-prem | 🥉 Bronze OWNED · 🥈 Silver OWNED (Problem + Fix + Why-it-wins) · 🥇 Gold pending — Session 10 | **GitHub Actions** | B8 |
| Station 3 | Self-hosted CD runner provisioning | 🔴 NOT STARTED | **GitHub Actions, Harness** | B9 |
| Station 4 | Firewall change request process | 🔴 NOT STARTED | (organisational, not tooling) | B10 |
| Station 5 | Containerised app testing in CI | 🔴 NOT STARTED | **Docker, GHA, Buildkite** | B11, B21, B22 |
| Station 6 | Headless browser testing in CI | 🔴 NOT STARTED | **Playwright/Cypress in GHA** | B12 |
| Wrap | Professional-grade summary of the bundle | 🔴 NOT STARTED | All of above | — |

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

### M4 — Platform patterns applied 🔴 NOT STARTED

**Worked example:** The bank-of-sandhu repo *as* a golden-path template; README *as* a service-catalog entry. **Feeds Track B.**

| Step | What | Status | CI/CD touchpoint | Concept ref |
|---|---|---|---|---|
| 1 | General platform engineering concepts | 🔴 | **Portal vendors (e.g. Port.io) as reference** | C1, C2, C3, C9 |
| 2 | Golden path template — what the bank-of-sandhu repo demonstrates | 🔴 | — | C4 |
| 3 | Service catalog — README as the catalog entry | 🔴 | — | C5 |
| 4 | Scorecards — what would my repo score? | 🔴 | — | C6 |
| 5 | Self-service provisioning concept | 🔴 | — | C7 |
| Wrap | Imaginary bank: why platform tooling unlocks team autonomy | 🔴 | All | — |

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
| **Bonus AI block** | Embeddings → vector DBs → Pinecone | 🔴 NOT STARTED (priority gap) | A10, A11, A12 |
| **Bonus AI block** | Evals + experimentation (A/B testing for AI) | 🔴 NOT STARTED (priority gap) | A23, A28 |
| Wrap | Professional-grade summary of RAG end-to-end | 🔴 NOT STARTED | All |

---

### M6 — Pipeline Visualiser → reframed as **Track C** 🔵 QUEUED

**Worked example:** A React dashboard, deployed alongside bank-of-sandhu, showing how the CI/CD ecosystem fits together. Originally scoped as a static visualiser; reframed as **Track C — a working dashboard with mocked data first, real GitHub API data next, and an AI summarisation layer LATER.**

**Why queued, not started:** Discipline rule. Starting a second build before bank-of-sandhu hits a defined milestone is the shiny-topic-pull failure mode at module scale.

**Defined start trigger (must hit ALL three):**
1. M1 Station 2 (B8) owned at Gold. *(Silver complete as of S09 — Gold is the one remaining gate.)*
2. M2 complete OR Chunks 2–3 of M5 complete.
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
| Wrap | Professional-grade walkthrough | — | — |

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

### Session 07 — Spot-check + curriculum restructure + three-track architecture committed 🟢

**Spot-check outcomes:**
- **A5 Retrieve** drifted a *third* time — first to "speed" (S05), then to "no action" (S06), now to "checked" (S07). Re-owned with verb lock: action words must be "fetching / gathering / pulling", never "checking". **A5 stays on the spot-check rota for every session until it holds clean three sessions in a row.**
- **B13 Cloud vs on-prem** held overnight, promoted to **🥉🥈 (Bronze + Silver)**. Minor flags: avoid "historic records" (slides toward "old data" drift); drop filler phrasing.

**Curriculum restructured (mid-session):**
- Modules now sequenced Now → Next → Later with explicit CI/CD tool touchpoints.
- M6 Pipeline Visualiser added, queued behind a defined trigger.
- Failure mode #4 added: "historic records" / "old data" drift on on-prem.

**Three-track architecture committed (session close):**
- Track A (AI/RAG), Track B (CI/CD toolchain), Track C (Dashboard + AI overlay).
- Layered on top of M1–M6, not replacing them.
- Track C reframes M6 as a working dashboard with AI overlay.
- Two-week rough sequence committed.
- Failure mode #5 added: scope expansion under redo pressure.

**Station 2 (B8) redo:** Did not occur this session. Carries forward to Session 08.

### Session 08 — Spot-checks held + B8 redo (bronze owned, silver underway) 🟢

**Spot-check outcomes:**
- **A5 Retrieve** — HELD. Verb lock intact ("fetching"), no slide to "checking." Hold 1 of 3 on the watch. Tighten noted: lead with the action verb (*fetching*) — "matching" is the filter, not the action.
- **B13 Cloud vs on-prem** — HELD at Silver. Anchored on-prem to *sensitivity*, avoided the "old data" trap. Tighten noted: state the decider as a rule — *"sensitivity decides which side a workload sits on."*

**B8 — GHA reaching on-prem (Track B NOW item):**
- 🥉 **Bronze — OWNED.** Worked out the direction solo: *the worker inside dials out; the outside can never dial in.*
- 🥈 **Silver — Problem owned.** Firewall correctly placed as the *bank's* wall, blocking inbound so GitHub can't reach in.
- 🥈 **Silver — Fix assembled (with scaffold).** Self-hosted runner inside, polling outbound. Not yet solo.
- 🥈 **Silver — Why-it-wins:** not yet attempted.

**Other:**
- Stopped honestly when answers shrank to single words.
- Discipline held: no Chunks 2–6, no Track C, no curriculum restructure.
- **Port.io question:** confirmed general-industry vendor names are NOT scrub targets. Softened reference-vendor mentions (C9, M4) to "portal vendors (e.g. Port.io)".

### Session 09 — A5 redone, B13 held, B8 Silver-complete, Gold attempted 🟢

**Spot-check outcomes:**
- **A5 Retrieve** — DRIFTED at the top of the session: led with *"matching"* (action-absent), the exact tighten flagged in S08. Redone with a scaffold to land *"Retrieve is fetching the ingredients that match the order."* Because it drifted and needed a redo, the clean streak **resets to 0** — mandatory again next session. Lesson: lead with the action verb, every time.
- **B13 Cloud vs on-prem** — HELD at Silver (concept). **Framing flag:** slipped twice into a personal, non-generic framing (referring to a current organisation rather than *"a regulated bank"*). Coached back to the generic frame — the phrasing you rehearse is the phrasing that comes out under pressure, so keep worked examples generic and it becomes automatic.

**B8 — GHA reaching on-prem (Track B NOW item):**
- 🥈 **Fix — OWNED solo.** Restated clean without scaffold: self-hosted runner inside the bank's network, polls GitHub outbound for work, no inbound due to the firewall. (Two side-mix-ups fixed along the way: runner is the bank's not GitHub's; call goes out not in.)
- 🥈 **Why-it-wins — OWNED.** Landed the contrast: an inbound hole is a permanent open door anyone can probe; outbound is no door at all; perimeter unchanged, so security and audit have nothing new to defend. **→ B8 now Silver-complete (Problem + Fix + Why-it-wins).**
- 🥇 **Gold — attempted, did not land.** Under full-assembly load the owned pieces degraded — the self-hosted vs GitHub-hosted runner ownership confusion returned, and the gap + why-it-wins beats dropped out. Banked honestly (tiredness/regression). Gold carries to Session 10.

**Banked insight (analogy simplification):**
- Analogies are **bronze training wheels**, not professional answers. At Gold, drop the analogy entirely — a senior conversation uses plain professional language, not the kitchen/kid/estate. This dissolves the "too many analogies" worry: none of them are used in the room. (Logged in §0.)

**Carry-forward for Gold (the line that keeps slipping):**
- **Self-hosted runner** = the bank's machine, inside the bank's network (the bank hosts it).
- **GitHub-hosted (cloud) runner** = GitHub's machine, outside — the one that can't reach in.
- The bank's self-hosted runner polls **GitHub the service** — it does not poll "github runners."

**Other:** Discipline held — no Chunks 2–6, no Track C, no curriculum restructure (the analogy-simplification urge was reframed, not acted on as a restructure).

---

## §4 — Concept curriculum

Legend:
- 🥉 = Bronze owned · 🥈 = Silver owned · 🥇 = Gold owned
- 🟡 = PARTIAL at target layer · 🟠 = STALE (was owned, spot-check failed) · 🔴 = NOT STARTED

---

### 4A — AI / ML / GenAI concepts

| # | Concept | Status | Plain-English (bronze) | Last check |
|---|---|---|---|---|
| A2 | Hallucination | 🥉 OWNED | Chef adds a sprinkle of something the customer didn't ask for — could be an allergy. | 2026-05-22 |
| A3 | RAG (end-to-end) | 🥉 OWNED | Pipeline: chunking → retrieve → augment → generate. Grounds the model in real sources + cites them. | 2026-05-22 |
| A4 | Chunking | 🥉 OWNED | Fridge with ingredient boxes — prep work that fills the fridge. | 2026-05-22 |
| A5 | Retrieve | 🥉 OWNED ⚠️ ON WATCH (streak reset to 0 — drifted S09) | Retrieve is *fetching* the ingredients that match the order. **Lead with the action verb**; matching is the filter, not the action. | 2026-05-31 (S09, redone) |
| A6 | Augment | 🥉 OWNED | Order + ingredients into chef's hands. Counter → chef. Handover. | 2026-05-22 |
| A7 | Generate | 🥉 OWNED | Chef cooks only from handed cards. Refuses if missing. Labels each fact = citations. | 2026-05-22 |
| A9 | Source attribution / citation | 🥉 OWNED | Labelling each ingredient with which box it came from. Auditability. | 2026-05-22 |
| A1 | LLM | 🟡 PARTIAL | Model trained on huge text → generates human-like answers. Can hallucinate on its own. | — |
| A8 | Refusal / guardrail threshold | 🟡 PARTIAL | Bot refuses when no card is good enough. Need drill: what's the threshold scoring? | — |
| A13 | Lexical vs vector scoring | 🟡 PARTIAL | bank-of-sandhu uses lexical (word-match). Production uses vector (meaning-match). | — |
| A14 | Context window | 🟡 PARTIAL | Why chef can't hold the whole fridge. Model's text-at-once limit. | — |
| A10 | Embedding | 🔴 NOT STARTED | — | — |
| A11 | Vector database | 🔴 NOT STARTED | — | — |
| A12 | Pinecone | 🔴 NOT STARTED | — | — |
| A15 | Prompt / system prompt | 🔴 NOT STARTED | — | — |
| A16 | Few-shot / zero-shot | 🔴 NOT STARTED | — | — |
| A17 | Fine-tuning vs RAG | 🔴 NOT STARTED | — | — |
| A18 | LangChain | 🔴 NOT STARTED | — | — |
| A19 | LlamaIndex | 🔴 NOT STARTED | — | — |
| A20 | Azure OpenAI | 🔴 NOT STARTED | — | — |
| A21 | Agentic AI | 🔴 NOT STARTED | — | — |
| A22 | MCP | 🔴 NOT STARTED | — | — |
| A23 | Evals / RAGAS | 🔴 NOT STARTED | — | — |
| A24 | Governance / responsible AI | 🔴 NOT STARTED | — | — |
| A25 | Tokens / tokenisation | 🔴 NOT STARTED | — | — |
| A26 | Temperature / top-p | 🔴 NOT STARTED | — | — |
| A27 | Streaming vs batch | 🔴 NOT STARTED | — | — |
| A28 | A/B testing for AI products | 🔴 NOT STARTED | Feature validation, model testing, experimentation methodology. | — |
| A29 | KPI / measurement frameworks for AI products | 🔴 NOT STARTED | Defining what good looks like for a data/AI product. | — |
| A30 | UI/UX for data-rich interfaces | 🔴 NOT STARTED | Designing dashboards / decision-support tools end users can actually use. | — |
| A31 | Managed cloud AI services | 🔴 NOT STARTED | Hosted model APIs and managed RAG patterns from major providers. | — |

---

### 4B — CI/CD daily-work stack

| # | Concept | Status | Plain-English (bronze) | Last check |
|---|---|---|---|---|
| B13 | Cloud vs on-prem split | 🥉🥈 OWNED | Hybrid — on-prem for regulated workloads, public cloud providers for flexibility to scale and experiment. Sensitivity decides which side a workload sits on. | 2026-05-31 (S09 held) |
| B8 | GitHub Actions (GHA) reaching on-prem | 🥉 OWNED · 🥈 Silver OWNED · 🥇 Gold pending (S10) | A self-hosted runner (the bank's own machine, inside the bank's network) polls GitHub outbound for work; the firewall allows no inbound; perimeter unchanged so audit is comfortable. Gold (migration narrative) pending. **Watch: self-hosted ≠ GitHub-hosted.** | 2026-05-31 |
| B1 | CI | 🟡 PARTIAL | Every code change auto-built and tested before merge. | — |
| B2 | CD | 🟡 PARTIAL | Every change that passes CI goes to staging/prod. Delivery=ready. Deployment=actually deployed. | — |
| B3 | Pipeline | 🟡 PARTIAL | End-to-end conveyor from `git push` to running in prod. | — |
| B14 | Jenkins / CloudBees Jenkins | 🟡 PARTIAL | Classic CI/CD server. Many orgs migrating off it to GHA. | — |
| B15 | Buildkite | 🟡 PARTIAL | A CI/CD platform. | — |
| B16 | Azure DevOps | 🟡 PARTIAL | Microsoft's CI/CD + project management platform. | — |
| B17 | Harness | 🟡 PARTIAL | A CD-focused platform. | — |
| B24 | Secret management | 🟡 PARTIAL | API keys in env vars on host, never in code. Rotate if exposed. | — |
| B4 | Build | 🔴 NOT STARTED | Source → runnable artefact (JAR / Docker image / bundled JS). | — |
| B5 | Artefact | 🔴 NOT STARTED | Output of a build. The thing you deploy. | — |
| B6 | Test stages | 🔴 NOT STARTED | Unit → integration → E2E. | — |
| B7 | Branch protection | 🔴 NOT STARTED | Rules on what's allowed into main. | — |
| B9 | GHA self-hosted runner | 🔴 NOT STARTED | M1 Station 3. | — |
| B10 | Firewall change request process | 🔴 NOT STARTED | M1 Station 4. | — |
| B11 | Containerised app testing in CI | 🔴 NOT STARTED | M1 Station 5. | — |
| B12 | Headless browser testing in CI | 🔴 NOT STARTED | M1 Station 6. | — |
| B18 | SonarQube | 🔴 NOT STARTED | Static code analysis — finds bugs and code smells pre-merge. | — |
| B19 | Snyk | 🔴 NOT STARTED | Vulnerability scanning — finds known security holes in dependencies. | — |
| B20 | Artifactory | 🔴 NOT STARTED | Central library of built artefacts (Docker images, npm, JARs). | — |
| B21 | Docker | 🔴 NOT STARTED | Packaging app + dependencies into a portable container. | — |
| B22 | Image vs container | 🔴 NOT STARTED | Image = recipe. Container = running instance. | — |
| B23 | Semver | 🔴 NOT STARTED | MAJOR.MINOR.PATCH. | — |
| B25 | DORA metrics | 🔴 NOT STARTED | Deployment frequency, lead time, MTTR, change failure rate. | — |

---

### 4C — General platform concepts (industry-standard)

These are widely-documented industry concepts. I'm learning them from public sources (CNCF, Team Topologies, the *Platform Engineering* book by Camille Fournier, etc.) — not from any specific employer's implementation.

| # | Concept | Status | Plain-English (bronze) | Last check |
|---|---|---|---|---|
| C1 | Platform Engineering | 🟡 PARTIAL | An emerging industry discipline — providing reusable tools so application teams can self-serve common infrastructure tasks. | — |
| C2 | Developer Experience (DevEx) | 🟡 PARTIAL | How easy and fast a developer can do their job. An industry-recognised quality metric. | — |
| C3 | Internal Developer Portal (general concept) | 🟡 PARTIAL | An industry pattern — a single front door for developers to discover services and request resources. | — |
| C4 | Golden path template | 🟡 PARTIAL | A pre-built starter template (industry term — see Spotify Backstage docs, ThoughtWorks) so teams don't reinvent the wheel. | — |
| C5 | Service catalog | 🟡 PARTIAL | An industry pattern — a searchable list of every service with metadata. | — |
| C8 | Team autonomy | 🟡 PARTIAL | A Team Topologies concept — teams ship without dependencies on a central function for every change. | — |
| C9 | Portal vendors (e.g. Port.io) | 🟡 PARTIAL | Third-party SaaS portal vendors such as Port.io — publicly-documented, used as reference examples for the IDP pattern. | — |
| C6 | Scorecards | 🔴 NOT STARTED | An industry pattern — a rubric applied to services (owner, CI, security, SLOs). | — |
| C7 | Self-service provisioning | 🔴 NOT STARTED | An industry pattern — click → new env without a ticket. | — |

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
| 2026-05-22 | B13 Cloud vs on-prem | S07 recap — held with minor "historic records" flag | Promoted to Silver. Sentence locked. | 🥉🥈 |
| 2026-05-31 | A5 Retrieve | S08 recap — held, verb lock intact ("fetching") | Held. Hold 1 of 3 on the watch. | 🥉 |
| 2026-05-31 | B13 Cloud vs on-prem | S08 recap — held at silver, no age-drift | Held. Decider: "sensitivity decides." | 🥉🥈 |
| 2026-05-31 | B8 GHA reaching on-prem | S08 — Bronze taught fresh, direction owned solo; Silver Problem owned, Fix scaffolded | Bronze owned, Silver underway. | 🥉 |
| 2026-05-31 | A5 Retrieve | S09 recap — drifted (led with "matching", action-absent) → redone with scaffold | **Streak reset to 0.** Mandatory again S10. Lead with the action verb. | 🥉 |
| 2026-05-31 | B13 Cloud vs on-prem | S09 recap — held at silver; framing flag (slipped to non-generic framing → coached to generic) | Held. | 🥉🥈 |
| 2026-05-31 | B8 Fix | S09 — restated solo, clean (inside bank net, polls GH outbound, no inbound) | Owned solo. | 🥈 |
| 2026-05-31 | B8 Why-it-wins | S09 — held after teach (open door vs no door; audit comfortable) | Owned. **Silver complete.** | 🥈 |
| 2026-05-31 | B8 Gold | S09 — attempted, regressed under load (self-hosted/GitHub-hosted confusion; gap + why-it-wins beats dropped) | Banked. Gold → S10. | 🥈 |

**Next spot-check candidates (Session 10 opener):** A5 retrieve (mandatory — streak reset to 0, going for hold 1 of 3), one of A6 / A7 / B13.

---

## §6 — NEXT (resume here)

### Session 10 plan

**STEP 1: Recap spot-check (5 min)**
- A5 Retrieve (mandatory — streak reset to 0 after the S09 drift; going for hold 1 of 3). **Lead with the action verb** — fetch/gather/pull. Matching is the filter, not the action.
- One of A6 / A7 / B13 picked unprompted by Claude.

**STEP 2: B8 Gold — the only gate left before the Track C trigger.**
Bronze + Silver are complete; Gold is the 90-second professional answer with no analogy.
- **First, lock the line that keeps slipping:** self-hosted runner (the bank's own machine, *inside* the network) vs GitHub-hosted/cloud runner (GitHub's, *outside* — the one that can't reach in). The self-hosted runner polls *GitHub the service*.
- **Then deliver the 90-second migration answer**, no analogy, three beats:
  1. **The gap** — GitHub's cloud runners can't reach the on-prem network; the firewall blocks inbound from the public internet.
  2. **The fix** — a self-hosted runner inside the network polls GitHub outbound for work.
  3. **Why it wins** — no inbound hole, perimeter unchanged, security and audit have nothing new to defend.
  - Setting: a regulated bank migrating CloudBees Jenkins → GitHub Enterprise.

**STEP 3: If Gold lands — Bronze pass on the priority AI gaps**
- A10 Embedding
- A11 Vector database
- A28 A/B testing for AI products

Bronze only. Don't push to Silver in the same session.

**Do NOT this session:**
- Advance to Chunks 2–6 of `server/chat.js` (still queued behind the on-prem/GHA bundle).
- Start Track C / M6 (queued behind the defined trigger).
- Restructure the curriculum further. (Failure mode #5.)

---

### Exact opener line for Session 10

> *Resume Session 10. Read BUILD_LEARN_LOG.md first — PERMANENT RULE, §0 Bronze/Silver/Gold, §1B three-track architecture. Spot-check: A5 Retrieve (mandatory — streak reset to 0 after the S09 drift, going for hold 1 of 3; lead with the action verb fetch/gather/pull) + one of A6/A7/B13 your pick. Then B8 Gold: first lock the self-hosted (bank's, inside) vs GitHub-hosted (GitHub's, outside) distinction, then give the 90-second migration answer — no analogy — in three beats: gap, fix, why-it-wins, set in a regulated bank migrating CloudBees Jenkins → GitHub Enterprise. If Gold lands, Bronze pass on A10 (embedding), A11 (vector DB), and A28 (A/B testing for AI). Slow is correct. Watch all five failure modes.*

---

### Still open (not lost, not done)

- **B8 Gold** — the last gate for the Track C start trigger (condition 1).
- **A5** — streak reset to 0; needs three clean unprompted holds in a row. Lead with the action verb.
- **Framing habit** — keep worked examples in the generic "a regulated bank" frame; don't slip to "where I work." Rehearse generic so it's automatic.
- **Gold-priority pass** — pick the 4–5 concepts that most need to reach Gold for confident senior conversations (do as a deliberate step, not mid-drill).
- **A8 (refusal threshold)** — drill on what the threshold actually scores.
- **A10–A12 (embeddings → vector DBs → Pinecone)** — priority AI gap.
- **A28 (A/B testing)**, **A29 (KPI frameworks)**, **A30 (UI/UX for data-rich interfaces)**, **A31 (managed cloud AI services)** — priority gaps.
- **Silver / Gold layers** for A3–A7 and B13 — Bronze is locked, layered uplift queued.

---

### Now / Next / Later

**NOW (just done — Session 09):**
- ✅ A5 redone — drifted (led with "matching"), relocked on "fetching"; streak reset to 0.
- ✅ B13 held at 🥈 Silver — framing flag noted (keep it generic).
- ✅ B8 Fix owned solo + Why-it-wins owned → **B8 Silver-complete.**
- ⏸️ B8 Gold attempted, banked under load → Session 10.
- ✅ Banked the "analogies = training wheels, Gold = no analogy" insight (logged in §0).
- ✅ Discipline held — no restructure, no Track C, no chunk advance.

**NEXT (Session 10):**
- 🔁 Spot-check A5 (going for hold 1 of 3) + one other.
- 🚀 B8 Gold — lock self-hosted vs GitHub-hosted, then the 90-second migration answer.
- 🚀 If Gold lands — Bronze pass on A10, A11, A28.

**LATER (queued, in priority order):**
1. **M1 Stations 3–6** — self-hosted runner, firewall request, containerised testing, headless browser testing.
2. **M5 Chunks 2–6** — chunking code, scoring, system prompt, API call, response handling.
3. **AI block** — A10, A11, A12, A28, A29, A30, A31.
4. **Silver + Gold uplift** for already-Bronze concepts.
5. **M2 Code quality gates** (SonarQube + Snyk worked example).
6. **M3 Artefact management**.
7. **M4 Platform patterns applied**.
8. **Track C / M6 Pipeline Visualiser** — only when start trigger conditions met (B8 Gold is the last gate).
9. **DORA metrics (B25)** — layered on top of CI/CD bundle.
10. **Governance / evals (A23, A24)** — once vector DBs owned.

---

## §7 — Talking points (banked, for general professional use)

**On RAG (Session 05 — gold-level):**
> *"I'm building a RAG-based chatbot end-to-end — chunking source documents, scoring relevance per query, and enforcing source-only generation with citations. Same chunking, retrieve, augment, generate pipeline you'd use for an internal knowledge bot, just pointed at compliance standards."*

**On hallucination safety (Session 05 — gold-level):**
> *"Think of the model as a chef. Hallucination is the chef adding a sprinkle of something the customer didn't ask for — could be an allergy. RAG forces the chef to cook only from handed cards and label every ingredient."*

**On R-A-G end-to-end (Session 06 — silver, single sentence):**
> *"Retrieve is the kitchen fetching and gathering the ingredients that match the order. Augment is handing the order plus those ingredients to the chef. Generate is the chef cooking only from what's been handed over, with the customer's allergies in mind."*

**On cloud-on-prem split (Session 07 — silver, polished):**
> *"In modern regulated finance you typically run a hybrid model — on-prem for regulated workloads, public cloud for flexibility to scale and experiment. The split is workload-driven — sensitivity decides which side a workload sits on."*

**On the three-track build (Session 07 close — draft):**
> *"I'm building a regulated-banking prototype on my own GitHub as a learning vehicle. One repo, three parallel tracks — a RAG chatbot deepening into vectors and evals, a CI/CD toolchain wiring GitHub Actions, SonarQube, Snyk and Artifactory onto the repo, and an analytics dashboard with an AI summarisation layer on top. Same shape as an enterprise pipeline at smaller scale, but I get to learn each tool by actually wiring it in."*

**On GHA → on-prem (Session 09 — silver complete; gold pending):**
> *"A cloud CI service can't reach into a locked-down bank network — the firewall blocks all inbound from the public internet. The fix is a self-hosted runner inside the network that polls GitHub outbound for work. It wins because the bank gets full CI/CD capability without cutting any inbound hole — the perimeter is unchanged, so security and audit have nothing new to defend."*

---

## §8 — Sanity check (run after every commit)

Before pushing this file to a public branch, run the scrub locally. From the repo root:

```bash
# One-line scrub — replace the keyword list below with any others to watch for.
# Output = empty? → safe to push. Any output? → fix before pushing.

grep -i -n -E "current employer|my employer|my company|my bank|my team lead|my manager|my CTO|whiteshield|quantum|career navigator|adcb|al reem|nationwide|barclays|hsbc|lloyds|natwest|santander|santander uk|monzo|starling|revolut|wise|cursor|uae role|dubai role|abu dhabi role|hiring manager|recruiter|interview|application|job code|JD\b|active target|watching target" BUILD_LEARN_LOG.md
```

If grep returns nothing, the file is safe. If it returns lines, edit those lines out before pushing.

**Recommended habit:** make this a pre-commit hook on the repo so it runs automatically. Example `.git/hooks/pre-commit`:

```bash
#!/usr/bin/env bash
if grep -i -q -E "current employer|whiteshield|quantum|adcb|al reem|nationwide|hiring manager|recruiter|JD\b|active target|watching target" BUILD_LEARN_LOG.md; then
  echo "⛔  Scrub check failed — identifiers found in BUILD_LEARN_LOG.md. Edit before committing."
  grep -i -n -E "current employer|whiteshield|quantum|adcb|al reem|nationwide|hiring manager|recruiter|JD\b|active target|watching target" BUILD_LEARN_LOG.md
  exit 1
fi
echo "✅  Scrub check passed."
```

Make it executable: `chmod +x .git/hooks/pre-commit`.

**This block stays in the file. It's not a one-time check — it's a permanent safety rail.**

---

*End of file. Paste this whole file as the opener for the next session.*
