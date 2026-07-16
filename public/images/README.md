# Fotos

Hier liegen echte Fotos für die Website. Alles in diesem Ordner wird von Next.js
unter `/images/` ausgeliefert (z. B. `public/images/hintergrund.webp` → `/images/hintergrund.webp`).

## Konventionen

- **Hero-Foto der Startseite:** `meer-felskueste.webp` (fest im Code referenziert)
- Format: **WebP**, max. **2560 px Breite**, Zielgröße **< 500 KB**
- Dateinamen klein, deutsch, mit Bindestrichen (z. B. `team-jakob-und-jakob.webp`)
- Keine unkomprimierten Originale (Handy-JPG/HEIC) committen — erst verkleinern
  und konvertieren. macOS-`sips` kann kein WebP schreiben; stattdessen:

```bash
# HEIC vorher mit sips zu JPG wandeln:
sips -s format jpeg -s formatOptions 95 original.HEIC --out original.jpg

# dann nach WebP (Qualität senken, bis < 500 KB):
pnpm dlx sharp-cli --input original.jpg --output hintergrund.webp --format webp --quality 78
```
