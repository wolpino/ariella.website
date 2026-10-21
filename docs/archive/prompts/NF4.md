# Agent prompt — NF4 editions archive

Paste this into a new agent whose workspace is `/Users/ari/codes/ariella.website`. Do not use the notebook repo `ariellawebsite` as the workspace. Copy files out of that repo. Do not deploy it.

When your context is about halfway full, or before you stop for any reason other than a green NF4 pull request, write the next prompt at `docs/prompts/NF5.md` in this same shape: pins, files you may touch, files you must not touch, exact checks, commit list, and the instruction to write `docs/prompts/NF6.md` the same way before stopping. Do that again at each later step. A short status note is not a handoff.

## Read first

1. `docs/NOTEBOOK-FUN-PLAN.md` — NF4 section, Guardrails, and Theme and layout notes.
2. `docs/AGENT_LOG.md` — if NF4 is already `in_progress` or `done`, stop and say so.
3. `docs/DECISION_LOG.md` — only the 2026-10-02 entry is current for Fun home and deploy.
4. `AGENTS.md`.
5. `e2e/regression.spec.ts` — the NF2 and NF3 cases must still pass.

Ignore as current work, even if they contain steps: `docs/HANDOFF-FUN-THEME.md`, `docs/PHASE-1-mvp.md`, `docs/PHASE-1-deploy.md`, `docs/FUN-THEME.md` below its Archive heading, the README “Archive — earlier deploy notes”, and decision-log entries before 2026-10-02.

## Goal

`/editions`, `/editions/0`, `/editions/1`, and `/editions/2` match the notebook catalog and keep `SiteHeader`. The index shows `Mostly practice`, `Composition cover`, and `Marble cover`. Frozen editions do not follow the live cover variant. Do not point `/editions/1` or `/editions/2` at `/`.

## Pins

| What | Where |
|---|---|
| This repo, branch base | `feat/fun-notebook-home` (NF3). Do not branch from `main`. |
| Notebook source | Local `/Users/ari/codes/ariellawebsite` at `48381c6a5d8df1ec1ca61913158a5214519d084c` |
| Notebook GitHub `origin/main` | `ae6f29e`. That remote is behind the pin. Do not copy from a fresh clone or from GitHub. |

Confirm the pin before copying:

```bash
git -C /Users/ari/codes/ariellawebsite rev-parse HEAD
```

It must print `48381c6a5d8df1ec1ca61913158a5214519d084c`. If it does not, check out that commit in the notebook repo only to read files. Do not commit there.

## Start

- Repo: `/Users/ari/codes/ariella.website`
- Branch from local `feat/fun-notebook-home`.
- New branch: `feat/notebook-editions`
- Append an `in_progress` row to `docs/AGENT_LOG.md` before editing application files. Claim the edition routes and components. Do not claim `package.json` unless a check fails without a dependency that is already allowed. `@radix-ui/react-dialog` is already installed. Set `docs/PULL_REQUESTS.md` NF4 to `in_progress` and `STATUS.md` to this step.

## Files you may copy

Read them with `git -C /Users/ari/codes/ariellawebsite show 48381c6a5d8df1ec1ca61913158a5214519d084c:<path>`. Place them in this repo’s existing roots. `@/*` points at the repo root, so `editions/catalog.ts` stays importable as `@/editions/catalog`. Do not create a `src/` tree.

- `src/components/editions/EditionsIndex.tsx`
- `src/components/editions/editions.css`
- `src/editions/catalog.ts`
- `src/editions/0/EditionZero.tsx`
- `src/editions/0/edition-zero.css`
- `src/editions/1/EditionOne.tsx`
- `src/editions/2/EditionTwo.tsx`
- `src/app/editions/page.tsx` and `src/app/editions/0/page.tsx`, `src/app/editions/1/page.tsx`, `src/app/editions/2/page.tsx` — adapt them into this app’s `app/editions/` routes. This repo’s root layout already renders `SiteHeader` and `<main class="site-main">`. Do not add a second header. Do not nest a second `<main>`.
- Assets, under these names (do not overwrite `public/textures/window-fan.jpg`, `public/fun-strip/`, or the NF3 textures):
  - `public/editions/shelby.jpg`
  - `public/editions/version-0.png`

`public/textures/marble-speckle.svg` is already in this repo. Edition 1’s stylized cover uses it. Do not replace it.

## Adapt while copying

- The notebook editions index page uses Tailwind utilities (`min-h-dvh`, `bg-[#f3eee4]`, `mx-auto`, `max-w-2xl`, `mt-3`, `font-[family-name:var(--font-serif)]`, and the typewriter link classes). Rewrite those into plain CSS in `editions.css` or a page class. Do not import the notebook `src/app/globals.css` or `src/app/layout.tsx`. Do not add Tailwind, PostCSS, or `@tailwindcss/postcss`.
- `sr-only` already exists in `components/dymo/dymo.css` and `components/resume/resume.css`. Keep using that class. Do not add Tailwind’s `sr-only`.
- Edition 1 stays `stylized`. Edition 2 stays `high-fidelity`. Neither reads `site.coverVariant`.
- Fun home currently passes `showEditionsMark={false}` from `components/home-view.tsx` because `/editions` did not exist. Once the route exists, stop passing `false` so the cover’s Versions tape links to `/editions`. That is the only home-page change in this step.
- Project cards use the class `composition-label` for a different component. The notebook cover label is scoped under `.desk[data-cover]`. Do not restyle Projects or Contact.
- `.desk` already fills the space under the sticky header (`html:has(.desk)` in `app/globals.css`). Edition covers that render `.desk` get that fit. Do not set those covers back to `100dvh` stacked under the header. Edition 0’s own CSS uses `min-height: 100dvh`. Fit that page under the header the same way: the page box is the viewport minus the header, not a full extra viewport below it.
- Header stays in the root layout. Moving it into a route group is NF5. Do not add `/studio` or a new 404.

## Checks that must pass

Existing NF2 and NF3 cases in `e2e/regression.spec.ts` still pass.

Add cases to that same suite:

- `/editions` shows the site header and the titles `Mostly practice`, `Composition cover`, and `Marble cover`.
- `/editions/0`, `/editions/1`, and `/editions/2` each show the site header.
- `/editions/1` shows the stylized sticker text `Work in progress`. It does not show the high-fidelity pieces as the only cover, and it is not a redirect to `/`.
- `/editions/2` shows `This website`, `is a work in`, and `progress!`. It is not a redirect to `/`.
- Fun home’s Versions control goes to `/editions` (the editions mark is visible and its href is `/editions`).

`npm run lint`, `npm run build`, and `npm run test:e2e` pass. Verify the index and one edition in the browser at a desktop width and a narrow width.

## Commits

1. Copy edition components, catalog, and edition assets. Plain CSS instead of Tailwind utilities on the index. No routes yet, or routes that are not linked, as long as the app still builds.
2. Add `/editions`, `/editions/0`, `/editions/1`, and `/editions/2` under the layout that already includes `SiteHeader`. Turn the Fun-home editions mark back on.
3. Add Playwright coverage for the index and the three edition URLs. The NF2 and NF3 cases still pass. Agent log, status, and PR table updated to NF4 done.

## Do not

- Import the notebook repo as a package, enable Tailwind, or copy `src/app/globals.css` or `src/app/layout.tsx`.
- Edit Projects or Contact to switch on theme.
- Add `/studio` or a new 404. Those are NF5.
- Point `/editions/1` or `/editions/2` at `/`, or make either edition read `site.coverVariant`.
- Overwrite `public/textures/window-fan.jpg` or `public/fun-strip/`.
- Move `SiteHeader` out of the root layout. That is NF5.
- Attach a domain, run `vercel --prod`, change Porkbun, or create Render.
- Merge to `main` if this repo’s Vercel project lists `ariella.website`, `www.ariella.website`, or `photos.ariella.website`. Opening a pull request is fine. A preview URL is fine. It is not a sign to attach the domain.
- Wait for a person to approve the port. Stop only if a check fails and you cannot fix it without breaking a guardrail. Write that in the agent log as `blocked`, and write `docs/prompts/NF4-blocked.md` with what failed and what the next agent should do.

## After NF4 is green

Write `docs/prompts/NF5.md` for studio and the neutral 404 before you end, using [NOTEBOOK-FUN-PLAN.md](../NOTEBOOK-FUN-PLAN.md) NF5. Include the handoff rule above.
