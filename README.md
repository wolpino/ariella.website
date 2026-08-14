# ariella.website

Personal portfolio hub for Ariella Wolpin — Next.js on Vercel with a Professional / Fun theme toggle.

## Docs for agents & humans

- [AGENTS.md](AGENTS.md) — how agents should work in this repo
- [PLAN.md](PLAN.md) — living build plan
- [SPEC.md](SPEC.md) — short product/tech spec
- [STATUS.md](STATUS.md) — current focus
- [docs/PULL_REQUESTS.md](docs/PULL_REQUESTS.md) — PR checklist
- [docs/DECISION_LOG.md](docs/DECISION_LOG.md) — Q&A / decisions

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

GitHub: [wolpino/ariella.website](https://github.com/wolpino/ariella.website). Production host: Vercel. Domain: `ariella.website`.

1. `vercel login` (or Import the GitHub repo in the Vercel dashboard; Production branch `main`)
2. `vercel link` then `vercel --prod` from this repo, or let GitHub integration deploy `main`
3. In the Vercel project: **Settings → Domains** → add `ariella.website` (and `www` if you want it)
4. At the registrar, use the records Vercel shows. Typical apex:

   | Type | Name | Value |
   |------|------|--------|
   | A | `@` | `76.76.21.21` (confirm on the domain card) |
   | CNAME | `www` | the project CNAME Vercel displays |

Keep `photos.ariella.website` on its own project — do not point that subdomain here.

## Stack

Next.js App Router, TypeScript, CSS variables driven by `themes/professional.ts` and `themes/fun.ts`.
