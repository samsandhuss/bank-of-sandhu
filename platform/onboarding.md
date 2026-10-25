# Onboarding — empty repo to live

How `bank-of-sandhu` actually got onto the platform, from its own git history.

```mermaid
flowchart LR
  a["17 May<br/>Repo + CodeQL scanning"] --> b["31 May<br/>Build log + docs"]
  b --> c["31 Jul<br/>CI green (GitHub Actions)"]
  c --> d["Live on Render<br/>(set up outside git)"]
  d --> e["18 Oct<br/>Front door"]
  bp["Branch protection<br/>(a setting, not a commit)"] -.-> c
```

## What I predicted vs what happened

| | Predicted | Real |
|---|---|---|
| Steps | 5 | 5, in a different order |
| Time | 3 days | ~75 days to first green pipeline |

## What it taught me

- **Elapsed time is not effort.** Most of the 75 days was waiting, not work. Onboarding is about removing the waits.
- **Steps outside git are invisible.** Deploy and branch protection left no record, so they can't be measured unless the platform records them.
- **Good defaults set the order.** Scanning came first because it was offered first. That is what a golden path does on purpose.

**Headline metric:** time to first green pipeline.