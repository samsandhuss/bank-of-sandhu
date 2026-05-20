## NEXT — resume here (Session 04, RAG walkthrough in progress)

STATION 1: fully closed. 3 High findings in server/index.js
(insecure randomness x2 ~L166-167, missing rate limiting ~L273)
deliberately parked as a triaged interview asset. Not bugs to fix.

IN PROGRESS: interview-prep loop on server/chat.js. Method = Claude
explains a chunk, I explain it back in PLAIN ENGLISH (no jargon),
fix fuzzy bits, only then advance. Slow is correct.
---

### Session 03 close-out — Chunk 1 starting state

- CHUNK CONCEPT: OWNED. My own analogy locked it — recipe/pizza: prep
  ingredients once upfront; every order triggers a fresh selection
  of prepped ingredients, scored per order; prep reused, selection
  recomputed every time (stateless per query). This is mine, keep it.
- RETRIEVE: HALF DONE. I have "small cards not 6 binders" right.
  Failure mode here = I said retrieve is about SPEED. It is NOT.
  Retrieve = MATCHING: read the order's words, score every prepped
  box/card by relevance, rank, pull only the top few. Why few:
  (a) most boxes irrelevant, (b) the chef can't hold the whole
  fridge (LLM context limit).
- AUGMENT: NOT STARTED at end of Session 03.
- GENERATE: NOT STARTED at end of Session 03.

---

### Session 04 update — what actually happened tonight

Attempted retrieve, augment, and generate. None fully owned yet.
Specific drift named below so next session doesn't skip past it.

- RETRIEVE (re-attempted, drifted again): I said "waiter takes the
  order." That's the INPUT to retrieve, not retrieve itself. Retrieve
  is what happens AFTER the order is read — kitchen pulls the matching
  cards from the prepped fridge. Still not owned. Redo needed.
- AUGMENT (first attempt, drifted): I described it as "searching" /
  "look through the system." That's retrieve's job. Augment is the
  HANDOVER — the pulled cards go into the chef's hands alongside the
  order, so the chef cooks from those specific cards and not from
  memory. This is the safety mechanism. Not owned. Redo needed.
- GENERATE (first attempt, drifted): I described it as "request
  completed, served on the table." Missing the ONE STRICT RULE: cook
  ONLY from the handed cards, refuse if a card is missing, and LABEL
  which card each fact came from. The labelling = citations. That's
  why the live app cites sources. Not owned. Redo needed.

### Failure modes named tonight (recurring — watch for these)

1. Reaching for technical-sounding words instead of the plain idea,
   especially when tired.
2. When a redo gets uncomfortable, the brain reaches for a fresh
   shiny topic. Tonight: FireRule, containerised app testing,
   headless browser CI all surfaced mid-redo. Correctly deferred.

### Parked CI/CD topics (queued, not lost)

To pick up properly in Module 2 (Code Quality Gates) and Module 5
(AI in the SDLC) of the educator track:

1. FireRule / GitHub Actions — clarify whether this means GitHub
   rulesets, branch protection, or a third-party action.
2. Containerised app testing in CI — spinning up the app in Docker
   inside the pipeline and running tests against it.
3. Headless browser testing in CI — Playwright/Cypress/Selenium
   running a browserless E2E test in the pipeline.

---

### RESUME INSTRUCTION FOR CLAUDE (Session 05)

Do not move past Chunk 1 until RETRIEVE, AUGMENT, and GENERATE are
all explained back in plain English, pizza terms, no jargon.

Specifically:
- RETRIEVE redo: no "speed", no "waiter takes order". Matching.
- AUGMENT redo: not search. The handover of cards + order to chef.
- GENERATE redo: the one strict rule (cook only from handed cards,
  refuse if missing, label each fact = citations).

Only after all three are owned, advance to Chunks 2–6 of
server/chat.js:
  Chunk 2: chunking code
  Chunk 3: scoring
  Chunk 4: system prompt / guardrail
  Chunk 5: refusal short-circuit
  Chunk 6: API call → response shape

Do NOT skip ahead to the parked CI/CD topics.
Slow is correct. Plain English first.


