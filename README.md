# J&J Studios — Website

Die Marketing-Website für J&J Studios, ein Zwei-Personen-Webstudio (Jakob & Jakob) aus Deutschland. Gebaut mit Next.js 15 + TypeScript, deployed als statischer Export auf Netlify.

---

## Schnellstart

```bash
pnpm install
pnpm dev
```

Öffnet die Seite unter `http://localhost:3000`.

## Verfügbare Befehle

| Befehl | Funktion |
|--------|----------|
| `pnpm dev` | Entwicklungsserver starten |
| `pnpm build` | Produktions-Build → `out/` |
| `pnpm start` | Produktions-Build lokal vorschauen |

---

## Projektstruktur

```
jnj_website/
├── assets/                    Statische Assets (Logos, Bilder)
│   ├── logo-badge.svg
│   ├── logo-horizontal.svg
│   └── logo-wordmark.svg
├── src/
│   ├── app/                   Next.js App Router
│   │   ├── layout.tsx         Root-Layout: Fonts, Nav, Footer, Metadata
│   │   ├── page.tsx           Startseite (/)
│   │   ├── leistungen/        /leistungen
│   │   ├── referenzen/        /referenzen
│   │   ├── ueber-uns/         /ueber-uns
│   │   └── kontakt/           /kontakt ('use client' — Formular-State)
│   ├── components/            Wiederverwendbare Komponenten
│   │   ├── Icon.tsx           Lucide-Icon-Set (inline SVG)
│   │   ├── core/              Button, Card, Badge, Avatar
│   │   ├── forms/             Input, Textarea, Select, Checkbox
│   │   ├── content/           Testimonial, Accordion
│   │   └── layout/            Nav, Footer, Section, SectionHeading,
│   │                          PhotoSlot, BrowserFrame, Stars
│   └── styles/
│       └── globals.css        Globale Stile + Design-Token-Import
├── design/                    Designsystem (Tokens, Marken-Richtlinien)
│   ├── tokens.css             Alle CSS-Custom-Properties
│   ├── brand.md               Marken-Richtlinien & Komponenten-Regeln
│   ├── screens.md             Seiten-Spezifikationen
│   └── assets/                Master-Logos (SVG)
├── next.config.ts             Next.js-Konfiguration (static export)
├── tsconfig.json
├── netlify.toml               Netlify-Build-Konfiguration
└── package.json
```

---

## Seiten

| Route | Seite | Inhalt |
|-------|-------|--------|
| `/` | Startseite | Hero, Leistungsübersicht, Prozess, Kundenstimmen, FAQ, CTA |
| `/leistungen` | Leistungen | Drei Pakete: Starter, Business, Full-Package |
| `/referenzen` | Referenzen | Vorher/Nachher + Fallstudien-Grid |
| `/ueber-uns` | Über uns | Team, Werte, CTA |
| `/kontakt` | Kontakt | Lead-Formular mit Erfolgs-Feedback |

---

## Design System

Das Designsystem liegt im Ordner `design/`. Es enthält:

- **`tokens.css`** — Farben, Typografie, Abstände, Schatten, Radien als CSS-Custom-Properties
- **`brand.md`** — Marken-Richtlinien, Stimme, visuelle Regeln, Komponenten-Verwendung
- **`screens.md`** — Seiten-Spezifikationen mit Inhalts-Intent
- **`assets/`** — SVG-Logos in drei Varianten

Die Tokens werden in `src/styles/globals.css` per `@import` eingebunden. Alle CSS-Variablen stehen damit global zur Verfügung.

**Wichtig:** Dateien im Ordner `design/` werden nicht direkt bearbeitet. Er ist die Quelle für alle Marken-Entscheidungen.

### Schriften

Newsreader und Figtree werden über `next/font/google` zur Build-Zeit heruntergeladen und als selbst-gehostete Dateien eingebunden (kein Google-CDN-Aufruf zur Laufzeit). Die Schriften sind über CSS-Variablen verfügbar:

| Token | Schrift | Verwendung |
|-------|---------|-----------|
| `--font-serif` | Newsreader | H1, H2, Display, Pull-Quotes |
| `--font-sans` | Figtree | H3, H4, Fließtext, alle UI-Elemente |

### Wichtige Token

| Token | Verwendung |
|-------|-----------|
| `--surface-page` | Seitenhintergrund (Creme) |
| `--surface-card` | Karten-Oberfläche (Weiß) |
| `--surface-brand` | Dunkles Kieferngrün (Prozess-Sektion) |
| `--surface-brand-deep` | Tiefes Kieferngrün (Footer, CTA-Band) |
| `--accent` | Gold — **nur für den einen primären CTA-Button** |
| `--section-y` | Vertikaler Abstand zwischen Sektionen (6rem) |

### Farb-Hierarchie

- **Tiefes Kieferngrün** (`--green-800`) — Markenfarbe, Überschriften
- **Interaktives Grün** (`--green-600`) — Links, primäre Buttons
- **Warmes Gold** (`--accent`) — Einziger primärer CTA, sparsam einsetzen
- **Creme** (`--paper`) — Seitenhintergrund, niemals kaltes Grau

---

## Komponenten-Übersicht

### Core

| Komponente | Props | Verwendung |
|-----------|-------|-----------|
| `Button` | `variant` (accent/primary/secondary/ghost), `size` (sm/md/lg), `href`, `fullWidth`, `iconLeft`, `iconRight` | Alle CTAs und Aktionen |
| `Card` | `padding` (none/sm/md/lg), `tone` (white/cream/brand/soft), `interactive` | Inhalts-Container |
| `Badge` | `variant` (neutral/brand/accent/success/warning/danger), `size` (sm/md), `dot` | Tags und Status-Labels |
| `Avatar` | `name`, `src`, `size` (sm/md/lg/xl) | Personen in Testimonials |

### Forms

| Komponente | Besonderheit |
|-----------|-------------|
| `Input` | Label, Hint, Error, leadingIcon — Fokus-State via CSS `:focus-within` |
| `Textarea` | Anpassbare Zeilenzahl — Fokus-State via CSS `:focus` |
| `Select` | Native Select mit angepasstem Chevron — Fokus-State via CSS `:focus` |
| `Checkbox` | Checked-State via CSS `:checked` (kein JS-State) |

### Layout

| Komponente | Zweck |
|-----------|-------|
| `Section` | Sektion mit einheitlichem vertikalem Rhythmus und max-width |
| `SectionHeading` | Eyebrow + Serif-Titel + Lead, zentriert oder links |
| `PhotoSlot` | Getönter Bild-Platzhalter (bis echte Fotos vorliegen) |
| `BrowserFrame` | Mock-Browser für Website-Vorschauen |
| `Stars` | Gold-Sternebewertung |

---

## Neue Seite hinzufügen

1. Datei `src/app/<seitenname>/page.tsx` anlegen
2. `metadata`-Export für Titel und Beschreibung ergänzen
3. Nav-Link in `src/components/layout/Nav.tsx` (LINKS-Array) eintragen
4. Footer-Link in `src/components/layout/Footer.tsx` (STUDIO_LINKS-Array) eintragen

## Neues Icon hinzufügen

In `src/components/Icon.tsx` das Lucide-Pfad-SVG zum `PATHS`-Objekt hinzufügen. Pfaddaten unter [lucide.dev](https://lucide.dev) kopieren.

---

## Deploy

Das Projekt ist für Netlify konfiguriert:

- Build-Befehl: `pnpm build`
- Publish-Verzeichnis: `out`
- Jede Seite generiert eine eigene `index.html` — kein SPA-Redirect nötig

Einfach das Repository mit Netlify verbinden — der erste Push startet automatisch den Build.

---

## Sprache & Marke

- **Alle Inhalte auf Deutsch**
- **Warme, direkte Sprache** — kein Fachjargon, keine Unternehmenssprache
- **Kein Emoji** — Wärme entsteht durch Worte, Typografie und Farbe
- **Beruhigungs-Muster** in den Texten: "kein Fachjargon", "keine Überraschungen", "wir bleiben nach dem Launch"
- **Sentence case** überall — kein Title Case außer bei `.jj-eyebrow`-Labels

---

© 2026 J&J Studios — Jakob & Jakob
