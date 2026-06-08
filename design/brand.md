# J&J Studios — Brand & Design Guide

Working reference for Claude Code. Read this alongside `tokens.css` before writing any component, copy, or layout.

---

## The one-line promise

> In the first five seconds, a small-business owner should feel *"these two clearly know what they're doing, and they won't talk down to me or overcomplicate things."*

Competent and trustworthy, but warm and approachable — never corporate or intimidating.

---

## Audience

**Primary clients:** local service businesses — contractors, salons, restaurants, clinics — and solo / early-stage founders who need a credible web presence on a limited budget.

They are often not technical and may feel intimidated by "web stuff." They choose us on *vibes and trust signals* because they can't evaluate our code. Every design decision is in service of looking **competent + trustworthy + approachable** at a glance.

---

## Voice & copy rules

**Tone:** warm and conversational — like a knowledgeable friend, not a vendor. Confident without ever being slick or salesy.

**Person:** "you / we." Always. "We build websites *you're* proud of." Never third-person ("the agency", "clients receive").

**Plain language.** No jargon. If a sentence needs a web term, explain it in the same breath. Actively name and dissolve fears: "Kein Fachjargon, keine Überraschungen."

**Casing:** sentence case everywhere — headlines, buttons, nav. No Title Case, no ALL CAPS except `.jj-eyebrow` labels.

**Rhythm:** short, human sentences. Fragments are fine for warmth ("Kein Druck, nie."). Em dashes for the friendly aside.

**Reassurance is a content pattern.** Pre-empt the quiet fears in the copy itself:
- *"Sie müssen nichts Technisches wissen — das ist unser Job."*
- *"Wer ist Eigentümer der Website? Sie. Vollständig."*
- *"Wir verschwinden nicht nach dem Launch."*

**Specific, modest proof over hype.** "Neue Patientenanfragen haben sich im ersten Monat verdoppelt" beats "We deliver world-class digital experiences." Numbers are concrete and believable, never inflated.

**No emoji.** Warmth comes from words, type, and colour — not emoji. Icons are outline line-icons, used sparingly.

**Example voice (German):**
- Hero: *"Eine Website, die still ihren Dienst tut."*
- Sub: *"Wir sind Jakob & Jakob — zwei Menschen, die schnelle, freundliche Websites für kleine Unternehmen bauen. Die Art, die einen neugierigen Besucher in einen Anruf verwandelt."*
- CTA: *"Kostenloses Gespräch buchen"* (not "Jetzt starten", not "Anfrage senden")
- FAQ: *"Überhaupt nicht — die meisten unserer Kunden sind das nicht. Wir kümmern uns um die technische Seite und erklären alles in einfacher Sprache."*
- Microcopy: *"Wir verwenden Ihre Daten nur, um zu antworten. Nie weitergegeben, nie verkauft."*

---

## Visual foundations

**Overall feel:** calm, crafted, warm-premium. Editorial serif headlines over a cream page, deep-pine structure, a single warm-gold accent that means "do this." Generous white space is itself a trust signal.

### Color

- **Deep pine (`--green-800` #1F4D3D)** — brand anchor. Headings on light backgrounds, large dark surfaces (process section, footer, CTA band). Carries growth + stability without shouting.
- **Interactive green (`--green-600` #2E6B52)** — links, default primary button, eyebrow labels.
- **Warm gold (`--accent` #E7B24C)** — reserved for the *single* hero call-to-action. Never body text. Never more than one accent button visible at once. This scarcity is what makes CTAs pop.
- **Cream paper (`--paper` #F6F4EE)** — the page. White (`--surface-card`) for raised cards. All neutrals are warm and green-tinted, never cold gray.
- Section alternation pattern: cream → white → dark pine → cream. Depth comes from surface alternation, not gradients on text.
- All primaries pass WCAG AA for text on light backgrounds. Gold is for fills paired with `--green-900` text.

### Typography

- **Newsreader** (serif), weight 500, tracking −0.02em, line-height ~1.05 — display, H1, H2, pull-quotes. The "established, knows-their-craft" signal. Italic used for the warm emphasis word in a headline.
- **Figtree** (sans) — H3/H4 (600), body (400, 17px/1.6), all UI. Clean and modern, keeps it from feeling old-fashioned.
- Eyebrows: 12px, 700, uppercase, 0.12em tracking, `--interactive` green.

### Spacing & layout

- 4px base grid. Content max-width 1180px (`--container-max`). Prose/forms 720px (`--container-narrow`).
- Section vertical rhythm: `--section-y` (96px desktop).
- Mobile-first; everything collapses to single column at ≤920px. Touch targets ≥44px.

### Cards & surfaces

- White surface, `--radius-lg` (14px), 1px `--border-default` hairline, `--shadow-sm`. Interactive cards lift 3px with `--shadow-lg` on hover.
- Tones available: `white` / `cream` / `brand` (dark pine) / `soft` (green-50 tint).

### Radii

Rounded but not bubbly: 10px inputs/buttons (`--radius-md`), 14px cards (`--radius-lg`), 20–28px hero panels & CTA band (`--radius-xl` / `--radius-2xl`), pill for badges and pill-buttons.

### Shadows

Always warm green-tinted (`rgba(20,53,42,…)`), low spread, never gray/black. Five steps xs → xl. Cards use sm/md; popovers lg; modals xl.

### Borders

1px hairlines in warm neutrals. Focus state: 3px green focus ring (`--ring`), never browser-blue.

### Animation

Restrained and quick. 0.15s ease on hover color/background; 0.2s on card lift and accordion open; buttons `translateY(1px)` on press. No bounces, no parallax, no infinite/decorative loops.

### Hover & press states

- Buttons darken: accent→`--accent-hover`, primary→`--green-900`, secondary fills to `--surface-sunken`, ghost fills to `--green-50`.
- Links shift to `--green-800`. Cards lift.
- Buttons nudge 1px downward on press. No aggressive shrink.

### Imagery

Warm, natural, real — local storefronts, before/after screenshots, the two founders. No cold stock, no neon, no heavy filters. Represented in code by `<PhotoSlot>` tinted placeholder until real photos are supplied.

### Nav transparency

Sticky nav uses cream at 88% opacity + backdrop-blur so content scrolls softly underneath. Sparingly elsewhere.

---

## Iconography

- **Set:** [Lucide](https://lucide.dev) — outline icons, 24px grid, rounded caps/joins.
- **Style rules:** stroke weight ~1.9, never filled except the rating star (filled gold). Icons sit in soft `--green-50` rounded tiles (44–52px) when used as feature/marker bullets, or inline at 16–22px next to text.
- **Usage:** sparingly and functionally — service markers, reassurance bullets, CTA arrows, contact details, result stats. Icons support text; they never replace it.
- **To add an icon:** copy path data from lucide.dev into `PATHS` in `src/components/Icon.jsx`.

**Logos** live in `assets/` (Vite publicDir):
- `/logo-horizontal.svg` — Nav
- `/logo-badge.svg` — Footer + favicon
- `/logo-wordmark.svg` — available for use

---

## Component usage rules

### Button

Variants: `accent | primary | secondary | ghost`. Sizes: `sm | md | lg`.

- `accent` (gold) — **one per view maximum**, the hero call-to-action.
- `primary` (pine green) — normal actions.
- `secondary` — lower-emphasis sibling to a primary.
- `ghost` — tertiary / inline.

Use `as="a"` + `href` to render as a link. `fullWidth` for mobile/forms. `iconLeft` / `iconRight` for icons.

### Card

Tones: `white | cream | brand | soft`. Padding: `none | sm | md | lg`.

Set `interactive` for clickable cards (adds hover lift). Set `as="a"` to make the whole card a link.

### Badge

Variants: `neutral | brand | accent | success | warning | danger`. Add `dot` for a status indicator. Keep label text to 1–2 words.

### Avatar

Sizes: `sm | md | lg | xl`. Always pass `name` — it provides the initials fallback and accessibility label.

### Testimonial

Always use a real name + business. Add `photo` where available. `featured` renders the larger hero variant. `rating` is 0–5 (always 5 for published testimonials). Composes `Avatar`. This is the strongest trust signal — use generously.

### Accordion

Props: `items` (`{q, a}[]`), `allowMultiple`, `defaultOpen` (index array). One panel open at a time unless `allowMultiple`. Used for FAQ — answers the "how long / how much / who owns it" worries buyers won't ask aloud.

### Input / Textarea / Select / Checkbox

All accept `label`, `hint`, `error` plus native element attributes.
- `Input`: `type`, `placeholder`, `leadingIcon`, `required`.
- `Textarea`: `rows` (default 4).
- `Select`: `options` as strings or `{value, label}` objects; `placeholder`.
- `Checkbox`: used for consent opt-ins at form bottom.

Form layout: two columns on desktop (`jj-form-row` collapses to 1fr at ≤720px). Privacy microcopy below the submit button: "Wir verwenden Ihre Daten nur, um zu antworten. Nie weitergegeben, nie verkauft."

---

## The golden rule

Warm words + serif headlines + generous space + **one** gold CTA. That combination is the brand.
