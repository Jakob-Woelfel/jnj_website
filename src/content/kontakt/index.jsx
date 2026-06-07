import { useState } from 'react';
import { Button }   from '@/components/core/Button';
import { Card }     from '@/components/core/Card';
import { Input }    from '@/components/forms/Input';
import { Textarea } from '@/components/forms/Textarea';
import { Select }   from '@/components/forms/Select';
import { Checkbox } from '@/components/forms/Checkbox';
import Icon         from '@/components/Icon';

const REASSURANCES = [
  { icon: 'clock',        title: 'Antwort innerhalb eines Tages', body: 'Meist viel schneller. Eine echte Person, kein Auto-Responder.' },
  { icon: 'messageCircle', title: 'Kein Druck, nie',              body: 'Ein erstes Gespräch ist nur ein Gespräch. Wir sagen Ihnen ehrlich, ob wir passen.' },
  { icon: 'shieldCheck',  title: 'Klare Festpreise',              body: 'Sie kennen den Preis im Voraus. Keine Überraschungsrechnungen hinterher.' },
];

const OPTIONEN = [
  'Neuer Webauftritt',
  'Redesign meiner bestehenden Website',
  'Nur ein Refresh',
  'Wartung & Pflege',
  'Noch nicht sicher — erstmal reden',
];

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  return (
    <div style={{ background: 'var(--paper-2)', minHeight: '70vh' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) var(--gutter-lg)' }}>
        <div
          className="jj-contact-grid"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)', gap: 'clamp(36px, 5vw, 72px)', alignItems: 'start' }}
        >
          {/* Left — Pitch + Reassurance */}
          <div>
            <div className="jj-eyebrow" style={{ marginBottom: '14px' }}>Sprechen wir</div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)', fontWeight: 500,
                fontSize: 'clamp(34px, 5vw, 50px)', lineHeight: 1.05,
                letterSpacing: '-0.025em', color: 'var(--text-strong)', margin: 0,
              }}
            >
              Erzählen Sie uns von Ihrem Unternehmen.
            </h1>
            <p style={{ marginTop: '18px', fontSize: '19px', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '40ch' }}>
              Füllen Sie das Formular aus und wir melden uns für ein freundliches, unverbindliches Gespräch. Lieber telefonieren? Kein Problem — rufen Sie uns einfach an.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '34px' }}>
              {REASSURANCES.map((r) => (
                <div key={r.title} style={{ display: 'flex', gap: '14px' }}>
                  <span
                    style={{
                      width: '44px', height: '44px', flex: 'none',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--green-50)', color: 'var(--green-700)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <Icon name={r.icon} size={22} />
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '16px', color: 'var(--text-strong)' }}>{r.title}</div>
                    <div style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.5 }}>{r.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '34px', paddingTop: '26px', borderTop: '1px solid var(--border-default)', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontSize: '15.5px', color: 'var(--text-body)' }}>
                <Icon name="mail" size={18} style={{ color: 'var(--green-600)' }} />
                hallo@jj-studios.de
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontSize: '15.5px', color: 'var(--text-body)' }}>
                <Icon name="phone" size={18} style={{ color: 'var(--green-600)' }} />
                +49 (0) XXX XXXXXXX
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <Card padding="lg" style={{ boxShadow: 'var(--shadow-md)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <span
                  style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    background: 'var(--green-50)', color: 'var(--green-600)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Icon name="check" size={34} />
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 500, color: 'var(--text-strong)', margin: '0 0 10px' }}>
                  Danke — Nachricht erhalten!
                </h3>
                <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '34ch', margin: '0 auto 24px' }}>
                  Einer von uns (ein Jakob) meldet sich innerhalb eines Tages. Bis gleich!
                </p>
                <Button variant="secondary" onClick={() => setSent(false)}>Weitere Nachricht senden</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '20px', color: 'var(--text-strong)', margin: 0 }}>
                  Kostenloses Angebot anfordern
                </h3>
                <div className="jj-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Input label="Ihr Name" placeholder="Maria Müller" required />
                  <Input label="Unternehmensname" placeholder="Müllers Bäckerei" />
                </div>
                <div className="jj-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Input label="E-Mail" type="email" placeholder="sie@unternehmen.de" required />
                  <Input label="Telefon" type="tel" placeholder="Optional" />
                </div>
                <Select
                  label="Was benötigen Sie?"
                  placeholder="Bitte auswählen"
                  options={OPTIONEN}
                />
                <Textarea
                  label="Erzählen Sie uns kurz davon"
                  rows={4}
                  placeholder="Was macht Ihr Unternehmen, und was soll Ihre Website für Sie tun?"
                />
                <Checkbox
                  label="Es ist in Ordnung, mir gelegentlich hilfreiche Tipps zu schicken. Kein Spam, versprochen."
                  defaultChecked
                />
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  fullWidth
                  iconRight={<Icon name="arrowRight" size={18} />}
                >
                  Nachricht absenden
                </Button>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-faint)', textAlign: 'center' }}>
                  Ihre Daten werden nur zur Beantwortung Ihrer Anfrage genutzt. Niemals weitergegeben oder verkauft.
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
