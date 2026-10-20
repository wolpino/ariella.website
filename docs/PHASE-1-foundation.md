# Phase 1 — Foundation (PR1)

**Archive.** This records what PR1 shipped. It is not the current task. Current work: [NOTEBOOK-FUN-PLAN.md](NOTEBOOK-FUN-PLAN.md).

**Branch:** `feat/foundation`  
**Status:** verified by human 2026-07-20  
**Commits:** docs spine + Next scaffold with theme toggle

## What shipped

- Agent memory: `AGENTS.md`, `PLAN.md`, `STATUS.md`, `docs/PULL_REQUESTS.md`, `docs/DECISION_LOG.md`, `.cursor/rules/ariella-website.mdc`
- Rewrote `SPEC.md` to match the living plan (no monorepo/docs theater)
- Next.js App Router + TypeScript app
- Theme configs: `themes/professional.ts`, `themes/fun.ts` → CSS `data-theme` variables
- Professional default; Fun opt-in; cookie + localStorage; pre-paint script (no flash)
- Site header with nav + theme toggle; stub `/projects` and `/contact`

## How to run / verify

```bash
npm install
npm run dev
```

Checklist used:

- [x] Toggle Professional ↔ Fun
- [x] Preference persists across reload
- [x] No wrong-theme flash
- [x] Keyboard / focus on toggle
- [x] Mobile header / touch targets
- [x] Nav stubs load

## Decisions during phase

- Removed unused `CLAUDE.md` (Create Next App artifact for Claude Code only; Cursor uses `AGENTS.md`)
- Fixed `main` by pointing it at `feat/foundation` after Create Next App had replaced `main`’s history during scaffold

## Follow-ups (PR2+)

- Real Home hero, Projects hub, Contact content
- Stronger Fun / Wix-inspired styling
- `content/site.ts` + `content/projects.ts`
