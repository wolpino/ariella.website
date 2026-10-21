# ariella.website

Personal site for Ariella Wolpin. Next.js on Vercel. A redesign is in progress: see [docs/DESIGN-RESET.md](docs/DESIGN-RESET.md).

## Docs

- [STATUS.md](STATUS.md): where things are
- [docs/DESIGN-RESET.md](docs/DESIGN-RESET.md): current direction and steps
- [docs/DECISION_LOG.md](docs/DECISION_LOG.md): decisions
- [AGENTS.md](AGENTS.md), [PLAN.md](PLAN.md), [SPEC.md](SPEC.md)
- `docs/archive/`: history, not instructions

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Vercel deploys `main` to `https://www.ariella.website`. Merging a PR is the deploy. Keep `photos.ariella.website` on its own project.

## Stack

Next.js App Router, TypeScript, CSS variables. Today they come from `themes/professional.ts` and `themes/fun.ts`; Step 3 collapses them into one set.
