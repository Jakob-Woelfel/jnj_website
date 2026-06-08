# J&J Studios — Screen & Section Specs

Section-by-section spec for every page. Use this alongside `brand.md` when building or modifying pages. All copy is in German.

Layout shorthand: `A | B` = two-column grid that collapses to 1 column at ≤920px (`jj-*-grid` class).

---

## Global chrome

### Nav — sticky, all pages

Surface: cream at 88% opacity + backdrop-blur. 1px bottom border (`--border-subtle`) appears on scroll.

Left: `/logo-horizontal.svg` linked to `/`.
Center (desktop): links — Startseite / Leistungen / Referenzen / Über uns.
Right: `<Button variant="accent" size="sm">Kostenloses Gespräch buchen</Button>` → `/kontakt`.

Mobile (≤720px): hamburger toggle replaces desktop nav. Drawer slides in with all links + CTA button.

### Footer — all pages

Surface: `--surface-brand-deep` (darkest pine).

Left: `/logo-badge.svg` + one-liner tagline + copyright.
Right: nav links in two columns (Leistungen, Referenzen, Über uns, Kontakt) + contact details (email, phone).

Bottom strip: privacy microcopy.

---

## / — Startseite (Home)

### 1. Hero

Surface: `--surface-page` (cream).
Layout: `Content (1.05fr) | Visual (0.95fr)`, collapses at ≤920px.

**Left — content:**
- Trust pill (pill-shaped badge with 5 stars + "Trusted by 40+ local businesses") — white bg, `--shadow-xs`.
- H1 (serif, clamp 40–64px): *"Eine Website, die still ihren Dienst tut."* — italic emphasis word in `--green-700`.
- Lead (clamp 18–21px, `--text-muted`): "Wir sind Jakob & Jakob — zwei Menschen, die schnelle, freundliche Websites für kleine Unternehmen bauen. Die Art, die einen neugierigen Besucher in einen Anruf verwandelt. Kein Fachjargon, keine Überraschungen."
- CTA row: `<Button variant="accent" size="lg" iconRight={arrowRight}>Kostenloses Gespräch buchen</Button>` + `<Button variant="secondary" size="lg">Unsere Arbeit sehen</Button>`.
- Reassurance row (small text, `--text-faint`): ✓ Kostenloses Angebot · ✓ Antwort innerhalb eines Tages.

**Right — visual:**
- `<BrowserFrame>` showing a mock client site ("Bloom & Branch" florist).
- Floating stat card (`.jj-float-card`, hidden ≤920px): white card `--shadow-lg`, positioned bottom-left of browser frame. Icon tile (trendingUp, `--green-50` bg) + serif number "2× mehr Anrufe" + caption "im ersten Monat live".

### 2. Trusted-by strip

Surface: `--paper-2`. 1px border top + bottom (`--border-subtle`). Padding 26px.

Label: "Vertrauen von lokalen Unternehmen wie" (small, faint, tracked).
Names: 5 placeholder business names in serif, `--ink-400`. Flex row, wraps on mobile.

### 3. Leistungen / Services

Surface: `--surface-page`.
Section heading (eyebrow + h2 + lead): eyebrow "Was wir tun", title "Drei einfache Wege, wie wir helfen", lead supporting copy.

3-column auto-fit grid (`minmax(280px, 1fr)`), each a `<Card padding="lg">`:
- Icon tile (52×52px, `--green-50` bg, `--green-700` icon, `--radius-md`).
- H3 card title (sans 600, 21px).
- Body copy (16px, `--text-muted`).

Three services:
1. **Neue Website** (penTool icon) — kein vorhandener Auftritt oder Neustart.
2. **Redesign / Refresh** (layout icon) — bestehende Site modernisieren.
3. **Laufende Betreuung** (heart icon) — Updates, Änderungen, fester Ansprechpartner nach dem Launch.

### 4. Prozess / Process

Surface: `--surface-brand` (dark pine). White and `--text-on-brand-muted` text.
Layout: `Intro (0.8fr) | Steps (1.2fr)`, collapses at ≤920px.

**Left:**
- Eyebrow: "Wie es funktioniert" (`--green-300`).
- H2 (white, serif, clamp 28–40px): "Einfach von Hallo bis Launch."
- Lead (`--text-on-brand-muted`): "Sie müssen nichts Technisches wissen. Das ist unser Job. Hier ist alles, von Anfang bis Ende."

**Right — numbered steps** (flex column, dividers between steps in rgba white 14%):
- Step number in `--gold-400` serif (22px).
- H3 step title (white, sans 600, 19px).
- Body (`--text-on-brand-muted`, 16px).

Three steps:
1. **01 — Ein freundliches Gespräch** — entspannter Anruf, kein Fachjargon, kein Druck.
2. **02 — Wir designen & bauen** — echte Designs früh und oft, technische Umsetzung.
3. **03 — Launch & Betreuung** — live gehen, Einführung, Ansprechpartner danach.

### 5. Testimonials

Surface: `--surface-page`.
Section heading: eyebrow "In ihren Worten", title "Das, worauf wir am stolzesten sind", lead "Wir messen unsere Arbeit daran, ob Ihr Telefon klingelt."

Layout: `Featured (1.3fr) | Two stacked (1fr)`, collapses at ≤920px.
- `<Testimonial featured rating={5}>` — large variant, left.
- Two standard `<Testimonial rating={5}>` stacked right.

All with real name + business name. Featured quote about painlessness + phone ringing.

### 6. FAQ

Surface: `--paper-2`.
Layout: `Heading (0.85fr) | Accordion (1.15fr)`, collapses at ≤920px.

Section heading (left-aligned): eyebrow "Gute Fragen", title "Was uns am meisten gefragt wird", lead "Und wenn Ihre Frage nicht dabei ist, fragen Sie einfach — wir sind freundlich."

`<Accordion defaultOpen={[0]}>` — 5 items:
1. Was kostet eine Website? → Fester Preis im Voraus, keine Überraschungsrechnungen.
2. Wie lange dauert das? → 2–4 Wochen, realistischer Zeitplan von Anfang an.
3. Ich bin überhaupt nicht technisch. Ist das ein Problem? → Nein, die meisten Kunden auch nicht.
4. Wem gehört die Website? → Ihnen. Vollständig.
5. Was passiert nach dem Launch? → Fester Ansprechpartner, einfache Monatspakete.

### 7. CTA-Band

Surface: `--surface-brand-deep` (deepest pine), `--radius-2xl`, inside cream page padding — floats as a contained band.

Center-aligned:
- H2 (white, serif, clamp 30–46px): "Lassen Sie uns etwas bauen, auf das Sie stolz sind."
- Lead (`--text-on-brand-muted`, 19px, max 50ch).
- `<Button variant="accent" size="lg" iconRight={arrowRight}>Kostenloses Gespräch buchen</Button>`.

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
- Center: circular arrow button (`--green-600` bg, white icon, 40px).
- Right: "After" label (`--green-700`) + `<PhotoSlot>` (new site).

### 3. Case study grid

3-column auto-fit grid (`minmax(300px, 1fr)`).
Each `<Card interactive padding="none">`:
- `<PhotoSlot>` full-width top (16:10 ratio, `--radius-lg` top corners only).
- Padding body: `<Badge variant="neutral" size="sm">` tag, H3 client name (serif 23px), blurb (15.5px, `--text-muted`), result chip (trendingUp icon + stat in `--green-50` pill).

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

Divider, then contact details: email + phone with `--green-600` icons.

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
- 64×64px circular icon tile (`--green-50` bg, check icon `--green-600`).
- H3 (serif 26px): "Danke — Nachricht erhalten!"
- Body (max 34ch): "Einer von uns (ein Jakob) meldet sich innerhalb eines Tages. Bis bald."
- `<Button variant="secondary">Weitere Nachricht senden</Button>`.
