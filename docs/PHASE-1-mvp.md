# Phase 1 — MVP pages (PR2)

**Branch:** `feat/mvp-pages`  
**Status:** verified by human 2026-08-13  
**Commits:** Home / Projects / Contact, Fun hybrid restyle, Professional window texture

## What shipped

- Routes: `/`, `/projects`, `/contact`
- Content modules: `content/site.ts`, `content/projects.ts`, `content/fun-strip.ts`
- Professional (default): recruiter tagline on Home; faded greyscale kitchen-window texture (`public/textures/window-fan.jpg`)
- Fun (opt-in): photobooth + pinball hybrid — inky frames, one amber glow
- Fun Home: **collections** heading, topic lede (photography · web applications · notes), cycling vertical photo strip
- Name lives in the header only (not duplicated as a Home title)
- No Featured block on Home; projects stay on `/projects`
- Theme toggle: cookie + localStorage; Professional default; no flash
- Photography feed linked out to `photos.ariella.website`

## How to run / verify

```bash
npm install
npm run dev
```

Checklist used:

- [x] Toggle Professional ↔ Fun; preference persists; no wrong-theme flash
- [x] Fun Home: collections + topic line + cycling strip
- [x] Professional: window texture visible (not blank white)
- [x] Header name only; Home title is not a second “Ariella Wolpin”
- [x] Featured section removed
- [x] `/projects` and `/contact` load in both themes
- [x] Mobile layout / Fun strip stacks above copy

## Decisions during phase

See [DECISION_LOG.md](DECISION_LOG.md) (2026-07-21 through 2026-08-13). Short version:

- Fun is photobooth + pinball, not notebook / Freeze-night / multi-neon
- Strip cycles vertically; `prefers-reduced-motion` keeps it still
- Professional uses the kitchen window photo (same patterned glass as Trial & Eclair)
- Fun heading matches Wix **collections** lockup

## Follow-ups (PR3+)

- Vercel + `ariella.website` domain
- About (Résumé | Story) in PR4
- Collections + lightbox in PR5
- Notes scaffold in PR6 (copy can wait)
