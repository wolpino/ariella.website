# Agent prompt — NF5 studio and neutral 404

Paste this into a new agent whose workspace is `/Users/ari/codes/ariella.website`. Do not use the notebook repo `ariellawebsite` as the workspace. Copy files out of that repo. Do not deploy it.

When your context is about halfway full, or before you stop for any reason other than a green NF5 pull request, write the next prompt at `docs/prompts/NF6.md` in this same shape: pins, files you may touch, files you must not touch, exact checks, commit list, and the instruction to write the following prompt the same way before stopping. NF6 is the last port step. Its prompt should say to stop after the preview URL. A short status note is not a handoff.

## Read first

1. `docs/NOTEBOOK-FUN-PLAN.md` — NF5 section, Guardrails, and Theme and layout notes.
2. `docs/AGENT_LOG.md` — if NF5 is already `in_progress` or `done`, stop and say so.
3. `docs/DECISION_LOG.md` — only the 2026-10-02 entry is current for Fun home and deploy.
4. `AGENTS.md`.
5. `e2e/regression.spec.ts` — the NF2, NF3, and NF4 cases must still pass.

Ignore as current work, even if they contain steps: `docs/HANDOFF-FUN-THEME.md`, `docs/PHASE-1-mvp.md`, `docs/PHASE-1-deploy.md`, `docs/FUN-THEME.md` below its Archive heading, the README “Archive — earlier deploy notes”, and decision-log entries before 2026-10-02.

## Goal

`/studio` shows `Cover treatments`, is `noindex`, keeps its own toolbar, and does not render `header.site-header`. `/`, `/projects`, `/contact`, and `/editions` (including editions 0–2) still show that header. An unknown URL shows a neutral 404. The string `This page isn't in the notebook` is not in `app/not-found.tsx`.

## Pins

| What | Where |
|---|---|
| This repo, branch base | `feat/notebook-editions` (NF4). Do not branch from `main`. |
| Notebook source | Local `/Users/ari/codes/ariellawebsite` at `48381c6a5d8df1ec1ca61913158a5214519d084c` |
| Notebook GitHub `origin/main` | `ae6f29e`. That remote is behind the pin. Do not copy from a fresh clone or from GitHub. |

Confirm the pin before copying:

```bash
git -C /Users/ari/codes/ariellawebsite rev-parse HEAD
```

It must print `48381c6a5d8df1ec1ca61913158a5214519d084c`. If it does not, check out that commit in the notebook repo only to read files. Do not commit there.

## Start

- Repo: `/Users/ari/codes/ariella.website`
- Branch from local `feat/notebook-editions`.
- New branch: `feat/notebook-studio-404`
- Append an `in_progress` row to `docs/AGENT_LOG.md` before editing application files. Claim the route-group layout, `/studio`, and `app/not-found.tsx`. Do not claim `package.json` unless a check fails without a dependency that is already allowed. Set `docs/PULL_REQUESTS.md` NF5 to `in_progress` and `STATUS.md` to this step.

## Files you may copy

Read them with `git -C /Users/ari/codes/ariellawebsite show 48381c6a5d8df1ec1ca61913158a5214519d084c:<path>`. Place them in this repo’s existing roots. `@/*` points at the repo root. Do not create a `src/` tree.

- `src/app/studio/page.tsx` and `src/app/studio/studio-view.tsx` — adapt them into `app/studio/`. The page stays at `/studio`, outside the site route group.
- Do not copy `src/app/not-found.tsx` as the live 404. That file’s heading is `This page isn't in the notebook`. Write a new neutral `app/not-found.tsx` instead.

No new image assets. Studio reuses the covers and textures already in this repo.

## Adapt while copying

- Move `SiteHeader` and `<main className="site-main">` out of `app/layout.tsx` into `app/(site)/layout.tsx`. The root layout keeps the fonts, the `ariella-theme` cookie, `ThemeProvider`, and the theme script. Move these pages into the group without changing their URLs:
  - `app/page.tsx` → `app/(site)/page.tsx`
  - `app/projects/page.tsx` → `app/(site)/projects/page.tsx`
  - `app/contact/page.tsx` → `app/(site)/contact/page.tsx`
  - `app/editions/**` → `app/(site)/editions/**`
- Leave `app/studio/page.tsx` outside `(site)`. Do not add a second site header inside studio.
- Projects and Contact pages use a `<header className="section-head">` for the page title. That is not `header.site-header`. Leave it.
- The notebook studio view is full of Tailwind utilities (`min-h-dvh`, `bg-[#1a1a1a]`, `font-[family-name:var(--font-typewriter)]`, `rounded-sm`, `px-4`, and the variant-button class strings). Rewrite those into plain CSS, for example `app/studio/studio.css`. Do not import the notebook `src/app/globals.css` or `src/app/layout.tsx`. Do not add Tailwind, PostCSS, or `@tailwindcss/postcss`.
- `sr-only` already exists in `components/dymo/dymo.css` and `components/resume/resume.css`. Keep using that class if studio needs it. Do not add Tailwind’s `sr-only`.
- Studio imports `coverVariants` from `@/config/site` in the notebook. This repo exports `coverVariants` and `CoverVariant` from `@/content/site`. Use that. The note in the studio view that mentions `src/config/site.ts` should say `content/site.ts`.
- Studio metadata stays `robots: { index: false, follow: false }`. The visible heading stays `Cover treatments`. The toolbar label stays `Studio · not indexed`. The three cover buttons stay `stylized`, `classic label`, and `ornate label`, plus `Phone frame` / `Full width`.
- `html:has(.desk)` in `app/globals.css` locks the document to one viewport whenever a cover is on the page. Fun home and the edition covers depend on that. Studio also renders `.desk`, and it will not be inside `.site-main`. Keep the studio toolbar visible above the cover. Do not let the lock clip the toolbar off the page, and do not let Fun home or `/editions/1` or `/editions/2` grow a second viewport under the site header.
- The neutral 404 is a short page: a heading such as `Page not found` and a link back to `/`. Plain CSS. No marble desk, no notebook sentence, no second site header. Because the header lives in `(site)`, the root `app/not-found.tsx` will not include `header.site-header`. That is expected.
- Edition 1 stays `stylized`. Edition 2 stays `high-fidelity`. Neither reads `site.coverVariant`. Do not point `/editions/1` or `/editions/2` at `/`.
- Do not change Projects or Contact to switch on theme.

## Checks that must pass

Existing NF2, NF3, and NF4 cases in `e2e/regression.spec.ts` still pass.

Add cases to that same suite:

- `/studio` shows the heading `Cover treatments`. `header.site-header` has count 0. The document has `<meta name="robots" content="noindex, nofollow">` or an equivalent robots meta that includes `noindex`.
- A missing path such as `/not-a-page` does not show `This page isn't in the notebook`. It shows a neutral not-found heading.
- With cookie `ariella-theme=fun`, `/` with `?resume=1` shows the resume dialog: the accessible name `Resume`, and the link or button `Download PDF`.
- These URLs return 200: `/resume.pdf`, `/textures/notebook-marble.jpg`, `/editions/shelby.jpg`.

`npm run lint`, `npm run build`, and `npm run test:e2e` pass. Verify `/studio` and one missing URL in the browser at a desktop width and a narrow width. Confirm `/`, `/projects`, `/contact`, and `/editions` still show the site header after the route-group move.

## Commits

1. Move `SiteHeader` into `app/(site)/layout.tsx`. Add `/studio` with its toolbar and plain CSS, outside that group. No 404 copy yet, as long as the app still builds and the existing header tests pass.
2. Add the neutral `app/not-found.tsx`. The notebook 404 sentence is not in that file.
3. Add Playwright coverage for studio, the neutral 404, the Fun-home resume query, and the three asset URLs. The NF2–NF4 cases still pass. Agent log, status, and PR table updated to NF5 done.

## Do not

- Import the notebook repo as a package, enable Tailwind, or copy `src/app/globals.css` or `src/app/layout.tsx`.
- Edit Projects or Contact to switch on theme.
- Point `/editions/1` or `/editions/2` at `/`, or make either edition read `site.coverVariant`.
- Put `This page isn't in the notebook` in `app/not-found.tsx`.
- Overwrite `public/textures/window-fan.jpg`, `public/fun-strip/`, or `public/editions/`.
- Attach a domain, run `vercel --prod`, change Porkbun, or create Render.
- Merge to `main` if this repo’s Vercel project lists `ariella.website`, `www.ariella.website`, or `photos.ariella.website`. Opening a pull request is fine. A preview URL is fine. It is not a sign to attach the domain.
- Wait for a person to approve the port. Stop only if a check fails and you cannot fix it without breaking a guardrail. Write that in the agent log as `blocked`, and write `docs/prompts/NF5-blocked.md` with what failed and what the next agent should do.

## After NF5 is green

Write `docs/prompts/NF6.md` for the preview-only step before you end, using [NOTEBOOK-FUN-PLAN.md](../NOTEBOOK-FUN-PLAN.md) NF6. Include the handoff rule above. NF6 stops at the preview URL and does not attach the domain.
