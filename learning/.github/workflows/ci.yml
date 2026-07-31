# Minimal GitHub Actions CI workflow for bank-of-sandhu.
# Save this file at:  .github/workflows/ci.yml   (create the folders if they don't exist)
#
# What this teaches (B1 / B3 / B8 from the learning log):
#   - CI (B1):  every push triggers an automatic build/test check, before merge.
#   - Pipeline (B3): a defined sequence of stages — checkout, install, build, test.
#   - This workflow runs on GitHub's own cloud runners (`ubuntu-latest`) — no
#     self-hosted runner needed, because there's no on-prem network to reach
#     into. That's the B8 distinction: cloud runners work fine for a public
#     repo; a self-hosted runner only becomes necessary once the pipeline
#     needs to reach something inside a private/on-prem network.
#
# --if-present flags mean this won't fail if a script doesn't exist yet in
# package.json — it's meant to run safely on the very first push and give you
# a green (or honestly red) check in the GitHub Actions tab.

name: CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      # Stage 1 — get the code onto the runner
      - name: Checkout repository
        uses: actions/checkout@v4

      # Stage 2 — set up the language runtime
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      # Stage 3 — install dependencies (the "build inputs")
      - name: Install dependencies
        run: npm ci --if-present || npm install

      # Stage 4 — build (turns source into a runnable artefact — B4/B5)
      - name: Build
        run: npm run build --if-present

      # Stage 5 — test (would block a merge in a real branch-protection setup — B7)
      - name: Run tests
        run: npm test --if-present
