# Fun theme — composition notebook

Source of truth for Fun presentation. Professional is separate and stays restrained. Decisions: [DECISION_LOG.md](DECISION_LOG.md).

## Metaphor

| Surface | Route(s) | Look |
|---------|----------|------|
| **Cover** | `/` (Home) | Black-and-white marble cover; modules as white **composition labels** |
| **Open** | `/projects`, `/contact`, later `/about`, `/notes`, … | Opened notebook: calmer ground; **gold taped page title**; lined paper as **accent** only |

## Header (all Fun pages)

- Horizontal **black binding tape** (`public/textures/binding-tape.jpg`, from Staples spine).
- Site brand, nav, and Professional/Fun toggle sit **on the tape**.
- No extra chrome bar above the tape.
- Brand gold matches Wix: `#ecc85c`.

## Assets

| File | Role |
|------|------|
| `images/compositionstaples.jpg` | Preferred source photo |
| `images/compositionoxford.jpg` | Alternate if Staples proves too busy |
| `public/textures/marble-cover.jpg` | Softened marble tile for **cover** |
| `public/textures/binding-tape.jpg` | Header tape band |
| `public/textures/marble-cover-oxford.jpg` | Softened Oxford alternate (not default) |

Do **not** use the old generated `composition-notebook.png` speckles for the cover.

## Components / classes

- `fun-surface fun-surface--cover` — Home wrapper
- `fun-surface fun-surface--open` — inner page wrapper
- `.composition-label` — white ruled label cards on the cover
- `.page-title--taped` — gold paper + clear tape strips (inner page H1 only)

## Anti-patterns

- Full-page intense marble behind long text
- Lined paper as the only background for body copy
- Stickers/polaroids instead of composition labels (unless user revisits)
- Changing Professional to match Fun
