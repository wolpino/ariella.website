# Agent prompt — NF6 preview only

Paste this into a new agent whose workspace is `/Users/ari/codes/ariella.website`. Do not use the notebook repo `ariellawebsite` as the workspace. Do not deploy that repo.

NF6 is the last port step. Stop after the preview URL is recorded. Do not attach a domain. There is no NF7.

If you stop before that preview URL is written into `STATUS.md`, write `docs/prompts/NF6-rest.md` in this same shape: pins, files you may touch, files you must not touch, exact checks, commit list, and this same instruction to write a rest prompt before stopping. A short status note is not a handoff. If a check fails and you cannot fix it without breaking a guardrail, append `blocked` to `docs/AGENT_LOG.md` and write `docs/prompts/NF6-blocked.md` with what failed and what the next agent should do.

## Read first

1. `docs/NOTEBOOK-FUN-PLAN.md` — NF6 section, Guardrails, and Tests.
2. `docs/AGENT_LOG.md` — if NF6 is already `in_progress` or `done`, stop and say so.
3. `docs/DECISION_LOG.md` — only the 2026-10-02 entry is current for Fun home and deploy.
4. `AGENTS.md`.
5. `e2e/regression.spec.ts` — the NF2, NF3, NF4, and NF5 cases must still pass.

Ignore as current work, even if they contain steps: `docs/HANDOFF-FUN-THEME.md`, `docs/PHASE-1-mvp.md`, `docs/PHASE-1-deploy.md`, `docs/FUN-THEME.md` below its Archive heading, the README “Archive — earlier deploy notes”, and decision-log entries before 2026-10-02.

## Goal

A Vercel preview URL for this branch, with the existing Playwright suite green against that URL. `https://www.ariella.website` still serves `Mostly practice!`. No new product behavior unless a preview failure forces a fix on this branch.

## Pins

| What | Where |
|---|---|
| This repo, branch base | `feat/notebook-studio-404` (NF5). Do not branch from `main`. |
| Notebook source | Local `/Users/ari/codes/ariellawebsite` at `48381c6a5d8df1ec1ca61913158a5214519d084c`. Do not copy from it in this step. |
| Notebook GitHub `origin/main` | `ae6f29e`. That remote is behind the pin. |
| Live homepage | `https://www.ariella.website` must still contain `Mostly practice!` when this step ends. |

## Start

- Repo: `/Users/ari/codes/ariella.website`
- Branch from local `feat/notebook-studio-404`.
- New branch: `chore/notebook-fun-preview`
- Append an `in_progress` row to `docs/AGENT_LOG.md` before editing. Claim the preview run. Do not claim `package.json`. Set `docs/PULL_REQUESTS.md` NF6 to `in_progress` and `STATUS.md` to this step.

## Files you may touch

- `playwright.config.ts` — only so an external base URL can run the existing suite. See the preview command below.
- A fix on this branch if the preview fails for a reason in this repo. Keep it small. Do not add features.
- `STATUS.md`, `docs/AGENT_LOG.md`, `docs/PULL_REQUESTS.md`, `docs/NOTEBOOK-FUN-PLAN.md` (next-prompt line only, if you need to point at a rest prompt), and `docs/PHASE-notebook-fun.md` after the preview exists.

## Preview command

`playwright.config.ts` hardcodes `http://127.0.0.1:3000` and always starts `next start`. Local `npm run test:e2e` must keep doing that.

For the preview, read `PLAYWRIGHT_BASE_URL` when it is set, use it as `baseURL`, and do not start `webServer` in that case. Then run:

```bash
PLAYWRIGHT_BASE_URL="https://the-preview-url" npm run test:e2e
```

Do not point that variable at `https://www.ariella.website` or `https://ariella.website`.

## Checks that must pass

1. `npm run lint`, `npm run build`, and `npm run test:e2e` pass locally, against `next start`.
2. The pull request’s GitHub Action `ci` is green.
3. Open the Vercel preview for this branch. NF4’s pull request had a `ci` check and no Vercel check. If this pull request has no preview comment, run `vercel` for a preview of this branch only. Never `vercel --prod`. Never add `ariella.website`, `www.ariella.website`, or `photos.ariella.website` to any project. If `vercel` login or link fails, stop. Write `blocked` in the agent log. Do not invent a URL.
4. Run the Playwright suite with `PLAYWRIGHT_BASE_URL` set to that preview. The NF2–NF5 cases must pass there.
5. Request `https://www.ariella.website` once and confirm the body still contains `Mostly practice!`. That check is manual. Do not add it as a permanent test.

## Commits

1. Local lint, build, and e2e are green. If the preview run needs `PLAYWRIGHT_BASE_URL`, that config change is this commit. No product change.
2. Preview suite is green. Agent log, status, and PR table record the preview URL and NF6 done. Write `docs/PHASE-notebook-fun.md` with what actually shipped: professional home by default, Fun home as the notebook under the site header, editions 0–2, `/studio` without that header, neutral 404, and the preview URL. Say the public domain was not attached.

## Do not

- Attach `ariella.website`, `www.ariella.website`, or `photos.ariella.website`. Do not change Porkbun or nameservers. Do not create a Render service.
- Run `vercel --prod`.
- Merge to `main`. Before anyone merges later, confirm this repo’s Vercel project does not list those three hostnames. A preview URL is not a sign to attach the domain.
- Import the notebook repo, enable Tailwind, or copy `src/app/globals.css` or `src/app/layout.tsx`.
- Edit Projects or Contact to switch on theme.
- Point `/editions/1` or `/editions/2` at `/`, or make either edition read `site.coverVariant`.
- Put `This page isn't in the notebook` in `app/not-found.tsx`.
- Overwrite `public/textures/window-fan.jpg`, `public/fun-strip/`, or `public/editions/`.
- Add a test that the live site contains `Mostly practice!`.

## After the preview URL is recorded

Stop. Do not start another product step.
