# CLAUDE.md — J&J Studios Website

Working context for Claude Code. Read this before touching any file.

---

## Project in one sentence

Marketing website for J&J Studios, a two-person German web studio. Targets local German small businesses. All copy is in German.

## Stack

| What | Choice |
|------|--------|
| Build tool | Vite 5 |
| UI | React 18 |
| Routing | React Router 6 (`createBrowserRouter`) |
| Styling | CSS custom properties (no CSS-in-JS framework) |
| Deploy | Netlify (SPA redirect in `netlify.toml`) |

## Commands

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Folder structure

```
assets/                  ← Vite publicDir — served at /. Logo SVGs live here.
src/
  app/
    main.jsx             ← React entry point, mounts RouterProvider
    App.jsx              ← App shell: Nav + <Outlet> + Footer
    router.jsx           ← All route definitions
  components/
    Icon.jsx             ← Curated Lucide icon set (inline SVG, currentColor)
    core/                ← Button, Card, Badge, Avatar
    forms/               ← Input, Textarea, Select, Checkbox
    content/             ← Testimonial, Accordion
    layout/              ← Nav, Footer, Section, SectionHeading,
                            PhotoSlot, BrowserFrame, Stars
  content/               ← One folder per page/route
    startseite/          ← / (landing page)
    leistungen/          ← /leistungen
    referenzen/          ← /referenzen
    ueber-uns/           ← /ueber-uns
    kontakt/             ← /kontakt
  styles/
    globals.css          ← @imports all design system token files + responsive helpers
Design System J&J/       ← SOURCE OF TRUTH for tokens, brand, and component reference
```

## Design system rules

**Never modify files inside `Design System J&J/`.** It is the upstream source of truth. Changes to brand tokens happen there and are picked up automatically via `@import` in `src/styles/globals.css`.

**Always use semantic tokens, not raw hex values.** Use `var(--green-800)` not `#1F4D3D`. Semantic aliases are in `Design System J&J/tokens/colors.css`.

Key tokens to know:
- `--surface-page` — cream page background
- `--surface-card` — white card surface
- `--surface-brand` — dark pine (process section, CTA band)
- `--surface-brand-deep` — deeper pine (footer, CTA band inner)
- `--text-strong / --text-body / --text-muted / --text-faint` — text hierarchy
- `--text-on-brand / --text-on-brand-muted` — text on dark pine surfaces
- `--accent` — gold, **reserved for the single primary CTA only**
- `--font-serif` — Newsreader, used for h1, h2, display, pull-quotes
- `--font-sans` — Figtree, used for h3/h4, body, all UI
- `--section-y` — vertical rhythm between sections (6rem)
- `--container-max` — max content width (1180px)
- `--gutter-lg` — desktop side padding (2rem)

## Path alias

`@` resolves to `src/`. Use it for all internal imports:

```jsx
import { Button } from '@/components/core/Button';
import Section    from '@/components/layout/Section';
```

## Adding a new page

1. Create `src/content/<pagename>/index.jsx`
2. Add a route in `src/app/router.jsx`
3. Add the nav link to `src/components/layout/Nav.jsx` (LINKS array)
4. Add the footer link to `src/components/layout/Footer.jsx`

## Adding a new icon

Open `src/components/Icon.jsx` and add the Lucide path data to the `PATHS` object. Copy SVG path data from [lucide.dev](https://lucide.dev).

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

CSS class hooks used for responsive overrides: `.jj-hero-grid`, `.jj-process-grid`, `.jj-testi-grid`, `.jj-faq-grid`, `.jj-contact-grid`, `.jj-ba-grid`, `.jj-desktop-nav`, `.jj-mobile-toggle`, `.jj-form-row`, `.jj-float-card`.

## Assets

Logo files in `assets/` are served by Vite at the root path:
- `/logo-horizontal.svg` — used in Nav
- `/logo-badge.svg` — used in Footer and as favicon
- `/logo-wordmark.svg` — available for use

Real photography goes in `assets/images/` when available. Placeholder: `<PhotoSlot>` component.

## Deployment

Push to the Netlify-connected repository. Netlify runs `npm run build` and publishes `dist/`. The `[[redirects]]` rule in `netlify.toml` handles client-side routing.
