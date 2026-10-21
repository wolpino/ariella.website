# Agent prompt — NF6 preview, after the auth block

Paste this into a new agent whose workspace is `/Users/ari/codes/ariella.website`. Do not use the notebook repo `ariellawebsite` as the workspace. Do not deploy that repo.

NF6 is still the last port step. The branch and the Playwright config change already exist. Finish the preview run. Stop after the preview URL is recorded and the suite is green against it. Do not attach a domain. There is no NF7.

If you stop before that preview URL and a green preview suite are written into `STATUS.md`, write `docs/prompts/NF6-rest.md` in this same shape: pins, files you may touch, files you must not touch, exact checks, commit list, and this same instruction to write a rest prompt before stopping. A short status note is not a handoff. If a check fails and you cannot fix it without breaking a guardrail, append `blocked` to `docs/AGENT_LOG.md` and replace this prompt with what failed and what the next agent should do.

## What already happened

- Branch `chore/notebook-fun-preview` is pushed. Commit `50e433b` teaches `playwright.config.ts` to use `PLAYWRIGHT_BASE_URL` and skip `webServer` when that variable is set. Local `npm run test:e2e` still starts `next start`.
- Pull request: https://github.com/wolpino/ariella.website/pull/7 against `docs/notebook-fun-plan`. GitHub Action `ci` was green on `50e433b`.
- Vercel preview comment, 2026-10-20: https://ariellawebsite-git-chore-notebook-0dd1b7-aris-projects-caeacc08.vercel.app
- Page navigations in Playwright landed on `https://vercel.com/login?next=...`. The project’s Vercel Authentication is in front of the preview. Static asset checks returned 200. The 16 browser cases failed.
- `vercel whoami` (CLI 48.0.1) reported no credentials. Do not invent another URL.
- `https://www.ariella.website` was requested on 2026-10-20 and the body contained `Mostly practice!`. Repeat that check once before you record NF6 done. Do not add it as a permanent test.
- `docs/PHASE-notebook-fun.md` does not exist yet. Write it only after the preview suite is green.

## Read first

1. `docs/NOTEBOOK-FUN-PLAN.md` — NF6 section, Guardrails, and Tests.
2. `docs/AGENT_LOG.md` — NF6 is `blocked`, not `done`. Continue this step. Do not start a second NF6.
3. `docs/DECISION_LOG.md` — only the 2026-10-02 entry is current for Fun home and deploy.
4. `AGENTS.md`.
5. `e2e/regression.spec.ts` — the NF2, NF3, NF4, and NF5 cases must still pass.
6. `playwright.config.ts` — the preview switch is already there. Do not revert it.

Ignore as current work, even if they contain steps: `docs/HANDOFF-FUN-THEME.md`, `docs/PHASE-1-mvp.md`, `docs/PHASE-1-deploy.md`, `docs/FUN-THEME.md` below its Archive heading, the README “Archive — earlier deploy notes”, and decision-log entries before 2026-10-02.

## Goal

The same Vercel preview URL, reachable without a Vercel login wall, with the existing Playwright suite green against that URL. `https://www.ariella.website` still serves `Mostly practice!`. No new product behavior.

## Pins

| What | Where |
|---|---|
| This repo, branch | `chore/notebook-fun-preview`, already created from `feat/notebook-studio-404`. Do not branch from `main`. |
| Pull request | https://github.com/wolpino/ariella.website/pull/7 |
| Preview | https://ariellawebsite-git-chore-notebook-0dd1b7-aris-projects-caeacc08.vercel.app |
| Vercel project | `ariella.website` on team `aris-projects-caeacc08` (`prj_V4v9uab36S3ZV9DEjCfzUROg27ae`) |
| Notebook source | Local `/Users/ari/codes/ariellawebsite` at `48381c6a5d8df1ec1ca61913158a5214519d084c`. Do not copy from it in this step. |
| Live homepage | `https://www.ariella.website` must still contain `Mostly practice!` when this step ends. |

## Start

- Repo: `/Users/ari/codes/ariella.website`
- Stay on `chore/notebook-fun-preview`.
- Append an `in_progress` row to `docs/AGENT_LOG.md` before editing. Do not claim `package.json`.

## Unblock the preview

`vercel` is installed and not logged in. Ask the user to run `vercel login` in their own terminal if you cannot authenticate. If login fails, stop and leave this prompt in place. Do not invent a URL.

After login, make this preview reachable by the suite without attaching a domain. Prefer one of these, and do not do both if the first works:

1. Turn off Vercel Authentication for preview deployments of this project only. Leave production protection as you find it. Then run the suite against the preview URL above.
2. If previews must stay locked, create an automation bypass and pass it only through the environment for that one run. Add header support in `playwright.config.ts` when `VERCEL_AUTOMATION_BYPASS_SECRET` is set: `x-vercel-protection-bypass` and `x-vercel-set-bypass-cookie: true`. Do not commit the secret. Do not print the secret.

Never `vercel --prod`. Never add `ariella.website`, `www.ariella.website`, or `photos.ariella.website` to any project. Before you merge this pull request anywhere, confirm this repo’s Vercel project does not list those three hostnames. Do not merge to `main`.

## Files you may touch

- `playwright.config.ts` — only to send a bypass header when `VERCEL_AUTOMATION_BYPASS_SECRET` is set. Local `npm run test:e2e` must still start `next start` when `PLAYWRIGHT_BASE_URL` is unset.
- A fix on this branch if the preview fails for a reason in this repo. Keep it small. Do not add features.
- `STATUS.md`, `docs/AGENT_LOG.md`, `docs/PULL_REQUESTS.md`, `docs/NOTEBOOK-FUN-PLAN.md` (next-prompt line only, if you need to point at a rest prompt), and `docs/PHASE-notebook-fun.md` after the preview suite is green.

## Checks that must pass

1. `npm run lint`, `npm run build`, and `npm run test:e2e` pass locally, against `next start`. These already passed on 2026-10-20. Re-run them if you change `playwright.config.ts` or any app file.
2. The pull request’s GitHub Action `ci` is green on the commit you record.
3. Open https://ariellawebsite-git-chore-notebook-0dd1b7-aris-projects-caeacc08.vercel.app in a browser after the protection change. It must show this app, not `vercel.com/login`.
4. Run:

```bash
PLAYWRIGHT_BASE_URL="https://ariellawebsite-git-chore-notebook-0dd1b7-aris-projects-caeacc08.vercel.app" npm run test:e2e
```

The NF2–NF5 cases must pass there. Do not point that variable at `https://www.ariella.website` or `https://ariella.website`.

5. Request `https://www.ariella.website` once and confirm the body still contains `Mostly practice!`. That check is manual. Do not add it as a permanent test.

## Commits

1. Only if the bypass header is required. No product change. No secret in the diff.
2. Preview suite is green. Agent log, status, and PR table record the preview URL and NF6 done. Write `docs/PHASE-notebook-fun.md` with what actually shipped: professional home by default, Fun home as the notebook under the site header, editions 0–2, `/studio` without that header, neutral 404, and the preview URL. Say the public domain was not attached.

## Do not

- Attach `ariella.website`, `www.ariella.website`, or `photos.ariella.website`. Do not change Porkbun or nameservers. Do not create a Render service.
- Run `vercel --prod`.
- Merge to `main`. A preview URL is not a sign to attach the domain.
- Import the notebook repo, enable Tailwind, or copy `src/app/globals.css` or `src/app/layout.tsx`.
- Edit Projects or Contact to switch on theme.
- Point `/editions/1` or `/editions/2` at `/`, or make either edition read `site.coverVariant`.
- Put `This page isn't in the notebook` in `app/not-found.tsx`.
- Overwrite `public/textures/window-fan.jpg`, `public/fun-strip/`, or `public/editions/`.
- Add a test that the live site contains `Mostly practice!`.
- Commit a Vercel token or bypass secret.

## After the preview URL is recorded

Stop. Do not start another product step.
