# Product Specification

## 1. Overview

- Vision
- Goals
- Target Audience
- Success Criteria

---

## 2. Product

- Site Map
- Features
- Roadmap
- Future Projects

---

## 3. Technical Overview

This project is documented through the following engineering specifications.

| Document | Purpose |
|----------|---------|
| Architecture | Repository structure, packages, deployment, routing |
| Theme System | Professional/Fun themes, theme provider, design tokens |
| Design System | Typography, colors, spacing, motion, component conventions |
| Content Model | Schemas for projects, experience, blog posts, photography and navigation |
| Component Library | Reusable UI components and usage guidelines |
| Development Standards | Coding style, testing, linting, branching strategy, CI/CD |
| Deployment | Vercel configuration, domains, environments |
| ADRs | Engineering decisions and rationale |

---

## 4. Public Engineering Documentation

All engineering documentation is written in Markdown/MDX and serves two purposes:

- `/docs` acts as the source of truth for the repository.
- `/engineering` on ariella.website renders the same documentation for visitors.

The website and repository intentionally share a single documentation source to avoid duplication.

---

## 5. Theme System (Summary)

The portfolio supports two visual identities:

- **Professional** – restrained, clean, minimal, optimized for recruiters and hiring managers.
- **Fun** – expressive, colorful, playful, showcasing creativity.

Both themes share:

- Navigation
- Content
- Routing
- Components
- Accessibility
- Information Architecture

Only presentation changes.

Implementation details are defined in **Theme System Specification**.

---

## 6. Architecture (Summary)

The portfolio is built as a Turborepo monorepo containing multiple independent applications and shared packages.

Applications include:

- ariella.website 
- Trial & Eclair
- Photography
- Future projects

Shared packages provide:

- UI components
- Theme system
- Types
- Utilities
- Content models

Implementation details are defined in **Architecture Specification**.

---

## 7. Design System (Summary)

The design system defines:

- Design tokens
- Typography
- Color palettes
- Motion
- Icons
- Layout
- Component styling

It is shared across all applications.

---

## 8. Content Model (Summary)

All content is data-driven.

Content includes:

- Projects
- Experience
- Skills
- Blog posts
- Photography
- Navigation
- Social links

Presentation is separated from content, allowing pages and components to consume a single source of truth.

---

## 9. Component Library (Summary)

All reusable UI components live in a shared package.

Each component documents:

- Purpose
- Props
- Accessibility requirements
- Usage examples
- Theme behavior

---

## 10. Development Standards (Summary)

The project follows documented engineering standards covering:

- Repository organization
- Code style
- Testing
- Git workflow
- Continuous Integration
- Dependency management
- Documentation standards

---

## 11. Decision Records

Significant engineering decisions are documented as ADRs (Architecture Decision Records).

Each ADR explains:

- Context
- Problem
- Alternatives considered
- Decision
- Consequences

These documents capture the reasoning behind technical choices as the project evolves.