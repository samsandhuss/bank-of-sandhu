## §6 — NEXT (resume here)

### Session 16 plan

**STEP 1: A10/A11 — changed method, do not attempt verbally first.**
The "images" drift survived a code-grounded scaffold in S15 — the first drift strong enough to do that. Verbal recall under fatigue is where this keeps breaking, so don't repeat the same method and expect a different result. Instead: write the one-sentence synthesis as a code comment/docstring directly above `build_index()` and `query()` in `vector_pipeline_real.py`, untimed, no pressure to say it out loud first. Only attempt saying it out loud once the written version is solid and correct.

**STEP 2: Once A10/A11 written version holds, re-verify A10 Silver framing** ("stored in the vector database") without letting it cause the DB-blending drift a third time.

**STEP 3: A13 — explain back solo,** using `rag_demo.py`'s stopword filtering as the anchor. Carried from S14/S15.

**STEP 4: Explain B19 (Snyk) and B26 (Compliance as code) back in your own words — Bronze.** Carried from S13/S14/S15, still not done.

**STEP 5: Verify `agentic_workflow_demo.py` exists in the repo, run it, explain A21 back solo.**

**STEP 6: A12 Pinecone — formally close out.** The marketplace overview (Weaviate/Chroma/Qdrant/Deep Lake) was covered informally in S15 — just needs Pinecone's own one-liner said back solo to complete the A10–A12 bundle.

**STEP 7 (new): Once A10/A11 hold, rehearse the demo run-order script solo** (`vector_demo.py` → `vector_pipeline_real.py` → `test_retrieval.py` → green Actions run) before using it live anywhere.

**Do NOT this session:** Track C/M6 build, Chunks 2–6 of `chat.js`, Track D/M7 start (same standing rules — unchanged).

---

### Exact opener line for Session 16

> *Resume Session 16. Read BUILD_LOG.md first — PERMANENT RULE. A10/A11 hit a new, more stubborn failure mode in S15 (embedding recast as "images," survived a code-grounded scaffold) — do NOT attempt the one-sentence synthesis verbally first this time. Write it as a docstring above `build_index()`/`query()` in `vector_pipeline_real.py` instead, untimed. Only say it out loud once the written version is confirmed correct. Then re-verify A10 Silver, then A13 explained back solo via rag_demo.py's stopword fix, then verify + run `agentic_workflow_demo.py` and explain A21 back solo, then A12 Pinecone to close the vector bundle. If A10/A11 are holding, rehearse the demo run-order script solo before using it live. Note the session start time at open. Slow is correct.*

### Still open (not lost, not done)
- **A10/A11 one-sentence synthesis** — new failure mode (text→images drift), survived a code-grounded scaffold in S15. Redo Session 16, written not spoken.
- **A13** — still seeded, not yet explained back solo.
- **A12 Pinecone** — marketplace context covered S15; still needs its own solo one-liner.
- **A21 Agentic AI** — `agentic_workflow_demo.py` still unverified/untouched.
- **B19 + B26** — still not explained back in own words, despite being real code in `ci.yml` for 3 sessions running.
- **Demo run-order script** — drafted S15, not yet rehearsed solo.
- **Foundever JD gaps** — n8n/Langflow hands-on, event-driven architecture: not yet curriculum items, just flagged.
- (all pre-existing S14 open items — Track C trigger, Gold-priority pass, M1 Stations 3–6, M5 Chunks 2–6, showcase repo — unchanged, still open)
