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
