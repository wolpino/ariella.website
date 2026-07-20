<!-- BEGIN:nextjs-agent-rules -->
# Next.js note

This project uses a recent Next.js. APIs and conventions may differ from older training data — check `node_modules/next/dist/docs/` when unsure.
<!-- END:nextjs-agent-rules -->

# Agent guide — ariella.website

## Read first (every session)

1. [PLAN.md](PLAN.md) — current phases and quality bar
2. [docs/PULL_REQUESTS.md](docs/PULL_REQUESTS.md) — which PR chunk is next / in progress
3. [docs/DECISION_LOG.md](docs/DECISION_LOG.md) — prior Q&A (do not re-ask settled questions)
4. [STATUS.md](STATUS.md) — current focus / blockers
5. Latest `docs/PHASE-*.md` if continuing after a shipped chunk

## Workflow

- One PR chunk at a time (see `docs/PULL_REQUESTS.md`)
- Small focused commits
- Stop after the chunk for human verify; then fixes; then write phase docs
- Update `PLAN.md` if scope/reality changes
- Update `STATUS.md` and `docs/PULL_REQUESTS.md` when starting/finishing a chunk

## Decision log

- If you ask the user a question, append Q+A to `docs/DECISION_LOG.md` when answered
- Prefer deciding from DECISION_LOG + PLAN over re-asking

## Stack & constraints

- Next.js App Router + TypeScript; single app; no monorepo for now
- Professional theme default; Fun is opt-in (theme config in `themes/`)
- Non-negotiables: mobile, a11y, image performance, theme reliability, recruiter clarity
- Satellites stay linked out (`photos.ariella.website`, Trial & Eclair later)
- No CMS, no Turborepo, no public `/engineering` docs site for v1
