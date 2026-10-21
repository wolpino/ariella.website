# Spec — ariella.website

Short product source of truth. Steps: [docs/DESIGN-RESET.md](docs/DESIGN-RESET.md). Agent workflow: [AGENTS.md](AGENTS.md).

## Product

Personal site for Ariella Wolpin: who she is, her projects (creative and code), her résumé, and links to satellite apps.

- **Audience:** recruiters and interviewers, plus anyone curious. One design for everyone, and it should feel like Ari's.
- **Domain:** `ariella.website` on Vercel, live on this app.
- **Public contact:** LinkedIn only.
- **Satellites (linked out):** `photos.ariella.website` (photo feed); Trial & Eclair (later).

## Design

One design, no theme toggle. Keep Ari's photos front and center, the notebook cover with Dymo labels, and charcoal with a gold/amber glow. The exact direction is picked from the Step 2 mockups and recorded in the decision log.

## Site map

| Now | Later |
|-----|-------|
| `/`, `/projects`, `/contact`, `/editions`, `/studio` (noindex) | `/about`, `/collections`, `/notes` |

## Content model

In-repo TypeScript under `content/`, no CMS.

- `site.ts`: name, nav, socials
- `projects.ts`: project cards
- `resume.ts`: résumé modal data; `public/resume.pdf`

## Non-negotiables

1. Mobile first
2. Accessibility: keyboard, AA contrast, reduced motion
3. Image performance
4. Recruiter clarity: résumé and LinkedIn reachable from every page
