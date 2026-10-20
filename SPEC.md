# Spec — ariella.website

Short product/tech source of truth. Living detail and phases live in [PLAN.md](PLAN.md). Agent workflow lives in [AGENTS.md](AGENTS.md).

**The Fun-home rows below are partly stale.** `/` in Fun is the notebook, not a CSS-only restyle of the same page. Current port: [docs/NOTEBOOK-FUN-PLAN.md](docs/NOTEBOOK-FUN-PLAN.md). The site-map phases are later work, not the current task. Do not attach the domain from this file.

## Product

Personal site hub for Ariella Wolpin: projects (creative + code), experience, and links to satellite apps.

- **Audience:** recruiters / interviewers (Professional) and a creative self-expression mode (Fun)
- **Domain:** `ariella.website` on Vercel
- **Satellites (linked, not in this repo yet):** `photos.ariella.website` (photo feed); Trial & Eclair (later)

## Dual theme

| | Professional (default) | Fun |
|--|------------------------|-----|
| Feel | Restrained, clean, recruiter-ready | Fun home is the notebook cover. Projects and Contact stay expressive |
| Change | Presentation only | Home may switch components. Other pages stay presentation-only |

Shared: navigation, content, routing, components, accessibility, IA.

Config: `themes/professional.ts` + `themes/fun.ts` → CSS variables via `data-theme`.

Fun presentation rules: [docs/FUN-THEME.md](docs/FUN-THEME.md).

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
