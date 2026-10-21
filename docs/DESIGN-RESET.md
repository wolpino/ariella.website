# Design reset — 2026-10-20

> **Resume here: next session starts Step 0.**
>
> **Where things stand (2026-10-21):**
> - Step 1 (slim the docs) is done.
> - Step 2 (mockups) is done for now. Final mockup: https://claude.ai/artifact/7zsyoh49qp7y29v9az4Ltz. All picks are in `docs/DECISION_LOG.md`, the 2026-10-21 entries.
> - The docs PR for this branch (`docs/design-reset`) should be merged before Step 0 starts. If it isn't merged yet, merge it first.
>
> **To start Step 0, say:** "Start Step 0 from docs/DESIGN-RESET.md."
>
> **Step 0 needs two answers from Ari before any code:**
> 1. Which projects go on the Projects page? Real names, one line each, and a link if there is one. If the list isn't ready, hide the `coming-soon` cards.
> 2. `public/resume.pdf` and the résumé pop-up (`content/resume.ts`) show `ariwolpin@gmail.com`. Keep it, or swap in a version without it?
>
> **Then Step 0 does, in small steps:** pull `main`, branch `fix/live-copy`, remove the placeholder email and the TODO text on Contact, add a Résumé link in the header, fix the project cards, update the e2e tests, run lint, build and tests, and open a PR. Ari merges, and merging deploys.
>
> Step 0 only fixes the live words. The new look is Step 3.

Current direction. If this disagrees with `docs/NOTEBOOK-FUN-PLAN.md`, `docs/FUN-THEME.md`, `STATUS.md`, or `docs/DECISION_LOG.md` entries before 2026-10-20, this file wins. Those docs were archived or rewritten in Step 1 (2026-10-21); archived ones are in `docs/archive/`.

## Summary of the review chat

Ari was unhappy with where the design ended up and asked for four things:
- a review of the previous designs
- an answer on whether the site needs to look professional
- what still needs to be done
- any issues or future concerns

The suspicion was that the AI-driven design is the problem: the result is boring and not Ari's. Claude read the docs and the code, then took Playwright screenshots of `https://www.ariella.website` on 2026-10-20. Pages: `/`, `/projects`, `/contact`, and `/editions`, in both themes, at 1280 and 390 widths.

**Answer on "does it need to look professional":** no. Recruiters need four things fast: who Ari is, what Ari does, a résumé, and LinkedIn. All of that fits inside a design that is clearly Ari's. A site with a point of view is a positive signal for an engineer. What hurts is being unclear, such as a résumé recruiters can't find. The two designs that look like Ari are the ones Ari made, the Wix photo site and the notebook. The beige Professional page was never chosen on purpose.

Questions and answers, in order:

| Question | Answer |
|---|---|
| The domain already serves this app. What now? | Keep it live and fix the public copy now. The redesign comes after. |
| One design, or keep the Professional/Fun toggle? | One personal design with no toggle. Give recruiters a quick path. |
| Which past direction to build from? | Don't throw it out. Step back and rework each direction into one site. |
| How should design decisions be made? | Visual mockups first. Ari reacts to pixels before any repo change. |
| Which pieces to keep? | Ari's photos front and center, the notebook cover with Dymo labels, and charcoal with a gold/amber glow. Drop the kitchen-window texture and the beige look. |
| What happens to the agent process docs? | Slim them down: archive the notebook port docs and rewrite STATUS, PLAN, and AGENTS short. Keep the DECISION_LOG. |
| Public contact info? | LinkedIn only. |
| Projects page placeholders? | Ari will supply real projects. |

## Design history

1. **Wix site** (`images/wix-home-collections.png`): "Ari Wolpin / collections", charcoal and gold. Ari's own photos form a triptych: The Freeze at dusk, between blossoms. It was personal and photo-led.
2. **Version 0, "Mostly practice!"** (`public/editions/version-0.png`): an inverted dog photo on black.
3. **This repo, Fun theme:** seven directions in about three months, each rejected or replaced:
   - peach
   - flat charcoal and gold
   - speckled composition notebook
   - pink, lime, and cyan neon
   - "Freeze night" indigo
   - the photobooth and pinball hybrid
   - the composition notebook, ported from `/Users/ari/codes/ariellawebsite`
4. **This repo, Professional theme:** beige, a Fraunces headline, and green buttons over a faded kitchen-window texture. It was set once and never revisited. It is the default, and it is the part that reads as a template.

## Findings and future concerns

- **The domain is live on this app, and the docs say it isn't.**
  - What the site serves: `www.ariella.website` serves the Professional hero ("Design, photography, and code"). It no longer serves "Mostly practice!". PR #8 merged everything to `main` on 2026-10-20.
  - What the stale docs still say:
    - `STATUS.md` says NF6 is blocked and the domain is untouched.
    - `docs/NOTEBOOK-FUN-PLAN.md` still says the domain is untouched.
    - `docs/prompts/NF6-blocked.md` still says to stop before the domain.
  - At review time, local `main` was behind `origin/main`.
- **Placeholder copy is public.**
  - Contact shows "Prefer a different email or social? Update `content/site.ts` — placeholders are intentional for MVP."
  - The email `hello@ariella.website` is a TODO placeholder and may not receive mail.
  - Projects has three cards. Two are "coming soon" and the third is "Code projects… Placeholder until repos are ready to feature."
- **Recruiters can't reach the résumé.** It only exists behind the RESUME Dymo tape on the Fun notebook. Default visitors never see it. LinkedIn appears only inside the résumé modal.
- **The résumé exposes a personal email.** `public/resume.pdf` and `content/resume.ts` (the modal) print `ariwolpin@gmail.com`. Ari chose LinkedIn as the only public contact, so confirm whether that's OK.
- **Fun is two unrelated designs.** The home page is the notebook on a wood desk. Projects and Contact still use the photobooth and pinball styling (black, amber, Syne). `/editions` follows the active theme, so the notebook archive shows on beige in Professional.
- **The toggle works against the site.** "Professional | Fun" in the header tells every visitor the default is a mask, and it doubles the design and maintenance work.
- **There is no photography** on a site whose tagline is "design, photography, and code."
- **Performance:** `app/layout.tsx` loads 11 `next/font` families on every page.
- **Dead code and assets from old designs:**
  - `components/photo-strip.tsx` and `content/fun-strip.ts`: still rendered in `Hero`, hidden by CSS
  - `public/fun-strip/*`
  - `public/textures/marble-cover.jpg`, `marble-cover-oxford.jpg`, and `binding-tape.jpg`
  - `site.funHeading` and `site.funTopics`
- **Process overhead:** about 740 lines of agent process docs for a three-page site. They cover the agent log, NF prompts, the PR table, phase docs, the decision log, and a `.cursor` rule. Design was decided through multi-agent Q&A, which likely drove the churn.
- **Tests depend on the copy.** `e2e/regression.spec.ts` asserts exact strings and theme cookie behavior. Any redesign has to rewrite it.

## Plan

Each step is its own session. Do not start a step until Ari asks.

### Step 0 — Live copy fix (branch `fix/live-copy` from `origin/main`)

First run `git pull` on local `main`. It is behind `origin/main`.

- `content/site.ts`:
  - Remove the `hello@ariella.website` email and the `mailto:` social.
  - Add LinkedIn (`https://www.linkedin.com/in/ariellawolpin`, already in `content/resume.ts`).
  - Remove the TODO comments.
- `app/(site)/contact/page.tsx`: delete the `contact-note` paragraph that mentions `content/site.ts`.
- `components/site-header.tsx`: add a "Résumé" link to `site.resumePdfPath`, visible in both themes.
- `content/projects.ts`: replace the placeholder cards with the projects Ari lists. Ask for the list at the start of this step. If none is given, hide the `coming-soon` cards.
- **Flag to Ari:** `public/resume.pdf` and the résumé modal (`content/resume.ts`) print `ariwolpin@gmail.com`. Confirm whether that's OK, since only LinkedIn was chosen as public.
- Update the string assertions in `e2e/regression.spec.ts`, then run lint, build, and e2e. Open a PR. Merging deploys to the live domain, so Ari merges.

### Step 1 — Slim the docs (same or separate small PR)

- Move to `docs/archive/`:
  - `NOTEBOOK-FUN-PLAN.md`, `AGENT_LOG.md`, `PULL_REQUESTS.md`, `prompts/`
  - `PHASE-1-*.md`, `HANDOFF-FUN-THEME.md`, `FUN-THEME.md`
- Rewrite `STATUS.md`, `PLAN.md`, and `AGENTS.md` as short files that match reality: the domain is live on this app, and the redesign is in progress. Trim `SPEC.md`'s dual-theme section. Update `.cursor/rules/ariella-website.mdc` to point at the new short docs.
- Append a 2026-10-20 entry to `docs/DECISION_LOG.md` that records the decisions above and supersedes the 2026-10-02 and older theme entries.

### Step 2 — Mockups (artifacts, no repo changes)

Build 3 static HTML mockups. Each has a home page and one inner page (Projects), at desktop and mobile widths. All three use real photos from `public/fun-strip/` and `images/`, plus the notebook and Dymo assets in `public/textures/`.

- **A. Notebook on a dark desk:** a charcoal desk replaces the wood. The marble cover is the home page. Inner pages are open notebook pages with photos taped in. Navigation is gold Dymo tape. Résumé is a Dymo label.
- **B. Photo-first:** a full-bleed photo triptych or rotating hero, as in the Wix site, on charcoal with gold type. Dymo labels are the nav. The notebook appears only as the résumé and archive object.
- **C. Scrapbook spread:** the home page is an open notebook spread. The left page holds name, one line about what you do, and the Résumé, LinkedIn, and Projects labels. The right page holds taped photos. Amber glow on hover and focus.

Ari picks one or mixes them. Record the pick in DECISION_LOG.

### Step 3 — Implement the chosen design (branch `feat/one-design`)

- **Remove theming:**
  - Delete `components/theme-toggle.tsx`, `components/theme-provider.tsx`, `lib/theme-store.ts`, `lib/theme-script.ts`, and `components/home-view.tsx`'s theme switch.
  - Remove the cookie read and the init script in `app/layout.tsx`.
  - Collapse `themes/` into one set of CSS variables in `app/globals.css`.
- **Fonts:** cut the 11 `next/font` families in `app/layout.tsx` to the 3–4 the design uses.
- **Reuse:** keep the existing notebook and Dymo components (`components/notebook/`, `components/dymo/DymoTape.tsx`, `components/resume/*`), the editions archive, and `/studio`.
- **Restyle:** Projects and Contact in the new design.
- **Photos:** use `next/image` with resized assets. Delete the dead assets left over from old designs: `components/photo-strip.tsx`, `content/fun-strip.ts`, the unused `marble-cover*.jpg`, `binding-tape.jpg`, `window-fan.jpg`, and `marble-speckle.svg` if unused.
- **Dymo tape:** final look is done here, not in the mockups. Approach chosen 2026-10-21: on the home cover only, real-looking shiny Dymo plastic (gloss, raised white letters) behind live text; no tape on inner pages, in red (Projects), blue (Résumé), green (LinkedIn), gold, and black. Needs a clean scan of blank tape per color, or one grayscale scan blended over each color. Check text contrast on every color.
- **Photos:** clicking a photo opens a larger view on the page with a link to `photos.ariella.website`. Keyboard and Escape must work.
- **Versions:** the editions archive is linked from its card on Projects, not from the home cover.
- **Revisit during the build:** clicking the notebook itself (not a label) opens Projects. Replace the cover image with a more three-dimensional notebook, possibly with a gold detail.
- **Tests:** rewrite `e2e/regression.spec.ts` around the new copy. Cover the résumé link visible on `/`, mobile nav, and the 404. Drop the cookie and theme cases.
- **Later, re-planned against the new design:** About, photo collections, Notes.

### Verification

- `npm run lint`, `npm run build`, and `npm run test:e2e` pass. CI is green on each PR.
- Take Playwright screenshots of `/`, `/projects`, `/contact`, and `/editions` at 1280 and 390 widths. Review them against the chosen mockup.
- Keyboard-tab through the nav and Dymo links. Check contrast of gold on charcoal (aim for AA) and that reduced motion is respected.
- After Ari merges each PR, re-check `https://www.ariella.website`.
