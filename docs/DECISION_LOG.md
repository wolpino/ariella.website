# Decision log

Append-only. Agents: when the user answers a clarifying question, add an entry before continuing.

Format:

```markdown
## YYYY-MM-DD — short title
- **Q:** …
- **A:** …
- **Implication:** …
```

---

## 2026-07-20 — Repo shape for v1

- **Q:** Monorepo from day one, or single app with satellites linked?
- **A:** Single Next.js app. Photography and Trial & Eclair stay separate / linked. No strong reason for monorepo yet.
- **Implication:** Do not scaffold Turborepo or shared packages until a second app in this repo needs them.

## 2026-07-20 — MVP vs goal scope

- **Q:** What pages for first ship vs long-term goal?
- **A:** Goal is Option B+D (recruiter portfolio + Wix-like Fun visuals). MVP / first milestone is Option A (Home, Projects, Contact). Blog/notes wanted but must not block shipping — scaffold later, write when ready.
- **Implication:** PR2 = A pages. About + collections later (PR4/PR5). Notes in PR6. Do not wait on copy for Notes.

## 2026-07-20 — Default theme

- **Q:** Professional or Fun default?
- **A:** Professional is default; Fun is opt-in.
- **Implication:** Cookie/localStorage default `professional`; no flash of Fun on first load.

## 2026-07-20 — Fun theme source

- **Q:** How close should Fun be to the current Wix site?
- **A:** Pull heavily from the Wix site for Fun (tape/energy, imagery, playful motion).
- **Implication:** Fun styling and collections UX should feel like an evolution of https://ariellawolpin.wixsite.com/ariella-wolpin

## 2026-07-20 — About page shape

- **Q:** Résumé vs story? Interactive?
- **A:** Both: résumé view + story/essay view of the same jobs. Light interactivity (view toggle + expandable roles), not a mini-game.
- **Implication:** Single `content/experience.ts` feeds both views. Résumé | Story toggle is independent of Professional/Fun theme.

## 2026-07-20 — Photography: feed vs collections

- **Q:** Feed site vs Wix-style collections — which phase?
- **A:** Keep both. Feed stays at `photos.ariella.website` (link in Phase 1). Wix-style overlapping collections + lightbox live on this site in Phase 2b (own PR after About).
- **Implication:** Do not merge the feed app into this repo. Build `CollectionStack` in PR5.

## 2026-07-20 — Theme config approach

- **Q:** Was the SPEC “configuration” theme approach too complex?
- **A:** Keep config/tokens + shared components; drop monorepo theme package and separate Theme Spec docs theater.
- **Implication:** Use `themes/professional.ts` + `themes/fun.ts` → CSS variables. Components stay theme-agnostic.

## 2026-07-20 — Shipping workflow

- **Q:** How to ship with multiple agents?
- **A:** Small commits; one PR per chunk; human verify → fix → write phase docs; living PLAN; decision log for Q&A; AGENTS.md + always-on rule for shared memory.
- **Implication:** Agents must read PLAN / PULL_REQUESTS / DECISION_LOG / STATUS; update DECISION_LOG when asking questions.

## 2026-07-20 — CLAUDE.md

- **Q:** Why is there a CLAUDE.md file?
- **A:** Create Next App added it for Claude Code (`@AGENTS.md`). Not needed for Cursor-only workflow; removed.
- **Implication:** Do not re-add CLAUDE.md unless using Claude Code CLI.

## 2026-07-20 — Fix main before PR2

- **Q:** Start PR2 or fix main first?
- **A:** Fix main first (point at verified foundation), close PR1 docs, then PR2.
- **Implication:** `main` should match `feat/foundation` tip before branching `feat/mvp-pages`.

## 2026-07-20 — Fun theme colors from Wix

- **Q:** Fun colors closer to the Wix site?
- **A:** Yes. Wix is dark charcoal + muted gold brand (`#ecc85c`) + construction yellow accents — not peach/coral.
- **Implication:** Fun theme uses dark ground (`#141414`), gold accent, hazard-stripe tape; Professional stays light.

## 2026-07-21 — Composition notebook texture (superseded)

- **Q:** Fun still doesn’t feel fun; missing composition notebook background?
- **A:** First pass used a generated speckled tile under scrims.
- **Implication:** Superseded by cover-vs-open notebook decision below; do not use `composition-notebook.png` for the cover.

## 2026-07-21 — Fun = composition notebook (cover vs open)

- **Q:** How should Fun use composition notebook, gold Notes strips, labels vs stickers, and lined paper?
- **A:**
  - **Home** = notebook **cover** (marble field).
  - **Other pages** = **opened** notebook (not full intense marble).
  - Marble source: prefer **Staples** (`images/compositionstaples.jpg`); Oxford OK if cleaner. Soften pattern — busyness is a concern.
  - **Black binding tape** is the **top header** (horizontal). Brand, nav, and theme toggle sit **on the tape** — no thinner chrome bar above it.
  - **Gold/yellow paper with clear tape** (Wix Notes color `~#ecc85c`) = **page title headers only** on inner pages (like “Notes” on the muffin post), not on Home chrome.
  - Home modules = **composition white labels** (like the printed label on the cover), not stickers/polaroids.
  - Full lined-paper + heavy marble (Wix Notes post) is too intense / hard for text. **Lined paper can appear as an accent** on open pages, not as a full-page text surface.
- **Implication:** Superseded 2026-07-21 by Freeze night direction below. Notebook assets may return for Notes later.

## 2026-07-21 — Fun = Freeze night (direction B)

- **Q:** Next Fun direction after rejecting peach, flat charcoal+gold, speckled notebook, neon pink/lime/cyan, and horizontal notebook polish?
- **A:** Direction **B — Summer twilight / The Freeze**. Push as close to **neon night** as possible while coloring stays reminiscent of the Freeze photo (deep indigo sky, warm streetlight yellow, sign-white, wet-pavement glow). Not the rejected pink/lime/cyan neon. Gold taped Notes labels stay Notes-only later, not Fun global chrome.
- **Implication:** Superseded same day by hybrid below; Freeze pass was not close enough.

## 2026-07-21 — Fun = photobooth + pinball hybrid

- **Q:** Freeze night wasn’t close; Collections hero card disliked; pinball glow vs photobooth pattern?
- **A:** **Hybrid.** Photobooth pattern (inky black, high-contrast greyscale framing, narrow vertical rhythm — not actual booth portraits as theme content) + one warm pinball-bulb amber accent. **Vertical** scrolling photo strip (not horizontal; Wix feels too wide). Use images from `images/` for now (resized into `public/fun-strip/`); swappable later. Remove Collections rectangle.
- **Implication:** See [docs/FUN-THEME.md](FUN-THEME.md). Strip: `components/photo-strip.tsx` + `content/fun-strip.ts`. Professional unchanged.

## 2026-08-13 — Name lives in the header, not the Home title

- **Q:** Duplicate “Ariella Wolpin” in the header and as the Home title — which is more used?
- **A:** The **header**. It appears on every page. The Home h1 only appeared on `/`. Wix also uses the name once, as the header brand (“Ari Wolpin”), with photos as the visual — not a second title.
- **Implication:** Keep `site.name` in the header (home link). Home h1 is the tagline. Document title / metadata still use the full name.

## 2026-08-13 — Home has no Featured block

- **Q:** Keep the Featured projects section on Home?
- **A:** No. Remove it. Projects stay on `/projects`.
- **Implication:** Home is hero + Fun strip only.

## 2026-08-13 — Fun strip cycles vertically again

- **Q:** Static strip or moving?
- **A:** Cycle / rotate vertically. Fun coloring stays.
- **Implication:** Seamless looping track in `photo-strip.tsx`; `prefers-reduced-motion` keeps it still.

## 2026-08-13 — Professional background: faded window glass

- **Q:** Professional is too bright white. Photo (greyscale, faded) or Trial & Eclair patterned window?
- **A:** Use this repo’s `images/kitchenwindow.jpg` — that **is** the patterned frosted glass. Trial & Eclair’s `window-fan-pattern.svg` is a line drawing of the same motif. Greyscale + faded overlay; slightly warmer paper color underneath.
- **Implication:** Texture at `public/textures/window-fan.jpg`. Professional tokens a bit less white (`#e4dfd6` ground). Do not apply this to Fun.

## 2026-08-13 — Fun Home heading matches Wix collections lockup

- **Q:** Fun heading like the Wix site — “collections” or “a collection of collections”? Subtitle photography, web applications, plus what?
- **A:** Fun Home h1 is **collections** (what Wix used under the name). Subtitle: photography · web applications · notes. Notes is the third Wix section and a planned page here. Professional keeps the recruiter tagline.
- **Implication:** Copy in `content/site.ts` (`funHeading`, `funTopics`). Swap via CSS (`hero__title-fun` / `hero__title-pro`), not `if (fun)` in components. Easy to change the third topic if notes isn’t right.
