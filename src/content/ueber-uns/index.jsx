import { useNavigate } from 'react-router-dom';
import { Button }     from '@/components/core/Button';
import { Card }       from '@/components/core/Card';
import { Avatar }     from '@/components/core/Avatar';
import Section        from '@/components/layout/Section';
import SectionHeading from '@/components/layout/SectionHeading';
import PhotoSlot      from '@/components/layout/PhotoSlot';
import Icon           from '@/components/Icon';

const WERTE = [
  { icon: 'shieldCheck', title: 'Ehrlichkeit vor Verkauf',   body: 'Wir sagen Ihnen, wenn wir nicht die Richtigen für Ihr Projekt sind. Vertrauen ist uns wichtiger als ein Auftrag.' },
  { icon: 'clock',       title: 'Transparenz bei jedem Schritt', body: 'Kein Verschwinden nach der Beauftragung. Sie wissen immer, wo wir stehen.' },
  { icon: 'heart',       title: 'Langfristiges Denken',      body: 'Wir bauen Websites, die auch in zwei Jahren noch gut aussehen und funktionieren.' },
];

export default function UeberUns() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Intro */}
      <Section pad="clamp(48px, 6vw, 80px)">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'center' }} className="jj-hero-grid">
          <div>
            <div className="jj-eyebrow" style={{ marginBottom: '14px' }}>Über uns</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(36px, 5vw, 52px)', lineHeight: 1.07, letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: 0 }}>
              Zwei Jakobs. Ein Ziel.
            </h1>
            <p style={{ marginTop: '20px', fontSize: '19px', lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: '42ch' }}>
              Wir haben J&amp;J Studios gegründet, weil wir immer wieder dasselbe gesehen haben: Gute kleine Unternehmen mit schlechten oder gar keinen Websites — und Agenturen, die entweder zu teuer, zu technisch oder nach dem Launch verschwunden waren.
            </p>
            <p style={{ marginTop: '16px', fontSize: '19px', lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: '42ch' }}>
              Wir machen das anders. Direkt, transparent, und wir bleiben.
            </p>
            <div style={{ marginTop: '28px' }}>
              <Button variant="accent" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => navigate('/kontakt')}>
                Hallo sagen
              </Button>
            </div>
          </div>
          <PhotoSlot label="Jakob & Jakob" icon="sparkles" ratio="4 / 3" tone="green" />
        </div>
      </Section>

      {/* Team */}
      <Section bg="var(--paper-2)">
        <SectionHeading eyebrow="Das Team" title="Die zwei Jakobs" lead="Klein genug, um jeden Kunden persönlich zu betreuen. Groß genug, um alles selbst zu machen." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
          {[
            { name: 'Jakob S.', rolle: 'Design & Strategie', bio: 'Ich kümmere mich darum, dass Ihre Website nicht nur gut aussieht, sondern auch das Richtige kommuniziert. Ich denke immer zuerst an Ihre Kunden.' },
            { name: 'Jakob H.', rolle: 'Entwicklung & Technik', bio: 'Ich baue das, was Jakob entwirft — schnell, sauber und so, dass es auch in fünf Jahren noch funktioniert. Keine unnötige Komplexität.' },
          ].map((m) => (
            <Card key={m.name} padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Avatar name={m.name} size="xl" />
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '22px', color: 'var(--text-strong)' }}>{m.name}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--green-600)', letterSpacing: '0.02em', textTransform: 'uppercase', marginTop: '2px' }}>{m.rolle}</div>
              </div>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: 'var(--text-muted)' }}>{m.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Werte */}
      <Section>
        <SectionHeading eyebrow="Unsere Werte" title="Woran wir uns messen lassen" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px' }}>
          {WERTE.map((w) => (
            <div key={w.title} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <span style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-md)', background: 'var(--green-50)', color: 'var(--green-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={w.icon} size={26} />
              </span>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '19px', color: 'var(--text-strong)', margin: 0 }}>{w.title}</h3>
              <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="var(--surface-brand)">
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 18px' }}>
            Lernen wir uns kennen.
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)', maxWidth: '44ch', margin: '0 auto 28px' }}>
            Ein kurzes Gespräch reicht oft schon, um zu wissen, ob wir zusammenpassen. Kostenlos und unverbindlich.
          </p>
          <Button variant="accent" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => navigate('/kontakt')}>
            Jetzt Gespräch vereinbaren
          </Button>
        </div>
      </Section>
    </div>
  );
}
