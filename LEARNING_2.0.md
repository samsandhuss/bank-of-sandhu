# Sardar Subhpreet Singh Sandhu 2.0 — The Next Chapter

> Built like a Zonda 760: limited run, no longer made, worth more every year.
> Knowledge compounds. So does earning.

**Started:** Friday 16 October 2026
**Old learning:** `BUILD_LOG.md` stays in the folder as the archive (Sessions 01–17). Nothing deleted, nothing active.

---

## The one rule

**Can I say it cold to an engineer, with no notes?** ✅ yes / ❌ not yet.
No Bronze/Silver/Gold. No "seeded". Just this.

## North Star

GenAI Product Owner for knowledge systems in a regulated bank: RAG, evals, guardrails, governance.
Every module below is one paragraph of that job.

## Daily routine — 40 minutes, weekdays

| Min | Step |
|---|---|
| 5 | **Warm-up:** say yesterday's sentence out loud, no notes |
| 15 | **Learn:** one concept, taught through my own repo |
| 10 | **Do:** one small real thing (run, test, edit, commit) |
| 5 | **Say:** write the one sentence I'd use with an engineer + the one question I'd ask them |
| 5 | **Words & stories:** a few new words with their roots (Latin / Greek), plus one Sikh sakhi and one Greek myth |

## Word bank (use each one in a real sentence this week)

| Date | Word | Root | Means | My sentence |
|---|---|---|---|---|
| 16 Oct | pragmatic | Greek *pragma* — a deed, a thing done | practical, focused on what works | |
| 16 Oct | mitigate | Latin *mitis* (gentle) + *agere* (to do) | to make a risk less severe | |
| 16 Oct | robust | Latin *robur* — oak | strong, hard to break | |
| 16 Oct | articulate | Latin *articulus* — a small joint | to express clearly, joint by joint | |

## Stories told

| Date | Sikh sakhi | Greek myth |
|---|---|---|
| 16 Oct | Bhai Lalo and Malik Bhago — honest earning | Prometheus and Epimetheus — forethought vs afterthought |

---

## The 12 engineer conversations (the whole curriculum)

| # | Module | The conversation | Head start from the archive | Cold? |
|---|---|---|---|---|
| 1 | M1 RAG | "Walk me through how our RAG pipeline works." | `rag_demo.py` runs; restaurant analogy owned; re-verified S17 | ❌ |
| 2 | M1 RAG | "How should we chunk and tag our documents?" | Chunking owned at analogy level only | ❌ |
| 3 | M1 RAG | "Why did it answer from the wrong passage?" | Real flaw found S17: 0.41 vs 0.18, assess ≠ assessed | ❌ |
| 4 | M2 Evals | "How do we know the RAG is actually any good?" | Retrieval vs generation quality introduced S16 | ❌ |
| 5 | M2 Evals | "What goes in the eval set, and where does it run?" | `test_retrieval.py` + `vector-check.yml` already green in CI | ❌ |
| 6 | M3 Guardrails | "What's prompt injection and how do we stop it?" | One-liner drafted S16 | ❌ |
| 7 | M3 Guardrails | "How do we stop it leaking confidential data?" | — | ❌ |
| 8 | M3 Guardrails | "When should it refuse to answer?" | 0.12 threshold explained solo (France = 0.00) | ❌ |
| 9 | M4 Tools | "LangChain, Azure OpenAI, Pinecone — what are we buying?" | Self-hosted-stack line drafted; vector DB landscape covered S15 | ❌ |
| 10 | M4 Trends | "GraphRAG, RLHF, agents — what are they and when do they matter?" | One-liners drafted S16; agent demo needs finding/rebuilding | ❌ |
| 11 | M5 Access | "How do we stop someone retrieving a document they shouldn't see?" | — | ❌ |
| 12 | M6 Value | "How would you show leadership this is working?" | Real career evidence; governance-by-design line banked S16 | ❌ |

Banked sentences from Sessions 01–17 live in the archive, §7. Reuse them; don't rewrite them.

## Module plan (~5 weeks)

| Module | Days | Builds |
|---|---|---|
| M1 RAG house view | 1–3 | Conversations 1–3 |
| M2 Evals | 4–8 | 4–5 + a labelled eval set running in CI |
| M3 Guardrails | 9–13 | 6–8 + a prompt-injection test case |
| M4 Tools & trends | 14–17 | 9–10 |
| M5 Access & privacy | 18–20 | 11 |
| M6 Running the product | 21–24 | 12 |
| Mock conversation | 25 | All 12, cold, back to back |

### M1 in detail
- **Day 1** — The pipeline end to end, in engineer words (`rag_demo.py`). → Conversation 1
- **Day 2** — Chunk size, overlap, metadata tags. → Conversation 2
- **Day 3** — Keyword vs semantic retrieval, using my own Consumer Duty flaw (0.41 vs 0.18). → Conversation 3

---

## Track P — Platform Product Owner (my current role)

**Why:** I own Developer Experience — the front door that onboards applications onto GitHub, SonarQube, Artifactory and the rest of the toolchain. I need to talk about it as fluently as I'll talk about AI.
**When:** Tuesday and Thursday, an extra 20 minutes (same Learn → Do → Say shape). Two conversations a week, finishing alongside the AI modules.
**How:** every conversation uses `bank-of-sandhu` as a small mirror of the real platform — its own `ci.yml`, code scanning, Snyk job and compliance check.

| # | The conversation | Head start from the archive | Cold? |
|---|---|---|---|
| P1 | "What is the DevEx front door, and who is it for?" | Portal / catalog / golden-path concepts seen | ❌ |
| P2 | "Walk me through onboarding an application onto the platform, end to end." | Real `ci.yml` in my repo; 14 days → days onboarding outcome | ❌ |
| P3 | "What does GitHub give us beyond storing code?" | Actions, code scanning, four pipelines green from one commit | ❌ |
| P4 | "SonarQube vs Snyk — why do we need both?" | Snyk job live in my `ci.yml` | ❌ |
| P5 | "What is Artifactory, and why centralise artefacts?" | — | ❌ |
| P6 | "What's a quality gate, and who decides the bar?" | Compliance-as-code check in my CI | ❌ |
| P7 | "How do our pipelines reach on-prem safely?" | Self-hosted runner explanation owned at Gold (S11) | ❌ |
| P8 | "How do we measure developer experience?" | 90% adoption, onboarding time, legacy decommission savings | ❌ |
| P9 | "Golden paths, scorecards, service catalogue — what are they for?" | Concepts seen, not explained | ❌ |
| P10 | "Where does AI fit in the developer platform?" | Retrieval tests in CI — the bridge to the AI track | ❌ |

**My real career stories** (CI/CD platform outcomes, the repayment-journey redesign, the settlement-anomaly AI scoping) live in the archive, §10. Track P and M6 reuse them.

**Track P schedule:** Week 1 → P1–P2 · Week 2 → P3–P4 · Week 3 → P5–P6 · Week 4 → P7–P8 · Week 5 → P9–P10

## What I carry over from the archive

**Habits that work**
- Run the script first, then explain from the real output — never from memory.
- Anything shaky: write it before saying it.
- Embeddings = "a row of numbers for a piece of text". No pixels, no spreadsheets.
- Run demos from the terminal, not the chat panel.
- Idle Codespace? `pip install chromadb scikit-learn pytest` first.
- Check the file name in the tab before explaining anything. Root breadcrumb before "Add file".

**Watch for**
- Reaching for jargon when tired → stop, say it plainly.
- Jumping to a shiny new topic when a redo feels hard → finish today's one thing.
- Embeddings drifting to "images" → say "text" out loud.
- Tired answers shrinking to single words → that's the stop signal, not a failure.

**Hours already invested:** 10h 52m tracked (Sessions 13–17) + Sessions 01–12 untracked.

## Modules covered so far (Sessions 01–17, archive)

| Old module | What we covered | Status at reset |
|---|---|---|
| M1 GitHub + Actions for non-devs | Cloud vs on-prem split; pipelines reaching on-prem via a self-hosted runner | Stations 1–2 owned (Station 2 at Gold); Stations 3–6 not started |
| M2 Code quality gates | Snyk job found live in `ci.yml`; code scanning on with 3 High findings parked as talking points | Partly seeded → now in Track P |
| M3 Artefact management | — | Not started → now in Track P |
| M4 Platform patterns | Portal, catalogue and golden-path concepts seen | Not started → now in Track P |
| M5 AI in the SDLC | RAG pipeline owned (chunk, retrieve, augment, generate, cite, refuse); built `rag_demo.py`, `vector_demo.py`, `vector_pipeline_real.py`; `test_retrieval.py` running in CI; keyword vs semantic flaw found; evals introduced | In progress → now Modules 1–6 |
| M6 Dashboard + AI overlay (Track C) | — | Not started → parked |
| M7 Agentic infrastructure (Track D) | `agentic_workflow_demo.py` built once (file now missing) | Not started → parked |

Full detail, session by session, stays in `BUILD_LOG.md`.

## Parked (not deleted)

Track C dashboard · Track D agentic infrastructure · M1 Stations 3–6 · `chat.js` chunks 2–6.
(Old M2 quality gates, M3 artefacts and M4 platform patterns now live inside Track P, in a lighter form.)

---

## Daily log

| Day | Date | Module | Sentence I can now say | Question I'd ask an engineer | Done |
|---|---|---|---|---|---|
| 1 | 2026-10-16 | M1 | "First we chunk the documents and index them, once. For each question, retrieval fetches the best-matching chunks, augment adds them to the question, and the LLM answers only from those chunks, with citations — or refuses if the best match scores below the threshold." | "What's our top-k, and what happens when the best match scores low?" | ✅ with word bank — say it cold on Day 2. `rag_demo.py` run still owed. |

---

*Public file — no employer or colleague names, ever. Run the scrub before every commit.*
