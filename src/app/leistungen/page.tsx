import type { Metadata } from 'next';
import { Button }     from '@/components/core/Button';
import { Card }       from '@/components/core/Card';
import { Badge }      from '@/components/core/Badge';
import Section        from '@/components/layout/Section';
import SectionHeading from '@/components/layout/SectionHeading';
import Icon           from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Von der ersten Idee bis zur dauerhaften Betreuung. Klare Pakete für Webdesign und Entwicklung — Starter ab 799 €.',
};

const PAKETE = [
  {
    name: 'Starter',
    badge: 'Ideal für Neueinsteiger',
    badgeVariant: 'brand' as const,
    preis: 'Ab 799 €',
    featured: false,
    punkte: ['Bis zu 5 Seiten', 'Mobil optimiert', 'Kontaktformular', 'Google-freundliche Struktur', 'Domain & Hosting-Setup'],
    cta: 'Starter anfragen',
  },
  {
    name: 'Business',
    badge: 'Meistgewählt',
    badgeVariant: 'accent' as const,
    preis: 'Ab 1.499 €',
    featured: true,
    punkte: ['Bis zu 12 Seiten', 'Individuelles Design & Branding', 'Blog oder Neuigkeiten', 'Social-Media-Einbindung', 'Analyse & Tracking', '3 Monate kostenloses Support'],
    cta: 'Business anfragen',
  },
  {
    name: 'Full-Package',
    badge: 'Rundum-sorglos',
    badgeVariant: 'brand' as const,
    preis: 'Auf Anfrage',
    featured: false,
    punkte: ['Unbegrenzte Seiten', 'Komplettes Web-Branding', 'Online-Shop oder Buchungssystem', 'Monatliche Pflege & Updates', 'Priorisierter Support', 'Jährlicher Website-Check'],
    cta: 'Full-Package anfragen',
  },
];

export default function Leistungen() {
  return (
    <div>
      <Section pad="clamp(48px, 6vw, 72px)">
        <SectionHeading eyebrow="Unsere Leistungen" title="Alles, was Ihre Website braucht" lead="Von der ersten Idee bis zur dauerhaften Betreuung. Wir bieten klare Pakete — und passen sie an, wenn nötig." />
      </Section>

      <Section bg="var(--surface-shell)">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
          {PAKETE.map((p) => (
            <Card key={p.name} padding="lg" tone={p.featured ? 'brand' : 'white'} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <Badge variant={p.badgeVariant} style={{ marginBottom: '12px' }}>{p.badge}</Badge>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: '28px', color: p.featured ? 'var(--text-on-brand)' : 'var(--text-strong)', margin: '0 0 4px' }}>
                  {p.name}
                </h3>
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '22px', color: p.featured ? 'var(--rose-400)' : 'var(--teal-700)' }}>
                  {p.preis}
                </span>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {p.punkte.map((punkt) => (
                  <li key={punkt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15.5px', color: p.featured ? 'var(--text-on-brand-muted)' : 'var(--text-muted)' }}>
                    <Icon name="check" size={18} style={{ color: p.featured ? 'var(--rose-400)' : 'var(--teal-600)', flex: 'none', marginTop: '2px' }} />
                    {punkt}
                  </li>
                ))}
              </ul>
              <Button variant={p.featured ? 'accent' : 'secondary'} fullWidth href="/kontakt" iconRight={<Icon name="arrowRight" size={17} />}>
                {p.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <div style={{ padding: 'var(--section-y) var(--gutter-lg)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', background: 'var(--surface-brand-deep)', borderRadius: 'var(--radius-2xl)', padding: 'clamp(34px, 5vw, 60px) clamp(40px, 6vw, 72px) clamp(48px, 7vw, 84px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(26px, 4vw, 38px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 16px' }}>
            Nicht sicher, was passt?
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-on-brand-muted)', maxWidth: '44ch', margin: '0 auto 26px' }}>
            Kein Problem. Erzählen Sie uns von Ihrem Unternehmen — wir empfehlen Ihnen ehrlich, was sinnvoll ist.
          </p>
          <Button variant="accent" size="lg" href="/kontakt" iconRight={<Icon name="arrowRight" size={18} />}>
            Kostenlos beraten lassen
          </Button>
        </div>
      </div>
    </div>
  );
}
