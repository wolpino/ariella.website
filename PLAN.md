# Plan — ariella.website

Living build plan. Update when scope changes. PR checklist: [docs/PULL_REQUESTS.md](docs/PULL_REQUESTS.md). Decisions: [docs/DECISION_LOG.md](docs/DECISION_LOG.md).

## Goal

Single Next.js (TypeScript) app on Vercel. **Professional** default theme. **Fun home** is the composition notebook under the existing header. Hub for projects; satellites linked out.

**Current work:** port the notebook, editions, and studio, with tests, and stop at a Vercel preview. Full instructions: [docs/NOTEBOOK-FUN-PLAN.md](docs/NOTEBOOK-FUN-PLAN.md).

**Later:** About, collections, notes. Attaching `ariella.website` is not part of the current work.

## PR map

| PR | Ships |
|----|--------|
| **PR1** | Done. Docs spine; SPEC; Next scaffold; theme config + toggle; layout shell |
| **PR2** | Done. Home / Projects / Contact; Fun styling; content files; quality bar |
| **PR3** | Deferred. Do not attach the domain while the notebook port is in progress |
| **NF1–NF6** | Notebook Fun port. See [docs/NOTEBOOK-FUN-PLAN.md](docs/NOTEBOOK-FUN-PLAN.md) and [docs/PULL_REQUESTS.md](docs/PULL_REQUESTS.md) |
| **PR4** | About (Résumé/Story); richer projects hub |
| **PR5** | `CollectionStack` + lightbox; 1–2 collections |
| **PR6** | Notes scaffold; more collections |

Workflow: implement chunk → small commits → you verify → fixes → write `docs/PHASE-*.md` → next chunk.

## Non-negotiables

1. Responsive / mobile-first  
2. Accessibility  
3. Image performance  
4. Theme reliability (Professional default, no flash)  
5. Recruiter clarity  

## Theme

```ts
// themes/professional.ts & themes/fun.ts → CSS variables
```

Projects and Contact use `var(--*)` only. `/` may render a different component tree for Fun (the notebook). Persist preference (cookie + localStorage). Default remains `professional`.

**Fun home:** high-fidelity composition notebook under `SiteHeader`. See [docs/NOTEBOOK-FUN-PLAN.md](docs/NOTEBOOK-FUN-PLAN.md).

**Projects and Contact in Fun:** still the photobooth + pinball styling in [docs/FUN-THEME.md](docs/FUN-THEME.md). That metaphor is no longer the home page.

## Photography

| Experience | Where | When |
|------------|-------|------|
| Feed | `photos.ariella.website` | Link in PR2 |
| Collections (overlap + lightbox) | This site | PR5 |

## About (PR4)

Same data, two views: **Résumé** | **Story**. Expandable roles. Independent of Professional/Fun.

## Explicitly out of scope for now

Monorepo, merging feed app, CMS, auth, waiting on blog copy before deploy.
