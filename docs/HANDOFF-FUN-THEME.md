# Handoff: redesign Fun theme for ariella.website

**Closed 2026-08-13** with PR2. Fun is the photobooth + pinball hybrid in [FUN-THEME.md](FUN-THEME.md). Kept as history of rejected directions — do not treat the “your job” section as current work.

### Context
You’re continuing **PR2** (`feat/mvp-pages`) on the personal site **ariella.website**. Stack: Next.js App Router + TypeScript. Dual theme: **Professional** (default, keep as-is) and **Fun** (opt-in).

Read first: `AGENTS.md`, `PLAN.md`, `docs/PULL_REQUESTS.md`, `docs/DECISION_LOG.md`, `STATUS.md`. Append Q/A to `docs/DECISION_LOG.md` when the user answers clarifying questions.

### Current state
- Branch tip may be past notebook cover/open work on `feat/mvp-pages` — check `git log` / `STATUS.md`.
- App runs with `npm run dev` → http://localhost:3000
- Theme configs: `themes/professional.ts`, `themes/fun.ts`; CSS in `app/globals.css` via `data-theme`
- MVP pages exist: Home / Projects / Contact

### What was tried for Fun (all disliked / rejected)
1. Peach/coral “playful” light theme — wrong vs Wix
2. Charcoal + muted gold sampled from Wix — better, but still not “fun” enough
3. Full composition-notebook speckled texture + gold glow — **user still doesn’t like it**
4. Neon Fun (pink/lime/cyan; washi, tubes, marquee) — **rejected**
5. Horizontal notebook (black binding on header top, Staples marble, yellow paper + clear tape labels) — explored then **rolled back** / still not the direction; user wants something **new**, not another notebook polish pass

### Still useful references (don’t copy blindly)
- Live Wix (inspiration, unfinished): https://ariellawolpin.wixsite.com/ariella-wolpin
- Notes post (composition + lined paper — lined paper “doesn’t quite work”): https://ariellawolpin.wixsite.com/ariella-wolpin/post/raisin-bran-muffins
- Local refs in `images/` (untracked unless committed):
  - Notebook sources (parked): `compositionstaples.jpg`, `compositionoxford.jpg`, `amelias-notebook.jpg`
  - Mood / kitchen / neon: `kitchenlight.jpg`, `kitchenwindow.jpg`, `BARNEON.jpg`
  - Wix grabs (2026-07-21): `wix-home-collections.png`, `wix-notes-taped-label.png`, `wix-ref-freeze-blossoms.png`, `wix-ref-cat-blossoms.png`
- Composition notebook history (ideas only): https://www.format.com/magazine/features/design/who-designed-composition-notebook-history

### Locked product decisions
- Professional = default; Fun = opt-in; presentation-only swap
- Satellites stay linked (`photos.ariella.website`, Trial & Eclair later)
- Non-negotiables: mobile, a11y, image performance, theme reliability (no flash), recruiter clarity in Professional
- Fun and Professional share structure/content; only look/feel changes
- Notebook motif may return later for **Notes**, not necessarily as Fun’s global identity

### Your job
1. **Ask clarifying questions first** — do not assume the next Fun direction. Propose 2–3 distinct visual directions with short for/against (not more notebook-tweaking unless the user explicitly asks).
2. After the user picks a direction, implement a **small, reviewable Fun restyle** (tokens + CSS + minimal component tweaks). Keep Professional untouched.
3. Prefer a **preview page** (`/dev/...`) if comparing variants before locking.
4. Work in small commits on `feat/mvp-pages`. Stop for human verify. Update `docs/DECISION_LOG.md` + `STATUS.md`.
5. Do **not** start PR3 deploy, About, or collections unless asked.

### Constraints for Fun redesign
- Must feel intentional and “fun,” not generic dark mode or AI purple gradients
- Must not hurt readability or a11y (contrast, focus, reduced motion)
- “Not too much” — atmosphere over noise
- Avoid rehashing rejected neon and the current speckled-notebook-everywhere look unless the user invites a hybrid

### Success
User can toggle Fun and say it feels right enough to continue PR2 verify → write `docs/PHASE-1-mvp.md`.
