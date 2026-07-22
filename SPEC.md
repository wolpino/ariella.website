# Spec — ariella.website

Short product/tech source of truth. Living detail and phases live in [PLAN.md](PLAN.md). Agent workflow lives in [AGENTS.md](AGENTS.md).

## Product

Personal site hub for Ariella Wolpin: projects (creative + code), experience, and links to satellite apps.

- **Audience:** recruiters / interviewers (Professional) and a creative self-expression mode (Fun)
- **Domain:** `ariella.website` on Vercel
- **Satellites (linked, not in this repo yet):** `photos.ariella.website` (photo feed); Trial & Eclair (later)

## Dual theme

| | Professional (default) | Fun |
|--|------------------------|-----|
| Feel | Restrained, clean, recruiter-ready | Expressive; evolved from current Wix site |
| Change | Presentation only | Presentation only |

Shared: navigation, content, routing, components, accessibility, IA.

Config: `themes/professional.ts` + `themes/fun.ts` → CSS variables via `data-theme`.

Fun presentation rules (cover vs open notebook): [docs/FUN-THEME.md](docs/FUN-THEME.md).

## Site map (by phase)

| Phase | Routes |
|-------|--------|
| MVP (PR2) | `/`, `/projects`, `/contact` |
| 2a (PR4) | `/about` (Résumé \| Story) |
| 2b (PR5) | `/collections` (+ Fun home teaser) |
| 3 (PR6) | `/notes` (scaffold; content when ready) |

## Content model

In-repo TypeScript (and later MD/MDX) under `content/` — no CMS for v1.

- `site.ts` — name, nav, socials
- `projects.ts` — hub cards (internal + external URLs)
- Later: `experience.ts`, `collections/`, `notes/`

## Non-negotiables

1. Mobile / responsive
2. Accessibility (keyboard, contrast both themes, reduced motion)
3. Image performance
4. Theme reliability (Professional default, no flash)
5. Recruiter clarity in Professional

## Out of scope (v1)

Monorepo, merging the photos feed app, CMS, auth, public engineering docs site, ADRs-as-process.
