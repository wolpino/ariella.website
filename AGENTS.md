<!-- BEGIN:nextjs-agent-rules -->
# Next.js note

This project uses a recent Next.js. APIs and conventions may differ from older training data — check `node_modules/next/dist/docs/` when unsure.
<!-- END:nextjs-agent-rules -->

# Agent guide — ariella.website

## Read first (every session)

1. [docs/NOTEBOOK-FUN-PLAN.md](docs/NOTEBOOK-FUN-PLAN.md) — current port. If this disagrees with older Fun docs, the plan wins
2. [docs/AGENT_LOG.md](docs/AGENT_LOG.md) — claim a step before starting. Skip steps already `in_progress`
3. [STATUS.md](STATUS.md) — current focus
4. [docs/PULL_REQUESTS.md](docs/PULL_REQUESTS.md) — which PR chunk is next
5. [docs/DECISION_LOG.md](docs/DECISION_LOG.md) — prior Q&A. The 2026-10-02 entry supersedes older Fun-home decisions
6. [PLAN.md](PLAN.md) — longer-term phases
7. [docs/FUN-THEME.md](docs/FUN-THEME.md) — history, and the styling that still applies to Projects and Contact
8. Latest `docs/PHASE-*.md` if continuing after a shipped chunk

## Workflow

- One PR chunk at a time (see `docs/PULL_REQUESTS.md`)
- Small focused commits
- Before starting an NF step, append an `in_progress` row to `docs/AGENT_LOG.md`. Append `done` or `blocked` when you stop
- NF2 through NF5 do not wait for a person to approve. NF6 stops at the preview URL and does not attach the domain
- When the context window is getting full, write the next agent prompt in `docs/prompts/` before stopping. Match the detail in `docs/prompts/NF2.md`
- Older phase docs, `docs/HANDOFF-FUN-THEME.md`, and the README deploy archive are history. Do not execute them
- Update `PLAN.md` if scope/reality changes
- Update `STATUS.md` and `docs/PULL_REQUESTS.md` when starting/finishing a chunk

## Decision log

- If you ask the user a question, append Q+A to `docs/DECISION_LOG.md` when answered
- Prefer deciding from DECISION_LOG + PLAN over re-asking

## Stack & constraints

- Next.js App Router + TypeScript; single app; no monorepo for now
- Professional theme default. Fun home is the notebook in `docs/NOTEBOOK-FUN-PLAN.md`. Projects and Contact stay on theme CSS variables
- Do not attach `ariella.website` or change Porkbun, Render, or `photos.ariella.website` as part of the notebook port
- Non-negotiables: mobile, a11y, image performance, theme reliability, recruiter clarity
- Satellites stay linked out (`photos.ariella.website`, Trial & Eclair later)
- No CMS, no Turborepo, no public `/engineering` docs site for v1
