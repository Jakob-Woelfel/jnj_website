import { useNavigate } from 'react-router-dom';
import { Button }     from '@/components/core/Button';
import { Card }       from '@/components/core/Card';
import { Badge }      from '@/components/core/Badge';
import Section        from '@/components/layout/Section';
import SectionHeading from '@/components/layout/SectionHeading';
import Icon           from '@/components/Icon';

const PAKETE = [
  {
    name: 'Starter',
    badge: 'Ideal für Neueinsteiger',
    badgeVariant: 'brand',
    preis: 'Ab 799 €',
    punkte: [
      'Bis zu 5 Seiten',
      'Mobil optimiert',
      'Kontaktformular',
      'Google-freundliche Struktur',
      'Domain & Hosting-Setup',
    ],
    cta: 'Starter anfragen',
  },
  {
    name: 'Business',
    badge: 'Meistgewählt',
    badgeVariant: 'accent',
    preis: 'Ab 1.499 €',
    featured: true,
    punkte: [
      'Bis zu 12 Seiten',
      'Individuelles Design & Branding',
      'Blog oder Neuigkeiten',
      'Social-Media-Einbindung',
      'Analyse & Tracking',
      '3 Monate kostenloses Support',
    ],
    cta: 'Business anfragen',
  },
  {
    name: 'Full-Package',
    badge: 'Rundum-sorglos',
    badgeVariant: 'brand',
    preis: 'Auf Anfrage',
    punkte: [
      'Unbegrenzte Seiten',
      'Komplettes Web-Branding',
      'Online-Shop oder Buchungssystem',
      'Monatliche Pflege & Updates',
      'Priorisierter Support',
      'Jährlicher Website-Check',
    ],
    cta: 'Full-Package anfragen',
  },
];

export default function Leistungen() {
  const navigate = useNavigate();

  return (
    <div>
      <Section pad="clamp(48px, 6vw, 72px)">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Alles, was Ihre Website braucht"
          lead="Von der ersten Idee bis zur dauerhaften Betreuung. Wir bieten klare Pakete — und passen sie an, wenn nötig."
        />
      </Section>

      <Section pad="0" bg="var(--paper-2)">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px', paddingBottom: 'var(--section-y)' }}>
          {PAKETE.map((p) => (
            <Card
              key={p.name}
              padding="lg"
              tone={p.featured ? 'brand' : 'white'}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div>
                <Badge variant={p.badgeVariant} style={{ marginBottom: '12px' }}>{p.badge}</Badge>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: '28px', color: p.featured ? 'var(--text-on-brand)' : 'var(--text-strong)', margin: '0 0 4px' }}>
                  {p.name}
                </h3>
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '22px', color: p.featured ? 'var(--gold-400)' : 'var(--green-700)' }}>
                  {p.preis}
                </span>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {p.punkte.map((punkt) => (
                  <li key={punkt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15.5px', color: p.featured ? 'var(--text-on-brand-muted)' : 'var(--text-muted)' }}>
                    <Icon name="check" size={18} style={{ color: p.featured ? 'var(--gold-400)' : 'var(--green-600)', flex: 'none', marginTop: '2px' }} />
                    {punkt}
                  </li>
                ))}
              </ul>
              <Button
                variant={p.featured ? 'accent' : 'secondary'}
                fullWidth
                iconRight={<Icon name="arrowRight" size={17} />}
                onClick={() => navigate('/kontakt')}
              >
                {p.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(26px, 4vw, 38px)', letterSpacing: '-0.02em', color: 'var(--text-strong)', margin: '0 0 16px' }}>
            Nicht sicher, was passt?
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '44ch', margin: '0 auto 26px' }}>
            Kein Problem. Erzählen Sie uns von Ihrem Unternehmen — wir empfehlen Ihnen ehrlich, was sinnvoll ist.
          </p>
          <Button variant="accent" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => navigate('/kontakt')}>
            Kostenlos beraten lassen
          </Button>
        </div>
      </Section>
    </div>
  );
}
