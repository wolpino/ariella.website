# Agent log

Append-only claim log for [NOTEBOOK-FUN-PLAN.md](NOTEBOOK-FUN-PLAN.md).

Read this file before starting a step. If that step is `in_progress`, do not start it. When you start, append an `in_progress` entry before editing. When you finish or stop, append `done` or `blocked`.

`STATUS.md` is the one-line current focus. This file is the history of who owns which files.

```markdown
## YYYY-MM-DD HH:MM — NFn short title
- **Status:** in_progress | done | blocked
- **Branch:**
- **Files owned:**
- **Note:**
```

## 2026-10-02 — NF1 docs

- **Status:** done
- **Branch:** `docs/notebook-fun-plan`
- **Files owned:** `PLAN.md`, `STATUS.md`, `AGENTS.md`, `docs/NOTEBOOK-FUN-PLAN.md`, `docs/DECISION_LOG.md`, `docs/AGENT_LOG.md`, `docs/PULL_REQUESTS.md`, `docs/FUN-THEME.md`
- **Note:** Plan and locked decisions are written. No application code. NF2 has not started. Domain attach stays deferred.

## 2026-10-02 — NF1 archive banners

- **Status:** done
- **Branch:** `docs/notebook-fun-plan`
- **Files owned:** `README.md`, `SPEC.md`, `AGENTS.md`, `STATUS.md`, `docs/PHASE-1-mvp.md`, `docs/PHASE-1-deploy.md`, `docs/HANDOFF-FUN-THEME.md`, `docs/FUN-THEME.md`, `docs/DECISION_LOG.md`, `docs/prompts/NF2.md`, `images/README.md`, `.cursor/permissions.json`
- **Note:** Stale Fun-home and domain-attach instructions are marked archive. Next agent prompt is `docs/prompts/NF2.md`.

## 2026-10-02 11:50 — NF2 regression tests

- **Status:** in_progress
- **Branch:** `test/notebook-fun-regression`
- **Files owned:** `package.json`, `package-lock.json`, `playwright.config.ts`, `e2e/regression.spec.ts`, `.nvmrc`, `.github/workflows/ci.yml`, `.gitignore`
- **Note:** Playwright and CI for the current site. Fun home stays the photobooth. No notebook port.

## 2026-10-02 12:05 — NF2 regression tests

- **Status:** done
- **Branch:** `test/notebook-fun-regression`
- **Files owned:** `package.json`, `package-lock.json`, `playwright.config.ts`, `e2e/regression.spec.ts`, `.nvmrc`, `.github/workflows/ci.yml`, `.gitignore`, `components/theme-provider.tsx`, `components/theme-toggle.tsx`
- **Note:** Lint, build, and `npm run test:e2e` passed locally. CI runs those on pull requests. Theme-sync setState stays, with an eslint exemption, so lint is green. Fun home is still the photobooth. Next prompt is `docs/prompts/NF3.md`.

## 2026-10-02 12:11 — NF3 Fun home is the notebook

- **Status:** in_progress
- **Branch:** `feat/fun-notebook-home`
- **Files owned:** `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `package.json`
- **Note:** Copy the high-fidelity notebook cover under the site header for Fun `/`. Professional home stays the current hero.

## 2026-10-02 12:20 — NF3 Fun home is the notebook

- **Status:** done
- **Branch:** `feat/fun-notebook-home`
- **Files owned:** `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `package.json`
- **Note:** Lint, build, and `npm run test:e2e` passed. Fun `/` is the high-fidelity cover under the site header. No cookie and Professional still show the recruiter line. Editions mark stays off until NF4. Next prompt is `docs/prompts/NF4.md`.
