## NEXT — resume here (Session 04, RAG walkthrough in progress)

STATION 1: fully closed. 3 High findings in server/index.js
(insecure randomness x2 ~L166-167, missing rate limiting ~L273)
deliberately parked as a triaged interview asset. Not bugs to fix.

IN PROGRESS: interview-prep loop on server/chat.js. Method = Claude
explains a chunk, I explain it back in PLAIN ENGLISH (no jargon),
fix fuzzy bits, only then advance. Slow is correct.

EXACTLY WHERE I STOPPED — Chunk 1 (the 3-step RAG mental model):
- CHUNK: OWNED. My own analogy locked it — recipe/pizza: prep
  ingredients once upfront; every order triggers a fresh selection
  of prepped ingredients, scored per order; prep reused, selection
  recomputed every time (stateless per query). This is mine, keep it.
- RETRIEVE: HALF DONE. I have "small cards not 6 binders" right.
  My failure mode here = I said retrieve is about SPEED. It is NOT.
  Retrieve = MATCHING: read the order's words, score every prepped
  box/card by relevance, rank, pull only the top few. Why few:
  (a) most boxes irrelevant, (b) the chef can't hold the whole
  fridge (LLM context limit). RESUME BY re-doing retrieve in pizza
  terms with NO mention of speed.
- GENERATE: NOT STARTED. This is the one that makes RAG trustworthy
  — the chef writes the answer using ONLY the selected ingredients,
  says "can't make that" if something's missing, and labels which
  card each fact came from. Do this next after retrieve is locked.

RESUME INSTRUCTION FOR CLAUDE: Do not move past Chunk 1 until
retrieve (no "speed") and generate (the one strict rule) are both
explained back in plain English. Then continue chunks 2-6 of
server/chat.js (chunking code → scoring → system prompt/guardrail
→ refusal short-circuit → API call → response shape).

MY KEY FAILURE MODE: reaching for technical-sounding words instead
of the plain idea, especially when tired. Plain English first.
