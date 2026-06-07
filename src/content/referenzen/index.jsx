import { useNavigate } from 'react-router-dom';
import { Button }     from '@/components/core/Button';
import { Card }       from '@/components/core/Card';
import { Badge }      from '@/components/core/Badge';
import Section        from '@/components/layout/Section';
import SectionHeading from '@/components/layout/SectionHeading';
import PhotoSlot      from '@/components/layout/PhotoSlot';
import Icon           from '@/components/Icon';

const CASES = [
  {
    tag: 'Zahnarztpraxis',
    title: 'Zahnarztpraxis Alvarez',
    blurb: 'Eine veraltete, schwer lesbare Website wurde zu einer ruhigen, modernen mit Online-Terminbuchung im Mittelpunkt.',
    result: 'Neupatientenanfragen verdoppelt im ersten Monat.',
    icon: 'sparkles',
    tone: 'green',
  },
  {
    tag: 'Café',
    title: 'Café am Marktplatz',
    blurb: 'Eine klare Speisekarte und ein gut sichtbarer "Reservieren"-Button verwandelten Suchende in Gäste und Wochenend-Buchungen.',
    result: 'Wochenend-Buchungen um 60 % gestiegen.',
    icon: 'heart',
    tone: 'gold',
  },
  {
    tag: 'Dachdeckerei',
    title: 'Becker & Söhne Dach',
    blurb: 'Eine vertrauenswürdige, bildstarke Website mit Anfrageformular machte es leicht, sie den großen Ketten vorzuziehen.',
    result: 'Über 30 Angebots­anfragen pro Monat.',
    icon: 'shieldCheck',
    tone: 'green',
  },
];

export default function Referenzen() {
  const navigate = useNavigate();

  return (
    <div>
      <Section pad="clamp(48px, 6vw, 72px)">
        <SectionHeading
          align="left"
          eyebrow="Unsere Referenzen"
          title="Echte Websites, für echte Unternehmen"
          lead="Kein Blendwerk. Wir bauen Websites, die zu Ihnen passen und leise Ergebnisse liefern. Hier sind ein paar Beispiele."
        />
      </Section>

      {/* Featured before/after */}
      <div style={{ padding: '0 var(--gutter-lg)', marginBottom: 'var(--section-y)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Card padding="lg" tone="cream">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Badge variant="brand">Ausgewählt</Badge>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-strong)' }}>
                  Zahnarztpraxis Alvarez
                </span>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600, color: 'var(--green-700)' }}>
                <Icon name="trendingUp" size={19} /> Neupatientenanfragen verdoppelt
              </span>
            </div>
            <div className="jj-ba-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '18px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: '10px' }}>
                  Vorher
                </div>
                <PhotoSlot label="Alte Website" icon="x" ratio="16 / 10" tone="cream" />
              </div>
              <span className="jj-ba-arrow" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--green-600)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <Icon name="arrowRight" size={20} />
              </span>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green-700)', marginBottom: '10px' }}>
                  Nachher
                </div>
                <PhotoSlot label="Neue Website" icon="check" ratio="16 / 10" tone="green" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Case grid */}
      <Section pad="0">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px', paddingBottom: 'var(--section-y)' }}>
          {CASES.map((c) => (
            <Card key={c.title} padding="none" interactive>
              <PhotoSlot label={c.tag} icon={c.icon} ratio="16 / 10" tone={c.tone} radius="var(--radius-lg) var(--radius-lg) 0 0" />
              <div style={{ padding: 'var(--space-6)' }}>
                <Badge variant="neutral" size="sm">{c.tag}</Badge>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '23px', fontWeight: 600, color: 'var(--text-strong)', margin: '12px 0 8px' }}>
                  {c.title}
                </h3>
                <p style={{ margin: '0 0 16px', fontSize: '15.5px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{c.blurb}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', fontWeight: 600, color: 'var(--green-700)', background: 'var(--green-50)', padding: '8px 13px', borderRadius: 'var(--radius-md)' }}>
                  <Icon name="trendingUp" size={17} /> {c.result}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(26px, 4vw, 38px)', letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '0 0 16px' }}>
            Kommt Ihre als Nächstes?
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '44ch', margin: '0 auto 26px' }}>
            Erzählen Sie uns von Ihrem Unternehmen. Wir sagen Ihnen ehrlich, ob und wie wir helfen können.
          </p>
          <Button variant="accent" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => navigate('/kontakt')}>
            Kostenlos beraten lassen
          </Button>
        </div>
      </Section>
    </div>
  );
}
