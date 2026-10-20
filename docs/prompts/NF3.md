# Agent prompt — NF3 Fun home is the notebook

Paste this into a new agent whose workspace is `/Users/ari/codes/ariella.website`. Do not use the notebook repo `ariellawebsite` as the workspace. Copy files out of that repo. Do not deploy it.

When your context is about halfway full, or before you stop for any reason other than a green NF3 pull request, write the next prompt at `docs/prompts/NF4.md` in this same shape: pins, files you may touch, files you must not touch, exact checks, commit list, and the instruction to write `docs/prompts/NF5.md` the same way before stopping. Do that again at each later step. A short status note is not a handoff.

## Read first

1. `docs/NOTEBOOK-FUN-PLAN.md` — NF3 section, Guardrails, and Theme and layout notes.
2. `docs/AGENT_LOG.md` — if NF3 is already `in_progress` or `done`, stop and say so.
3. `docs/DECISION_LOG.md` — only the 2026-10-02 entry is current for Fun home and deploy.
4. `AGENTS.md`.
5. `e2e/regression.spec.ts` — these cases must still pass. Do not assert that Fun home is the photobooth.

Ignore as current work, even if they contain steps: `docs/HANDOFF-FUN-THEME.md`, `docs/PHASE-1-mvp.md`, `docs/PHASE-1-deploy.md`, `docs/FUN-THEME.md` below its Archive heading, the README “Archive — earlier deploy notes”, and decision-log entries before 2026-10-02.

## Goal

`/` with `ariella-theme=fun` keeps `SiteHeader` and replaces the page under it with the high-fidelity composition-notebook cover. No cookie, and `ariella-theme=professional`, still show `Design, photography, and code` and do not show the cover sticker. Projects and Contact stay as they are.

## Pins

| What | Where |
|---|---|
| This repo, branch base | `test/notebook-fun-regression` (NF2). Do not branch from `main`. |
| Notebook source | Local `/Users/ari/codes/ariellawebsite` at `48381c6a5d8df1ec1ca61913158a5214519d084c` |
| Notebook GitHub `origin/main` | `ae6f29e`. That remote is behind the pin. Do not copy from a fresh clone or from GitHub. |

Confirm the pin before copying:

```bash
git -C /Users/ari/codes/ariellawebsite rev-parse HEAD
```

It must print `48381c6a5d8df1ec1ca61913158a5214519d084c`. If it does not, check out that commit in the notebook repo only to read files. Do not commit there.

## Start

- Repo: `/Users/ari/codes/ariella.website`
- Branch from local `test/notebook-fun-regression`.
- New branch: `feat/fun-notebook-home`
- Append an `in_progress` row to `docs/AGENT_LOG.md` before editing application files. Claim `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, and `package.json`. Set `docs/PULL_REQUESTS.md` NF3 to `in_progress` and `STATUS.md` to this step.

## Files you may copy

Read them with `git -C /Users/ari/codes/ariellawebsite show 48381c6a5d8df1ec1ca61913158a5214519d084c:<path>`. Place them in this repo’s existing roots (`components/`, `content/`), not under a new `src/` tree. This repo’s `@/*` alias points at the repo root.

- `src/components/cover/CoverExperience.tsx`
- `src/components/cover/CoverScreen.tsx`
- `src/components/dymo/DymoTape.tsx`
- `src/components/notebook/CompositionLabel.tsx`
- `src/components/notebook/NotebookCover.tsx`
- `src/components/notebook/notebook.css`
- `src/components/resume/ResumeDocument.tsx`
- `src/components/resume/ResumeModal.tsx`
- `src/components/resume/ResumePaper.tsx`
- `src/components/resume/resume.css`
- `src/content/resume.ts`
- Cover fields from `src/config/site.ts` (`title` is `Ariella's Website`, `coverVariant` is `high-fidelity`, `resumePdfPath`, `lastUpdated`, `role`). Keep this repo’s `content/site.ts` `name` as `Ariella Wolpin`. Do not replace the header brand with the cover title.
- Assets, under these new names (do not overwrite `public/textures/window-fan.jpg` or anything in `public/fun-strip/`):
  - `public/textures/notebook-marble.jpg`
  - `public/textures/wood-desk.jpg`
  - `public/textures/dymo-resume.png`
  - `public/textures/dymo-versions.png`
  - `public/resume.pdf`

Fonts the cover uses, loaded in `app/layout.tsx` beside the existing `next/font` variables. Do not remove Fraunces, Source Sans 3, Syne, or DM Sans. The notebook layout loads Caveat, Geist, Permanent Marker, Sofia Sans Condensed, Source Serif 4, Special Elite, and Walter Turncoat. Bring the ones `notebook.css` and `resume.css` actually reference.

Dependency: `@radix-ui/react-dialog` only. `package.json` is owned by this step for that add. Do not add Tailwind, PostCSS, or `@tailwindcss/postcss`.

## Adapt while copying

- Rename the notebook attribute `data-theme` on `.desk` to `data-cover`. Update `notebook.css` selectors from `.desk[data-theme="high-fidelity"]` and `.desk[data-theme="stylized"]` to `data-cover`. This app already sets `data-theme="professional"` or `data-theme="fun"` on `<html>`.
- Rewrite Tailwind utilities into plain CSS. The cover files mostly use their own class names. `sr-only` is the one to replace: add a local `.sr-only` rule and use it on the resume dialog title and description, and on the Dymo label. Do not import `src/app/globals.css` or `src/app/layout.tsx` from the notebook repo. That stylesheet starts with `@import "tailwindcss"` and sets a black page background.
- `.desk` is `min-height: 100dvh` in the notebook. Under this site’s sticky header, the notebook’s minimum height is the viewport minus the header, not `100vh` or `100dvh` stacked on top of the header.
- Fun cover variant on `/` is `high-fidelity`. Do not add `/editions` or `/studio` in this step. Do not point anything at those routes yet. If the cover renders an editions link, leave the link only if it does not 404 in a way that breaks the home checks; otherwise omit the editions mark until NF4. Resume stays. Opening it uses `/?resume=1` on the Fun home.
- Home is the only route that may choose a different component tree from the theme. `app/page.tsx` may switch on the theme. Projects and Contact may not.
- The server already reads the `ariella-theme` cookie in `app/layout.tsx` and defaults to `professional`. Keep that. First visit with no cookie must not paint the notebook.
- Header stays in the root layout. Moving it into a route group is NF5.

The high-fidelity sticker is `aria-hidden` and split across spans: `This website`, `is a work in`, `progress!`. Assert those visible pieces. There is no single text node that reads `This website is a work in progress`.

## Checks that must pass

Existing NF2 cases in `e2e/regression.spec.ts` still pass.

Add cases to that same suite:

- No `ariella-theme` cookie: `/` shows `Design, photography, and code` and does not show the sticker text `This website`.
- Cookie `ariella-theme=professional`: same as no cookie.
- Cookie `ariella-theme=fun`: `/` shows the site header and the sticker pieces `This website`, `is a work in`, and `progress!`. It does not show `Design, photography, and code`.
- Click Fun, reload, then click Professional. Fun shows the sticker. Professional shows `Design, photography, and code` and hides the sticker.
- The notebook sits under the sticky header. Its box does not extend by a full extra viewport below the header. Check the computed height against `window.innerHeight` minus the header height.

`npm run lint`, `npm run build`, and `npm run test:e2e` pass. Verify the Fun and Professional home in the browser, including a reload after the theme click, on a desktop width and a narrow width.

## Commits

1. Copy components, CSS, content, and assets. Rename `data-theme` to `data-cover`. No route change yet.
2. Wire `/` to render the existing hero for Professional and the notebook for Fun. Header stays in the layout. Fit the notebook under the header.
3. Add the Fun-home Playwright cases. The NF2 cases still pass. Agent log, status, and PR table updated to NF3 done.

## Do not

- Import the notebook repo as a package, enable Tailwind, or copy `src/app/globals.css` or `src/app/layout.tsx`.
- Edit Projects or Contact to switch on theme.
- Add `/editions`, `/studio`, or a new 404. Those are NF4 and NF5.
- Overwrite `public/textures/window-fan.jpg` or `public/fun-strip/`.
- Remove the photobooth components in this step unless the home no longer imports them. Do not write a test that Fun home is the photobooth strip.
- Attach a domain, run `vercel --prod`, change Porkbun, or create Render.
- Merge to `main` if this repo’s Vercel project lists `ariella.website`, `www.ariella.website`, or `photos.ariella.website`. Opening a pull request is fine. A preview URL is fine. It is not a sign to attach the domain.
- Wait for a person to approve the port. Stop only if a check fails and you cannot fix it without breaking a guardrail. Write that in the agent log as `blocked`, and write `docs/prompts/NF3-blocked.md` with what failed and what the next agent should do.

## After NF3 is green

Write `docs/prompts/NF4.md` for the editions archive before you end, using [NOTEBOOK-FUN-PLAN.md](../NOTEBOOK-FUN-PLAN.md) NF4. Include the handoff rule above.
