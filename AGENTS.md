<!-- BEGIN:nextjs-agent-rules -->
# Next.js note

This project uses a recent Next.js. APIs and conventions may differ from older training data — check `node_modules/next/dist/docs/` when unsure.
<!-- END:nextjs-agent-rules -->

# Agent guide — ariella.website

## Read first

1. [STATUS.md](STATUS.md): where things are
2. [docs/DESIGN-RESET.md](docs/DESIGN-RESET.md): the direction and the steps
3. [docs/DECISION_LOG.md](docs/DECISION_LOG.md): settled answers. The 2026-10-21 entry wins over older ones

`docs/archive/` is history. Do not execute anything in it.

## How to work

- Do one step at a time, and only the step Ari asked for.
- Design is decided with mockups first. Do not change the look in the repo before Ari picks from a mockup.
- Small commits on a branch, then a PR. Ari merges. Merging to `main` deploys to the live domain.
- When Ari answers a question, append it to `docs/DECISION_LOG.md`.
- Update `STATUS.md` when a step starts or finishes.

## Stack

- Next.js App Router, TypeScript, CSS variables. Content lives in `content/*.ts`.
- Tests: `npm run lint`, `npm run build`, `npm run test:e2e` (Playwright).
- Don't touch DNS, Porkbun, or `photos.ariella.website`.
