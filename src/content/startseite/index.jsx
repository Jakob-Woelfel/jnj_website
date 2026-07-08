import { useNavigate } from 'react-router-dom';
import { Button }      from '@/components/core/Button';
import { Card }        from '@/components/core/Card';
import { Testimonial } from '@/components/content/Testimonial';
import { Accordion }   from '@/components/content/Accordion';
import Section         from '@/components/layout/Section';
import SectionHeading  from '@/components/layout/SectionHeading';
import BrowserFrame    from '@/components/layout/BrowserFrame';
import PhotoSlot       from '@/components/layout/PhotoSlot';
import Stars           from '@/components/layout/Stars';
import ScrollBackdrop  from '@/components/layout/ScrollBackdrop';
import Reveal          from '@/components/layout/Reveal';
import Icon            from '@/components/Icon';

const SERVICES = [
  {
    icon: 'penTool',
    title: 'Neuer Webauftritt',
    body: 'Noch keine Website oder neu anfangen? Wir designen und entwickeln alles — Texte, Optik und Technik — damit Sie mit etwas starten, worauf Sie stolz sind.',
  },
  {
    icon: 'layout',
    title: 'Redesign & Modernisierung',
    body: 'Website veraltet oder bringt keine Anfragen? Wir machen daraus etwas Modernes, Schnelles und Wirkungsvolles — damit Besucher zu Kunden werden.',
  },
  {
    icon: 'heart',
    title: 'Wartung & Web-Branding',
    body: 'Wir verschwinden nicht nach dem Launch. Updates, kleine Änderungen und ein komplettes Markenpaket — für eine überschaubare monatliche Pauschale.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Das erste Gespräch',
    body: 'Wir starten mit einem entspannten Call, um Ihr Unternehmen und Ihre Ziele zu verstehen. Kein Fachjargon, kein Druck.',
  },
  {
    n: '02',
    title: 'Wir designen & entwickeln',
    body: 'Sie sehen echte Designs früh und oft. Wir kümmern uns um die Technik und halten Sie immer auf dem Laufenden.',
  },
  {
    n: '03',
    title: 'Launch & langfristige Betreuung',
    body: 'Wir bringen Sie online, erklären alles in Ruhe und bleiben für spätere Updates und Fragen an Ihrer Seite.',
  },
];

const FAQS = [
  {
    q: 'Was kostet eine Website?',
    a: 'Die meisten Websites für kleine Unternehmen liegen zwischen ein paar Hundert und einigen Tausend Euro — je nach Umfang und Funktionen. Sie erhalten vorab ein klares Festpreisangebot. Keine Überraschungsrechnungen.',
  },
  {
    q: 'Wie lange dauert es?',
    a: 'Die meisten Websites gehen 2–4 Wochen nach Freigabe der Inhalte live. Wir nennen Ihnen zu Beginn einen realistischen Zeitplan und halten Sie unterwegs auf dem Laufenden.',
  },
  {
    q: 'Ich bin überhaupt nicht technikaffin — ist das ein Problem?',
    a: 'Nicht im Geringsten — die meisten unserer Kunden sind es auch nicht. Wir übernehmen die technische Seite komplett und erklären alles in verständlicher Sprache. Sie treffen nur die schönen Entscheidungen.',
  },
  {
    q: 'Wem gehört die Website hinterher?',
    a: 'Ihnen — vollständig. Die Website, die Domain, alle Inhalte — alles gehört Ihnen und kann jederzeit übertragen werden.',
  },
  {
    q: 'Was passiert nach dem Launch?',
    a: 'Wir bleiben dabei. Sie erreichen jederzeit eine echte Ansprechperson für Updates und kleine Anpassungen. Für alle, die es lieber komplett abgeben möchten, bieten wir einfache monatliche Pflegepakete an.',
  },
];

export default function Startseite() {
  const navigate = useNavigate();
  const goKontakt = () => navigate('/kontakt');

  return (
    <div>
      <ScrollBackdrop />

      {/* ── HERO ─────────────────────────────────────────── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Ghost ampersand — echoes the logo, pure decoration */}
        <span
          aria-hidden
          className="jj-hero-ghost"
          style={{
            position: 'absolute', zIndex: 0,
            top: '-0.18em', right: '-0.12em',
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500,
            fontSize: 'clamp(320px, 42vw, 640px)', lineHeight: 1,
            color: 'var(--green-200)', opacity: 0.45,
            transform: 'rotate(-8deg)',
            userSelect: 'none', pointerEvents: 'none',
          }}
        >
          &amp;
        </span>
        <div
          style={{
            position: 'relative', zIndex: 1,
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: 'clamp(56px, 8vw, 104px) var(--gutter-lg) clamp(48px, 7vw, 88px)',
          }}
        >
          {/* Editorial headline block — the artwork */}
          <div className="jj-fade-up" style={{ animationDelay: '0ms' }}>
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '9px',
                background: 'var(--surface-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-pill)',
                padding: '6px 14px 6px 8px',
                marginBottom: 'clamp(24px, 3vw, 40px)',
                boxShadow: 'var(--shadow-xs)',
              }}
            >
              <Stars n={5} size={15} />
              <span style={{ fontSize: '13.5px', fontWeight: 500, color: 'var(--text-muted)' }}>
                Vertraut von 40+ lokalen Unternehmen
              </span>
            </div>
          </div>

          <h1
            className="jj-fade-up jj-hero-title"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              fontSize: 'clamp(48px, 7.5vw, 96px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
              color: 'var(--text-strong)',
              margin: 0,
              maxWidth: '14ch',
              animationDelay: '90ms',
            }}
          >
            Eine Website, die still{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--green-700)' }}>
              für Sie{' '}
              <span style={{ position: 'relative', whiteSpace: 'nowrap' }}>
                arbeitet.
                <svg
                  aria-hidden
                  viewBox="0 0 300 24"
                  preserveAspectRatio="none"
                  style={{ position: 'absolute', left: '0.02em', bottom: '-0.16em', width: '96%', height: '0.2em', overflow: 'visible' }}
                >
                  <path
                    d="M6 17 C 60 5, 130 21, 185 12 S 272 7, 294 15"
                    fill="none" stroke="var(--gold-500)" strokeWidth="8" strokeLinecap="round" opacity="0.9"
                  />
                </svg>
              </span>
            </em>
          </h1>

          {/* Lower row: lead + CTAs left, layered mockup right */}
          <div
            className="jj-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: 'clamp(32px, 5vw, 80px)',
              alignItems: 'start',
              marginTop: 'clamp(28px, 4vw, 48px)',
            }}
          >
            <div className="jj-fade-up" style={{ animationDelay: '180ms' }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 'clamp(18px, 2vw, 21px)',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  maxWidth: '46ch',
                }}
              >
                Wir sind Jakob &amp; Jakob — zwei Leute, die schnelle, ansprechende Websites für kleine Unternehmen bauen. Genau die Art, die Besucher in Anrufe und Anfragen verwandelt. Kein Fachjargon, keine Überraschungen.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
                <Button
                  variant="accent"
                  size="lg"
                  iconRight={<Icon name="arrowRight" size={18} />}
                  onClick={goKontakt}
                >
                  Kostenlos beraten lassen
                </Button>
                <Button variant="secondary" size="lg" onClick={() => navigate('/referenzen')}>
                  Unsere Referenzen
                </Button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginTop: '28px', fontSize: '14.5px', color: 'var(--text-faint)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <Icon name="check" size={17} style={{ color: 'var(--green-600)' }} />
                  Kostenlose Anfrage
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <Icon name="check" size={17} style={{ color: 'var(--green-600)' }} />
                  Antwort innerhalb eines Tages
                </span>
              </div>
            </div>

            {/* Visual column — layered, slightly tilted */}
            <div
              className="jj-fade-up jj-hero-visual"
              style={{
                position: 'relative',
                transform: 'translateY(-72px) rotate(2deg)',
                animationDelay: '280ms',
              }}
            >
              {/* Offset panel behind the mockup */}
              <div
                aria-hidden
                style={{
                  position: 'absolute', inset: '-18px 18px 18px -18px',
                  background: 'var(--green-100)',
                  borderRadius: 'var(--radius-2xl)',
                  transform: 'rotate(-3.5deg)',
                }}
              />
              <BrowserFrame url="mueller-baeckerei.de">
              <div style={{ background: 'var(--surface-card)' }}>
                <div style={{ padding: '20px 22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '17px', color: 'var(--green-800)' }}>
                    Bäckerei Müller
                  </span>
                  <span style={{ display: 'flex', gap: '12px', fontSize: '11px', color: 'var(--text-faint)' }}>
                    <span>Sortiment</span>
                    <span>Über uns</span>
                    <span style={{ color: 'var(--gold-700)', fontWeight: 600 }}>Bestellen</span>
                  </span>
                </div>
                <div style={{ padding: '14px 22px 22px' }}>
                  <PhotoSlot label="Bäckerei Storefront" icon="sparkles" ratio="16 / 9" tone="green" />
                  <div style={{ marginTop: '14px', fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 500, color: 'var(--text-strong)', lineHeight: 1.2 }}>
                    Frisch gebacken. Jeden Morgen.
                  </div>
                  <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
                    <span style={{ background: 'var(--gold-500)', color: 'var(--green-900)', fontSize: '11px', fontWeight: 700, padding: '6px 12px', borderRadius: 'var(--radius-pill)' }}>
                      Online bestellen
                    </span>
                    <span style={{ border: '1px solid var(--border-strong)', color: 'var(--text-muted)', fontSize: '11px', fontWeight: 600, padding: '6px 12px', borderRadius: 'var(--radius-pill)' }}>
                      Unsere Geschichte
                    </span>
                  </div>
                </div>
              </div>
            </BrowserFrame>

            {/* Floating stat card */}
            <div
              className="jj-float-card"
              style={{
                position: 'absolute', bottom: '-26px', left: '-26px',
                background: 'var(--surface-card)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-default)',
                padding: '16px 20px',
                display: 'flex', alignItems: 'center', gap: '14px',
              }}
            >
              <span style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'var(--green-50)', color: 'var(--green-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="trendingUp" size={24} />
              </span>
              <span>
                <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1 }}>
                  2× mehr Anfragen
                </span>
                <span style={{ display: 'block', fontSize: '13px', color: 'var(--text-faint)', marginTop: '3px' }}>
                  im ersten Monat nach Launch
                </span>
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* ── VERTRAUENSSTREIFEN ───────────────────────────── */}
      <div style={{ borderTop: '1px solid color-mix(in srgb, var(--green-200) 60%, transparent)', borderBottom: '1px solid color-mix(in srgb, var(--green-200) 60%, transparent)' }}>
        <div
          style={{
            maxWidth: 'var(--container-max)', margin: '0 auto',
            padding: '26px var(--gutter-lg)',
            display: 'flex', alignItems: 'center', gap: 'clamp(20px, 4vw, 56px)',
            flexWrap: 'wrap', justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-faint)', letterSpacing: '0.02em' }}>
            Vertraut von Unternehmen wie
          </span>
          {['Müller Bäckerei', 'Haus & Garten Weber', 'Zahnarztpraxis Alvarez', 'Café am Marktplatz', 'Hardy Sanitär'].map((n) => (
            <span key={n} style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '18px', fontWeight: 500, color: 'var(--green-600)' }}>
              {n}
            </span>
          ))}
        </div>
      </div>

      {/* ── LEISTUNGEN ───────────────────────────────────── */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Was wir tun"
            title="Drei klare Wege, wie wir helfen"
            lead="Egal, wo Sie gerade stehen — es gibt einen Einstieg, der zu Ihnen passt. Und eine echte Person auf der anderen Seite."
          />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 110}>
            <Card padding="lg" tone="cream" style={{ height: '100%', border: '1px solid color-mix(in srgb, var(--gold-300) 45%, var(--border-default))' }}>
              <span
                style={{
                  width: '52px', height: '52px', borderRadius: 'var(--radius-md)',
                  background: 'var(--green-100)', color: 'var(--green-700)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <Icon name={s.icon} size={26} />
              </span>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '21px', color: 'var(--text-strong)', margin: '0 0 10px' }}>
                {s.title}
              </h3>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                {s.body}
              </p>
            </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── WIE WIR ARBEITEN ─────────────────────────────── */}
      <Section bg="var(--surface-brand)">
        <div
          className="jj-process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'start',
          }}
        >
          <div>
            <div className="jj-eyebrow" style={{ color: 'var(--green-300)', marginBottom: '14px' }}>
              So läuft es ab
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)', fontWeight: 500,
                fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.1,
                letterSpacing: '-0.02em', color: '#fff', margin: 0,
              }}
            >
              Einfach — von Hallo bis Launch.
            </h2>
            <p style={{ marginTop: '16px', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)' }}>
              Sie müssen nichts Technisches wissen. Das ist unser Job. So sieht der ganze Ablauf aus.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {STEPS.map((st, i) => (
              <div
                key={st.n}
                style={{
                  display: 'flex', gap: '20px',
                  padding: '22px 0',
                  borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.14)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 500, color: 'var(--gold-400)', flex: 'none', width: '40px' }}>
                  {st.n}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '19px', color: '#fff', margin: '0 0 6px' }}>
                    {st.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)' }}>
                    {st.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── KUNDENSTIMMEN ────────────────────────────────── */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Was unsere Kunden sagen"
            title="Der Teil, auf den wir am stolzesten sind"
            lead="Wir messen unsere Arbeit daran, ob Ihr Telefon klingelt. Das sagen ein paar Unternehmer dazu."
          />
        </Reveal>
        <Reveal delay={120}>
        <div
          className="jj-testi-grid"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: '22px' }}
        >
          <Testimonial
            featured
            rating={5}
            quote="Sie haben die ganze Sache schmerzlos gemacht. Ich habe ihnen erzählt, worum es in meiner Praxis geht — und ein paar Wochen später hatte ich eine Website, die wirklich zu uns passt. Das Telefon hat seitdem nicht aufgehört zu klingeln."
            name="Maria Alvarez"
            business="Inhaberin, Zahnarztpraxis Alvarez"
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <Testimonial
              rating={5}
              quote="Kein Fachjargon, kein Hin und Her. Fühlte sich an, als würde man einen Freund beauftragen, der zufällig genial darin ist."
              name="Tom Becker"
              business="Becker &amp; Söhne Dach GmbH"
            />
            <Testimonial
              rating={5}
              quote="Buchungen gingen in der ersten Woche rauf. Ehrlich gesagt wünschte ich, ich hätte das vor zwei Jahren gemacht."
              name="Priya Shah"
              business="Café am Marktplatz"
            />
          </div>
        </div>
        </Reveal>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section>
        <Reveal>
        <div
          className="jj-faq-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'start',
          }}
        >
          <SectionHeading
            align="left"
            eyebrow="Häufige Fragen"
            title="Was unsere Kunden am häufigsten fragen"
            lead="Und falls Ihre Frage nicht dabei ist — einfach schreiben. Wir sind nett."
          />
          <Accordion defaultOpen={[0]} items={FAQS} />
        </div>
        </Reveal>
      </Section>

      {/* ── CTA-BAND ─────────────────────────────────────── */}
      <Reveal>
        <CTABand onKontakt={goKontakt} />
      </Reveal>
    </div>
  );
}

function CTABand({ onKontakt }) {
  return (
    <div style={{ padding: '0 var(--gutter-lg) var(--section-y)' }}>
      <div
        style={{
          maxWidth: 'var(--container-max)', margin: '0 auto',
          background: 'var(--surface-brand-deep)',
          borderRadius: 'var(--radius-2xl)',
          padding: 'clamp(40px, 6vw, 72px)',
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-serif)', fontWeight: 500,
            fontSize: 'clamp(30px, 4.5vw, 46px)', lineHeight: 1.1,
            letterSpacing: '-0.02em', color: '#fff', margin: 0,
            maxWidth: '22ch', marginInline: 'auto',
          }}
        >
          Lassen Sie uns etwas aufbauen, das für Sie arbeitet.
        </h2>
        <p style={{ marginTop: '18px', fontSize: '19px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)', maxWidth: '50ch', marginInline: 'auto' }}>
          Vereinbaren Sie ein kostenloses, unverbindliches Gespräch. Wir hören zu, beantworten Ihre Fragen und sagen Ihnen ehrlich, ob wir die Richtigen für Sie sind.
        </p>
        <div style={{ marginTop: '30px' }}>
          <Button
            variant="accent"
            size="lg"
            iconRight={<Icon name="arrowRight" size={18} />}
            onClick={onKontakt}
          >
            Jetzt kostenlos beraten lassen
          </Button>
        </div>
      </div>
    </div>
  );
}
