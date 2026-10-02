# Agent prompt — NF2 regression tests

Paste this into a new agent whose workspace is `/Users/ari/codes/ariella.website`. Do not use the notebook repo `ariellawebsite` as the workspace.

When your context is about halfway full, or before you stop for any reason other than a green NF2 pull request, write the next prompt at `docs/prompts/NF3.md` in this same shape: pins, files you may touch, files you must not touch, exact checks, commit list, and the instruction to write `docs/prompts/NF4.md` the same way before stopping. Do that again at each later step. A short status note is not a handoff.

## Read first

1. `docs/NOTEBOOK-FUN-PLAN.md` — NF2 section and Guardrails.
2. `docs/AGENT_LOG.md` — if NF2 is already `in_progress` or `done`, stop and say so.
3. `docs/DECISION_LOG.md` — only the 2026-10-02 entry is current for Fun home and deploy.
4. `AGENTS.md`.

Ignore as current work, even if they contain steps: `docs/HANDOFF-FUN-THEME.md`, `docs/PHASE-1-mvp.md`, `docs/PHASE-1-deploy.md`, `docs/FUN-THEME.md` below its Archive heading, the README “Archive — earlier deploy notes”, and decision-log entries before 2026-10-02.

## Goal

Add Playwright regression tests that pass against the site as it is today, plus GitHub Actions for lint, build, and those tests. Do not port the notebook. Do not change the Fun home. Fun is still the photobooth in this step. Do not write a test that requires the photobooth, and do not write a test that requires the notebook.

## Start

- Repo: `/Users/ari/codes/ariella.website`
- Branch from local `docs/notebook-fun-plan` (commit that contains this prompt). That branch may be ahead of GitHub. Do not clone the notebook repo for this step.
- New branch: `test/notebook-fun-regression`
- Append an `in_progress` row to `docs/AGENT_LOG.md` before editing application files. Set `docs/PULL_REQUESTS.md` NF2 to `in_progress` and `STATUS.md` to this step.

## Tests that must pass

No `ariella-theme` cookie:

- `/` shows `Design, photography, and code`
- The header shows `Ariella Wolpin`, Home, Projects, Contact, Professional, and Fun

Cookie `ariella-theme=professional` and cookie `ariella-theme=fun`, each:

- `/projects` shows `Projects`
- `/contact` shows `Contact`
- The same header is present

Clicking Professional and Fun does not remove the header.

## Commits

1. Playwright, `playwright.config.ts`, `npm run test:e2e`, and the regression spec.
2. `.nvmrc` containing `22`. `.github/workflows/ci.yml` on pull requests: Node 22, `npm ci`, `npm run lint`, `npm run build`, `npm run test:e2e` against a local production server.
3. Agent log, status, and PR table updated to NF2 done. Confirm `npm run lint`, `npm run build`, and `npm run test:e2e` pass.

## Do not

- Import the notebook repo, Tailwind, or notebook components.
- Edit `app/page.tsx` to switch on theme.
- Add `@radix-ui/react-dialog` (that is NF3).
- Attach a domain, run `vercel --prod`, change Porkbun, or create Render.
- Merge to `main` if this repo’s Vercel project lists `ariella.website`, `www.ariella.website`, or `photos.ariella.website`. Opening a pull request is fine. A preview URL is fine. It is not a sign to attach the domain.
- Wait for a person to approve the tests. Stop only if a check fails and you cannot fix it without breaking a guardrail. Write that in the agent log as `blocked`, and write `docs/prompts/NF2-blocked.md` with what failed and what the next agent should do.

## After NF2 is green

Write `docs/prompts/NF3.md` for the Fun-home port before you end, using [NOTEBOOK-FUN-PLAN.md](../NOTEBOOK-FUN-PLAN.md) NF3: copy from local `/Users/ari/codes/ariellawebsite` at `48381c6a5d8df1ec1ca61913158a5214519d084c`, not from GitHub. Include the handoff rule above.
