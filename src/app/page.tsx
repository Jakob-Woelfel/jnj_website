import type { Metadata } from 'next';
import Link from 'next/link';
import { Button }     from '@/components/core/Button';
import Section        from '@/components/layout/Section';
import SectionHeading from '@/components/layout/SectionHeading';
import Stars          from '@/components/layout/Stars';
import Reveal         from '@/components/layout/Reveal';
import Icon           from '@/components/Icon';

export const metadata: Metadata = {
  title: 'J&J Studios — Websites für lokale Unternehmen',
  description: 'Wir bauen schnelle, ansprechende Websites für kleine Unternehmen. Kein Fachjargon, keine Überraschungen.',
  openGraph: {
    title: 'J&J Studios — Websites für lokale Unternehmen',
    description: 'Schnelle, ansprechende Websites für kleine Unternehmen. Kein Fachjargon, keine Überraschungen.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'J&J Studios',
  description: 'Webdesign und Entwicklung für kleine Unternehmen',
  url: 'https://jj-studios.de',
  email: 'hallo@jj-studios.de',
  serviceType: ['Webdesign', 'Webentwicklung', 'Web-Branding'],
  areaServed: 'DE',
};

const SERVICES = [
  { icon: 'penTool', title: 'Neuer Webauftritt',         body: 'Wir designen und entwickeln alles — Texte, Optik, Technik — damit Sie mit etwas starten, worauf Sie stolz sind.' },
  { icon: 'layout',  title: 'Redesign & Modernisierung', body: 'Aus einer veralteten Website wird etwas Modernes und Schnelles — damit Besucher zu Kunden werden.' },
  { icon: 'heart',   title: 'Wartung & Web-Branding',    body: 'Wir verschwinden nicht nach dem Launch: Updates und Pflege für eine überschaubare monatliche Pauschale.' },
];

const STEPS = [
  { n: '01', title: 'Das erste Gespräch',              body: 'Ein entspannter Call, um Ihr Unternehmen und Ihre Ziele zu verstehen. Kein Fachjargon, kein Druck.' },
  { n: '02', title: 'Wir designen & entwickeln',       body: 'Sie sehen echte Designs früh und oft — um die Technik kümmern wir uns.' },
  { n: '03', title: 'Launch & langfristige Betreuung', body: 'Wir bringen Sie online und bleiben für Updates und Fragen an Ihrer Seite.' },
];

export default function Startseite() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO — volles Viewport, Felsküste fast pur, Text auf Scrim unten links */}
      <div style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/meer-felskueste.webp"
          alt=""
          fetchPriority="high"
          className="jj-hero-photo"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '70% 45%' }}
        />
        {/* Scrim: dunkles Petrol unten links für die Schrift, Fels oben rechts bleibt frei */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top right, rgba(12, 43, 50, 0.82) 0%, rgba(12, 43, 50, 0.46) 36%, rgba(12, 43, 50, 0.10) 66%, rgba(12, 43, 50, 0) 100%)' }} />
        {/* Schmaler Verlauf oben, damit die transparente Nav lesbar bleibt */}
        <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '140px', background: 'linear-gradient(to bottom, rgba(12, 43, 50, 0.38), rgba(12, 43, 50, 0))' }} />

        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter-lg) clamp(56px, 9vh, 112px)' }}>
          <h1 className="jj-fade-up jj-hero-title" style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(52px, 8vw, 104px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: '#fff', margin: 0, maxWidth: '13ch' }}>
            Ihr Felsen in der{' '}
            <em style={{ fontStyle: 'italic' }}>
              <span style={{ position: 'relative', whiteSpace: 'nowrap' }}>
                Brandung.
                <svg aria-hidden viewBox="0 0 300 24" preserveAspectRatio="none" style={{ position: 'absolute', left: '0.02em', bottom: '-0.16em', width: '96%', height: '0.2em', overflow: 'visible' }}>
                  <path d="M6 17 C 60 5, 130 21, 185 12 S 272 7, 294 15" fill="none" stroke="var(--gold-500)" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
                </svg>
              </span>
            </em>
          </h1>

          <p className="jj-fade-up" style={{ animationDelay: '120ms', margin: 'clamp(20px, 3vw, 30px) 0 0', fontSize: 'clamp(17px, 1.8vw, 20px)', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.88)', maxWidth: '44ch' }}>
            Wir sind Jakob &amp; Jakob. Wir bauen Websites, die ruhig und zuverlässig für Ihr Unternehmen arbeiten — kein Fachjargon, keine Überraschungen.
          </p>

          <div className="jj-fade-up" style={{ animationDelay: '220ms', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '14px 26px', marginTop: 'clamp(28px, 4vw, 38px)' }}>
            <Button variant="accent" size="lg" href="/kontakt" iconRight={<Icon name="arrowRight" size={18} />}>
              Kostenlos beraten lassen
            </Button>
            <Link href="/referenzen" style={{ color: '#fff', fontSize: '16px', fontWeight: 500, textDecoration: 'underline', textDecorationColor: 'rgba(255, 255, 255, 0.45)', textUnderlineOffset: '4px' }}>
              Unsere Referenzen
            </Link>
          </div>
        </div>
      </div>

      {/* LEISTUNGEN — drei schlichte Spalten, keine Kästen */}
      <Section>
        <Reveal>
          <SectionHeading eyebrow="Was wir tun" title="Drei Wege in ruhigeres Fahrwasser" lead="Egal, wo Sie gerade stehen — es gibt einen Einstieg, der zu Ihnen passt." />
        </Reveal>
        <div className="jj-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'clamp(32px, 4vw, 56px)' }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 110}>
              <div>
                <Icon name={s.icon} size={28} style={{ color: 'var(--teal-600)' }} />
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '20px', color: 'var(--text-strong)', margin: '16px 0 8px' }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROZESS — einzige dunkle Fläche */}
      <Section bg="var(--surface-brand)">
        <div className="jj-process-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>
          <div>
            <div className="jj-eyebrow" style={{ color: 'var(--teal-300)', marginBottom: '14px' }}>So läuft es ab</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: 0 }}>
              Einfach — von Hallo bis Launch.
            </h2>
            <p style={{ marginTop: '16px', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)' }}>
              Sie müssen nichts Technisches wissen. Das ist unser Job.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {STEPS.map((st, i) => (
              <div key={st.n} style={{ display: 'flex', gap: '20px', padding: '22px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.14)' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 500, color: 'var(--gold-400)', flex: 'none', width: '40px' }}>{st.n}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '19px', color: '#fff', margin: '0 0 6px' }}>{st.title}</h3>
                  <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)' }}>{st.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EIN ZITAT — nackter Pull-Quote, keine Box */}
      <Section>
        <Reveal>
          <figure style={{ margin: '0 auto', maxWidth: '760px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '22px' }}>
              <Stars n={5} size={18} />
            </div>
            <blockquote style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(24px, 3.2vw, 34px)', lineHeight: 1.35, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>
              „Sie haben die ganze Sache schmerzlos gemacht. Ein paar Wochen später hatte ich eine Website, die wirklich zu uns passt — und das Telefon hat seitdem nicht aufgehört zu klingeln."
            </blockquote>
            <figcaption style={{ marginTop: '22px', fontSize: '15.5px', color: 'var(--text-muted)' }}>
              <strong style={{ fontWeight: 600 }}>Maria Alvarez</strong> — Inhaberin, Zahnarztpraxis Alvarez
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      {/* CTA-BAND */}
      <Reveal>
      <div style={{ padding: '0 var(--gutter-lg) var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', background: 'var(--surface-brand-deep)', borderRadius: 'var(--radius-2xl)', padding: 'clamp(40px, 6vw, 72px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(30px, 4.5vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: 0, maxWidth: '22ch', marginInline: 'auto' }}>
            Bereit für ruhigeres Fahrwasser?
          </h2>
          <p style={{ marginTop: '18px', fontSize: '19px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)', maxWidth: '50ch', marginInline: 'auto' }}>
            Ein kostenloses, unverbindliches Gespräch genügt. Wir hören zu und sagen Ihnen ehrlich, ob wir die Richtigen für Sie sind.
          </p>
          <div style={{ marginTop: '30px' }}>
            <Button variant="accent" size="lg" href="/kontakt" iconRight={<Icon name="arrowRight" size={18} />}>
              Jetzt kostenlos beraten lassen
            </Button>
          </div>
        </div>
      </div>
      </Reveal>
    </div>
  );
}
