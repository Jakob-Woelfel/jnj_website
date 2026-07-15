# CLAUDE.md — J&J Studios Website

Working context for Claude Code. Read this before touching any file.

---

## Project in one sentence

Marketing website for J&J Studios, a two-person German web studio. Targets local German small businesses. All copy is in German.

## Stack

| What | Choice |
|------|--------|
| Framework | Next.js 15 (App Router, `output: 'export'`) |
| UI | React 19 |
| Language | TypeScript 5 |
| Styling | CSS custom properties + CSS Modules for interactive components |
| Deploy | Netlify (static export to `out/`) |

## Commands

```bash
pnpm dev      # start dev server at http://localhost:3000
pnpm build    # production build → out/
pnpm start    # preview the production build (after build)
```

## Folder structure

```
public/                  ← Next.js public dir — served at /. Logo SVGs + Fotos (images/) live here.
src/
  app/                   ← Next.js App Router
    layout.tsx           ← Root layout: fonts (next/font), Nav, Footer, metadata
    page.tsx             ← / (Startseite)
    leistungen/page.tsx  ← /leistungen
    referenzen/page.tsx  ← /referenzen
    ueber-uns/page.tsx   ← /ueber-uns
    kontakt/page.tsx     ← /kontakt ('use client' — form state)
  components/
    Icon.tsx             ← Curated Lucide icon set (inline SVG, currentColor)
    core/                ← Button, Card, Badge, Avatar
    forms/               ← Input, Textarea, Select, Checkbox
    content/             ← Testimonial, Accordion
    layout/              ← Nav, Footer, Section, SectionHeading,
                            PhotoSlot, BrowserFrame, Stars,
                            Reveal, ScrollBackdrop
  styles/
    globals.css          ← @imports design/tokens.css + responsive helpers
design/                  ← SOURCE OF TRUTH for tokens, brand, and screen specs
  tokens.css             ← all CSS custom properties (colors, type, spacing, elevation, reset)
  brand.md               ← audience, voice rules, visual philosophy, component usage
  screens.md             ← page-by-page section specs with content intent
  assets/                ← master logo SVGs (badge, horizontal, wordmark)
```

## Design system rules

**Never modify files inside `design/`.** It is the upstream source of truth. Changes to brand tokens happen in `design/tokens.css` and are picked up automatically via `@import` in `src/styles/globals.css`.

**Always use semantic tokens, not raw hex values.** Use `var(--green-800)` not `#1F4D3D`. Semantic aliases are in `design/tokens.css`.

Key tokens to know:
- `--surface-page` — cream page background
- `--surface-card` — white card surface
- `--surface-brand` — dark pine (process section, CTA band)
- `--surface-brand-deep` — deeper pine (footer, CTA band inner)
- `--text-strong / --text-body / --text-muted / --text-faint` — text hierarchy
- `--text-on-brand / --text-on-brand-muted` — text on dark pine surfaces
- `--accent` — gold, **reserved for the single primary CTA only**
- `--font-serif` — Newsreader via `var(--font-newsreader)` CSS variable, used for h1, h2, display, pull-quotes
- `--font-sans` — Figtree via `var(--font-figtree)` CSS variable, used for h3/h4, body, all UI
- `--section-y` — vertical rhythm between sections (6rem)
- `--container-max` — max content width (1180px)
- `--gutter-lg` — desktop side padding (2rem)

## Path alias

`@` resolves to `src/`. Use it for all internal imports:

```tsx
import { Button } from '@/components/core/Button';
import Section    from '@/components/layout/Section';
```

## Client vs server components

Most components are server components. Only these use `'use client'`:
- `Button` — handles `onClick`
- `Nav` — `useState` (mobile menu), `usePathname` (active link)
- `Accordion` — `useState` (open panels)
- `Input`, `Textarea`, `Select`, `Checkbox` — `useId` for label association
- `kontakt/page.tsx` — `useState` for form sent state
- `Reveal` — `IntersectionObserver` scroll-reveal (fires once)
- `ScrollBackdrop` — scroll-driven background colour drift + parallax shapes (Startseite)

## Adding a new page

1. Create `src/app/<pagename>/page.tsx`
2. Export `metadata` for SEO title/description
3. Add the nav link to `src/components/layout/Nav.tsx` (LINKS array)
4. Add the footer link to `src/components/layout/Footer.tsx` (STUDIO_LINKS array)

## Adding a new icon

Open `src/components/Icon.tsx` and add the Lucide path data to the `PATHS` object. Copy SVG path data from [lucide.dev](https://lucide.dev).

## Language & copy rules

- **German only** — all user-facing text must be in German
- **Sentence case** everywhere — no Title Case, no ALL CAPS except `.jj-eyebrow` labels
- **Warm and direct** voice — "wie ein kompetenter Freund", never corporate
- **No emoji** — warmth comes from words, type, and colour
- **Reassurance patterns** — pre-empt the quiet fears: "kein Fachjargon", "keine Überraschungen", "wir verschwinden nicht nach dem Launch"

## Responsive breakpoints

Defined in `src/styles/globals.css`:
- `≤ 920px` — two-column grids collapse to one column (hero, process, testimonials, FAQ, contact, before/after)
- `≤ 720px` — desktop nav hides, mobile hamburger shows; form rows stack; floating hero card hides

CSS class hooks used for responsive overrides: `.jj-hero-grid`, `.jj-process-grid`, `.jj-testi-grid`, `.jj-faq-grid`, `.jj-contact-grid`, `.jj-ba-grid`, `.jj-desktop-nav`, `.jj-mobile-toggle`, `.jj-form-row`, `.jj-float-card`, `.jj-hero-visual`, `.jj-hero-title`, `.jj-hero-ghost`.

## Assets

Logo files in `public/` are served by Next.js at the root path:
- `/logo-horizontal.svg` — used in Nav
- `/logo-badge.svg` — used in Footer and as favicon
- `/logo-wordmark.svg` — available for use

Real photography goes in `public/images/` when available (see the README there for format rules). Placeholder: `<PhotoSlot>` component.

## Deployment

Push to the Netlify-connected repository. Netlify runs `pnpm build` and publishes `out/`. No SPA redirect rule needed — each page generates its own `index.html`.
