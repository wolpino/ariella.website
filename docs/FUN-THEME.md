# Fun theme — photobooth + pinball hybrid

**Superseded for the Fun home on 2026-10-02.** The Fun home is the composition notebook under the existing site header. Projects and Contact still use the styling below until a later decision says otherwise. Source of truth for the port: [NOTEBOOK-FUN-PLAN.md](NOTEBOOK-FUN-PLAN.md). Decision: [DECISION_LOG.md](DECISION_LOG.md) (2026-10-02).

The rest of this file is history. Do not put the photobooth strip back on `/`.

## Metaphor

**Inky photobooth structure** + **one warm pinball glow**. Narrow vertical rhythm (not a wide Wix triptych). Strip photos are placeholders and can swap later.

| Surface | Look |
|---------|------|
| Ground | Near-black (`#050505`), subtle vignette |
| Frames / cards | Thick black gutters, sharp corners, high-contrast panels |
| Accent | Single amber pinball-bulb glow (`#ffb020`) — not multi-neon |
| Home hero | **collections** + topic lede + **cycling vertical photo strip** |

## Vertical strip

- Component: `components/photo-strip.tsx`
- Frame list: `content/fun-strip.ts` (all frames loop; two visible at a time)
- Assets: `public/fun-strip/*` (resized from `images/`)
- Fun-only (hidden in Professional)
- **Cycles vertically** (seamless loop of all frames); two wide frames visible (`aspect-ratio: 2/1`)
- Copy aligns to the **top** of the strip
- Respects `prefers-reduced-motion` (static first frames)
- Images use greyscale + contrast treatment so the strip reads as booth pattern even when sources are color

## Palette

| Role | Value |
|------|--------|
| Bg | `#050505` |
| Surface | `#111111` |
| Text | `#f2f0ea` |
| Muted | `#9a9690` |
| Accent | `#ffb020` |
| Accent fg | `#050505` |
| Border | `#1a1a1a` |
| Focus | `#ffc44d` |

## Parked

- Notebook / taped Notes labels → Notes later
- Freeze-night indigo pass → superseded
- Rejected: peach, flat charcoal+gold alone, speckled notebook everywhere, pink/lime/cyan neon

## Anti-patterns

- Wide full-bleed multi-column photo walls as Fun identity
- Multi-color neon accents
- Putting the hero back in a glowing “Collections” card
- Changing Professional to match Fun
