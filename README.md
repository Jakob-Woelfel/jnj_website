# J&J Studios — Website

Die Marketing-Website für J&J Studios, ein Zwei-Personen-Webstudio (Jakob & Jakob) aus Deutschland. Gebaut mit Vite + React, deployed auf Netlify.

---

## Schnellstart

```bash
npm install
npm run dev
```

Öffnet die Seite unter `http://localhost:5173`.

## Verfügbare Befehle

| Befehl | Funktion |
|--------|----------|
| `npm run dev` | Entwicklungsserver starten |
| `npm run build` | Produktions-Build → `dist/` |
| `npm run preview` | Produktions-Build lokal vorschauen |

---

## Projektstruktur

```
jnj_website/
├── assets/                    Statische Assets (Logos, Bilder)
│   ├── logo-badge.svg
│   ├── logo-horizontal.svg
│   └── logo-wordmark.svg
├── src/
│   ├── app/                   App-Shell und Router
│   │   ├── main.jsx           Einstiegspunkt
│   │   ├── App.jsx            Shell mit Nav + Outlet + Footer
│   │   └── router.jsx         Alle Routen-Definitionen
│   ├── components/            Wiederverwendbare Komponenten
│   │   ├── Icon.jsx           Lucide-Icon-Set (inline SVG)
│   │   ├── core/              Button, Card, Badge, Avatar
│   │   ├── forms/             Input, Textarea, Select, Checkbox
│   │   ├── content/           Testimonial, Accordion
│   │   └── layout/            Nav, Footer, Section, SectionHeading,
│   │                          PhotoSlot, BrowserFrame, Stars
│   ├── content/               Seiteninhalte (eine Seite pro Ordner)
│   │   ├── startseite/        Startseite (/)
│   │   ├── leistungen/        Leistungen (/leistungen)
│   │   ├── referenzen/        Referenzen (/referenzen)
│   │   ├── ueber-uns/         Über uns (/ueber-uns)
│   │   └── kontakt/           Kontakt (/kontakt)
│   └── styles/
│       └── globals.css        Globale Stile + Design-Token-Imports
├── Design System J&J/         Designsystem (Tokens, Komponenten-Referenz)
├── index.html                 HTML-Einstiegspunkt
├── vite.config.js
├── netlify.toml               Netlify-Build-Konfiguration + SPA-Redirect
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

Das Designsystem liegt im Ordner `Design System J&J/`. Es enthält:

- **Tokens** (`tokens/`) — Farben, Typografie, Abstände, Schatten, Radien
- **Komponenten** (`components/`) — Referenz-Implementierungen
- **Logos** (`assets/`) — SVG-Logos in drei Varianten
- **UI-Kit** (`ui_kits/website/`) — Interaktiver Prototyp (Referenz)

Die Tokens werden in `src/styles/globals.css` per `@import` eingebunden. Alle CSS-Variablen aus dem Designsystem stehen damit global zur Verfügung.

**Wichtig:** Dateien im Ordner `Design System J&J/` werden nicht direkt bearbeitet. Er ist die Quelle für alle Marken-Entscheidungen.

### Wichtige Token

| Token | Verwendung |
|-------|-----------|
| `--surface-page` | Seitenhintergrund (Creme) |
| `--surface-card` | Karten-Oberfläche (Weiß) |
| `--surface-brand` | Dunkles Kieferngrün (Prozess-Sektion, Footer) |
| `--accent` | Gold — **nur für den primären CTA-Button** |
| `--font-serif` | Newsreader — Überschriften H1, H2, Display |
| `--font-sans` | Figtree — Fließtext, UI-Elemente |
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
| `Button` | `variant` (accent/primary/secondary/ghost), `size` (sm/md/lg), `fullWidth`, `iconLeft`, `iconRight` | Alle CTAs und Aktionen |
| `Card` | `padding` (none/sm/md/lg), `tone` (white/cream/brand/soft), `interactive` | Inhalts-Container |
| `Badge` | `variant` (neutral/brand/accent/success/warning/danger), `size` (sm/md), `dot` | Tags und Status-Labels |
| `Avatar` | `name`, `src`, `size` (sm/md/lg/xl) | Personen in Testimonials |

### Forms

| Komponente | Besonderheit |
|-----------|-------------|
| `Input` | Label, Hint, Error, leadingIcon |
| `Textarea` | Anpassbare Zeilenzahl |
| `Select` | Native Select mit angepasstem Chevron |
| `Checkbox` | Grüner Haken bei Aktivierung |

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

1. Ordner `src/content/<seitenname>/` anlegen mit `index.jsx`
2. Route in `src/app/router.jsx` eintragen
3. Nav-Link in `src/components/layout/Nav.jsx` (LINKS-Array) ergänzen
4. Footer-Link in `src/components/layout/Footer.jsx` ergänzen

## Neue Icon hinzufügen

In `src/components/Icon.jsx` das Lucide-Pfad-SVG zum `PATHS`-Objekt hinzufügen. Pfaddaten unter [lucide.dev](https://lucide.dev) kopieren.

---

## Deploy

Das Projekt ist für Netlify konfiguriert:

- Build-Befehl: `npm run build`
- Publish-Verzeichnis: `dist`
- SPA-Redirect: Alle Pfade → `index.html` (für client-seitiges Routing)

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
