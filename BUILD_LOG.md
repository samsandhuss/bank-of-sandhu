How tracks map onto the existing M1–M6 modules
Track
Pulls from these modules
Adds new
A — AI / RAG
M5 (Chunks 2–6 of chat.js)
A/B testing layer, eval framework
B — CI/CD Toolchain
M1 (Stations 2–6), M2 (SonarQube + Snyk), M3 (Artefact mgmt), M4 (Platform patterns)
Wires real tools onto the bank-of-sandhu repo
C — Dashboard + AI overlay
M6 (Pipeline Visualiser, reframed)
DORA overlay + AI summarisation layer
D — Agentic Infrastructure / Control Planes
New module (M7); pulls A21, A22 forward from Track A
Agent identity & access control, sandboxing, agentic protocols (MCP/A2A), API gateways, Kubernetes, distributed systems, control-plane vision-setting

Why each track exists
Track
What it gives me
A — AI/RAG
Genuine RAG fluency from a built artefact — chunking, retrieval, citation guardrails, refusal logic at code level.
B — CI/CD toolchain
First-hand experience of the modern toolchain (GHA, SonarQube, Snyk, Artifactory) wired onto my own repo — same shape as an enterprise pipeline at smaller scale.
C — Dashboard + AI overlay
Data-rich product UX practice + DORA/KPI fluency + an AI summarisation layer joining Tracks A and B.
D — Agentic infrastructure
Platform-PM fluency in the layer underneath agentic AI products — identity, sandboxing, protocols, distributed systems — the specific gap for infra-focused agentic PM roles (a live target role, see §11). Builds directly on top of A21 (Agentic AI) and A22 (MCP), which are already queued.

Two-week rough sequence
Week
Focus
End-of-week output
W1
All three tracks NOW + first NEXT items
B8 gold; basic GHA workflow live on repo; dashboard skeleton deployed; Chunk 2 owned.
W2
All three tracks NEXT
SonarQube + Snyk wired; dashboard pulls real GitHub data; Chunks 3–4 owned; DORA overlay live.
Post-W2
LATER + STRETCH items
Vector upgrade, AI layer on dashboard, self-hosted runner demo.
Honest pacing assumption: 3 hrs/day → W1+W2 plan holds. 1 hr/day → halve everything. Each track is independent.







§2 — Modules (sequenced Now / Next / Later roadmaps)
Restructure principle: Each module is a sequence, not a single tick-box. Inside each module, work is ordered Now → Next → Later. CI/CD tool touchpoints are flagged inside the sequence so I always know which tool teaches which concept.
M1 — GitHub + Actions for non-devs 🟢 IN PROGRESS
Worked example: Imaginary bank cloud → on-prem deployment, six stations. Feeds Track B. | Step | What | Status | CI/CD touchpoint | Concept ref | |---|---|---|---|---| | Station 1 | Cloud vs on-prem split | 🥉🥈 OWNED | — | B13 | | Station 2 | GHA reaching into on-prem | 🥉🥈🥇 OWNED — Gold landed S11 | GitHub Actions | B8 | | Station 3 | Self-hosted CD runner provisioning | 🔴 NOT STARTED | GitHub Actions, Harness | B9 | | Station 4 | Firewall change request process | 🔴 NOT STARTED | (organisational, not tooling) | B10 | | Station 5 | Containerised app testing in CI | 🔴 NOT STARTED | Docker, GHA, Buildkite | B11, B21, B22 | | Station 6 | Headless browser testing in CI | 🔴 NOT STARTED | Playwright/Cypress in GHA | B12 | | Wrap | Professional-grade summary of the bundle | 🔴 NOT STARTED | All of above | — |
M2 — Code quality gates 🟡 PARTIALLY SEEDED (S13 — Snyk found live in repo)
Worked example: Triage real findings in server/index.js (3 High findings parked from Security Station 1). Feeds Track B. | Step | What | Status | CI/CD touchpoint | Concept ref | |---|---|---|---|---| | 1 | What is static code analysis vs vuln scanning | 🔴 | SonarQube vs Snyk | B18, B19 | | 2 | Adding SonarQube to bank-of-sandhu's PR pipeline | 🔴 | SonarQube, GHA | B18 | | 3 | Snyk scanning npm dependencies | 🟡 seen live in ci.yml S13, not yet explained back | Snyk, GHA | B19 | | 4 | Triaging the three parked High findings | 🔴 | SonarQube + manual | B18 | | 5 | Branch protection rules + required checks | 🔴 | GitHub | B7 | | Wrap | Imaginary bank: how a regulated dev shop wires quality gates | 🔴 | All | — |
M3 — Artefact management 🔴 NOT STARTED
Worked example: Docker image versioning for the Node BFF. Feeds Track B. | Step | What | Status | CI/CD touchpoint | Concept ref | |---|---|---|---|---| | 1 | What is an artefact, what is a build | 🔴 | — | B4, B5 | | 2 | Containerising the Node BFF in Docker | 🔴 | Docker | B21, B22 | | 3 | Semantic versioning the image | 🔴 | — | B23 | | 4 | Pushing to a registry (GH Packages or Artifactory) | 🔴 | Artifactory, GH Packages | B20 | | 5 | Pipeline pulls versioned image and deploys | 🔴 | GHA | B8 | | Wrap | Why orgs centralise artefact storage | 🔴 | All | — |
M4 — Platform patterns applied 🔴 NOT STARTED
Worked example: The bank-of-sandhu repo as a golden-path template; README as a service-catalog entry. Feeds Track B. | Step | What | Status | CI/CD touchpoint | Concept ref | |---|---|---|---|---| | 1 | General platform engineering concepts | 🔴 | Portal vendors (e.g. Port.io) as reference | C1, C2, C3, C9 | | 2 | Golden path template — what the bank-of-sandhu repo demonstrates | 🔴 | — | C4 | | 3 | Service catalog — README as the catalog entry | 🔴 | — | C5 | | 4 | Scorecards — what would my repo score? | 🔴 | — | C6 | | 5 | Self-service provisioning concept | 🔴 | — | C7 | | Wrap | Imaginary bank: why platform tooling unlocks team autonomy | 🔴 | All | — |
M5 — AI in the SDLC 🟢 IN PROGRESS
Worked example: server/chat.js walkthrough, chunk by chunk. Feeds Track A. | Step | What | Status | Concept ref | |---|---|---|---| | Chunk 1 | Foundational RAG concepts | 🥉 OWNED (Session 05) | A3, A4, A5, A6, A7 | | Chunk 2 | Chunking code — how aaoifi.md becomes chunks | 🔴 NOT STARTED | A4 silver/gold | | Chunk 3 | Lexical scoring and the refusal threshold | 🔴 NOT STARTED | A8, A13 silver | | Chunk 4 | System prompt construction and the citation guardrail | 🔴 NOT STARTED | A15 | | Chunk 5 | The API call to Claude Haiku 4.5 | 🔴 NOT STARTED | A14, A25, A26 | | Chunk 6 | Response handling, refusal short-circuit | 🔴 NOT STARTED | A7 silver | | Bonus AI block | Embeddings → vector DBs → Pinecone | 🟠 A10 STALE, A11 STALE (regressed S13), A12 🔴 | A10, A11, A12 | | Bonus AI block | Evals + experimentation (A/B testing for AI) | 🥉 A28 Bronze owned S12 | A23, A28 | | Wrap | Professional-grade summary of RAG end-to-end | 🔴 NOT STARTED | All |
M6 — Pipeline Visualiser → reframed as Track C 🟡 TRIGGER MET — READY TO START
Worked example: A React dashboard, deployed alongside bank-of-sandhu, showing how the CI/CD ecosystem fits together. Originally scoped as a static visualiser; reframed as Track C — a working dashboard with mocked data first, real GitHub API data next, and an AI summarisation layer LATER. Defined start trigger (must hit ALL three):

✅ M1 Station 2 (B8) owned at Gold — landed S11.
🔴 M2 complete OR Chunks 2–3 of M5 complete — not yet met.
🟡 A10–A12 (embeddings, vector DBs, Pinecone) owned at Bronze — A10 + A11 regressed to stale S13, need re-owning; A12 (Pinecone) not yet started. Status: Condition 1 met. Conditions 2 and 3 still open. Track C build can begin once all three are green. Planned sequence (when started — as Track C): | Step | What | CI/CD touchpoint | Concept ref | |---|---|---|---| | 1 | Sketch the dashboard — what visualises what | All tools | A30 bronze | | 2 | Build the React shell (mock data) on a new /dashboard route | — | — | | 3 | Pipeline-stage view: GHA → SonarQube → Snyk → Artifactory → Deploy | All | B8, B18, B19, B20 | | 4 | Pull real data via GitHub REST API | All | A30 silver | | 5 | DORA metrics overlay (mocked or real) | — | B25, A29 | | 6 | AI layer — Claude API enriches dashboard with NL pipeline-health summaries | Claude API + Track A RAG | A21 bronze | | Wrap | Professional-grade walkthrough | — | — |


M7 — Agentic control planes & platform infrastructure 🔴 NOT STARTED
Why this module exists: added after reviewing a real target JD (an Agentic Infrastructure PM role, control-plane focused — see §11 for the full gap analysis). That role sits one layer below the AI product work in Track A — it's about the identity, sandboxing, protocol, and distributed-systems infrastructure that agentic products run on top of. Track A proves I can build an AI feature; Track D proves I understand what it takes to run agents safely at platform scale. Worked example: extend the CI-failure-triage agent already queued for A21 (Session 14 design) with a real control-plane layer — scoped identity, a sandboxed execution step, and an MCP-based tool interface — so these concepts get built on bank-of-sandhu, not just explained. Feeds Track D. | Step | What | Status | Touchpoint | Concept ref | |---|---|---|---|---| | 1 | Agentic control plane vs data plane | 🔴 NOT STARTED | — | D1 | | 2 | Agent identity — workload identity vs human identity | 🔴 NOT STARTED | SPIFFE/SPIRE, service accounts | D2 | | 3 | Agent authN/authZ — scoped, delegated tokens | 🔴 NOT STARTED | OAuth2 client-credentials, token scoping | D3 | | 4 | Sandboxing agent code execution | 🔴 NOT STARTED | gVisor, Firecracker microVMs, container isolation | D4 | | 5 | Agent network & connectivity architecture | 🔴 NOT STARTED | egress allow-listing, service mesh | D5 | | 6 | MCP in practice — wiring a real MCP tool server into the CI-failure-triage agent | 🔴 NOT STARTED | MCP | A22, D6 | | 7 | A2A — agent-to-agent protocol concepts | 🔴 NOT STARTED | A2A | D7 | | 8 | API Gateway fundamentals | 🔴 NOT STARTED | rate limiting, routing, auth at the edge | D9 | | 9 | Kubernetes fundamentals | 🔴 NOT STARTED | pods, services, namespaces, ingress | D10 | | 10 | Service-to-service communication | 🔴 NOT STARTED | mTLS, service mesh (Istio/Linkerd) | D11 | | 11 | Distributed systems fundamentals | 🔴 NOT STARTED | CAP theorem, idempotency, consistency | D12 | | 12 | Enterprise security architecture for agents | 🔴 NOT STARTED | zero trust, least privilege | D14 | | 13 | Agent lifecycle management in production | 🔴 NOT STARTED | versioning, deployment, rollback | D15 | | 14 | Observability for agentic systems | 🔴 NOT STARTED | tracing tool calls / agent decisions | D17 | | Wrap | Platform-PM vision statement — translating MCP/A2A + open standards into enterprise-grade infra | 🔴 NOT STARTED | All | D18 | Start trigger: A21 (Agentic AI, Bronze design) lands in Session 14 first. Track D formally kicks off once A21 Bronze is owned — no point building a control plane around an agent that hasn't been scoped yet.
§3 — Session history (chronological)
Session 01 — Clean repo, deploy, RAG chatbot ✅
Flattened repo, made public, deployed to Render, built RAG chatbot with in-repo knowledge + citations + refusal threshold, set up GitHub profile. Session 01 RAG framings deprecated. Pizza/kitchen analogy from Session 05 is canonical.
Sessions 02–04 — Blocks A–E + RAG concept attempts ✅
PDF contract, cookie consent gating, automated tests, GitHub push, working chatbot with Claude Haiku 4.5 + AAOIFI citations. Began chunked walkthrough of server/chat.js.
Session 05 — Chunk 1 of server/chat.js FULLY OWNED 🥉 ✅
All four foundational RAG concepts locked via kitchen / pizza-prep analogy. Best line banked: "no added sprinkle of something — the customer may have allergies."
Session 06 — Spot-check + Station 1 owned, Station 2 paused 🟡
A3–A7 recap (A5 redone). B13 Cloud vs on-prem owned at Bronze. B8 paused at PARTIAL — three slips diagnosed. Bronze/Silver/Gold rule introduced. Stopped honestly when tired.
Session 07 — Spot-check + curriculum restructure + three-track architecture committed 🟢
Spot-check outcomes:

A5 Retrieve drifted a third time — first to "speed" (S05), then to "no action" (S06), now to "checked" (S07). Re-owned with verb lock: action words must be "fetching / gathering / pulling", never "checking". A5 stays on the spot-check rota for every session until it holds clean three sessions in a row.
B13 Cloud vs on-prem held overnight, promoted to 🥉🥈 (Bronze + Silver). Minor flags: avoid "historic records" (slides toward "old data" drift); drop filler phrasing. Curriculum restructured (mid-session):
Modules now sequenced Now → Next → Later with explicit CI/CD tool touchpoints.
M6 Pipeline Visualiser added, queued behind a defined trigger.
Failure mode #4 added: "historic records" / "old data" drift on on-prem. Three-track architecture committed (session close):
Track A (AI/RAG), Track B (CI/CD toolchain), Track C (Dashboard + AI overlay).
Layered on top of M1–M6, not replacing them.
Track C reframes M6 as a working dashboard with AI overlay.
Two-week rough sequence committed.
Failure mode #5 added: scope expansion under redo pressure. Station 2 (B8) redo: Did not occur this session. Carries forward to Session 08.
Session 08 — Spot-checks held + B8 redo (bronze owned, silver underway) 🟢
Spot-check outcomes:

A5 Retrieve — HELD. Verb lock intact ("fetching"), no slide to "checking." Hold 1 of 3 on the watch. Tighten noted: lead with the action verb (fetching) — "matching" is the filter, not the action.
B13 Cloud vs on-prem — HELD at Silver. Anchored on-prem to sensitivity, avoided the "old data" trap. Tighten noted: state the decider as a rule — "sensitivity decides which side a workload sits on." B8 — GHA reaching on-prem (Track B NOW item):
🥉 Bronze — OWNED. Worked out the direction solo: the worker inside dials out; the outside can never dial in.
🥈 Silver — Problem owned. Firewall correctly placed as the bank's wall, blocking inbound so GitHub can't reach in.
🥈 Silver — Fix assembled (with scaffold). Self-hosted runner inside, polling outbound. Not yet solo.
🥈 Silver — Why-it-wins: not yet attempted. Other:
Stopped honestly when answers shrank to single words.
Discipline held: no Chunks 2–6, no Track C, no curriculum restructure.
Port.io question: confirmed general-industry vendor names are NOT scrub targets. Softened reference-vendor mentions (C9, M4) to "portal vendors (e.g. Port.io)".
Session 09 — A5 redone, B13 held, B8 Silver-complete, Gold attempted 🟢
Spot-check outcomes:

A5 Retrieve — DRIFTED at the top of the session: led with "matching" (action-absent), the exact tighten flagged in S08. Redone with a scaffold to land "Retrieve is fetching the ingredients that match the order." Because it drifted and needed a redo, the clean streak resets to 0 — mandatory again next session. Lesson: lead with the action verb, every time.
B13 Cloud vs on-prem — HELD at Silver (concept). Framing flag: slipped twice into a personal, non-generic framing. Coached back to the generic frame. B8 — GHA reaching on-prem (Track B NOW item):
🥈 Fix — OWNED solo. Restated clean without scaffold.
🥈 Why-it-wins — OWNED. Inbound hole = open door; outbound = no door; perimeter unchanged. → B8 now Silver-complete.
🥇 Gold — attempted, did not land. Banked honestly. Gold carries to Session 10. Banked insight: Analogies are bronze training wheels — at Gold, drop entirely. (Logged in §0.)
Session 10 — A5 held (1/3), A6 + A7 held, B8 flip broken but Gold not landed 🟢
Spot-check outcomes:

A5 Retrieve — HELD. Hold 1 of 3.
A6 Augment — HELD. Boundary clean both sides.
A7 Generate — bonus HELD (unprompted). B8 Gold attempt: Flip broke via name-tells-owner mnemonic. Then degraded under load on poll target. Stopped honestly. Gold → S11. Banked techniques: "The name tells you the owner." Under-load regression = stop signal. (Both logged in §0.)
Session 11 — A5 held (2/3), B13 held, B8 Gold landed, A10 + A11 Bronze owned 🟢
Spot-check outcomes:

A5 Retrieve — HELD. Hold 2 of 3.
B13 Cloud vs on-prem — HELD at Silver. Generic framing correct, sensitivity landed. B8 Gold — LANDED. 🥇 Three beats clean: gap, fix, why-it-wins. Setting: regulated bank migrating CloudBees Jenkins → GitHub Enterprise. Track C trigger condition 1 met. A10 Embedding — Bronze OWNED: Numbers not words, similar meanings mathematically close, computer + laptop example. A11 Vector database — Bronze OWNED: Stores embeddings, searches fast, returns closest match. A28 — not attempted. Stopped honestly. Carries to S12.
Session 12 — A5 off the watch, A6 held, A28 Bronze owned, A10 + A11 Silver owned 🟢
Spot-check outcomes:

A5 Retrieve — HELD. Hold 3 of 3 — OFF THE WATCH PERMANENTLY. 🎉 Led with "fetch, gather and pull from a system matched to the original request." Action verb first, no drift.
A6 Augment — HELD. Retrieved chunks + original question combined — boundary vs Retrieve clean on both sides. A28 — A/B testing for AI products — Bronze OWNED:
"Two versions, real users, measure which actually works — not which looks better in testing. Key AI insight: changes that seem like improvements in the lab can behave completely differently once real users and the model are involved." A10 Embedding — Silver OWNED:
"An embedding model converts text into a vector — a long list of numbers that encodes meaning — and that vector is then stored in the vector database." Real terms landed: embedding model, vector, vectorisation. A11 Vector database — Silver OWNED:
"When a user asks a question, it gets converted into a vector by the embedding model. The vector database runs a similarity search to find stored vectors that are closest — measured by cosine similarity — and returns those chunks." Real terms landed: similarity search, cosine similarity, query vector. Other: Discipline held — no Track C build, no chunk advance, no curriculum restructure. Stopped cleanly.
Session 13 — B13 landed, A10/A11 flagged stale, pivot to build-mode: real CI/CD pipeline diagnosed and fixed 🟢
Spot-check outcomes:

B13 Cloud vs on-prem split — held, eventually landed clean: "Sensitivity decides the split of a workflow — whether it sits on-prem or in the cloud." One-sentence decider, no listing. Held.
A11 Vector database — regressed across three attempts, merging back into A10 each time and dropping the actual retrieval mechanism (query vector → similarity search → cosine similarity). Matches the documented under-load regression stop signal from S10.
A10 Embedding — same session, same blending pattern. Both flipped to 🟠 STALE rather than pushed through tired — 3 weeks off the habit was the honest cause, not a concept failure. Pivot — learn by doing, direct into the GitHub repo (not local machine), so it's portable and interview-shareable:
learning/vector_demo.py — hand-rolled bag-of-words "embedding" (deliberately not a black-box API) + cosine similarity search over 6 items. Ran clean: car query scored highest against the 3 cars, laptop query scored evenly across the 3 laptops. Made A10 (text→vector) and A11 (query vector→similarity search→closest match) concrete by watching real numbers move.
CI/CD — went to add a new ci.yml, discovered one already existed from the initial commit 2 months ago. Real pipeline, 3 jobs: validate (install→lint→typecheck→test→build→brand-config check), security (Snyk — B19, previously "not started" but already live in code), compliance-docs (checks regulatory doc files exist — new concept, not in curriculum). Real diagnosis: pipeline had been failing on every push. Traced both validate and compliance-docs failures to one root cause — 6 required compliance files never existed (fca.md, cbuae.md, aaoifi.md, gdpr-ukdpa.md, uae-pdpl.md, consumer-duty.md). Created stubs for all 6 via GitHub's web UI. Pipeline went green (CI #52). New concept surfaced: B26 — Compliance as code (CI fails if a required regulatory doc is deleted). GitHub-UI friction, worth banking as its own lesson: "Add file" creates paths relative to your current folder, not repo root — caused repeated nesting (docs/compliance/docs/compliance/...). Fix: always click the root breadcrumb link before starting a new file. One filename typo also caught (consumer-duty.m → .md). Time invested: ~3h 45m (see §9). Reflection: verbal-only spot-checks felt discouraging today, especially after a 3-week gap — building the vector script and diagnosing the real pipeline re-engaged the session. Banked as the Motivation note in §0. Other: No Track C, no chat.js Chunks 2–6. Session ran entirely on Track B using real existing repo state instead of a fresh toy build — closer to "artefact-driven" than today's earlier pure spot-check attempts.
Session 14 — Pre-session build: RAG demo + agentic workflow demo 🟡 SEEDED, not yet explained back
Built ahead of the live Session 14 spot-checks, so today's session can start from real running code instead of a cold verbal recap — same "artefact-driven" pattern as Session 13. learning/rag_demo.py — hand-built RAG pipeline, feeds Track A / M5:

Chunks 3 mock compliance docs (A4), retrieves via hand-rolled bag-of-words + cosine similarity with a stopword filter (A5, A13), augments query + retrieved chunks (A6), generates a cited, source-only answer or refuses below a 0.12 similarity threshold (A7, A8, A9).
Ran clean on 3 queries: 2 correctly matched and cited the right source doc; the 3rd (off-topic "capital of France") correctly refused at score 0.00 — the refusal path (A8) is now a real, tested behaviour, not just a described concept.
Falls back to a template answer if no ANTHROPIC_API_KEY is set, or calls Claude Haiku 4.5 for real generation if one is. learning/agentic_workflow_demo.py — hand-built CI-failure-triage agent, feeds A21 / Track D:
Implements the exact candidate use case queued since S13: observe (read a CI log) → plan (classify the failure against known patterns) → act (produce a suggested fix) → reflect (plain-English summary).
Deliberate governance boundary carried over from the real settlement-anomaly example (§10 Q3/Q4): the agent suggests, never auto-applies — no PR, no commit, no auto-fix. Logged explicitly as an A24 design decision, not an oversight.
Ran clean on 3 mock CI runs (missing compliance file, dependency conflict, flaky test) — each correctly classified, each produced a scoped suggestion, none auto-applied. Status change: A21 moves from "🟡 QUEUED FOR S14 (design only)" to 🟡 SEEDED — built and running, not yet explained back solo. Same distinction the log already uses for B19/B26 in S13: code existing and running is not the same as being able to explain it back without the file open. That explain-back pass is today's live session, not this prep step. Also touched, same caveat (seeded, not yet explained back): A8 (refusal threshold) — now has a real, testable number instead of an abstract description. A13 (lexical vs vector scoring) — retrieval quality visibly changed once stopwords were filtered out, a genuinely useful failure-and-fix to explain back live. Do NOT claim before Session 14 spot-checks: that A21, A8, or A13 are "owned" — per the log's own Bronze/Silver/Gold rule, that requires explaining them back solo, not just having working code.
Session 14 (live) — vector_demo.py fixed & extended, A10 landed clean, A11 mechanism worked out solo, rag_demo.py built & verified 🟢
Start 11:46 BST, close 17:12 BST — elapsed span 5h 26m, includes an unlogged lunch break, so active time is meaningfully less than the elapsed span. Logged honestly rather than guessed precisely. Environment friction (real, worth naming): most of the session's early hours went into Codespaces/clipboard friction, not concept work — a duplicated ITEMS = { line, a mis-indented return, filename typos (rag.demo.py, python3learning/...), and a browser clipboard-permission block. None of this was a learning failure; it was tooling friction. Once vector_demo.py was actually fixed and rerun, real concept work followed. vector_demo.py — fixed and extended, ran clean:

Added iPhone 15 / Pixel 8 entries to ITEMS.
Fixed 3 real bugs by reading actual Python tracebacks rather than guessing: a duplicated ITEMS = { line (SyntaxError), a missing return statement with no main block (script did nothing silently), and a mis-indented return sitting outside the method ('return' outside function).
Final run was clean and correct — e.g. "budget phone" query returned Pixel 8 (0.632) > iPhone 15 (0.316) > Porsche 911 (0.000), matching expected word-overlap behaviour exactly. A10 Embedding — 🥉 Bronze OWNED, re-landed clean. After two earlier attempts drifted (blending into "vector database," and a wrong detour into alphabet-letter positions), landed solo and correct: "An embedding takes a piece of text and turns it into a list of numbers, by counting how many times each word in a fixed vocabulary appears in that text." No database-blending this time — the exact drift that flagged it stale in S13 did not recur once corrected. A11 Vector database / retrieval — mechanism demonstrated solo, synthesis not yet clean. Correctly performed the actual word-overlap count without help (Pixel 8 = 2 matches, iPhone 15 = 1 match, Porsche 911 = 0 matches) and correctly reasoned out why Porsche appeared in a phone-query result (the algorithm has no concept of "phone" as a category — it's pure number-matching across every stored item, not a filtered category search). Attempting to compress this into one clean synthesis sentence regressed under load — same documented pattern as S10's "under-load regression = stop signal." Stayed 🟠 STALE for the one-sentence-synthesis bar specifically, but the underlying mechanism is now demonstrably understood, not stale. Redo the one-sentence version fresh next session, not tired. rag_demo.py — did not exist in the actual GitHub repo (only ever downloaded, never pushed) — created directly in the Codespace, ran clean on first try. Full pipeline verified end-to-end: 2 queries correctly retrieved and cited the right compliance doc; 1 off-topic query ("What is the capital of France?") correctly refused, scoring 0.00 against every source with zero shared vocabulary. A8 Refusal threshold — 🥉 Bronze OWNED, explained back solo using real output. Correctly reasoned: the France query shares zero words with any source doc, so every chunk scored 0.00 cosine similarity, which sits below the 0.12 refusal threshold — so generate() returns "not confident enough" instead of guessing. First time this concept moved from "seeded" to actually explained back without the file open. A13 (lexical vs vector scoring) — still 🟡 SEEDED, not directly explained back today; carries to next session. A21 (Agentic AI) / agentic_workflow_demo.py — untouched today, still 🟡 SEEDED from the pre-session build. Carries to next session. Reflection, logged honestly: the session felt slow and low-yield in the moment, particularly through the environment-friction hours. In review, the actual concept ledger for the day is real: A10 fully re-landed after being stale since S13, A8 moved from seeded to explained, and two working artifacts now exist in the repo that didn't this morning. The gap between "felt like nothing landed" and "two concepts actually moved" is itself worth noting for future sessions — environment friction reads as unproductive in the moment even when the concept work later in the session is solid.


§4 — Concept curriculum
Legend:

🥉 = Bronze owned · 🥈 = Silver owned · 🥇 = Gold owned
🟡 = PARTIAL at target layer · 🟠 = STALE (was owned, spot-check failed) · 🔴 = NOT STARTED


4A — AI / ML / GenAI concepts
#
Concept
Status
Plain-English (bronze)
Last check
A2
Hallucination
🥉 OWNED
Chef adds a sprinkle of something the customer didn't ask for — could be an allergy.
2026-05-22
A3
RAG (end-to-end)
🥉 OWNED
Pipeline: chunking → retrieve → augment → generate. Grounds the model in real sources + cites them.
2026-05-22
A4
Chunking
🥉 OWNED
Fridge with ingredient boxes — prep work that fills the fridge.
2026-05-22
A5
Retrieve
🥉 OWNED ✅ OFF WATCH (held 3/3 — S12)
Retrieve is fetching/gathering/pulling from the knowledge base, matched to the original request. Lead with the action verb; matching is the filter, not the action.
2026-06-19 (S12, hold 3/3 — permanent)
A6
Augment
🥉 OWNED
Combines retrieved chunks + the user's original question into one package, assembled together before the model generates. Not the fetching (Retrieve); not the cooking (Generate).
2026-06-19 (S12 held)
A7
Generate
🥉 OWNED
Chef cooks only from handed cards. Refuses if missing. Labels each fact = citations.
2026-06-02 (S10 held)
A9
Source attribution / citation
🥉 OWNED
Labelling each ingredient with which box it came from. Auditability.
2026-05-22
A10
Embedding
🥉 OWNED
"An embedding takes a piece of text and turns it into a list of numbers, by counting how many times each word in a fixed vocabulary appears in that text." Re-landed clean in S14 after two drifted attempts (DB-blending, then a wrong detour into alphabet-letter positions) — corrected each time and landed solo with zero blending into A11. Silver framing ("stored in the vector database") not yet re-verified fresh — redo Silver next session to confirm it still holds without blending.
2026-08-03 (S14 live — Bronze re-landed)
A11
Vector database
🟠 STALE (mechanism understood, synthesis not yet clean)
Bronze: stores embeddings, searches fast, returns closest match. Silver: question → embedding model → query vector → similarity search → cosine similarity → closest chunks returned. S14 update: correctly performed the actual word-overlap count solo (Pixel 8 = 2 matches, iPhone 15 = 1, Porsche 911 = 0) and correctly reasoned out why Porsche appeared in a phone-query result (no category concept — pure number matching). One-sentence synthesis regressed under load (documented under-load regression pattern). Redo the one-sentence version fresh next session — the mechanism itself is no longer the gap.
2026-08-03 (S14 live — mechanism demonstrated, synthesis still owed)
A28
A/B testing for AI products
🥉 OWNED
Two versions, real users, measure which actually works — not which looks better in testing. Changes that seem like improvements in the lab can behave differently once real users and the model are involved.
2026-06-19 (S12 Bronze)
A1
LLM
🟡 PARTIAL
Model trained on huge text → generates human-like answers. Can hallucinate on its own.
—
A8
Refusal / guardrail threshold
🥉 OWNED
Explained back solo using real output: the France query shares zero words with any source doc, so every chunk scored 0.00 cosine similarity, below the 0.12 refusal threshold — so generate() returns "not confident enough" instead of guessing.
2026-08-03 (S14 live — explained back solo)
A13
Lexical vs vector scoring
🟡 SEEDED
bank-of-sandhu uses lexical (word-match). Production uses vector (meaning-match). rag_demo.py made this concrete — retrieval quality visibly changed once stopwords were filtered from the bag-of-words vectors. Not yet explained back solo.
2026-08-03 (pre-S14 build)
A14
Context window
🟡 PARTIAL
Why chef can't hold the whole fridge. Model's text-at-once limit.
—
A12
Pinecone
🔴 NOT STARTED
—
—
A15
Prompt / system prompt
🔴 NOT STARTED
—
—
A16
Few-shot / zero-shot
🔴 NOT STARTED
—
—
A17
Fine-tuning vs RAG
🔴 NOT STARTED
—
—
A18
LangChain
🔴 NOT STARTED
—
—
A19
LlamaIndex
🔴 NOT STARTED
—
—
A20
Azure OpenAI
🔴 NOT STARTED
—
—
A21
Agentic AI
🟡 SEEDED — built, not yet explained back solo
The candidate use case is now real, running code: learning/agentic_workflow_demo.py — an agent that reads a CI run log, classifies the failure, suggests a fix, and reflects in plain English, without auto-applying anything. Mirrors the manual diagnosis done in S13. Explain-back pass is Session 14 live.
2026-08-03 (pre-S14 build)
A22
MCP
🔴 NOT STARTED
—
—
A23
Evals / RAGAS
🔴 NOT STARTED
—
—
A24
Governance / responsible AI
🔴 NOT STARTED
—
—
A25
Tokens / tokenisation
🔴 NOT STARTED
—
—
A26
Temperature / top-p
🔴 NOT STARTED
—
—
A27
Streaming vs batch
🔴 NOT STARTED
—
—
A29
KPI / measurement frameworks for AI products
🔴 NOT STARTED
Defining what good looks like for a data/AI product.
—
A30
UI/UX for data-rich interfaces
🔴 NOT STARTED
Designing dashboards / decision-support tools end users can actually use.
—
A31
Managed cloud AI services
🔴 NOT STARTED
Hosted model APIs and managed RAG patterns from major providers.
—



4B — CI/CD daily-work stack
#
Concept
Status
Plain-English (bronze)
Last check
B13
Cloud vs on-prem split
🥉🥈 OWNED
Hybrid — on-prem for regulated workloads, public cloud for flexibility to scale and experiment. Sensitivity decides which side a workload sits on.
2026-07-31 (S13 held)
B8
GitHub Actions (GHA) reaching on-prem
🥉🥈🥇 OWNED
A self-hosted runner (the bank's own machine, inside the bank's network) polls GitHub outbound for work; the firewall allows no inbound; perimeter unchanged so audit is comfortable. Gold landed S11 — gap, fix, why-it-wins clean.
2026-06-19 (S11, Gold)
B1
CI
🟡 PARTIAL
Every code change auto-built and tested before merge. Watched this happen for real in S13 (bank-of-sandhu's own pipeline), not yet explained back in own words.
2026-07-31 (S13 — observed live)
B19
Snyk
🟡 PARTIAL
Vulnerability scanning — finds known security holes in dependencies. Seen live in bank-of-sandhu's actual ci.yml (S13) — runs as a security job with continue-on-error: true (demo-only; production would hard-fail above HIGH severity). Not yet explained back in own words.
2026-07-31 (S13 — seen in real code)
B26
Compliance as code
🟡 PARTIAL
A config/doc check baked into CI — if a required regulatory file is deleted, the pipeline fails. Seen live in bank-of-sandhu's compliance-docs job (S13): checks docs/compliance/ for required regime docs (FCA, CBUAE, AAOIFI, GDPR/UK-DPA, UAE-PDPL, Consumer Duty). Not yet explained back in own words.
2026-07-31 (S13 — new concept, seen in real code)
B2
CD
🟡 PARTIAL
Every change that passes CI goes to staging/prod. Delivery=ready. Deployment=actually deployed.
—
B3
Pipeline
🟡 PARTIAL
End-to-end conveyor from git push to running in prod.
—
B14
Jenkins / CloudBees Jenkins
🟡 PARTIAL
Classic CI/CD server. Many orgs migrating off it to GHA.
—
B15
Buildkite
🟡 PARTIAL
A CI/CD platform.
—
B16
Azure DevOps
🟡 PARTIAL
Microsoft's CI/CD + project management platform.
—
B17
Harness
🟡 PARTIAL
A CD-focused platform.
—
B24
Secret management
🟡 PARTIAL
API keys in env vars on host, never in code. Rotate if exposed.
—
B4
Build
🔴 NOT STARTED
Source → runnable artefact (JAR / Docker image / bundled JS).
—
B5
Artefact
🔴 NOT STARTED
Output of a build. The thing you deploy.
—
B6
Test stages
🔴 NOT STARTED
Unit → integration → E2E.
—
B7
Branch protection
🔴 NOT STARTED
Rules on what's allowed into main.
—
B9
GHA self-hosted runner
🔴 NOT STARTED
M1 Station 3.
—
B10
Firewall change request process
🔴 NOT STARTED
M1 Station 4.
—
B11
Containerised app testing in CI
🔴 NOT STARTED
M1 Station 5.
—
B12
Headless browser testing in CI
🔴 NOT STARTED
M1 Station 6.
—
B18
SonarQube
🔴 NOT STARTED
Static code analysis — finds bugs and code smells pre-merge.
—
B20
Artifactory
🔴 NOT STARTED
Central library of built artefacts (Docker images, npm, JARs).
—
B21
Docker
🔴 NOT STARTED
Packaging app + dependencies into a portable container.
—
B22
Image vs container
🔴 NOT STARTED
Image = recipe. Container = running instance.
—
B23
Semver
🔴 NOT STARTED
MAJOR.MINOR.PATCH.
—
B25
DORA metrics
🔴 NOT STARTED
Deployment frequency, lead time, MTTR, change failure rate.
—



4C — General platform concepts (industry-standard)
These are widely-documented industry concepts. I'm learning them from public sources (CNCF, Team Topologies, the Platform Engineering book by Camille Fournier, etc.) — not from any specific employer's implementation. | # | Concept | Status | Plain-English (bronze) | Last check | |---|---|---|---|---| | C1 | Platform Engineering | 🟡 PARTIAL | An emerging industry discipline — providing reusable tools so application teams can self-serve common infrastructure tasks. | — | | C2 | Developer Experience (DevEx) | 🟡 PARTIAL | How easy and fast a developer can do their job. An industry-recognised quality metric. | — | | C3 | Internal Developer Portal (general concept) | 🟡 PARTIAL | An industry pattern — a single front door for developers to discover services and request resources. | — | | C4 | Golden path template | 🟡 PARTIAL | A pre-built starter template (industry term — see Spotify Backstage docs, ThoughtWorks) so teams don't reinvent the wheel. | — | | C5 | Service catalog | 🟡 PARTIAL | An industry pattern — a searchable list of every service with metadata. | — | | C8 | Team autonomy | 🟡 PARTIAL | A Team Topologies concept — teams ship without dependencies on a central function for every change. | — | | C9 | Portal vendors (e.g. Port.io) | 🟡 PARTIAL | Third-party SaaS portal vendors such as Port.io — publicly-documented, used as reference examples for the IDP pattern. | — | | C6 | Scorecards | 🔴 NOT STARTED | An industry pattern — a rubric applied to services (owner, CI, security, SLOs). | — | | C7 | Self-service provisioning | 🔴 NOT STARTED | An industry pattern — click → new env without a ticket. | — |
4D — Agentic infrastructure & control-plane concepts (added for the target-role Track D — see §11)
Source JD asks for: agentic control planes, identity/access control, sandboxing, network/connectivity architecture, MCP/A2A protocols, distributed systems, API Gateways, Kubernetes, cloud-native architecture, enterprise security architecture. Mapped to new concept refs below — all 🔴 until M7 starts. | # | Concept | Status | Plain-English (bronze — to fill in as taught) | Last check | |---|---|---|---|---| | D1 | Agentic control plane vs data plane | 🔴 NOT STARTED | Control plane = the system that decides what agents are allowed to do and with what identity; data plane = the actual task/tool execution. Same split as Kubernetes control plane (API server, scheduler) vs worker nodes. | — | | D2 | Agent identity (workload identity) | 🔴 NOT STARTED | An agent needs its own identity, distinct from the human who launched it — so access can be scoped, audited, and revoked per-agent. | — | | D3 | Agent authN/authZ, scoped tokens | 🔴 NOT STARTED | Agents should hold short-lived, narrowly-scoped credentials for exactly the tools/data they need — not a human's full permission set. | — | | D4 | Sandboxing agent code execution | 🔴 NOT STARTED | Untrusted or generated code an agent runs needs isolation (e.g. microVM or container boundary) so a bad tool call can't touch the host system. | — | | D5 | Agent network & connectivity architecture | 🔴 NOT STARTED | Controlling what an agent can reach over the network — egress allow-lists, service mesh routing — so an agent can't call arbitrary endpoints. | — | | D6 | MCP (Model Context Protocol) | 🔴 NOT STARTED | Cross-ref A22. A standard interface for connecting an agent to external tools/data sources, instead of every integration being bespoke. | — | | D7 | A2A (Agent2Agent protocol) | 🔴 NOT STARTED | A standard for agents to discover and communicate with other agents (not just tools) across systems/vendors. | — | | D8 | Agent orchestration frameworks | 🔴 NOT STARTED | Frameworks (e.g. LangGraph, AutoGen) that coordinate multi-step or multi-agent workflows — sequencing, state, handoffs. | — | | D9 | API Gateway | 🔴 NOT STARTED | A single managed entry point for API traffic — auth, rate limiting, routing — sitting in front of backend services. | — | | D10 | Kubernetes fundamentals | 🔴 NOT STARTED | Container orchestration — pods (running containers), services (stable networking), namespaces (isolation), ingress (external entry). | — | | D11 | Service-to-service communication | 🔴 NOT STARTED | How internal services talk to each other securely — mTLS, service mesh (Istio/Linkerd) — vs how external clients talk to the API Gateway. | — | | D12 | Distributed systems fundamentals | 🔴 NOT STARTED | CAP theorem, idempotency, eventual vs strong consistency — the trade-offs any multi-node platform has to make. | — | | D13 | Cloud-native architecture patterns | 🔴 NOT STARTED | Microservices, 12-factor app principles, stateless services designed to scale horizontally. | — | | D14 | Enterprise security architecture | 🔴 NOT STARTED | Zero trust, least privilege, defence in depth — applied to a platform where the "user" is sometimes an autonomous agent. | — | | D15 | Agent lifecycle management | 🔴 NOT STARTED | Versioning, deploying, rolling back, and deprecating agents in production the same way you would a service. | — | | D16 | Multi-tenancy & isolation for agent platforms | 🔴 NOT STARTED | Making sure one team's/customer's agents can't see or affect another's, on shared infrastructure. | — | | D17 | Observability for agentic systems | 🔴 NOT STARTED | Tracing an agent's reasoning steps and tool calls end-to-end, not just logging the final output — needed to debug and audit agent decisions. | — | | D18 | Platform vision-setting for infra PM | 🔴 NOT STARTED | Translating an emerging open standard (e.g. MCP) into a production-grade, enterprise capability roadmap — the specific "define and drive the vision" skill the JD leads with. | — |
§5 — Spot-check log
Date
Concept
Method
Outcome
Status
2026-05-21
A4 Chunking
S05 unprompted
"Fridge with ingredient boxes."
🥉
2026-05-21
A5 Retrieve
Drifted to "speed" → redone
"Scan fridge, get matching ingredients."
🥉
2026-05-21
A6 Augment
Drifted into retrieve → redone
"Order + ingredients in chef's hands."
🥉
2026-05-21
A7 Generate
First try
"Cook only from handed cards."
🥉
2026-05-22
A4 Chunking
S06 recap
Held.
🥉
2026-05-22
A5 Retrieve
S06 recap — drifted to "the order, no action"
Redone.
🥉
2026-05-22
A6 Augment
S06 recap
Held.
🥉
2026-05-22
A7 Generate
S06 recap
Held.
🥉
2026-05-22
B13 Cloud vs on-prem
Taught fresh, drifted to "data lives there" → redone
"Hybrid — on-prem for regulated workloads, cloud for scale and experiment."
🥉
2026-05-22
B8 GHA reaching on-prem
Taught fresh — three slips
Stopped honestly when tired.
🟡
2026-05-22
A5 Retrieve
S07 recap — drifted a 3rd time to "checked"
Redone with verb lock. ON WATCH.
🥉
2026-05-22
B13 Cloud vs on-prem
S07 recap — held, "historic records" flag
Promoted to Silver.
🥉🥈
2026-05-31
A5 Retrieve
S08 recap — held ("fetching")
Hold 1 of 3.
🥉
2026-05-31
B13 Cloud vs on-prem
S08 recap — held at Silver
Held. Decider: "sensitivity decides."
🥉🥈
2026-05-31
B8 GHA reaching on-prem
S08 — Bronze owned solo; Silver Problem + Fix scaffolded
Bronze owned, Silver underway.
🥉
2026-05-31
A5 Retrieve
S09 recap — drifted (led with "matching")
Streak reset to 0.
🥉
2026-05-31
B13 Cloud vs on-prem
S09 recap — held; framing flag coached
Held.
🥉🥈
2026-05-31
B8 Fix
S09 — restated solo, clean
Owned solo.
🥈
2026-05-31
B8 Why-it-wins
S09 — held after teach
Silver complete.
🥈
2026-05-31
B8 Gold
S09 — attempted, regressed under load
Banked. Gold → S10.
🥈
2026-06-02
A5 Retrieve
S10 — held ("gather and fetch")
Hold 1 of 3.
🥉
2026-06-02
A6 Augment
S10 — boundary clean both sides
Held.
🥉
2026-06-02
A7 Generate
S10 — bonus, unprompted
Held.
🥉
2026-06-02
B8 Gold
S10 — flip broke; degraded under load on poll target. Stopped honestly.
Gold → S11.
🥈
2026-06-19
A5 Retrieve
S11 — held ("gathering and fetching from a knowledge base")
Hold 2 of 3.
🥉
2026-06-19
B13 Cloud vs on-prem
S11 — held at Silver; generic framing correct
Held.
🥉🥈
2026-06-19
B8 Gold
S11 — three beats clean; migration setting used
Gold owned. 🥇
🥇
2026-06-19
A10 Embedding
S11 — taught fresh; numbers not words; computer + laptop
Bronze owned.
🥉
2026-06-19
A11 Vector database
S11 — taught fresh; stores, searches fast, closest match
Bronze owned.
🥉
2026-06-19
A5 Retrieve
S12 — held ("fetch, gather and pull, matched to original request")
Hold 3 of 3 — OFF WATCH PERMANENTLY. 🎉
🥉
2026-06-19
A6 Augment
S12 — retrieved chunks + original question combined; boundary clean
Held.
🥉
2026-06-19
A28 A/B testing
S12 — taught fresh; two versions, real users, measure what works; AI-specific insight landed
Bronze owned.
🥉
2026-06-19
A10 Embedding Silver
S12 — embedding model → vector (vectorisation) → stored in vector DB; real terms clean
Silver owned.
🥉🥈
2026-06-19
A11 Vector DB Silver
S12 — question → embedding model → query vector → similarity search → cosine similarity → chunks returned
Silver owned.
🥉🥈
2026-07-31
B13 Cloud vs on-prem
S13 — held; landed as one clean decider sentence, no listing
"Sensitivity decides the split of a workflow — whether it sits on-prem or in the cloud."
🥉🥈
2026-07-31
A11 Vector database
S13 — regressed across 3 attempts; merged back into A10, dropped retrieval mechanism entirely
Flagged stale per under-load regression stop signal, not pushed through tired.
🟠
2026-07-31
A10 Embedding
S13 — same session, same blending pattern
Flagged stale alongside A11.
🟠
2026-08-03
A10 Embedding
S14 live — drifted twice (DB-blending, then alphabet-letter detour), corrected each time, landed solo third attempt
"Turns text into a list of numbers, by counting how many times each word in a fixed vocabulary appears in that text." Bronze re-landed clean.
🥉
2026-08-03
A11 mechanism
S14 live — word-overlap count performed solo and correct (Pixel 8=2, iPhone 15=1, Porsche 911=0); one-sentence synthesis regressed under load
Mechanism demonstrated, synthesis still owed — redo fresh next session.
🟠
2026-08-03
A8 Refusal threshold
S14 live — explained back solo using real rag_demo.py output (France query, 0.00 score, below 0.12 threshold)
Bronze owned.
🥉



§6 — NEXT (resume here)
Session 15 plan
STEP 1: Redo A11's one-sentence synthesis, fresh — not tired. The mechanism is understood (word-overlap counting done solo and correctly in S14) — what regressed was compressing it into one clean sentence under load. Start with this fresh, before anything else, while energy is highest. Target: "Question → embedded the same way as every stored item → compared against every stored vector via cosine similarity → ranked by score → top-k returned, regardless of whether it makes human sense." STEP 2: A10 Silver uplift — re-verify fresh, don't assume it still holds. Bronze re-landed clean in S14, but Silver (the "stored in the vector database" framing) wasn't re-tested — and that framing is exactly what caused the DB-blending drift twice already. Re-attempt Silver carefully, keeping embedding and storage as two visibly separate steps. STEP 3: A13 — explain back solo. Not yet done. Use rag_demo.py's stopword filtering as the anchor: why did raw bag-of-words over-match on "the," and how did filtering fix it? STEP 4: Explain B19 (Snyk) and B26 (Compliance as code) back in your own words — Bronze. Carried over from S13/S14, still not done. Both are real, working code in ci.yml — point at the actual file. STEP 5: agentic_workflow_demo.py — run it, then explain back solo, A21 Bronze. Untouched in S14. Same pattern as today's rag_demo.py win: run it first (it may also need creating fresh in the repo — check before assuming it exists), watch real output, then explain the observe→plan→act→reflect loop and the "suggest, never auto-apply" boundary (A24) without the file open. STEP 6: A12 Pinecone — Bronze, if energy allows. Still not started. Completes the A10–A12 vector bundle and clears Track C trigger condition 3. Do NOT this session:

Start Track C / M6 build (condition 2 still open — M2 or M5 Chunks 2–3 needed).
Advance to Chunks 2–6 of server/chat.js.
Start Track D / M7 build — A21 needs to be explained back solo (not just seeded) before Track D formally kicks off.


Exact opener line for Session 15
Resume Session 15. Read BUILD_LEARN_LOG.md first — PERMANENT RULE. Start with A11's one-sentence synthesis while energy is fresh — the mechanism is already understood (S14), it's just the compression into one clean sentence that regressed under load. Then re-verify A10 Silver carefully (don't let "stored in the vector database" cause the DB-blending drift a third time). Then A13 explained back solo using rag_demo.py's stopword fix. Then check whether learning/agentic_workflow_demo.py actually exists in the repo (rag_demo.py didn't, despite being "seeded" — verify before assuming), run it, then explain A21 back solo. If energy allows, A12 Pinecone Bronze. Note the session start time. Slow is correct. Watch all five failure modes and the under-load regression stop signal — S14 hit it once on A11 and stopped honestly rather than pushing through.


Still open (not lost, not done)
A11 one-sentence synthesis — mechanism understood S14, synthesis regressed under load. Redo fresh, first thing, next session.
A10 Silver uplift — Bronze re-landed clean S14, Silver not re-verified.
A13 — still seeded, not yet explained back solo.
A12 Pinecone — not started. Completes the vector bundle (Track C trigger condition 3).
A21 Agentic AI — agentic_workflow_demo.py still untouched; verify it actually exists in the repo before assuming (rag_demo.py didn't, despite being logged as "seeded").
A28 Silver — Bronze owned S12. Silver still queued.
B19 (Snyk) + B26 (Compliance as code) — seen live in real code S13, not yet explained back in own words.
Track C trigger — condition 1 met (B8 Gold). Condition 2 open (M2 or M5 Chunks 2–3). Condition 3 partially open (A12 needed).
Gold-priority pass — pick the 4–5 concepts most needed at Gold for senior conversations.
Silver / Gold uplift for A3–A7 and B13 — Bronze locked, layered uplift queued.
M1 Stations 3–6 — queued.
M5 Chunks 2–6 — queued.
Codespaces habits worth banking: always type commands fresh rather than trusting Up-arrow recall or paste (clipboard can silently hold stale/broken text); double-check a file actually exists in the repo before assuming a "seeded" artifact was ever pushed; watch for stray duplicate lines and indentation after any paste.
Showcase repo — extract vector-db-demo + rag_demo.py (+ the agent once verified) into a standalone ai-learning-toolkit repo alongside bank-of-sandhu, each folder self-contained with its own README. Run §8 scrub on it too before it goes public.


Now / Next / Later
NOW (just done — Session 14):

✅ vector_demo.py — 3 real bugs fixed by reading actual tracebacks, extended with iPhone/Pixel, ran clean.
✅ A10 Embedding — re-landed clean at Bronze after two drifted attempts, corrected each time.
🟡 A11 — mechanism demonstrated solo and correctly; one-sentence synthesis regressed under load, honestly stopped rather than pushed through.
✅ rag_demo.py — discovered it never actually existed in the repo, created it directly in Codespaces, ran clean first try.
✅ A8 Refusal threshold — moved from seeded to explained back solo, using real output.
✅ Time investment logged (§9). NEXT (Session 15):
🔁 A11 one-sentence synthesis — fresh attempt, first thing.
🔁 A10 Silver — re-verify without DB-blending.
🆕 A13 — explain back solo via rag_demo.py's stopword fix.
🆕 Verify + run agentic_workflow_demo.py, then explain A21 back solo.
🔁 Explain B19 + B26 back in own words, pointing at real code.
🚀 A12 Pinecone — Bronze, if energy allows.
⏱️ Log start time at open, end time + duration at close. LATER (queued, in priority order):
Track D / M7 kickoff — Agentic control planes (target infra-PM role, §11) — starts once A21 Bronze lands solo.
Showcase repo — standalone ai-learning-toolkit repo, vector-db-demo + rag_demo + agent as self-contained folders.
Track C / M6 start — once all three trigger conditions met (condition 2 still open).
M1 Stations 3–6 — self-hosted runner, firewall request, containerised testing, headless browser testing.
M5 Chunks 2–6 — chunking code, scoring, system prompt, API call, response handling.
Silver + Gold uplift for already-Bronze concepts.
M2 Code quality gates (SonarQube worked example — Snyk now partially covered via B19).
M3 Artefact management.
M4 Platform patterns applied.
DORA metrics (B25) — layered on top of CI/CD bundle.
Governance / evals (A23, A24) — once vector DBs owned.


§7 — Talking points (banked, for general professional use)
On RAG (Session 05 — gold-level):

"I'm building a RAG-based chatbot end-to-end — chunking source documents, scoring relevance per query, and enforcing source-only generation with citations. Same chunking, retrieve, augment, generate pipeline you'd use for an internal knowledge bot, just pointed at compliance standards." On hallucination safety (Session 05 — gold-level): "Think of the model as a chef. Hallucination is the chef adding a sprinkle of something the customer didn't ask for — could be an allergy. RAG forces the chef to cook only from handed cards and label every ingredient." On R-A-G end-to-end (Session 06 — silver, single sentence): "Retrieve is the kitchen fetching and gathering the ingredients that match the order. Augment is handing the order plus those ingredients to the chef. Generate is the chef cooking only from what's been handed over, with the customer's allergies in mind." On cloud-on-prem split (Session 07 — silver, polished): "In modern regulated finance you typically run a hybrid model — on-prem for regulated workloads, public cloud for flexibility to scale and experiment. The split is workload-driven — sensitivity decides which side a workload sits on." On the three-track build (Session 07 close — draft): "I'm building a regulated-banking prototype on my own GitHub as a learning vehicle. One repo, three parallel tracks — a RAG chatbot deepening into vectors and evals, a CI/CD toolchain wiring GitHub Actions, SonarQube, Snyk and Artifactory onto the repo, and an analytics dashboard with an AI summarisation layer on top. Same shape as an enterprise pipeline at smaller scale, but I get to learn each tool by actually wiring it in." On GHA → on-prem (Session 11 — Gold): "GitHub's cloud runners can't reach into an on-prem network — the firewall blocks all inbound from the public internet. The fix is a self-hosted runner sitting inside the network that polls GitHub outbound for work — when a job is triggered, the runner picks it up and executes it on-prem. The reason this works well in a regulated environment is that no inbound hole has been cut — the network perimeter is completely unchanged, so security and audit have nothing new to defend." On embeddings (Session 12 — Silver): "An embedding model converts text into a vector — a long list of numbers that encodes meaning. Similar meanings produce mathematically close vectors, so 'computer' and 'laptop' end up near each other even though the words look nothing alike. Those vectors get stored in a vector database." On vector databases (Session 12 — Silver): "When a user asks a question, it goes through the embedding model too — producing a query vector. The vector database then runs a similarity search, using cosine similarity to find the stored vectors closest in meaning to the question. Those are the chunks that get retrieved." On A/B testing for AI (Session 12 — Bronze): "A/B testing for AI is how you find out which version of something actually works in the real world — two prompts, two models, two chunking approaches — split across real users and measured. The key insight with AI is that changes that look like improvements in the lab can behave completely differently once the model and real users are involved." On real CI/CD diagnosis (Session 13 — practical, not rehearsed): "I found a CI/CD pipeline already sitting in my own repo that had been failing silently — a validation job and a compliance-check job both dying from the same root cause: six required regulatory doc files that had never actually been created. I traced both failures back to that one gap, created the missing files, and watched the pipeline go green. Same loop as production incident triage — read the logs, find the actual root cause, fix the real thing, verify it's green."


§8 — Sanity check (run after every commit)
Before pushing this file to a public branch, run the scrub locally. From the repo root:

grep -i -n -E "current employer|my employer|my company|my bank|my team lead|my manager|my CTO|whiteshield|quantum|career navigator|adcb|al reem|nationwide|barclays|hsbc|lloyds|natwest|santander|santander uk|monzo|starling|revolut|wise|cursor|uae role|dubai role|abu dhabi role|hiring manager|recruiter|interview|application|job code|JD\b|active target|watching target|bloomberg" BUILD_LEARN_LOG.md

If grep returns nothing, the file is safe. If it returns lines, edit those lines out before pushing. Recommended habit: make this a pre-commit hook on the repo so it runs automatically. Example .git/hooks/pre-commit:

#!/usr/bin/env bash

if grep -i -q -E "current employer|whiteshield|quantum|adcb|al reem|nationwide|hiring manager|recruiter|JD\b|active target|watching target|bloomberg" BUILD_LEARN_LOG.md; then

  echo "⛔  Scrub check failed — identifiers found in BUILD_LEARN_LOG.md. Edit before committing."

  grep -i -n -E "current employer|whiteshield|quantum|adcb|al reem|nationwide|hiring manager|recruiter|JD\b|active target|watching target|bloomberg" BUILD_LEARN_LOG.md

  exit 1

fi

echo "✅  Scrub check passed."
Make it executable: chmod +x .git/hooks/pre-commit. This block stays in the file. It's not a one-time check — it's a permanent safety rail.
§9 — Time investment log
Tracks actual hours invested in hands-on learning, logged at every session close. Running total starts from Session 13 — Sessions 01–12 weren't timed, so the total below reflects only tracked sessions, not all-time effort. | Session | Date | Start | End | Duration | Running total (tracked) | |---|---|---|---|---|---| | Session 13 | 2026-07-31 | ~16:15 | ~20:00 | 3h 45m | 3h 45m | | Session 14 | 2026-08-03 | 11:46 | 17:12 | 5h 26m elapsed (includes an unlogged lunch break — active time meaningfully less; logged honestly rather than guessed precisely) | 9h 11m elapsed-tracked | How this gets logged going forward:

At session open, note the wall-clock start time.
At session close — triggered by an explicit "close session" / "wrap up the log" request — note the end time, compute duration, add a new row, update the running total.
Short or long sessions are both fine. The point is an honest record of time invested, not hitting a target.


§10 — Real-world examples mapped to concept refs (from job application answers)
These are answers I wrote for a live job application, based on my actual CV. Kept here because they're the clearest test of whether a concept has moved from "explained in an analogy" to "usable in a real, high-stakes sentence." Each one is tagged against the concept refs in §4 so I can see where the curriculum is already ahead of my instinct, and where it still needs to catch up.

⚠️ Scrub before any public push. Unlike the rest of this file, these four answers name real employers and real numbers on purpose — that's the point, they're application material, not a sanitised talking point. Run §8 before this file goes anywhere near a public branch; these paragraphs are exactly what that grep is designed to catch.

Q1 — Most complex B2B product owned → maps to Track B Concept refs: B7, B8 (🥇 Gold), B14, B17, B18, B19, B20, B24, B26

Owned the enterprise CI/CD and developer platform at a UK high-street bank — the internal toolchain hundreds of engineering teams used to build, secure, and ship software (GitHub Actions, GitHub Advanced Security, Copilot, Snyk, SonarQube Enterprise, Artifactory), replacing legacy tooling (TFS, Jenkins, Harness). Owned the backlog end-to-end, drove 90% engineering-wide adoption, cut onboarding from 14 days to days, delivered £4m+ in combined annual savings from decommissioning the legacy stack.

Why this one matters for the curriculum: this is the real, full-scale version of what M1–M4 simulate on bank-of-sandhu at toy scale. B8 is the only concept in this answer already owned at Gold — it shows in the fluency: the answer states the outcome (adoption, savings, onboarding time) without needing to explain the mechanics, because Gold means the mechanics are assumed knowledge. B18 (SonarQube), B20 (Artifactory), and B26 (compliance as code) are still 🔴/🟡 in §4 — they appear in this answer only as nouns in a list, not as explained mechanisms. That gap is the tell: I can name the tool I decommissioned, but I can't yet walk through why SonarQube vs Snyk are different checks the way I can for B8. Good marker for the Gold-priority pass queued in §6.

Q2 — Most workflow-intensive platform (outside creative/marketing) → outside Track A/B, general PM complexity Not concept-mapped to A/B/C refs — this is a stakeholder-complexity example, not a tooling one. Kept as a reminder that not every strong answer needs to trace back to the CI/CD or AI curriculum; some just need clean structure (problem → cross-team complexity → simplification → measurable outcome).

Re-engineered customer financial-difficulty repayment journeys at a UK bank, coordinating credit risk, policy, operations, engineering, and external debt-management charities on a single regulator-scrutinised workflow. Replaced a 72-question manual script with a real-time API-driven customer snapshot, simplified 30+ repayment options into 12 scalable plans — cut call-handling cost from £18 to £7, delivered £1.2m annual savings, cited by the regulator as industry-leading.

Q3 & Q4 — AI-powered product shipped / personally built and shaped → maps to Track A Concept refs: A21 (🟡 queued for S14), A24, A29 — and directly feeds the Session 14 agentic design task

Shaped an AI/LLM-based proof-of-concept at a payments fintech for settlement anomaly detection — automatically flagging missing next-day merchant settlements instead of relying on manual reconciliation. Scoped it detect-and-surface rather than auto-resolve (settlement data is financially sensitive; merchants needed to verify and act themselves), grounded detection in each merchant's own historical pattern rather than a fixed threshold to keep false positives low. Reduced settlement-related support contacts as part of a broader AI-enabled self-service push.

Why this is the most useful example in this section: it's a real precedent for the exact task queued at the top of §6 — designing an Agentic AI use case (A21) at Bronze. The "detect-and-surface, not auto-resolve" decision is a governance/trust trade-off (A24, still 🔴), and "grounded in the merchant's own history instead of a fixed threshold" is a measurement-framework decision (A29, still 🔴). When Session 14 gets to designing the CI-failure-triage agent, this is the pattern to reuse: pick the scope boundary (what the agent does vs. hands back to a human) before anything else, and ground it in run-specific context rather than a static rule.


§11 — Target role gap analysis: Agentic Infrastructure PM
Added after reviewing a live JD for an "Agentic Infrastructure" product manager role, focused on agentic control planes. This is the clearest external validation yet of the curriculum split: the JD is basically Track A (agent behaviour) + Track B (platform/CI-CD instincts) + an entirely new layer (Track D — identity, sandboxing, protocols, distributed systems) that nothing in M1–M6 covers. Kept here so the gap is visible at a glance rather than re-derived every time a similar JD shows up.

Responsibility → what's already owned vs new:

JD responsibility
Closest owned/partial concept
Gap (Track D ref)
Define and drive vision for agentic control planes
B8 (🥇 Gold) shows I can reason about a control-boundary problem (GHA ↔ on-prem) end-to-end — same shape of thinking, different domain
D1, D18 — no agentic-specific control-plane vocabulary yet
Translate open-source/industry standards into enterprise infra
The whole Track B pattern (GHA, Snyk, SonarQube wired onto a real repo) is this exact muscle, just for CI/CD standards not agentic ones
D6, D7 — MCP/A2A are the standards in question, A22 (MCP) still 🔴
Integrate agentic capabilities across AI platform teams
A21 (🟡 queued S14) is the first real touch on agent design
D8 — orchestration frameworks, multi-team integration not yet touched
Platform strategy for identity, access control, sandboxing, network/connectivity
B24 (secret management, 🟡) is adjacent but human/service-secret focused, not agent-identity focused
D2, D3, D4, D5 — all net-new
Work with AI product teams on real-world usage → infra requirements
Direct match to my actual PM background (enterprise platform backlog ownership, §10 Q1) — this is a transferable strength, not a gap
—
Partner with engineering on scalable, resilient system architecture
C1–C3 (platform engineering, DevEx, IDP concepts, 🟡) are the closest existing frame
D10, D11, D12, D13 — Kubernetes, service mesh, distributed systems, cloud-native patterns all net-new
Anticipate how agentic systems evolve, shape roadmap
A28 (A/B testing for AI, 🥉) and A29 (KPI frameworks for AI, 🔴) are the measurement half of this; the forecasting half has no owned concept yet
D18


"You'll need to have" → what's already owned vs new:

JD requirement
Status against current curriculum
5+ yrs technical PM in AI/platform/cloud/security/infra
✅ Already true — real experience (enterprise CI/CD + API platform ownership, §10 Q1)
Experience with LLMs, GenAI, agent frameworks, orchestration, production requirements
🟡 Partial — A1 (LLM), A3 (RAG) owned; A21 (Agentic AI) now seeded via agentic_workflow_demo.py; D8 (orchestration frameworks) not started
Building/operating large-scale platform infra for developers
✅ Real experience (Track B worked example is literally modelling this)
Identity, authN/authZ, enterprise security architecture
🔴 Gap — D2, D3, D14 all net-new. Highest-priority gap — appears twice in the JD (as a platform strategy area and as a "need to have")
Distributed systems, service-to-service comms, API Gateways, Kubernetes, cloud-native
🔴 Gap — D9–D13 all net-new. Second-highest-priority gap — broad and foundational
Hands-on with MCP, A2A, interoperability patterns
🟡 Partial — MCP already queued as A22; A2A is entirely new (D7)
Cross-functional work with engineering, security, product, platform
✅ Real experience (§10 Q1 stakeholder list: Engineering, Security, Architecture, CDO org)
Communication/storytelling, articulate technical vision
🟡 Partial — B8's Gold-level talking point (§7) is proof this skill exists; needs a Track-D-specific version once D1–D18 are further along


Reading the table: the "real experience" rows are already strong and need no curriculum time — they're PM/stakeholder skills, not technical ones. The two real gaps are identity/security architecture (D2, D3, D14) and the Kubernetes/distributed-systems/API-Gateway cluster (D9–D13) — both zero-to-one right now. M7's step ordering in §2 was sequenced to hit those two clusters first, right after A21 lands, rather than saving them for later.



End of file. Paste this whole file as the opener for the next session.

