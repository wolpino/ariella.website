# Plan — ariella.website

Living build plan. Update when scope changes. PR checklist: [docs/PULL_REQUESTS.md](docs/PULL_REQUESTS.md). Decisions: [docs/DECISION_LOG.md](docs/DECISION_LOG.md).

## Goal

Single Next.js (TypeScript) app on Vercel. **Professional** default theme; **Fun** opt-in (Wix-inspired). Hub for projects; satellites linked out.

**MVP (first live):** Home, Projects, Contact + theme toggle (Option A).  
**Goal:** Recruiter portfolio + Wix-like Fun visuals (Option B+D), then notes + more collections.

## PR map

| PR | Ships |
|----|--------|
| **PR1** | Docs spine; SPEC; Next scaffold; theme config + toggle; layout shell |
| **PR2** | Home / Projects / Contact; Fun styling; content files; quality bar |
| **PR3** | Vercel + domain |
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

Components use `var(--*)` only — no `if (fun)` in UI logic. Persist preference (cookie + localStorage).

## Photography

| Experience | Where | When |
|------------|-------|------|
| Feed | `photos.ariella.website` | Link in PR2 |
| Collections (overlap + lightbox) | This site | PR5 |

## About (PR4)

Same data, two views: **Résumé** | **Story**. Expandable roles. Independent of Professional/Fun.

## Explicitly out of scope for now

Monorepo, merging feed app, CMS, auth, waiting on blog copy before deploy.
