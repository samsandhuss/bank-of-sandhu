### How tracks map onto the existing M1–M6 modules
| Track | Pulls from these modules | Adds new |
|---|---|---|
| **A — AI / RAG** | M5 (Chunks 2–6 of `chat.js`) | A/B testing layer, eval framework |
| **B — CI/CD Toolchain** | M1 (Stations 2–6), M2 (SonarQube + Snyk), M3 (Artefact mgmt), M4 (Platform patterns) | Wires real tools onto the bank-of-sandhu repo |
| **C — Dashboard + AI overlay** | M6 (Pipeline Visualiser, reframed) | DORA overlay + AI summarisation layer |
| **D — Agentic Infrastructure / Control Planes** | New module (M7); pulls A21, A22 forward from Track A | Agent identity & access control, sandboxing, agentic protocols (MCP/A2A), API gateways, Kubernetes, distributed systems, control-plane vision-setting |
### Why each track exists
| Track | What it gives me |
|---|---|
| **A — AI/RAG** | Genuine RAG fluency from a built artefact — chunking, retrieval, citation guardrails, refusal logic at code level. |
| **B — CI/CD toolchain** | First-hand experience of the modern toolchain (GHA, SonarQube, Snyk, Artifactory) wired onto my own repo — same shape as an enterprise pipeline at smaller scale. |
| **C — Dashboard + AI overlay** | Data-rich product UX practice + DORA/KPI fluency + an AI summarisation layer joining Tracks A and B. |
| **D — Agentic infrastructure** | Platform-PM fluency in the layer *underneath* agentic AI products — identity, sandboxing, protocols, distributed systems — the specific gap for infra-focused agentic PM roles (a live target role, see §11). Builds directly on top of A21 (Agentic AI) and A22 (MCP), which are already queued. |
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
| Station 2 | GHA reaching into on-prem | 🥉🥈🥇 OWNED — Gold landed S11 | **GitHub Actions** | B8 |
| Station 3 | Self-hosted CD runner provisioning | 🔴 NOT STARTED | **GitHub Actions, Harness** | B9 |
| Station 4 | Firewall change request process | 🔴 NOT STARTED | (organisational, not tooling) | B10 |
| Station 5 | Containerised app testing in CI | 🔴 NOT STARTED | **Docker, GHA, Buildkite** | B11, B21, B22 |
| Station 6 | Headless browser testing in CI | 🔴 NOT STARTED | **Playwright/Cypress in GHA** | B12 |
| Wrap | Professional-grade summary of the bundle | 🔴 NOT STARTED | All of above | — |
---
### M2 — Code quality gates 🟡 PARTIALLY SEEDED (S13 — Snyk found live in repo)
**Worked example:** Triage real findings in `server/index.js` (3 High findings parked from Security Station 1). **Feeds Track B.**
| Step | What | Status | CI/CD touchpoint | Concept ref |
|---|---|---|---|---|
| 1 | What is static code analysis vs vuln scanning | 🔴 | **SonarQube vs Snyk** | B18, B19 |
| 2 | Adding SonarQube to bank-of-sandhu's PR pipeline | 🔴 | **SonarQube, GHA** | B18 |
| 3 | Snyk scanning npm dependencies | 🟡 seen live in `ci.yml` S13, not yet explained back | **Snyk, GHA** | B19 |
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
| **Bonus AI block** | Embeddings → vector DBs → Pinecone | 🟠 A10 STALE, A11 STALE, A12 🔴 | A10, A11, A12 |
| **Bonus AI block** | Evals + experimentation (A/B testing for AI) | 🥉 A28 Bronze owned S12; A23 seeded S16 | A23, A28 |
| Wrap | Professional-grade summary of RAG end-to-end | 🔴 NOT STARTED | All |
---
### M6 — Pipeline Visualiser → reframed as **Track C** 🟡 TRIGGER MET — READY TO START
**Worked example:** A React dashboard, deployed alongside bank-of-sandhu, showing how the CI/CD ecosystem fits together. Originally scoped as a static visualiser; reframed as **Track C — a working dashboard with mocked data first, real GitHub API data next, and an AI summarisation layer LATER.**
**Defined start trigger (must hit ALL three):**
1. ✅ M1 Station 2 (B8) owned at Gold — **landed S11**.
2. 🔴 M2 complete OR Chunks 2–3 of M5 complete — **not yet met**.
3. 🟡 A10–A12 (embeddings, vector DBs, Pinecone) owned at Bronze — **A10 + A11 regressed to stale again in S15, need re-owning; A12 (Pinecone) not yet started**.
**Status:** Condition 1 met. Conditions 2 and 3 still open. Track C build can begin once all three are green.
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
### M7 — Agentic control planes & platform infrastructure 🔴 NOT STARTED
**Why this module exists:** added after reviewing a real target JD (an Agentic Infrastructure PM role, control-plane focused — see §11 for the full gap analysis). That role sits one layer *below* the AI product work in Track A — it's about the identity, sandboxing, protocol, and distributed-systems infrastructure that agentic products run on top of. Track A proves I can build an AI feature; Track D proves I understand what it takes to run agents safely at platform scale.
**Worked example:** extend the CI-failure-triage agent already queued for A21 (Session 14 design) with a real control-plane layer — scoped identity, a sandboxed execution step, and an MCP-based tool interface — so these concepts get built on bank-of-sandhu, not just explained. **Feeds Track D.**
| Step | What | Status | Touchpoint | Concept ref |
|---|---|---|---|---|
| 1 | Agentic control plane vs data plane | 🔴 NOT STARTED | — | D1 |
| 2 | Agent identity — workload identity vs human identity | 🔴 NOT STARTED | SPIFFE/SPIRE, service accounts | D2 |
| 3 | Agent authN/authZ — scoped, delegated tokens | 🔴 NOT STARTED | OAuth2 client-credentials, token scoping | D3 |
| 4 | Sandboxing agent code execution | 🔴 NOT STARTED | gVisor, Firecracker microVMs, container isolation | D4 |
| 5 | Agent network & connectivity architecture | 🔴 NOT STARTED | egress allow-listing, service mesh | D5 |
| 6 | MCP in practice — wiring a real MCP tool server into the CI-failure-triage agent | 🔴 NOT STARTED | **MCP** | A22, D6 |
| 7 | A2A — agent-to-agent protocol concepts | 🔴 NOT STARTED | **A2A** | D7 |
| 8 | API Gateway fundamentals | 🔴 NOT STARTED | rate limiting, routing, auth at the edge | D9 |
| 9 | Kubernetes fundamentals | 🔴 NOT STARTED | pods, services, namespaces, ingress | D10 |
| 10 | Service-to-service communication | 🔴 NOT STARTED | mTLS, service mesh (Istio/Linkerd) | D11 |
| 11 | Distributed systems fundamentals | 🔴 NOT STARTED | CAP theorem, idempotency, consistency | D12 |
| 12 | Enterprise security architecture for agents | 🔴 NOT STARTED | zero trust, least privilege | D14 |
| 13 | Agent lifecycle management in production | 🔴 NOT STARTED | versioning, deployment, rollback | D15 |
| 14 | Observability for agentic systems | 🔴 NOT STARTED | tracing tool calls / agent decisions | D17 |
| Wrap | Platform-PM vision statement — translating MCP/A2A + open standards into enterprise-grade infra | 🔴 NOT STARTED | All | D18 |
**Start trigger:** A21 (Agentic AI, Bronze design) lands in Session 14 first. Track D formally kicks off once A21 Bronze is owned — no point building a control plane around an agent that hasn't been scoped yet.
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
- **B13 Cloud vs on-prem** — HELD at Silver (concept). **Framing flag:** slipped twice into a personal, non-generic framing. Coached back to the generic frame.
**B8 — GHA reaching on-prem (Track B NOW item):**
- 🥈 **Fix — OWNED solo.** Restated clean without scaffold.
- 🥈 **Why-it-wins — OWNED.** Inbound hole = open door; outbound = no door; perimeter unchanged. **→ B8 now Silver-complete.**
- 🥇 **Gold — attempted, did not land.** Banked honestly. Gold carries to Session 10.
**Banked insight:** Analogies are bronze training wheels — at Gold, drop entirely. (Logged in §0.)
### Session 10 — A5 held (1/3), A6 + A7 held, B8 flip broken but Gold not landed 🟢
**Spot-check outcomes:**
- **A5 Retrieve** — HELD. **Hold 1 of 3.**
- **A6 Augment** — HELD. Boundary clean both sides.
- **A7 Generate** — bonus HELD (unprompted).
**B8 Gold attempt:** Flip broke via name-tells-owner mnemonic. Then degraded under load on poll target. Stopped honestly. Gold → S11.
**Banked techniques:** "The name tells you the owner." Under-load regression = stop signal. (Both logged in §0.)
### Session 11 — A5 held (2/3), B13 held, B8 Gold landed, A10 + A11 Bronze owned 🟢
**Spot-check outcomes:**
- **A5 Retrieve** — HELD. **Hold 2 of 3.**
- **B13 Cloud vs on-prem** — HELD at Silver. Generic framing correct, sensitivity landed.
**B8 Gold — LANDED. 🥇** Three beats clean: gap, fix, why-it-wins. Setting: regulated bank migrating CloudBees Jenkins → GitHub Enterprise. Track C trigger condition 1 met.
**A10 Embedding — Bronze OWNED:** Numbers not words, similar meanings mathematically close, computer + laptop example.
**A11 Vector database — Bronze OWNED:** Stores embeddings, searches fast, returns closest match.
**A28 — not attempted.** Stopped honestly. Carries to S12.
### Session 12 — A5 off the watch, A6 held, A28 Bronze owned, A10 + A11 Silver owned 🟢
**Spot-check outcomes:**
- **A5 Retrieve** — HELD. **Hold 3 of 3 — OFF THE WATCH PERMANENTLY. 🎉** Led with "fetch, gather and pull from a system matched to the original request." Action verb first, no drift.
- **A6 Augment** — HELD. Retrieved chunks + original question combined — boundary vs Retrieve clean on both sides.
**A28 — A/B testing for AI products — Bronze OWNED:**
- *"Two versions, real users, measure which actually works — not which looks better in testing. Key AI insight: changes that seem like improvements in the lab can behave completely differently once real users and the model are involved."*
**A10 Embedding — Silver OWNED:**
- *"An embedding model converts text into a vector — a long list of numbers that encodes meaning — and that vector is then stored in the vector database."* Real terms landed: embedding model, vector, vectorisation.
**A11 Vector database — Silver OWNED:**
- *"When a user asks a question, it gets converted into a vector by the embedding model. The vector database runs a similarity search to find stored vectors that are closest — measured by cosine similarity — and returns those chunks."* Real terms landed: similarity search, cosine similarity, query vector.
**Other:** Discipline held — no Track C build, no chunk advance, no curriculum restructure. Stopped cleanly.
### Session 13 — B13 landed, A10/A11 flagged stale, pivot to build-mode: real CI/CD pipeline diagnosed and fixed 🟢
**Spot-check outcomes:**
- **B13 Cloud vs on-prem split** — held, eventually landed clean: *"Sensitivity decides the split of a workflow — whether it sits on-prem or in the cloud."* One-sentence decider, no listing. **Held.**
- **A11 Vector database** — regressed across three attempts, merging back into A10 each time and dropping the actual retrieval mechanism (query vector → similarity search → cosine similarity). Matches the documented under-load regression stop signal from S10.
- **A10 Embedding** — same session, same blending pattern. Both **flipped to 🟠 STALE** rather than pushed through tired — 3 weeks off the habit was the honest cause, not a concept failure.
**Pivot — learn by doing, direct into the GitHub repo (not local machine), so it's portable and interview-shareable:**
- **`learning/vector_demo.py`** — hand-rolled bag-of-words "embedding" (deliberately not a black-box API) + cosine similarity search over 6 items. Ran clean: car query scored highest against the 3 cars, laptop query scored evenly across the 3 laptops. Made A10 (text→vector) and A11 (query vector→similarity search→closest match) concrete by watching real numbers move.
- **CI/CD** — went to add a new `ci.yml`, discovered one already existed from the initial commit 2 months ago. Real pipeline, 3 jobs: `validate` (install→lint→typecheck→test→build→brand-config check), `security` (Snyk — B19, previously "not started" but already live in code), `compliance-docs` (checks regulatory doc files exist — new concept, not in curriculum).
**Real diagnosis:** pipeline had been failing on every push. Traced both `validate` and `compliance-docs` failures to one root cause — 6 required compliance files never existed (`fca.md`, `cbuae.md`, `aaoifi.md`, `gdpr-ukdpa.md`, `uae-pdpl.md`, `consumer-duty.md`). Created stubs for all 6 via GitHub's web UI. Pipeline went green (CI #52).
**New concept surfaced:** **B26 — Compliance as code** (CI fails if a required regulatory doc is deleted).
**GitHub-UI friction, worth banking as its own lesson:** "Add file" creates paths relative to your current folder, not repo root — caused repeated nesting (`docs/compliance/docs/compliance/...`). Fix: always click the root breadcrumb link before starting a new file. One filename typo also caught (`consumer-duty.m` → `.md`).
**Time invested:** ~3h 45m (see §9).
**Reflection:** verbal-only spot-checks felt discouraging today, especially after a 3-week gap — building the vector script and diagnosing the real pipeline re-engaged the session. Banked as the Motivation note in §0.
**Other:** No Track C, no `chat.js` Chunks 2–6. Session ran entirely on Track B using real existing repo state instead of a fresh toy build — closer to "artefact-driven" than today's earlier pure spot-check attempts.
### Session 14 — Pre-session build: RAG demo + agentic workflow demo 🟡 SEEDED, not yet explained back
Built ahead of the live Session 14 spot-checks, so today's session can start from real running code instead of a cold verbal recap — same "artefact-driven" pattern as Session 13.
**`learning/rag_demo.py` — hand-built RAG pipeline, feeds Track A / M5:**
- Chunks 3 mock compliance docs (A4), retrieves via hand-rolled bag-of-words + cosine similarity with a stopword filter (A5, A13), augments query + retrieved chunks (A6), generates a cited, source-only answer or refuses below a 0.12 similarity threshold (A7, A8, A9).
- Ran clean on 3 queries: 2 correctly matched and cited the right source doc; the 3rd (off-topic "capital of France") correctly refused at score 0.00 — the refusal path (A8) is now a real, tested behaviour, not just a described concept.
- Falls back to a template answer if no `ANTHROPIC_API_KEY` is set, or calls Claude Haiku 4.5 for real generation if one is.
**`learning/agentic_workflow_demo.py` — hand-built CI-failure-triage agent, feeds A21 / Track D:**
- Implements the exact candidate use case queued since S13: observe (read a CI log) → plan (classify the failure against known patterns) → act (produce a suggested fix) → reflect (plain-English summary).
- Deliberate governance boundary carried over from the real settlement-anomaly example (§10 Q3/Q4): the agent **suggests, never auto-applies** — no PR, no commit, no auto-fix. Logged explicitly as an A24 design decision, not an oversight.
- Ran clean on 3 mock CI runs (missing compliance file, dependency conflict, flaky test) — each correctly classified, each produced a scoped suggestion, none auto-applied.
**Status change:** A21 moves from "🟡 QUEUED FOR S14 (design only)" to **🟡 SEEDED — built and running, not yet explained back solo.** Same distinction the log already uses for B19/B26 in S13: code existing and running is not the same as being able to explain it back without the file open. That explain-back pass is today's live session, not this prep step.
**Also touched, same caveat (seeded, not yet explained back):** A8 (refusal threshold) — now has a real, testable number instead of an abstract description. A13 (lexical vs vector scoring) — retrieval quality visibly changed once stopwords were filtered out, a genuinely useful failure-and-fix to explain back live.
**Do NOT claim before Session 14 spot-checks:** that A21, A8, or A13 are "owned" — per the log's own Bronze/Silver/Gold rule, that requires explaining them back solo, not just having working code.
### Session 14 (live) — vector_demo.py fixed & extended, A10 landed clean, A11 mechanism worked out solo, rag_demo.py built & verified 🟢
**Start 11:46 BST, close 17:12 BST — elapsed span 5h 26m, includes an unlogged lunch break, so active time is meaningfully less than the elapsed span. Logged honestly rather than guessed precisely.**
**Environment friction (real, worth naming):** most of the session's early hours went into Codespaces/clipboard friction, not concept work — a duplicated `ITEMS = {` line, a mis-indented `return`, filename typos (`rag.demo.py`, `python3learning/...`), and a browser clipboard-permission block. None of this was a learning failure; it was tooling friction. Once `vector_demo.py` was actually fixed and rerun, real concept work followed.
**`vector_demo.py` — fixed and extended, ran clean:**
- Added `iPhone 15` / `Pixel 8` entries to `ITEMS`.
- Fixed 3 real bugs by reading actual Python tracebacks rather than guessing: a duplicated `ITEMS = {` line (SyntaxError), a missing `return` statement with no main block (script did nothing silently), and a mis-indented `return` sitting outside the method (`'return' outside function`).
- Final run was clean and correct — e.g. `"budget phone"` query returned `Pixel 8` (0.632) > `iPhone 15` (0.316) > `Porsche 911` (0.000), matching expected word-overlap behaviour exactly.
**A10 Embedding — 🥉 Bronze OWNED, re-landed clean.** After two earlier attempts drifted (blending into "vector database," and a wrong detour into alphabet-letter positions), landed solo and correct: *"An embedding takes a piece of text and turns it into a list of numbers, by counting how many times each word in a fixed vocabulary appears in that text."* No database-blending this time — the exact drift that flagged it stale in S13 did not recur once corrected.
**A11 Vector database / retrieval — mechanism demonstrated solo, synthesis not yet clean.** Correctly performed the actual word-overlap count without help (`Pixel 8` = 2 matches, `iPhone 15` = 1 match, `Porsche 911` = 0 matches) and correctly reasoned out *why* Porsche appeared in a phone-query result (the algorithm has no concept of "phone" as a category — it's pure number-matching across every stored item, not a filtered category search). Attempting to compress this into one clean synthesis sentence regressed under load — same documented pattern as S10's "under-load regression = stop signal." **Stayed 🟠 STALE for the one-sentence-synthesis bar specifically, but the underlying mechanism is now demonstrably understood, not stale.** Redo the one-sentence version fresh next session, not tired.
**`rag_demo.py` — did not exist in the actual GitHub repo (only ever downloaded, never pushed) — created directly in the Codespace, ran clean on first try.** Full pipeline verified end-to-end: 2 queries correctly retrieved and cited the right compliance doc; 1 off-topic query (`"What is the capital of France?"`) correctly refused, scoring 0.00 against every source with zero shared vocabulary.
**A8 Refusal threshold — 🥉 Bronze OWNED, explained back solo using real output.** Correctly reasoned: the France query shares zero words with any source doc, so every chunk scored 0.00 cosine similarity, which sits below the 0.12 refusal threshold — so `generate()` returns "not confident enough" instead of guessing. First time this concept moved from "seeded" to actually explained back without the file open.
**A13 (lexical vs vector scoring) — still 🟡 SEEDED,** not directly explained back today; carries to next session.
**A21 (Agentic AI) / `agentic_workflow_demo.py` — untouched today,** still 🟡 SEEDED from the pre-session build. Carries to next session.
**Reflection, logged honestly:** the session felt slow and low-yield in the moment, particularly through the environment-friction hours. In review, the actual concept ledger for the day is real: A10 fully re-landed after being stale since S13, A8 moved from seeded to explained, and two working artifacts now exist in the repo that didn't this morning. The gap between "felt like nothing landed" and "two concepts actually moved" is itself worth noting for future sessions — environment friction reads as unproductive in the moment even when the concept work later in the session is solid.
### Session 15 — Foundever JD reviewed, vector-DB marketplace covered, real vector pipeline shipped to CI, A11 hit a new failure mode 🟡
**JD review:** New target role reviewed — "AI Product Manager – Agentic Platform" (Foundever, Req #414376). Confirms existing strengths (backlog ownership, agile ceremonies, stakeholder work) but surfaces two concrete new gaps: hands-on orchestration tooling named explicitly (n8n, Langflow — sits under D8) and event-driven architecture (net-new, no concept ref yet). Conversational AI/chatbot production experience flagged partial — `rag_demo.py` is architecturally close but not a turn-taking conversational interface.
**Vector-DB marketplace, broadening A12:** Covered Pinecone vs Weaviate, Chroma, Qdrant, Deep Lake at Bronze — managed vs open-source vs dataset-centric framing. Banked line: *"Pinecone trades control for convenience — fully managed. Weaviate, Qdrant, and Chroma are open-source, so you run them yourself and get more control over cost and filtering; Deep Lake is the odd one out — built for multi-modal ML datasets, not just text retrieval."*
**A11 one-sentence synthesis — new failure mode, more resistant than prior drifts.** Queued first per the S14 opener. Instead of the expected under-load regression, a new drift appeared: **embedding recast as turning *images* into numbers, not text** — happened three times in one session, including once immediately after being corrected, and once more with the actual code (`build_index()`/`query()` in `vector_pipeline_real.py`) open and labelled line-by-line. Also drifted on cosine similarity ("matching a dataset" instead of comparing two vectors) and on sequencing (had the vector DB doing the embedding, not just storing/searching). **This is a distinct third failure mode for A10/A11 — not S13's DB-blending or S14's alphabet-letter detour — and it's the first one to survive a code-grounded scaffold.** Per the log's own rule, stopped honestly rather than pushing through tired. Carries to Session 16, with a changed approach (see §6).
**Pivot to build-mode (same pattern as S13/S14) — real vector pipeline shipped to CI, in the actual repo:**
- Built `learning/vector_pipeline_real.py` — the "graduation" version of `vector_demo.py`: real TF-IDF embeddings (scikit-learn) instead of hand-rolled word counts, real chromadb vector database configured for cosine distance instead of a hand-written comparison loop. Same ITEMS as `vector_demo.py` so before/after is directly comparable.
- Built `learning/test_retrieval.py` — 4 pytest regression tests asserting retrieval quality (e.g. "budget phone" must rank `budget_phone_x` first) instead of eyeballing it.
- Built `.github/workflows/vector-check.yml` — runs the tests on every push to those two files. The concrete Track A + Track B overlap the three-track architecture has been aiming at since S07.
- **GitHub-UI nesting bug recurred (same family as S13):** creating the workflow file while browsing inside `learning/` nested it at `learning/github/workflows/vector-check.yml` instead of repo-root `.github/workflows/`. Fixed by deleting and recreating from the root breadcrumb — the S13 fix, re-applied, because the habit isn't automatic yet.
- **New typo variant of the S13 lesson:** saved as `vector-check.ym` (missing the `l`), same family as `consumer-duty.m` — caught by inspecting the file list, fixed via rename.
- **Verified green in the real repo:** "Vector Retrieval Check" now a recognised workflow in the Actions tab; triggered by editing `vector_pipeline_real.py` — run #1 passed in 43s, all 4 tests green. Track A and Track B now proven together as one artifact.
**Demo prep started:** drafted a run-order script (`vector_demo.py` → `vector_pipeline_real.py` → `test_retrieval.py` → green Actions run), each step tied to a term. Not yet safe to use live — the A11 drift above is exactly the part that needs to hold first.
**Stopped honestly — tired.** Start time not captured live today — log it properly at the top of Session 16.
### Session 16 — ADCB Global Product Owner JD reviewed, live interview-prep sprint opened, A8 re-verified against real repo output, A23 introduced 🟡
**Start time not captured live — same gap as S15. Log this properly at the top of Session 17.**
**New target JD reviewed — ADCB Global Product Owner, Generative AI (Unstructured Data), fixed-term 3 years.** Closest match yet to the actual curriculum build — bank-of-sandhu's UK/UAE compliance docs (`fca.md`, `cbuae.md`, `aaoifi.md`, `gdpr-ukdpa.md`, `uae-pdpl.md`, `consumer-duty.md`) wired into a real CI job (B26) and into `rag_demo.py`'s citation/refusal logic (A9, A8) are directly the shape this JD wants. Full gap analysis added as **§12**. Four net-new concept refs proposed: **A34 GraphRAG, A35 permission-aware retrieval / RAG access control, A36 RLHF, A37 prompt injection** — all 🔴, none started.
**Deviation from the planned Session 16 script (banked honestly):** the queued plan from §6 (A10/A11 written-not-spoken redo, A13, B19/B26, A21, A12 Pinecone) did **not** run today — the ADCB JD landing prompted a pivot into interview-prep instead, since a real interview is scheduled for tomorrow. That original plan is untouched and now carries forward as **Session 17's** plan (see §6). Same kind of honest scope-deviation the log has recorded before (S13's pivot to build-mode) — a real priority call given a real deadline, not a discipline failure.
**Live interview-prep sprint — "5 hours, bite-sized" plan from §12, Hours 1–2 run today:**
- **Hour 1 — Evals/RAGAS (A23), retrieval vs generation quality.** Taught fresh: retrieval quality (precision/recall of what got fetched) vs generation quality (faithfulness/groundedness — does the answer stick to the retrieved chunks). Retrieval/generation split landed correctly on the first attempt, with one tighten needed — retrieval isn't "request vs relevant," it's precision *and* recall as two separate questions. Where the 0.12 refusal threshold fits (a retrieval-quality check used as a guardrail on generation) was **explained by the tutor, not derived solo** — so A23 lands at 🟡 SEEDED, not Bronze owned. Solo explain-back still owed.
- **Live verification — `rag_demo.py` run for real, twice.** First in a sandboxed shell against the actual file pulled from `github.com/samsandhuss/bank-of-sandhu`, then again live in the real Codespace ("automatic chainsaw"), confirmed via screenshot. Both runs matched: ICO query → 0.54, `gdpr-ukdpa.md` cited correctly; Consumer Duty query → 0.41, `consumer-duty.md` cited correctly; France query → 0.00 across every chunk, refused at the 0.12 threshold.
- **New drift caught and corrected live:** the France-refusal explanation was first given using **the wrong demo's data** (iPhone/Pixel/Porsche from `vector_demo.py`, which isn't even in this file) plus anthropomorphised language ("the database knows not to give incorrect information," "FCA has UAE and Europe intel"). Corrected back to the real mechanism — zero shared vocabulary between the query and `fca.md`/`gdpr-ukdpa.md`/`consumer-duty.md`, hence 0.00 cosine similarity, hence refusal. **New failure-mode note for the watch list: cross-demo blending under real-code pressure** — confusing which script/dataset is actually in front of you. Related to, but distinct from, S13's DB-blending and S15's images drift. Final restatement landed correctly with real numbers, though still slightly loose ("no capital of France information" reads as knowledge-lookup framing rather than word-overlap framing) — tighten again next time it comes up.
- **Hour 2 — Governance narrative reframe.** Not new concept teaching — reframed B26 (compliance-as-code) from "a CI check" to "a governance control," and chained it with the refusal threshold (A8) and the real settlement-anomaly scoping decision (§10 Q3/Q4) into one three-system sentence: *"Across all three, I built a boundary that stops the system from acting past a point it can't be trusted: RAG refuses to answer once similarity drops too low, the CI pipeline refuses to pass once a required regulatory file disappears, and the anomaly detector refuses to auto-resolve because settlement data needs a human to verify it first."* Landed in pieces across three attempts — the B26 piece solo and correct, the connecting synthesis needed a scaffold, the third system needed a prompt to include. **Scaffolded, not cold-solo** — logged honestly as practiced-with-help, not independently owned yet. Still a real, usable interview line.
- **Hour 3 — GraphRAG, RLHF, prompt injection one-liners.** Definitions given, first restatement not attempted — **stopped honestly, tired**, same stop signal the log has used consistently since S06. Carries to Session 17 or a pre-interview warm-up.
- **Hours 4–5 (LangChain/Azure OpenAI/Pinecone familiarity; full rehearsal) — not reached today.**
**Explicit ask banked here so it isn't lost: tomorrow's interview should lean on bank-of-sandhu's real vector database work (`vector_demo.py`, `vector_pipeline_real.py`) and the RAG pipeline (`rag_demo.py`) as the core worked examples** — these are the artefacts with real, screenshot-verified output behind them, which is a stronger interview position than anything still at 🔴/🟡. See the Interview-day quick reference in §6.
### Session 17 — Two-month gap; immersive refresher lap through own code; A10/A11 docstrings written and pushed; four pipelines green from one commit 🟢
**Start 14:43, end 16:24 (~1h 41m). Start time captured live at open — first time since S14.**
**Context:** first session in ~7 weeks (last was S16, 2026-08-17). Felt rusty, so the session was redesigned as a refresher lap through the real repo code rather than the planned S17 script — re-learning from my own artefacts, not from memory. Interview-day branch skipped (no interview pending).
**Stop 1 — RAG end to end, re-verified live.** Ran `python learning/rag_demo.py` in the Codespace: ICO 0.54 (cited `gdpr-ukdpa.md`), Consumer Duty 0.41, France 0.00 → refused at 0.12. Restaurant analogy came back unprompted. Two tightens: chunking is *cutting docs into small citeable pieces* (not "categories"), and the waiter brings the order in — *retrieve* is the runner checking every portion against the ticket. Refusal reasoning landed with one refinement: Consumer Duty is about avoiding foreseeable harm, not "only doing what the law allows". A4–A9 refreshed.
**Stop 2 — A13 landed via a real flaw in my own output.** In the Consumer Duty query the system answered with the 0.41 chunk ("deliver good outcomes…") instead of the 0.18 chunk that actually holds the answer ("Price and value must be regularly assessed"). Worked it on paper: after stopwords, the 0.41 chunk shares 3 exact words (consumer, duty, firms); the real answer shares 1 (regularly) — `assess` ≠ `assessed`, `require` ≠ `requires`. Needed a multiple-choice prompt to land the one-liner (picked B unaided): *"keyword matching only matches exact spellings, so it ranked the chunk repeating the topic words above the chunk holding the answer."* A13 → Bronze (with prompt).
**Stop 3 — A10/A11 written-not-spoken redo (the S16 plan, finally run).** Opened `vector_pipeline_real.py` (after first landing on `vector_demo.py` — the S16 "check which file is open" habit flagged it). Identified line 37 (`fit_transform` — text → numbers) and `collection.add(...)` (store in chromadb) in real code. Wrote docstrings as fill-in-the-blanks with a word bank:
- `build_index()`: *"Turns each description into a list of numbers using vectorizer, and stores them into chromadb."*
- `query()`: *"Turns the question into numbers using the same vectorizer, then asks chromadb for the 3 closest items."*
**The images drift appeared twice on paper** (first pass "each images… stores them into vectorizer"; second pass "a list of images") — caught both times by writing rather than speaking, which is exactly what the changed method was for. Broken by showing the real TF-IDF output for the Porsche description (`911→0.24, car→0.24, door→0.24… [0.24, 0.0, 0.17, …]`). One further slip ("a list of Excel") came from a tutor analogy (spreadsheet row) — the analogy, not the concept, misled. Also confused description vs question for `query()` once; fixed via the `def query(…, question, …)` signature. **Written version now correct, but with word bank + prompts — not yet solo.**
**Real-world fixes, done hands-on:**
- `learningr/` path typo → "No such file", self-corrected on the next line.
- `ModuleNotFoundError: chromadb` — Codespace libraries wiped after two months idle. Fixed with `pip install chromadb scikit-learn pytest` — the same line `vector-check.yml` runs on every CI build (manual vs automated restock).
- Pipeline re-run: budget phone → budget_phone_x 0.339; fast sports car → porsche_911 0.331; family commuting → toyota_corolla 0.397. All correct; 0.000 scores where no words overlap.
- Commit `cba0fcd` ("Add docstrings to build_index and query (S17)"). Push failed: Git LFS lock-verify not supported by remote → fixed with `git config lfs.<repo-url>/info/lfs.locksverify false`, then pushed.
- Nearly let Copilot Chat run `npm run dev` from a "run" prompt — skipped. Lesson: run demos from the terminal, not the chat panel.
**Stop 4 (preview only) — four pipelines green from one push:** Vector Retrieval Check #2 (49s), CI #69 (48s), Code Scanning #79 (1m 6s), pages build and deployment #71 (1m 7s). Walked through `vector-check.yml` line by line (trigger paths → fresh Ubuntu → Python 3.10 → pip install → pytest). What the 4 tests actually assert is still owed.
**Mood note:** session opened feeling "quite stupid" after the gap — ended with working code, a real flaw diagnosed, and a green pipeline. The rust was surface-level; the mechanisms came back fast once anchored in real output.
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
| A5 | Retrieve | 🥉 OWNED ✅ OFF WATCH (held 3/3 — S12) | Retrieve is *fetching/gathering/pulling* from the knowledge base, matched to the original request. Lead with the action verb; matching is the filter, not the action. | 2026-06-19 (S12, hold 3/3 — permanent) |
| A6 | Augment | 🥉 OWNED | Combines retrieved chunks + the user's original question into one package, assembled together before the model generates. Not the fetching (Retrieve); not the cooking (Generate). | 2026-06-19 (S12 held) |
| A7 | Generate | 🥉 OWNED | Chef cooks only from handed cards. Refuses if missing. Labels each fact = citations. | 2026-06-02 (S10 held) |
| A9 | Source attribution / citation | 🥉 OWNED | Labelling each ingredient with which box it came from. Auditability. | 2026-05-22 |
| A10 | Embedding | 🟡 RECOVERING (S17 — written version correct with word bank; images drift recurred twice on paper and was caught both times) | *"An embedding turns a piece of text into a list of numbers"* — anchored S17 in real TF-IDF output for the Porsche description (`911→0.24, car→0.24…`). Memory hook: *a row of numbers for a piece of text — no pixels.* Now committed as the `build_index()` docstring. Solo write from a blank line still owed. | 2026-10-07 (S17 — recovering) |
| A11 | Vector database | 🟡 RECOVERING (S17 — located embed + store + query lines in real code; docstring written with prompts) | Stores the number lists (chromadb `collection.add`) and returns the ones closest to the question's numbers (`collection.query`, cosine). S17 slips: "stores into vectorizer" (mixed up the maker vs the store) and description vs question for `query()` — both fixed against the code. Solo write still owed. | 2026-10-07 (S17 — recovering) |
| A28 | A/B testing for AI products | 🥉 OWNED | Two versions, real users, measure which actually works — not which looks better in testing. Changes that seem like improvements in the lab can behave differently once real users and the model are involved. | 2026-06-19 (S12 Bronze) |
| A1 | LLM | 🟡 PARTIAL | Model trained on huge text → generates human-like answers. Can hallucinate on its own. | — |
| A8 | Refusal / guardrail threshold | 🥉 OWNED — re-verified S16 against real, live `rag_demo.py` output (both a sandbox run and a real Codespace run), after correcting a same-session drift where the explanation borrowed `vector_demo.py`'s data and anthropomorphised the mechanism ("knows," "intel"). Correct explanation: the France query shares zero words with `fca.md`/`gdpr-ukdpa.md`/`consumer-duty.md`, so every chunk scores 0.00, below the 0.12 threshold, so `generate()` refuses instead of guessing. | Explained back solo using real output, with one correction round needed today. | 2026-08-17 (S16 — re-verified, drift corrected) |
| A13 | Lexical vs vector scoring | 🥉 OWNED (S17 — with a multiple-choice prompt) | Keyword matching only matches exact spellings. Proven on my own output: Consumer Duty query ranked the 0.41 "good outcomes" chunk above the 0.18 chunk that held the answer, because `assess` ≠ `assessed`. Production fix = semantic (neural) embeddings; TF-IDF is weighted but still word-based. Restate cold next time without options. | 2026-10-07 (S17) |
| A14 | Context window | 🟡 PARTIAL | Why chef can't hold the whole fridge. Model's text-at-once limit. | — |
| A12 | Pinecone | 🔴 NOT STARTED — marketplace context covered S15 (Weaviate/Chroma/Qdrant/Deep Lake vs Pinecone), Pinecone's own one-liner still owed | — | 2026-08-07 (S15 — context only) |
| A15 | Prompt / system prompt | 🔴 NOT STARTED | — | — |
| A16 | Few-shot / zero-shot | 🔴 NOT STARTED | — | — |
| A17 | Fine-tuning vs RAG | 🔴 NOT STARTED | — | — |
| A18 | LangChain | 🔴 NOT STARTED | — | — |
| A19 | LlamaIndex | 🔴 NOT STARTED | — | — |
| A20 | Azure OpenAI | 🔴 NOT STARTED | — | — |
| A21 | Agentic AI | 🟡 SEEDED — built, not yet explained back solo | The candidate use case is now real, running code: `learning/agentic_workflow_demo.py` — an agent that reads a CI run log, classifies the failure, suggests a fix, and reflects in plain English, without auto-applying anything. Mirrors the manual diagnosis done in S13. Explain-back pass still owed — untouched in S15 and S16. | 2026-08-03 (pre-S14 build) |
| A22 | MCP | 🔴 NOT STARTED | — | — |
| A23 | Evals / RAGAS | 🟡 SEEDED — introduced S16 | Retrieval quality (precision/recall of what got fetched) vs generation quality (faithfulness/groundedness — does the answer stick to what was retrieved). Anchored in `rag_demo.py`'s 0.12 refusal threshold as a primitive retrieval-quality gate. Retrieval/generation split restated solo and correct; the threshold-to-eval-category mapping was still tutor-explained, not derived solo — so Bronze not yet claimed. | 2026-08-17 (S16 — seeded) |
| A24 | Governance / responsible AI | 🔴 NOT STARTED as a formal concept, but reused practically S16 via the settlement-anomaly example (§10 Q3/Q4) inside the governance-narrative synthesis exercise | Not yet taught as its own concept. | 2026-08-17 (S16 — reused practically) |
| A25 | Tokens / tokenisation | 🔴 NOT STARTED | — | — |
| A26 | Temperature / top-p | 🔴 NOT STARTED | — | — |
| A27 | Streaming vs batch | 🔴 NOT STARTED | — | — |
| A29 | KPI / measurement frameworks for AI products | 🔴 NOT STARTED | Defining what good looks like for a data/AI product. | — |
| A30 | UI/UX for data-rich interfaces | 🔴 NOT STARTED | Designing dashboards / decision-support tools end users can actually use. | — |
| A31 | Managed cloud AI services | 🔴 NOT STARTED | Hosted model APIs and managed RAG patterns from major providers. | — |
| A32 | Agent orchestration tooling (n8n, Langflow) | 🔴 NOT STARTED — flagged by Foundever JD (S15) | Hands-on workflow/automation tooling, distinct from D8's conceptual orchestration frameworks — this is the named-tool version. | 2026-08-07 (S15 — flagged, not curriculum yet) |
| A33 | Event-driven architecture | 🔴 NOT STARTED — flagged by Foundever JD (S15) | — | 2026-08-07 (S15 — flagged, not curriculum yet) |
| A34 | GraphRAG | 🔴 NOT STARTED — flagged by ADCB JD (S16), introduced but not restated | Retrieval over a knowledge graph (entities + relationships) instead of flat chunk similarity — answers questions that need connected facts, not just the closest single passage. | 2026-08-17 (S16 — introduced, not landed) |
| A35 | Permission-aware retrieval / RAG access control | 🔴 NOT STARTED — flagged by ADCB JD (S16) | Retrieval that respects who's asking — a user should never get chunks back that their access level doesn't permit, even if those chunks score highest on similarity. | 2026-08-17 (S16 — flagged, not curriculum yet) |
| A36 | RLHF (Reinforcement Learning from Human Feedback) | 🔴 NOT STARTED — flagged by ADCB JD (S16), introduced but not restated | A training step where human preference judgments (not just next-token prediction) shape model behaviour — why a model can be technically accurate but still tuned to be "helpful" a specific way. | 2026-08-17 (S16 — introduced, not landed) |
| A37 | Prompt injection | 🔴 NOT STARTED — flagged by ADCB JD (S16), introduced but not restated | An adversarial input trying to override the system prompt or guardrails from inside user-supplied content — distinct from hallucination (model error) or jailbreaking (related risk, different framing). | 2026-08-17 (S16 — introduced, not landed) |
---
### 4B — CI/CD daily-work stack
| # | Concept | Status | Plain-English (bronze) | Last check |
|---|---|---|---|---|
| B13 | Cloud vs on-prem split | 🥉🥈 OWNED | Hybrid — on-prem for regulated workloads, public cloud for flexibility to scale and experiment. Sensitivity decides which side a workload sits on. | 2026-07-31 (S13 held) |
| B8 | GitHub Actions (GHA) reaching on-prem | 🥉🥈🥇 OWNED | A self-hosted runner (the bank's own machine, inside the bank's network) polls GitHub outbound for work; the firewall allows no inbound; perimeter unchanged so audit is comfortable. Gold landed S11 — gap, fix, why-it-wins clean. | 2026-06-19 (S11, Gold) |
| B1 | CI | 🟡 PARTIAL | Every code change auto-built and tested before merge. Watched this happen for real in S13 (bank-of-sandhu's own pipeline), and again in S15 (Vector Retrieval Check). Not yet explained back in own words. | 2026-08-07 (S15 — observed live again) |
| B19 | Snyk | 🟡 PARTIAL | Vulnerability scanning — finds known security holes in dependencies. Seen live in bank-of-sandhu's actual `ci.yml` (S13) — runs as a `security` job with `continue-on-error: true` (demo-only; production would hard-fail above HIGH severity). Not yet explained back in own words. | 2026-07-31 (S13 — seen in real code) |
| B26 | Compliance as code | 🟡 PARTIAL — reframed S16 as a governance control, not just a CI mechanic, inside the interview-narrative synthesis; still not independently explained back in own words outside that scaffolded exercise | A config/doc check baked into CI — if a required regulatory file is deleted, the pipeline fails. Seen live in bank-of-sandhu's `compliance-docs` job (S13): checks `docs/compliance/` for required regime docs (FCA, CBUAE, AAOIFI, GDPR/UK-DPA, UAE-PDPL, Consumer Duty). Reframe banked S16: "makes the regulatory source-of-truth impossible to silently break." | 2026-08-17 (S16 — reframed, still not solo) |
| B2 | CD | 🟡 PARTIAL | Every change that passes CI goes to staging/prod. Delivery=ready. Deployment=actually deployed. | — |
| B3 | Pipeline | 🟡 PARTIAL | End-to-end conveyor from `git push` to running in prod. | — |
| B14 | Jenkins / CloudBees Jenkins | 🟡 PARTIAL | Classic CI/CD server. Many orgs migrating off it to GHA. | — |
| B15 | Buildkite | 🟡 PARTIAL | A CI/CD platform. | — |
| B16 | Azure DevOps | 🟡 PARTIAL | Microsoft's CI/CD + project management platform. | — |
| B17 | Harness | 🟡 PARTIAL | A CD-focused platform. | — |
| B24 | Secret management | 🟡 PARTIAL | API keys in env vars on host, never in code. Rotate if exposed. | — |
| B4 | Build | 🔴 NOT STARTED | Source → runnable artefact (JAR / Docker image / bundled JS). | — |
| B5 | Artefact | 🔴 NOT STARTED | Output of a build. The thing you deploy. | — |
| B6 | Test stages | 🔴 NOT STARTED | Unit → integration → E2E. `test_retrieval.py` (S15) is a real unit-test example, not yet mapped back to this concept explicitly. | 2026-08-07 (S15 — real example exists, not yet linked) |
| B7 | Branch protection | 🔴 NOT STARTED | Rules on what's allowed into main. | — |
| B9 | GHA self-hosted runner | 🔴 NOT STARTED | M1 Station 3. | — |
| B10 | Firewall change request process | 🔴 NOT STARTED | M1 Station 4. | — |
| B11 | Containerised app testing in CI | 🔴 NOT STARTED | M1 Station 5. | — |
| B12 | Headless browser testing in CI | 🔴 NOT STARTED | M1 Station 6. | — |
| B18 | SonarQube | 🔴 NOT STARTED | Static code analysis — finds bugs and code smells pre-merge. | — |
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
### 4D — Agentic infrastructure & control-plane concepts (added for the target-role Track D — see §11)
Source JD asks for: agentic control planes, identity/access control, sandboxing, network/connectivity architecture, MCP/A2A protocols, distributed systems, API Gateways, Kubernetes, cloud-native architecture, enterprise security architecture. Mapped to new concept refs below — all 🔴 until M7 starts.
| # | Concept | Status | Plain-English (bronze — to fill in as taught) | Last check |
|---|---|---|---|---|
| D1 | Agentic control plane vs data plane | 🔴 NOT STARTED | Control plane = the system that decides *what agents are allowed to do and with what identity*; data plane = the actual task/tool execution. Same split as Kubernetes control plane (API server, scheduler) vs worker nodes. | — |
| D2 | Agent identity (workload identity) | 🔴 NOT STARTED | An agent needs its own identity, distinct from the human who launched it — so access can be scoped, audited, and revoked per-agent. | — |
| D3 | Agent authN/authZ, scoped tokens | 🔴 NOT STARTED | Agents should hold short-lived, narrowly-scoped credentials for exactly the tools/data they need — not a human's full permission set. | — |
| D4 | Sandboxing agent code execution | 🔴 NOT STARTED | Untrusted or generated code an agent runs needs isolation (e.g. microVM or container boundary) so a bad tool call can't touch the host system. | — |
| D5 | Agent network & connectivity architecture | 🔴 NOT STARTED | Controlling what an agent can reach over the network — egress allow-lists, service mesh routing — so an agent can't call arbitrary endpoints. | — |
| D6 | MCP (Model Context Protocol) | 🔴 NOT STARTED | Cross-ref A22. A standard interface for connecting an agent to external tools/data sources, instead of every integration being bespoke. | — |
| D7 | A2A (Agent2Agent protocol) | 🔴 NOT STARTED | A standard for agents to discover and communicate with *other* agents (not just tools) across systems/vendors. | — |
| D8 | Agent orchestration frameworks | 🔴 NOT STARTED | Frameworks (e.g. LangGraph, AutoGen) that coordinate multi-step or multi-agent workflows — sequencing, state, handoffs. Cross-ref A32 (n8n/Langflow) for the hands-on-tool version, flagged S15. | 2026-08-07 (S15 — related gap flagged via A32) |
| D9 | API Gateway | 🔴 NOT STARTED | A single managed entry point for API traffic — auth, rate limiting, routing — sitting in front of backend services. | — |
| D10 | Kubernetes fundamentals | 🔴 NOT STARTED | Container orchestration — pods (running containers), services (stable networking), namespaces (isolation), ingress (external entry). | — |
| D11 | Service-to-service communication | 🔴 NOT STARTED | How internal services talk to each other securely — mTLS, service mesh (Istio/Linkerd) — vs how external clients talk to the API Gateway. | — |
| D12 | Distributed systems fundamentals | 🔴 NOT STARTED | CAP theorem, idempotency, eventual vs strong consistency — the trade-offs any multi-node platform has to make. | — |
| D13 | Cloud-native architecture patterns | 🔴 NOT STARTED | Microservices, 12-factor app principles, stateless services designed to scale horizontally. | — |
| D14 | Enterprise security architecture | 🔴 NOT STARTED | Zero trust, least privilege, defence in depth — applied to a platform where the "user" is sometimes an autonomous agent. | — |
| D15 | Agent lifecycle management | 🔴 NOT STARTED | Versioning, deploying, rolling back, and deprecating agents in production the same way you would a service. | — |
| D16 | Multi-tenancy & isolation for agent platforms | 🔴 NOT STARTED | Making sure one team's/customer's agents can't see or affect another's, on shared infrastructure. | — |
| D17 | Observability for agentic systems | 🔴 NOT STARTED | Tracing an agent's reasoning steps and tool calls end-to-end, not just logging the final output — needed to debug and audit agent decisions. | — |
| D18 | Platform vision-setting for infra PM | 🔴 NOT STARTED | Translating an emerging open standard (e.g. MCP) into a production-grade, enterprise capability roadmap — the specific "define and drive the vision" skill the JD leads with. | — |
| D19 | Event-driven architecture | 🔴 NOT STARTED — flagged by Foundever JD (S15) | Cross-ref A33. Systems that react to events (messages, triggers) rather than polling or direct calls — pub/sub, message queues, event buses. | 2026-08-07 (S15 — flagged, not curriculum yet) |
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
| 2026-05-22 | A5 Retrieve | S07 recap — drifted a 3rd time to "checked" | Redone with verb lock. ON WATCH. | 🥉 |
| 2026-05-22 | B13 Cloud vs on-prem | S07 recap — held, "historic records" flag | Promoted to Silver. | 🥉🥈 |
| 2026-05-31 | A5 Retrieve | S08 recap — held ("fetching") | Hold 1 of 3. | 🥉 |
| 2026-05-31 | B13 Cloud vs on-prem | S08 recap — held at Silver | Held. Decider: "sensitivity decides." | 🥉🥈 |
| 2026-05-31 | B8 GHA reaching on-prem | S08 — Bronze owned solo; Silver Problem + Fix scaffolded | Bronze owned, Silver underway. | 🥉 |
| 2026-05-31 | A5 Retrieve | S09 recap — drifted (led with "matching") | Streak reset to 0. | 🥉 |
| 2026-05-31 | B13 Cloud vs on-prem | S09 recap — held; framing flag coached | Held. | 🥉🥈 |
| 2026-05-31 | B8 Fix | S09 — restated solo, clean | Owned solo. | 🥈 |
| 2026-05-31 | B8 Why-it-wins | S09 — held after teach | **Silver complete.** | 🥈 |
| 2026-05-31 | B8 Gold | S09 — attempted, regressed under load | Banked. Gold → S10. | 🥈 |
| 2026-06-02 | A5 Retrieve | S10 — held ("gather and fetch") | Hold 1 of 3. | 🥉 |
| 2026-06-02 | A6 Augment | S10 — boundary clean both sides | Held. | 🥉 |
| 2026-06-02 | A7 Generate | S10 — bonus, unprompted | Held. | 🥉 |
| 2026-06-02 | B8 Gold | S10 — flip broke; degraded under load on poll target. Stopped honestly. | Gold → S11. | 🥈 |
| 2026-06-19 | A5 Retrieve | S11 — held ("gathering and fetching from a knowledge base") | Hold 2 of 3. | 🥉 |
| 2026-06-19 | B13 Cloud vs on-prem | S11 — held at Silver; generic framing correct | Held. | 🥉🥈 |
| 2026-06-19 | B8 Gold | S11 — three beats clean; migration setting used | **Gold owned. 🥇** | 🥇 |
| 2026-06-19 | A10 Embedding | S11 — taught fresh; numbers not words; computer + laptop | Bronze owned. | 🥉 |
| 2026-06-19 | A11 Vector database | S11 — taught fresh; stores, searches fast, closest match | Bronze owned. | 🥉 |
| 2026-06-19 | A5 Retrieve | S12 — held ("fetch, gather and pull, matched to original request") | **Hold 3 of 3 — OFF WATCH PERMANENTLY. 🎉** | 🥉 |
| 2026-06-19 | A6 Augment | S12 — retrieved chunks + original question combined; boundary clean | Held. | 🥉 |
| 2026-06-19 | A28 A/B testing | S12 — taught fresh; two versions, real users, measure what works; AI-specific insight landed | Bronze owned. | 🥉 |
| 2026-06-19 | A10 Embedding Silver | S12 — embedding model → vector (vectorisation) → stored in vector DB; real terms clean | Silver owned. | 🥉🥈 |
| 2026-06-19 | A11 Vector DB Silver | S12 — question → embedding model → query vector → similarity search → cosine similarity → chunks returned | Silver owned. | 🥉🥈 |
| 2026-07-31 | B13 Cloud vs on-prem | S13 — held; landed as one clean decider sentence, no listing | "Sensitivity decides the split of a workflow — whether it sits on-prem or in the cloud." | 🥉🥈 |
| 2026-07-31 | A11 Vector database | S13 — regressed across 3 attempts; merged back into A10, dropped retrieval mechanism entirely | Flagged stale per under-load regression stop signal, not pushed through tired. | 🟠 |
| 2026-07-31 | A10 Embedding | S13 — same session, same blending pattern | Flagged stale alongside A11. | 🟠 |
| 2026-08-03 | A10 Embedding | S14 live — drifted twice (DB-blending, then alphabet-letter detour), corrected each time, landed solo third attempt | *"Turns text into a list of numbers, by counting how many times each word in a fixed vocabulary appears in that text."* Bronze re-landed clean. | 🥉 |
| 2026-08-03 | A11 mechanism | S14 live — word-overlap count performed solo and correct (Pixel 8=2, iPhone 15=1, Porsche 911=0); one-sentence synthesis regressed under load | Mechanism demonstrated, synthesis still owed — redo fresh next session. | 🟠 |
| 2026-08-03 | A8 Refusal threshold | S14 live — explained back solo using real rag_demo.py output (France query, 0.00 score, below 0.12 threshold) | Bronze owned. | 🥉 |
| 2026-08-07 | A10 Embedding | S15 — drifted to "turning images into numbers," 3x, once with real code open and labelled | Flipped to STALE — new failure mode, survived a code-grounded scaffold. | 🟠 |
| 2026-08-07 | A11 one-sentence synthesis | S15 — same images drift; also mis-defined cosine similarity and mis-sequenced embedding vs storage | Still not landed. Redo Session 17, written not spoken. | 🟠 |
| 2026-08-17 | A23 Evals/RAGAS | S16 — taught fresh; retrieval/generation split restated solo and correct after one tighten; threshold-to-category mapping tutor-explained, not derived | Seeded, not Bronze — solo explain-back still owed. | 🟡 |
| 2026-08-17 | A8 Refusal threshold (re-verify) | S16 — live rerun via real `rag_demo.py` output (sandbox + real Codespace, screenshot-verified); drifted twice (borrowed `vector_demo.py`'s data, anthropomorphised "knows"/"intel" language) before correcting and landing with real numbers | Held after correction — new cross-demo-blending drift flagged for the watch list; phrasing still slightly knowledge-lookup framed rather than word-overlap framed. | 🥉 (held, drift noted) |
| 2026-08-17 | B26 + A8 + settlement-anomaly governance synthesis | S16 — three-system "boundary that stops the system acting past a point it can't be trusted" sentence; B26 piece solo, connecting synthesis and third system needed scaffolding | Practiced with scaffold, not yet cold-solo. Usable interview line regardless. | 🟡 (scaffolded) |
| 2026-10-07 | A4–A9 RAG pipeline + refusal | S17 — after a 7-week gap; live `rag_demo.py` rerun; restaurant analogy recalled unprompted; chunking and retrieve roles tightened | Held. Refusal now framed as avoiding foreseeable harm (Consumer Duty). | 🥉 (held) |
| 2026-10-07 | A13 Lexical vs vector | S17 — diagnosed a real ranking flaw in own output (0.41 vs 0.18, assess/assessed); one-liner needed multiple choice | Bronze owned with prompt. | 🥉 |
| 2026-10-07 | A10/A11 docstrings (written, not spoken) | S17 — images drift twice on paper, "Excel" once (analogy-induced), description/question swap once; all corrected against real code + TF-IDF output | Written version correct and committed (`cba0fcd`) — with word bank. Solo blank-line write owed. | 🟡 |
---
## §6 — NEXT (resume here)
### Session 18 plan
**STEP 0: Log the start time at open.** (Worked in S17 — keep it.)
**STEP 1: A10/A11 blank-line spot check.** Close `vector_pipeline_real.py`. On paper, write both docstrings from memory — no word bank. Then open the file and compare against the committed version (`cba0fcd`). Watch for: images, "stores into vectorizer", description vs question.
**STEP 2: A13 cold one-liner** — no options. Use the Consumer Duty 0.41 vs 0.18 example.
**STEP 3: Stop 4 in depth — `test_retrieval.py`.** Read the 4 tests and explain each in plain English: what it asserts and why that protects retrieval quality. Link to A23 (evals: this is a retrieval-quality regression suite).
**STEP 4: A21 Agentic AI** — `agentic_workflow_demo.py` is NOT in `learning/` (checked S17 — only rag_demo, test_retrieval, vector_demo, vector_pipeline_real). Find it elsewhere in the repo or rebuild it, run it, explain back solo.
**STEP 5: B19 (Snyk) + B26 (compliance as code) explain-back**, pointing at `ci.yml`.
**STEP 6: A12 Pinecone one-liner** to close the vector bundle.
**STEP 7: A23 solo explain-back**, including where the 0.12 threshold sits.
**STEP 8: A34–A37 one-liners** (GraphRAG, permission-aware retrieval, RLHF, prompt injection).
**Method notes from S17 (keep):**
- Rebuild from real output, not memory: run the script first, then explain.
- Written before spoken for anything on the watch list.
- Avoid spreadsheet/Excel analogies for embeddings — use "a row of numbers".
- Run demos from the terminal, never via Copilot Chat.
- One git command at a time; read the result before the next.
- If a Codespace has been idle: `pip install chromadb scikit-learn pytest` first.
**Do NOT this session:** start Track C / M6 or Track D / M7; advance `server/chat.js` Chunks 2–6.
---
### Exact opener line for Session 18
> *Resume Session 18. Read BUILD_LOG.md first — PERMANENT RULE. Log the start time. Spot check first: write the build_index() and query() docstrings from a blank line, no word bank, then compare with commit cba0fcd. Then A13 cold one-liner (Consumer Duty 0.41 vs 0.18). Then Stop 4 in depth: explain each of the 4 tests in test_retrieval.py in plain English and link to A23. Then locate or rebuild agentic_workflow_demo.py and explain A21 back solo. Slow is correct.*
---
### Still open (not lost, not done)
- **A10/A11** — written version correct (S17, with word bank). Solo blank-line write owed; then say it out loud.
- **A13** — Bronze with prompt (S17); cold restate owed.
- **A12 Pinecone** — own one-liner still owed.
- **A21 Agentic AI** — `agentic_workflow_demo.py` not found in `learning/`; locate or rebuild.
- **B19 + B26** — still not explained back cold-solo.
- **A23 Evals/RAGAS** — solo explain-back owed; `test_retrieval.py` is the natural anchor.
- **A34–A37** — introduced S16, none restated solo.
- **Demo run-order script** — not yet rehearsed solo.
- **Target-role gaps** — see §11/§12.
- **A28 Silver**, **Gold-priority pass**, **Silver/Gold uplift** for A3–A7 and B13 — queued.
- **M1 Stations 3–6**, **M5 Chunks 2–6** — queued.
- **Codespaces habits:** type commands fresh; check the file name in the tab before explaining anything; root breadcrumb before "Add file"; double-check extensions; reinstall Python deps after long idle; Git LFS lock-verify is disabled for this repo (S17).
- **Showcase repo** — `ai-learning-toolkit`, run §8 scrub before going public.
---
### Now / Next / Later
**NOW (just done — Session 17):**
- ✅ Refresher lap after a 7-week gap: RAG end to end, A13, A10/A11, CI preview — all on real output.
- ✅ A10/A11 docstrings written and pushed (`cba0fcd`); images drift caught on paper twice.
- ✅ A13 landed via a real ranking flaw in my own `rag_demo.py` output.
- ✅ Fixed missing deps and a Git LFS push block hands-on.
- ✅ Four pipelines green from one push (Vector Retrieval Check, CI, Code Scanning, Pages).
- ✅ Time logged (first time since S14).
**NEXT (Session 18):**
- 🔁 A10/A11 blank-line solo write.
- 🔁 A13 cold one-liner.
- 🆕 Stop 4: the 4 tests in `test_retrieval.py`, linked to A23.
- 🆕 Locate/rebuild `agentic_workflow_demo.py`, explain A21.
- 🔁 B19 + B26 cold explain-back.
- 🚀 A12 Pinecone close-out.
**LATER (queued, in priority order):**
1. **Track D / M7 kickoff — Agentic control planes** — once A21 Bronze lands solo.
2. **Showcase repo** — `ai-learning-toolkit`.
3. **Upgrade retrieval to semantic embeddings** (e.g. sentence-transformers) and re-run the Consumer Duty query — the natural fix for the S17 A13 flaw, and a strong before/after demo.
4. **Track C / M6 start** — once trigger conditions are met.
5. **M1 Stations 3–6**, **M5 Chunks 2–6**.
6. **Silver + Gold uplift** for Bronze concepts.
7. **M2 Code quality gates**, **M3 Artefact management**, **M4 Platform patterns**.
8. **DORA metrics (B25)**.
9. **Governance / evals (A23, A24)**.
10. **A32/A33/D19** (n8n/Langflow, event-driven architecture).
11. **A34–A37** (GraphRAG, permission-aware retrieval, RLHF, prompt injection).
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
**On GHA → on-prem (Session 11 — Gold):**
> *"GitHub's cloud runners can't reach into an on-prem network — the firewall blocks all inbound from the public internet. The fix is a self-hosted runner sitting inside the network that polls GitHub outbound for work — when a job is triggered, the runner picks it up and executes it on-prem. The reason this works well in a regulated environment is that no inbound hole has been cut — the network perimeter is completely unchanged, so security and audit have nothing new to defend."*
**On embeddings (Session 12 — Silver):**
> *"An embedding model converts text into a vector — a long list of numbers that encodes meaning. Similar meanings produce mathematically close vectors, so 'computer' and 'laptop' end up near each other even though the words look nothing alike. Those vectors get stored in a vector database."*
**On vector databases (Session 12 — Silver):**
> *"When a user asks a question, it goes through the embedding model too — producing a query vector. The vector database then runs a similarity search, using cosine similarity to find the stored vectors closest in meaning to the question. Those are the chunks that get retrieved."*
**On A/B testing for AI (Session 12 — Bronze):**
> *"A/B testing for AI is how you find out which version of something actually works in the real world — two prompts, two models, two chunking approaches — split across real users and measured. The key insight with AI is that changes that look like improvements in the lab can behave completely differently once the model and real users are involved."*
**On real CI/CD diagnosis (Session 13 — practical, not rehearsed):**
> *"I found a CI/CD pipeline already sitting in my own repo that had been failing silently — a validation job and a compliance-check job both dying from the same root cause: six required regulatory doc files that had never actually been created. I traced both failures back to that one gap, created the missing files, and watched the pipeline go green. Same loop as production incident triage — read the logs, find the actual root cause, fix the real thing, verify it's green."*
**On vector-DB vendor landscape (Session 15 — Bronze, not yet stress-tested solo):**
> *"Pinecone trades control for convenience — fully managed. Weaviate, Qdrant, and Chroma are open-source, so you run them yourself and get more control over cost and filtering; Deep Lake is the odd one out — built for multi-modal ML datasets, not just text retrieval."*
**On retrieval evals (Session 16 — Seeded, real numbers, not yet stress-tested solo):**
> *"I use a retrieval-confidence gate to prevent ungrounded generation — my RAG pipeline scores every retrieved chunk against the query with cosine similarity, and if the best match falls below a threshold, it refuses to answer instead of guessing. In production terms, that's the retrieval-quality half of an eval framework acting as a runtime guardrail on generation quality."*
**On governance-by-design (Session 16 — scaffolded synthesis, real examples):**
> *"Across the systems I've built, the same instinct shows up repeatedly: a boundary that stops the system acting past a point it can't be trusted. My RAG pipeline refuses to answer once retrieval confidence drops too low. My CI pipeline refuses to pass if a required regulatory document disappears. And in a live settlement-anomaly detector I shaped at a payments fintech, I scoped it to flag and surface anomalies rather than auto-resolve them, because that's financially sensitive data a human needs to verify first. Same governance instinct, three different systems."*
**On keyword vs semantic retrieval (Session 17 — Bronze, real example):**
> *"In my RAG prototype, a Consumer Duty question was answered from the wrong passage. The right passage said 'regularly assessed', the question said 'assess', and keyword matching only counts exact spellings, so a passage that repeated the topic words won. That's exactly why production RAG uses semantic embeddings that match on meaning rather than spelling."*
**On CI/CD from one commit (Session 17 — practical, verified):**
> *"In my prototype, a single commit triggers four pipelines: a retrieval regression test that rebuilds the environment from scratch, a CI build, a CodeQL security scan and a deployment — all green in under two minutes, no human involved."*
---
## §8 — Sanity check (run after every commit)
Before pushing this file to a public branch, run the scrub locally. From the repo root:
```bash
grep -i -n -E "current employer|my employer|my company|my bank|my team lead|my manager|my CTO|whiteshield|quantum|career navigator|adcb|al reem|nationwide|barclays|hsbc|lloyds|natwest|santander|santander uk|monzo|starling|revolut|wise|cursor|uae role|dubai role|abu dhabi role|hiring manager|recruiter|interview|application|job code|JD\b|active target|watching target|bloomberg|foundever|global product owner|unstructured data" BUILD_LEARN_LOG.md
```
If grep returns nothing, the file is safe. If it returns lines, edit those lines out before pushing.
**Recommended habit:** make this a pre-commit hook on the repo so it runs automatically. Example `.git/hooks/pre-commit`:
```bash
#!/usr/bin/env bash
if grep -i -q -E "current employer|whiteshield|quantum|adcb|al reem|nationwide|hiring manager|recruiter|JD\b|active target|watching target|bloomberg|foundever|global product owner|unstructured data" BUILD_LEARN_LOG.md; then
  echo "⛔  Scrub check failed — identifiers found in BUILD_LEARN_LOG.md. Edit before committing."
  grep -i -n -E "current employer|whiteshield|quantum|adcb|al reem|nationwide|hiring manager|recruiter|JD\b|active target|watching target|bloomberg|foundever|global product owner|unstructured data" BUILD_LEARN_LOG.md
  exit 1
fi
echo "✅  Scrub check passed."
```
Make it executable: `chmod +x .git/hooks/pre-commit`.
**This block stays in the file. It's not a one-time check — it's a permanent safety rail.**
**Added S16:** "global product owner" and "unstructured data" added to the pattern list alongside "adcb" — the ADCB role title is specific enough on its own to be identifying even without the company name nearby.
---
## §9 — Time investment log
Tracks actual hours invested in hands-on learning, logged at every session close. Running total starts from Session 13 — Sessions 01–12 weren't timed, so the total below reflects only tracked sessions, not all-time effort.
| Session | Date | Start | End | Duration | Running total (tracked) |
|---|---|---|---|---|---|
| Session 13 | 2026-07-31 | ~16:15 | ~20:00 | 3h 45m | 3h 45m |
| Session 14 | 2026-08-03 | 11:46 | 17:12 | 5h 26m elapsed (includes an unlogged lunch break — active time meaningfully less; logged honestly rather than guessed precisely) | 9h 11m elapsed-tracked |
| Session 15 | 2026-08-07 | Not captured | Not captured | Not logged — start time wasn't noted at open. Log this properly next session. | 9h 11m elapsed-tracked (unchanged — S15 not added, honestly) |
| Session 16 | 2026-08-17 | Not captured | Not captured | Not logged — start time wasn't noted at open, same gap as S15. Log this properly next session. | 9h 11m elapsed-tracked (unchanged — S16 not added, honestly) |
| Session 17 | 2026-10-07 | 14:43 | 16:24 | 1h 41m | 10h 52m elapsed-tracked |
**How this gets logged going forward:**
- At session open, note the wall-clock start time.
- At session close — triggered by an explicit "close session" / "wrap up the log" request — note the end time, compute duration, add a new row, update the running total.
- Short or long sessions are both fine. The point is an honest record of time invested, not hitting a target.
---
## §10 — Real-world examples mapped to concept refs (from job application answers)
These are answers I wrote for a live job application, based on my actual CV. Kept here because they're the clearest test of whether a concept has moved from "explained in an analogy" to "usable in a real, high-stakes sentence." Each one is tagged against the concept refs in §4 so I can see where the curriculum is already ahead of my instinct, and where it still needs to catch up.
**⚠️ Scrub before any public push.** Unlike the rest of this file, these four answers name real employers and real numbers on purpose — that's the point, they're application material, not a sanitised talking point. Run §8 before this file goes anywhere near a public branch; these paragraphs are exactly what that grep is designed to catch.
**Q1 — Most complex B2B product owned → maps to Track B**
Concept refs: B7, B8 (🥇 Gold), B14, B17, B18, B19, B20, B24, B26
> Owned the enterprise CI/CD and developer platform at a UK high-street bank — the internal toolchain hundreds of engineering teams used to build, secure, and ship software (GitHub Actions, GitHub Advanced Security, Copilot, Snyk, SonarQube Enterprise, Artifactory), replacing legacy tooling (TFS, Jenkins, Harness). Owned the backlog end-to-end, drove 90% engineering-wide adoption, cut onboarding from 14 days to days, delivered £4m+ in combined annual savings from decommissioning the legacy stack.
**Why this one matters for the curriculum:** this is the real, full-scale version of what M1–M4 simulate on bank-of-sandhu at toy scale. B8 is the only concept in this answer already owned at Gold — it shows in the fluency: the answer states the outcome (adoption, savings, onboarding time) without needing to explain the mechanics, because Gold means the mechanics are assumed knowledge. B18 (SonarQube), B20 (Artifactory), and B26 (compliance as code) are still 🔴/🟡 in §4 — they appear in this answer only as *nouns in a list*, not as explained mechanisms. That gap is the tell: I can name the tool I decommissioned, but I can't yet walk through *why* SonarQube vs Snyk are different checks the way I can for B8. Good marker for the Gold-priority pass queued in §6.
**Q2 — Most workflow-intensive platform (outside creative/marketing) → outside Track A/B, general PM complexity**
Not concept-mapped to A/B/C refs — this is a stakeholder-complexity example, not a tooling one. Kept as a reminder that not every strong answer needs to trace back to the CI/CD or AI curriculum; some just need clean structure (problem → cross-team complexity → simplification → measurable outcome).
> Re-engineered customer financial-difficulty repayment journeys at a UK bank, coordinating credit risk, policy, operations, engineering, and external debt-management charities on a single regulator-scrutinised workflow. Replaced a 72-question manual script with a real-time API-driven customer snapshot, simplified 30+ repayment options into 12 scalable plans — cut call-handling cost from £18 to £7, delivered £1.2m annual savings, cited by the regulator as industry-leading.
**Q3 & Q4 — AI-powered product shipped / personally built and shaped → maps to Track A**
Concept refs: A21 (🟡 queued for S14), A24, A29 — and directly feeds the Session 14 agentic design task
> Shaped an AI/LLM-based proof-of-concept at a payments fintech for settlement anomaly detection — automatically flagging missing next-day merchant settlements instead of relying on manual reconciliation. Scoped it detect-and-surface rather than auto-resolve (settlement data is financially sensitive; merchants needed to verify and act themselves), grounded detection in each merchant's own historical pattern rather than a fixed threshold to keep false positives low. Reduced settlement-related support contacts as part of a broader AI-enabled self-service push.
**Why this is the most useful example in this section:** it's a real precedent for the exact task queued at the top of §6 — designing an Agentic AI use case (A21) at Bronze. The "detect-and-surface, not auto-resolve" decision *is* a governance/trust trade-off (A24, still 🔴), and "grounded in the merchant's own history instead of a fixed threshold" *is* a measurement-framework decision (A29, still 🔴). When Session 14 gets to designing the CI-failure-triage agent, this is the pattern to reuse: pick the scope boundary (what the agent does vs. hands back to a human) before anything else, and ground it in run-specific context rather than a static rule. **Reused directly S16** as the third leg of the governance-narrative synthesis exercise (see §3 Session 16, §7).
---
## §11 — Target role gap analysis: Agentic Infrastructure PM
Added after reviewing a live JD for an "Agentic Infrastructure" product manager role, focused on agentic control planes. This is the clearest external validation yet of the curriculum split: the JD is basically Track A (agent behaviour) + Track B (platform/CI-CD instincts) + an entirely new layer (Track D — identity, sandboxing, protocols, distributed systems) that nothing in M1–M6 covers. Kept here so the gap is visible at a glance rather than re-derived every time a similar JD shows up.
*Note (S15): a second live JD — Foundever "AI Product Manager – Agentic Platform" — was reviewed and largely confirmed this same split, plus surfaced two new concrete gaps (A32 n8n/Langflow, A33/D19 event-driven architecture). See §6 "Still open" and §4 for where those live in the curriculum; a full second gap table hasn't been built out here yet.*
*Note (S16): a third live JD — ADCB "Global Product Owner – Generative AI (Unstructured Data)" — pulls a different slice of the curriculum forward (RAG/GraphRAG house-view ownership, eval frameworks, governance) and explicitly deprioritises the Kubernetes/distributed-systems cluster this role emphasises. See §12 for the full breakdown — don't let the two roles' priorities blend together.*
**Responsibility → what's already owned vs new:**
| JD responsibility | Closest owned/partial concept | Gap (Track D ref) |
|---|---|---|
| Define and drive vision for agentic control planes | B8 (🥇 Gold) shows I can reason about a control-boundary problem (GHA ↔ on-prem) end-to-end — same shape of thinking, different domain | D1, D18 — no agentic-specific control-plane vocabulary yet |
| Translate open-source/industry standards into enterprise infra | The whole Track B pattern (GHA, Snyk, SonarQube wired onto a real repo) is this exact muscle, just for CI/CD standards not agentic ones | D6, D7 — MCP/A2A are the standards in question, A22 (MCP) still 🔴 |
| Integrate agentic capabilities across AI platform teams | A21 (🟡 queued S14) is the first real touch on agent design | D8 — orchestration frameworks, multi-team integration not yet touched |
| Platform strategy for identity, access control, sandboxing, network/connectivity | B24 (secret management, 🟡) is adjacent but human/service-secret focused, not agent-identity focused | D2, D3, D4, D5 — all net-new |
| Work with AI product teams on real-world usage → infra requirements | Direct match to my actual PM background (enterprise platform backlog ownership, §10 Q1) — this is a transferable strength, not a gap | — |
| Partner with engineering on scalable, resilient system architecture | C1–C3 (platform engineering, DevEx, IDP concepts, 🟡) are the closest existing frame | D10, D11, D12, D13 — Kubernetes, service mesh, distributed systems, cloud-native patterns all net-new |
| Anticipate how agentic systems evolve, shape roadmap | A28 (A/B testing for AI, 🥉) and A29 (KPI frameworks for AI, 🔴) are the measurement half of this; the forecasting half has no owned concept yet | D18 |
**"You'll need to have" → what's already owned vs new:**
| JD requirement | Status against current curriculum |
|---|---|
| 5+ yrs technical PM in AI/platform/cloud/security/infra | ✅ Already true — real experience (enterprise CI/CD + API platform ownership, §10 Q1) |
| Experience with LLMs, GenAI, agent frameworks, orchestration, production requirements | 🟡 Partial — A1 (LLM), A3 (RAG) owned; A21 (Agentic AI) now seeded via `agentic_workflow_demo.py`; D8 (orchestration frameworks) not started |
| Building/operating large-scale platform infra for developers | ✅ Real experience (Track B worked example is literally modelling this) |
| Identity, authN/authZ, enterprise security architecture | 🔴 Gap — D2, D3, D14 all net-new. **Highest-priority gap** — appears twice in the JD (as a platform strategy area and as a "need to have") |
| Distributed systems, service-to-service comms, API Gateways, Kubernetes, cloud-native | 🔴 Gap — D9–D13 all net-new. **Second-highest-priority gap** — broad and foundational |
| Hands-on with MCP, A2A, interoperability patterns | 🟡 Partial — MCP already queued as A22; A2A is entirely new (D7) |
| Cross-functional work with engineering, security, product, platform | ✅ Real experience (§10 Q1 stakeholder list: Engineering, Security, Architecture, CDO org) |
| Communication/storytelling, articulate technical vision | 🟡 Partial — B8's Gold-level talking point (§7) is proof this skill exists; needs a Track-D-specific version once D1–D18 are further along |
**Reading the table:** the "real experience" rows are already strong and need no curriculum time — they're PM/stakeholder skills, not technical ones. The two real gaps are identity/security architecture (D2, D3, D14) and the Kubernetes/distributed-systems/API-Gateway cluster (D9–D13) — both zero-to-one right now. M7's step ordering in §2 was sequenced to hit those two clusters first, right after A21 lands, rather than saving them for later.
---
## §12 — Target role gap analysis: Global Product Owner, Generative AI (Unstructured Data)
*Added Session 16. Role: Global Product Owner – Generative AI – Unstructured Data, ADCB (Abu Dhabi Commercial Bank), posted 2026-07-22, fixed-term 3 years. Scrub before any public push — see §8, "global product owner" and "unstructured data" are now in the pattern list alongside "adcb".*
**Headline read:** this is the closest match yet to the actual curriculum build. bank-of-sandhu already has AAOIFI, CBUAE, UAE-PDPL, GDPR-UKDPA, FCA, and Consumer Duty compliance docs wired into a real CI job (B26) and into `rag_demo.py`'s citation/refusal logic (A9, A8) — i.e. the exact "RAG + regulatory grounding" shape this JD wants, already built and running, not hypothetical. No other target role reviewed so far has this direct an artefact match.
**Role shape vs the §11 Agentic Infrastructure PM role:** that role pulled Track D (Kubernetes, service mesh, distributed systems, API gateways) hard. This role barely touches that layer — it's a Product Owner role centred on RAG/GraphRAG house-view ownership, eval frameworks, governance, and multi-squad backlog management. Track D stays LOW priority for *this* role specifically. Don't let the two target roles blend priorities — they pull different parts of the curriculum forward.
### This week — 5 hours, bite-sized, interview-ready
Ordered by what this JD names explicitly and where the biggest gaps sit. Each block is standalone — skip or reorder if a session runs short. **Hours 1–2 run S16 — see §3 for the honest outcome of each (Hour 1: A23 seeded, not Bronze; Hour 2: governance narrative scaffolded, not cold-solo). Hours 3–5 still open.**
**Hour 1 — Evals/RAGAS (A23), Bronze.** Highest-priority true gap; named twice in the JD. Learn just enough to talk fluently: retrieval quality (precision/recall of what got fetched) vs generation quality (faithfulness/groundedness — does the answer actually match the cited chunks). Anchor it in something already real: `rag_demo.py`'s 0.12 refusal threshold *is* a primitive eval gate — walk through how you'd formalise that into a proper eval suite (a set of test queries with expected-refusal vs expected-answer labels, run automatically, same shape as `test_retrieval.py`).
**Hour 2 — Governance narrative (B26 reframed + A24).** Not new learning — a reframing exercise. Practise telling the UAE compliance-docs story as a *product governance* answer, not a CI-check answer: "I built retrieval that refuses to answer outside its approved source set, and grounded that source set in the actual regulatory regime documents (CBUAE, AAOIFI, UAE-PDPL) — same instinct as scoping the settlement-anomaly detector to detect-and-surface rather than auto-resolve" (reuse the §10 Q3/Q4 example — it's your strongest banked governance answer).
**Hour 3 — Three net-new terms, one-liners only: GraphRAG, RLHF, prompt injection.** Not masterable in an hour — the goal is a clean, honest sentence for each, not depth:
- *GraphRAG:* "Retrieval over a knowledge graph of entities and relationships, not just flat text chunks — useful when an answer needs connected facts across documents, which flat RAG misses."
- *RLHF:* "A training step where human preference judgments shape model behaviour, on top of next-token prediction — it's why a model can be factually right but still tuned toward a particular tone or refusal style."
- *Prompt injection:* "An adversarial attempt to override the system prompt from inside user-supplied content — different from hallucination, which is model error, not attack."
Rehearse saying "I understand the concept, haven't built against it yet" cleanly — that's a fine, honest interview answer for genuinely new items.
**Hour 4 — Named tools: LangChain, Azure OpenAI, Pinecone.** Surface familiarity, framed against what's already built: "Azure OpenAI is the managed-hosting layer — same API shape as calling Claude Haiku directly like I do now, just a different provider. LangChain is an orchestration framework for chaining retrieval/generation steps — I've hand-rolled that chain myself in `rag_demo.py`, so I understand what it's abstracting. Pinecone is the fully-managed vector DB — I'm running chromadb self-hosted, which trades convenience for control; Pinecone is the other end of that trade-off" (reuses the S15 marketplace line verbatim).
**Hour 5 — Full rehearsal, out loud.** Chain it into one interview-length narrative: RAG pipeline (A3/A4/A9) → governance grounding (B26/UAE docs) → agentic extension (A21, CI-failure-triage agent) → what's next (evals, GraphRAG). Then rehearse the honest-gap answer once: "Where I'm still building: formal eval frameworks and GraphRAG — I have the RAG and governance fundamentals solid from hands-on builds, and I'm deliberately extending into evals next because that's the layer this kind of role owns day-to-day."
### Responsibilities → owned/partial vs gap
| JD responsibility | Closest owned/partial concept | Gap |
|---|---|---|
| Roadmap for GenAI on unstructured data; house view on RAG | A3 (RAG, 🥉), A4 (Chunking, 🥉) | — |
| House view on GraphRAG | — | **Net new — A34 added S16.** |
| Metadata and chunking strategies (enterprise-grade) | A4 (🥉, toy-scale) | Uplift needed — current chunking is bag-of-words demo scale, not enterprise metadata strategy |
| Access control on retrieval (who can retrieve what) | D3 (scoped tokens) is adjacent but agent-identity framed, not retrieval-permission framed | **Net new — A35 added S16 (permission-aware retrieval / RAG access control)** |
| Privacy requirements | UAE-PDPL / GDPR-UKDPA docs already stubbed in bank-of-sandhu (B26, 🟡) | Real artefact exists; not yet explained back as a *product* requirement rather than a CI check |
| Source attribution | A9 (🥉 owned) | — |
| Lead cross-functional delivery squads | Real PM background (§10 Q1: enterprise CI/CD platform ownership) | — (transferable strength) |
| Evaluation frameworks — safety, reliability, performance, incl. agent-based | A23 (Evals/RAGAS) | 🟡 **Seeded S16 — also named explicitly in the "ideal candidate" list below. Highest-priority gap, now in motion.** |
| Runtime guardrails — confidentiality, data leakage, prompt injection, hallucination | A2 (Hallucination, 🥉), A8 (Refusal threshold, 🥉, re-verified S16) cover hallucination/guardrail half | **Prompt injection — A37 added S16, introduced not landed.** Data leakage/confidentiality → D14 (🔴) |
| Observability tools and dashboards for AI quality/usage/risk | D17 (Observability for agentic systems, 🔴) | Direct overlap with **Track C** (dashboard + AI overlay) — this JD line is close to literally describing Track C's end state |
| Multi-squad backlog ownership, agile portfolio management | Real PM background | — (transferable strength, same pattern as §10 Q1/Q2) |
| Translate delivery into business narrative for senior stakeholders | Real PM background (§7 talking points already demonstrate this register) | — |
| Emerging trends: LLM, retrieval patterns, RLHF, Agentic Systems | A1 (LLM, 🟡), A21 (Agentic AI, 🟡 seeded) | **RLHF — A36 added S16, introduced not landed.** |
| Adopt Azure OpenAI, LangChain, vector DB | A20 (Azure OpenAI, 🔴), A18 (LangChain, 🔴), A11 (Vector DB, 🟠 stale) | Both A18/A20 already exist as curriculum refs but are 🔴 — this JD is the reason to prioritise them |
| Proof-of-value initiatives, documented outcomes | A28 (A/B testing, 🥉 Bronze) | Adjacent, not a direct match — PoV is broader than A/B testing |
### "Ideal candidate should have" → owned/partial vs gap
| JD requirement | Status |
|---|---|
| Strategic Product Planning | ✅ Real experience |
| Agile Portfolio Management | ✅ Real experience |
| AI Lifecycle and Evaluation Frameworks | 🟡 **Seeded S16 — A23. Explicitly named twice (here and in responsibilities). Top priority, solo explain-back still owed.** |
| Stakeholder Engagement | ✅ Real experience |
| Cross-Functional Leadership | ✅ Real experience |
| Regulatory and Ethical AI Considerations | 🟡 Partial — A24 (governance, 🔴 as a formal concept) but reused practically S16 via the governance-narrative synthesis; B26 (compliance as code) is 🟡 with real UAE regulatory docs already in the repo. Strongest existing artefact for this whole JD. |
| Business Case Development | ✅ Real experience (§10 Q1: £4m+ savings example) |
| Customer-Centric Design | 🟡 Partial — A30 (UI/UX for data-rich interfaces, 🔴) ties in via Track C once started |
| Advanced Communication and Influence | ✅ Real experience (§7 talking points) |
| Familiarity: LLMs, RAG, RLHF, Agentic Systems; Jira, LangChain, Azure OpenAI, Pinecone | Mixed — RAG (🥉) and Agentic Systems (🟡) covered; RLHF (A36) introduced S16 not landed; Jira likely known from real PM work but untested here; LangChain/Azure OpenAI both 🔴; Pinecone (A12) marketplace-context only, own one-liner still owed |
### New concept refs added to §4A (S16)
| # | Concept | Status after S16 |
|---|---|---|
| A34 | GraphRAG | 🔴 Introduced, not restated solo |
| A35 | Permission-aware retrieval / RAG access control | 🔴 Flagged, not yet curriculum content |
| A36 | RLHF (Reinforcement Learning from Human Feedback) | 🔴 Introduced, not restated solo |
| A37 | Prompt injection | 🔴 Introduced, not restated solo |
### Priority read for next sessions
1. **A23 (Evals/RAGAS)** — top priority, now seeded; Session 17 should close the loop with a cold-solo explain-back including the threshold classification.
2. **B26 + the UAE compliance docs are the single strongest existing artefact for this specific role** — the S16 reframe is a good start; push it to cold-solo next, not just scaffolded.
3. **A18 (LangChain) and A20 (Azure OpenAI)** — already-queued 🔴 items, now justified by name-drops in two places in this JD. Hour 4 of the sprint still owed.
4. **Track C (dashboard)** — its trigger conditions are unchanged by this analysis, but note the JD's "observability tools and dashboards" line is close to describing Track C's end state once built.
5. **Track D (D9–D13: Kubernetes, service mesh, distributed systems)** — explicitly LOW priority for *this* role. Keep it queued for the §11 Agentic Infra role, don't let it compete for time against A23/A18/A20/A34–A37 above.
6. **GraphRAG, RLHF, prompt injection, permission-aware retrieval** — all net-new, introduced S16, none restated solo. Don't expect Bronze this month; just get them held at a clean one-liner.
*Interview-prep sprint tracked live in Session 16 (§3) — Hours 1–2 done, Hours 3–5 open for Session 17 or a pre-interview warm-up.*
---
*End of file. Paste this whole file as the opener for the next session.*
