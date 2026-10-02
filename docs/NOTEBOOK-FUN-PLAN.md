# Notebook Fun — technical plan

Current build. Older Fun directions in [FUN-THEME.md](FUN-THEME.md) and earlier [DECISION_LOG.md](DECISION_LOG.md) entries are history. If they disagree with this file, this file wins.

Agent claims: [AGENT_LOG.md](AGENT_LOG.md). PR table: [PULL_REQUESTS.md](PULL_REQUESTS.md).

## Outcome

`/` with no theme cookie is the professional home that already ships in this repo.

`/` with the Fun theme keeps `SiteHeader` and replaces the page under it with the composition-notebook cover from the local notebook repo.

`/editions` and `/editions/0`, `/editions/1`, `/editions/2` move with that notebook and keep the site header.

`/studio` moves too. It keeps its own toolbar and does not show the site header.

Projects and Contact stay the pages they are today, in both themes.

The public domain does not move. The last step is a Vercel preview URL.

## Pins

| What | Where |
|---|---|
| This repo, branch base | `origin/main` `89382908ff1f43cdc157b433fd756339b54e0328` |
| Notebook source | Local `/Users/ari/codes/ariellawebsite` at `48381c6a5d8df1ec1ca61913158a5214519d084c` |
| Notebook GitHub `origin/main` | `ae6f29e`. That remote is four commits behind the pin. Do not copy from a fresh clone. |
| Live homepage | `https://www.ariella.website` serves “Mostly practice!” from an older Vercel project. `https://ariella.website` redirects there. |
| Photo site | `https://photos.ariella.website` is the separate Vercel project `my_first_website` (`/Users/ari/codes/my_first_website`). |
| Registrar | Porkbun. Nameservers are `ns1.vercel-dns.com` and `ns2.vercel-dns.com`. |

## Guardrails

- Work only in this repo, on the branches in the PR table.
- Copy notebook files from the local pin above. Do not deploy `/Users/ari/codes/ariellawebsite`. Do not create a Render service. Ignore `render.yaml` and `docs/deploy.md` in that repo.
- Do not change Porkbun. Do not change nameservers. Do not add, remove, or edit `ariella.website`, `www.ariella.website`, or `photos.ariella.website` on any Vercel project.
- Before merging any pull request, confirm this repo’s Vercel project does not list those three hostnames. If it does, stop.
- After the preview exists, request `https://www.ariella.website` once and confirm the body still contains `Mostly practice!`. That check is manual. Do not add it as a permanent test.
- Do not import the notebook repo’s `src/app/globals.css`. It starts with `@import "tailwindcss"` and sets a black page background. Do not enable Tailwind preflight in this app. Rewrite notebook utility classes as plain CSS.
- The notebook component sets `data-theme="high-fidelity"` or `data-theme="stylized"` on `.desk`. This app sets `data-theme="professional"` or `data-theme="fun"` on `<html>`. Rename the notebook attribute to `data-cover` while copying, and update `notebook.css` selectors to match.
- Do not overwrite `public/textures/window-fan.jpg` or anything under `public/fun-strip/`. This repo already has other marble files (`marble-cover.jpg`, `binding-tape.jpg`, `marble-cover-oxford.jpg`). Leave them. Add the notebook files under new names.
- Home is the only route allowed to choose a different component tree from the theme. Projects and Contact stay on CSS variables.
- One owner at a time for `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, and `package.json` after NF2. Claim them in the agent log.
- Do not write a test that Fun home is the photobooth strip. That behavior is being replaced.
- Do not merge a red Playwright suite, and do not make the new specs a required check while they fail.
- Header brand stays `Ariella Wolpin` (`content/site.ts` `name`). Cover title stays `Ariella's Website` (notebook `site.title`). Both stay.
- Fun cover variant on `/` is `high-fidelity`. Edition 1 stays `stylized`. Edition 2 stays `high-fidelity`. Neither edition reads the live `coverVariant`.
- Resume modal copy and `public/resume.pdf` come from the notebook repo. Opening it uses `/?resume=1` on the Fun home.

## Pull requests

Each PR is green before it merges. Branch each one from the previous PR’s branch until that PR is on `main`, then branch from `main`. Small commits are listed under the PR. Do not squash away the commit boundaries.

### NF1 — docs (this plan)

Branch: `docs/notebook-fun-plan`

Commits:

1. This plan, the decision-log entry, `docs/AGENT_LOG.md`, and the updates to `PLAN.md`, `STATUS.md`, `AGENTS.md`, `docs/PULL_REQUESTS.md`, and `docs/FUN-THEME.md`.

No application code.

### NF2 — regression tests and CI

Branch: `test/notebook-fun-regression`

Passes on today’s site, before any notebook port. Fun home is still the photobooth in this PR. Do not assert that. Assert only what must survive:

- No `ariella-theme` cookie: `/` shows `Design, photography, and code` and the site header (`Ariella Wolpin`, Home, Projects, Contact, Professional, Fun).
- Cookie `ariella-theme=professional` and cookie `ariella-theme=fun`: `/projects` shows `Projects`, `/contact` shows `Contact`, and the site header is present.
- Clicking the theme buttons does not remove the header.

Commits:

1. Add Playwright, `playwright.config.ts`, `npm run test:e2e`, and the regression spec.
2. Add `.github/workflows/ci.yml`: Node 22, `npm ci`, `npm run lint`, `npm run build`, `npm run test:e2e` against `next build && next start`. Add `.nvmrc` with `22`.
3. Confirm the workflow is green on the pull request.

`package.json` is owned here. Later PRs may add `@radix-ui/react-dialog` in NF3 only.

### NF3 — Fun home is the notebook

Branch: `feat/fun-notebook-home`

`/` with `ariella-theme=fun` shows the site header and the text `This website is a work in progress`. No cookie, and `ariella-theme=professional`, still show `Design, photography, and code` and do not show that sticker. Clicking Fun, reloading, then clicking Professional switches between those two. The notebook fills the space under the sticky header (`min-height` is the viewport minus the header, not `100vh` plus the header).

Copy from the pin, then adapt:

- Cover, notebook CSS, Dymo tape, resume modal, resume document, resume content.
- Assets: `public/textures/notebook-marble.jpg`, `public/textures/wood-desk.jpg`, `public/textures/dymo-resume.png`, `public/textures/dymo-versions.png`, `public/resume.pdf`.
- Fonts the cover uses, loaded beside the existing `next/font` variables. Do not remove Fraunces, Source Sans 3, Syne, or DM Sans.
- Dependency: `@radix-ui/react-dialog`.

Rewrite Tailwind classes (`sr-only`, layout utilities) into plain CSS. Add a local `.sr-only` rule. Do not port `src/app/layout.tsx` or `src/app/globals.css` from the notebook repo.

Commits:

1. Copy components, CSS, content, and assets. Rename `data-theme` to `data-cover`. No route change yet.
2. Wire `/` to render the existing hero for Professional and the notebook for Fun. Header stays in the layout.
3. Add the Fun-home Playwright cases. The NF2 cases still pass.

### NF4 — editions archive

Branch: `feat/notebook-editions`

Routes `/editions`, `/editions/0`, `/editions/1`, `/editions/2` match the notebook catalog. The site header is on each. Archive titles visible on the index: `Mostly practice`, `Composition cover`, `Marble cover`. Also copy `public/editions/shelby.jpg` and `public/editions/version-0.png`.

Frozen editions do not follow the live cover variant. Do not point `/editions/1` or `/editions/2` at `/`.

Commits:

1. Copy edition components, catalog, and edition assets. Plain CSS instead of Tailwind utilities on the index.
2. Add the routes under the layout that includes `SiteHeader`.
3. Add Playwright coverage for the index and the three edition URLs.

### NF5 — studio and neutral 404

Branch: `feat/notebook-studio-404`

`/studio` shows `Cover treatments`, is `noindex`, and does not render `header.site-header`. Move `SiteHeader` out of the root layout into a route-group layout that wraps `/`, `/projects`, `/contact`, and `/editions`. Leave `/studio` outside that group so the URL stays `/studio`.

Unknown URLs show a neutral 404. The string `This page isn't in the notebook` is not in `app/not-found.tsx`.

Commits:

1. Route group so studio has no site header. Studio toolbar remains.
2. Neutral 404.
3. Playwright: studio header absent and “Cover treatments” present; a missing path does not show the notebook 404 sentence. Fun-home `/?resume=1` opens the resume dialog. These asset URLs return 200: `/resume.pdf`, `/textures/notebook-marble.jpg`, `/editions/shelby.jpg`.

### NF6 — preview only

Branch: `chore/notebook-fun-preview`

No new product behavior unless a preview failure forces a fix on this branch.

1. `npm run lint`, `npm run build`, and `npm run test:e2e` pass locally.
2. The pull request’s GitHub Action is green.
3. Open the Vercel preview for this branch. Run the same Playwright suite with that preview as the base URL.
4. Request `https://www.ariella.website` and confirm `Mostly practice!` is still the live page.
5. Stop. Do not attach the domain.

If Vercel login fails, stop and write that in the agent log. Do not invent a deploy.

## Theme and layout notes

The server already reads the `ariella-theme` cookie in `app/layout.tsx` and defaults to `professional`. Keep that. First visit with no cookie must not paint the notebook.

Playwright sets the cookie before navigation when a case needs Fun. Also cover the click path: the toggle writes the cookie and `localStorage` key `ariella-theme`.

Suggested route groups, URLs unchanged:

```text
app/layout.tsx                 fonts, cookie, ThemeProvider, no header
app/(site)/layout.tsx          SiteHeader + main
app/(site)/page.tsx            professional hero or Fun notebook
app/(site)/projects/page.tsx
app/(site)/contact/page.tsx
app/(site)/editions/...
app/studio/page.tsx            studio toolbar only
```

Moving files into `(site)` is one commit owned by NF5. NF3 may leave the header in the root layout. NF5 is the commit that moves it.

## Tests

One Playwright suite. `npm run test:e2e` hits a local `next start`. The preview run is the same command with the preview base URL.

NF2 adds the regression cases and turns CI on. NF3 through NF5 add cases in the same suite only when the behavior exists, so each pull request is green.

Do not snapshot the whole page. Assert the strings in this plan.

## Parallel work

Safe beside the implementation, after NF2 is green and claimed in the agent log:

- Pushing the four local notebook commits to `wolpino/ariellawebsite` is a backup. The copy source remains commit `48381c6` on disk.
- A draft preview of a branch does not change `www.ariella.website`. It is not a finished deploy.

Not safe in parallel: two agents editing the layout, the home page, `globals.css`, or `package.json`.

## Docs agents must update when a step finishes

- [AGENT_LOG.md](AGENT_LOG.md) when a step starts and when it finishes.
- [STATUS.md](../STATUS.md) so it does not say “attach the domain”.
- [PULL_REQUESTS.md](PULL_REQUESTS.md) status and the GitHub URL.
- A short `docs/PHASE-notebook-fun.md` only after NF6, recording what actually shipped.
