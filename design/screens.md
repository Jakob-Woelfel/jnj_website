# J&J Studios — Screen & Section Specs

Section-by-section spec for every page. Use this alongside `brand.md` when building or modifying pages. All copy is in German.

Layout shorthand: `A | B` = two-column grid that collapses to 1 column at ≤920px (`jj-*-grid` class).

---

## Global chrome

### Nav — sticky, all pages

Surface: spray white at 88% opacity + backdrop-blur, 1px bottom border (`--border-subtle`).
**Startseite exception:** nav is `position: fixed` over the full-viewport hero photo — transparent with white links and `onBrand` logo while at the top, transitioning to the blur surface after ~40px scroll (also when the mobile drawer opens).

Left: `/logo-horizontal.svg` linked to `/`.
Center (desktop): links — Startseite / Leistungen / Referenzen / Über uns.
Right: `<Button variant="accent" size="sm">Kostenloses Gespräch buchen</Button>` → `/kontakt`.

Mobile (≤720px): hamburger toggle replaces desktop nav. Drawer slides in with all links + CTA button.

### Footer — all pages

Surface: `--surface-brand-deep` (darkest petrol).

Left: `/logo-badge.svg` + one-liner tagline + copyright.
Right: nav links in two columns (Leistungen, Referenzen, Über uns, Kontakt) + contact details (email, phone).

Bottom strip: privacy microcopy.

---

## / — Startseite (Home)

Deliberately minimal: five sections, one photo, one motto, little chrome. The hero photo is the artwork — everything after it stays quiet.

### 1. Hero — full-viewport photo

Layout: `min-height: 100svh`, content bottom-left, no grid.

- Photo: `/images/meer-felskueste.webp` (`.jj-hero-photo`), `object-fit: cover`, `object-position: 70% 45%` desktop / `62% 50%` ≤720px — the rock stays right, the surf lower left.
- Scrim: petrol gradient (`rgba(12,43,50,0.82)` bottom-left → transparent top-right) for text legibility; a second thin top gradient keeps the transparent nav readable. The photo stays almost pure across most of its area.
- H1 (white serif, clamp 52–104px, max 13ch): *"Ihr Felsen in der Brandung."* — "Brandung" italic with the gold underline SVG.
- Lead (white 88%, clamp 17–20px, max 44ch): "Wir sind Jakob & Jakob. Wir bauen Websites, die ruhig und zuverlässig für Ihr Unternehmen arbeiten — kein Fachjargon, keine Überraschungen."
- CTA row: `<Button variant="accent" size="lg" iconRight={arrowRight}>Kostenlos beraten lassen</Button>` + plain white underlined text link "Unsere Referenzen".

No trust pill, no browser mockup, no floating stat card, no ghost ampersand, no scroll backdrop.

### 2. Leistungen / Services

Surface: `--surface-page`.
Section heading: eyebrow "Was wir tun", title *"Drei Wege in ruhigeres Fahrwasser"*, one-line lead.

3-column grid (`.jj-services-grid`, collapses ≤920px) — **no cards**: bare icon (28px, `--teal-600`), H3 (sans 600, 20px), exactly one sentence of body copy each.

1. **Neuer Webauftritt** (penTool)
2. **Redesign & Modernisierung** (layout)
3. **Wartung & Web-Branding** (heart)

### 3. Prozess / Process

Surface: `--surface-brand` (dark petrol) — the only dark section. White and `--text-on-brand-muted` text.
Layout: `Intro (0.8fr) | Steps (1.2fr)`, collapses at ≤920px.

**Left:** eyebrow "So läuft es ab" (`--teal-300`), H2 "Einfach — von Hallo bis Launch.", one-line lead.
**Right — numbered steps** (dividers rgba white 14%): number in `--gold-400` serif, H3 title, one sentence each.

1. **01 — Das erste Gespräch**
2. **02 — Wir designen & entwickeln**
3. **03 — Launch & langfristige Betreuung**

### 4. Ein Zitat — bare pull-quote

Surface: `--surface-page`. Centered `<figure>`, max 760px — **no card, no grid**.
5 gold stars, serif blockquote (clamp 24–34px), caption with real name + business (Maria Alvarez, Zahnarztpraxis Alvarez).

### 5. CTA-Band

Surface: `--surface-brand-deep` (deepest petrol), `--radius-2xl`, inside page padding — floats as a contained band.

Center-aligned:
- H2 (white, serif, clamp 30–46px): *"Bereit für ruhigeres Fahrwasser?"*
- Lead (`--text-on-brand-muted`, 19px, max 50ch, one sentence).
- `<Button variant="accent" size="lg" iconRight={arrowRight}>Jetzt kostenlos beraten lassen</Button>`.

---

## /leistungen — Leistungen

### 1. Page header

Surface: `--surface-page`. Centered, max-width narrow.
Eyebrow, H1 (serif), lead paragraph.

### 2. Service detail cards

Three expanded cards — one per service — with more detail than the homepage cards.
Each: icon, title, body explaining what's included and what the client doesn't need to worry about.

### 3. Process teaser

Brief version of the process steps (or link back to homepage for full version).

### 4. CTA band

Same as homepage CTA band.

---

## /referenzen — Referenzen (Our Work)

### 1. Page header

Surface: `--surface-page`. Left-aligned `<SectionHeading>`.
Eyebrow "Unsere Arbeit", H1 (serif): "Echte Websites für echte kleine Unternehmen", lead: "Wir machen keinen Glamour um des Glamours willen. Wir bauen Websites, die wie Sie aussehen und still die Arbeit bringen. Hier sind einige."

### 2. Featured before/after

Surface: `--surface-page`, padding `--gutter-lg`.
`<Card tone="cream" padding="lg">` containing:

Header row: `<Badge variant="brand">Featured</Badge>` + client name (serif 22px) left; result stat (trendingUp icon + text) right.

Before/after grid (`1fr auto 1fr`, collapses — arrow hidden at ≤920px):
- Left: "Before" label (faint caps) + `<PhotoSlot>` (old site).
- Center: circular arrow button (`--teal-600` bg, white icon, 40px).
- Right: "After" label (`--teal-700`) + `<PhotoSlot>` (new site).

### 3. Case study grid

3-column auto-fit grid (`minmax(300px, 1fr)`).
Each `<Card interactive padding="none">`:
- `<PhotoSlot>` full-width top (16:10 ratio, `--radius-lg` top corners only).
- Padding body: `<Badge variant="neutral" size="sm">` tag, H3 client name (serif 23px), blurb (15.5px, `--text-muted`), result chip (trendingUp icon + stat in `--teal-50` pill).

Three cases: Alvarez Dental / Pine Street Cafe / Becker Roofing, each with a concrete outcome number.

### 4. Page-bottom CTA

Surface: `--surface-page`. Center-aligned.
H2: "Könnte Ihrer als nächstes dran sein?" — lead — `<Button variant="accent" size="lg">Kostenloses Gespräch buchen</Button>`.

---

## /ueber-uns — Über uns

### 1. Page header

Surface: `--surface-page`.
Eyebrow, H1 (serif), lead establishing the "two Jakobs" premise and the studio's origin story.

### 2. About the founders

Two-column layout: photos (`<PhotoSlot>`) + bios for both Jakobs. Warm, specific, human. Include how long they've worked together and what each brings.

### 3. Studio values

Three or four value cards. Same card pattern as services: icon tile + title + body. Each value ties back to a client fear dissolved:
- Honest pricing → "keine Überraschungsrechnungen"
- Plain language → "kein Fachjargon"
- Stay around → "wir verschwinden nicht nach dem Launch"
- Real ownership → "Ihre Website, Ihr Eigentum"

### 4. CTA band

Same as homepage CTA band.

---

## /kontakt — Kontakt

### Page layout

Surface: `--paper-2`, `minHeight: 70vh`.
Two-column grid (`1fr | 1.15fr`, collapses at ≤920px): **pitch + reassurance** left, **form card** right.

### Left column — pitch & reassurance

Eyebrow: "Lass uns reden".
H1 (serif, clamp 34–50px): "Erzählen Sie uns von Ihrem Unternehmen."
Lead (19px, max 40ch): "Füllen Sie das aus und wir melden uns für ein freundliches, unverbindliches Gespräch. Bevorzugen Sie das Telefon? Rufen Sie uns an."

Three reassurance bullets (icon tile + title + body):
1. **Wir antworten innerhalb eines Tages** (clock) — meist viel früher, echte Person.
2. **Kein Druck, nie** (messageCircle) — erstes Gespräch ist nur ein Gespräch.
3. **Klare Festpreise** (shieldCheck) — Preis im Voraus, keine Überraschungen.

Divider, then contact details: email + phone with `--teal-600` icons.

### Right column — form

`<Card padding="lg" shadow="md">`:

**Default state — form:**
- H3 (sans 600, 20px): "Kostenloses Angebot starten".
- Row 1 (`jj-form-row`): `<Input label="Ihr Name">` + `<Input label="Unternehmensname">`.
- Row 2 (`jj-form-row`): `<Input label="E-Mail" type="email" required>` + `<Input label="Telefon" type="tel">` (optional).
- `<Select label="Was brauchen Sie?">` — options: Neue Website / Redesign / Nur ein Refresh / Laufende Betreuung / Noch nicht sicher — lass uns reden.
- `<Textarea label="Erzählen Sie uns ein bisschen" rows={4}>` — placeholder asks what the business does and what the site should do.
- `<Checkbox>` — opt-in to occasional tips, no spam.
- `<Button variant="accent" size="lg" fullWidth iconRight={arrowRight}>Nachricht senden</Button>`.
- Privacy microcopy (13px, `--text-faint`, centered): "Wir verwenden Ihre Daten nur, um zu antworten. Nie weitergegeben, nie verkauft."

**Success state (after submit):**
- Center-aligned in the card.
- 64×64px circular icon tile (`--teal-50` bg, check icon `--teal-600`).
- H3 (serif 26px): "Danke — Nachricht erhalten!"
- Body (max 34ch): "Einer von uns (ein Jakob) meldet sich innerhalb eines Tages. Bis bald."
- `<Button variant="secondary">Weitere Nachricht senden</Button>`.

### FAQ — below the grid (moved here from the Startseite)

Narrow column (`--container-narrow`), centered heading: eyebrow "Häufige Fragen", serif H2 "Was unsere Kunden am häufigsten fragen", one-line lead pointing at the form.

`<Accordion defaultOpen={[0]}>` — 5 items:
1. Was kostet eine Website? → Fester Preis im Voraus, keine Überraschungsrechnungen.
2. Wie lange dauert es? → 2–4 Wochen, realistischer Zeitplan von Anfang an.
3. Ich bin überhaupt nicht technikaffin — ist das ein Problem? → Nein, die meisten Kunden auch nicht.
4. Wem gehört die Website hinterher? → Ihnen. Vollständig.
5. Was passiert nach dem Launch? → Fester Ansprechpartner, einfache Monatspakete.
