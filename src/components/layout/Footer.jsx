import { NavLink } from 'react-router-dom';
import Icon from '@/components/Icon';

const col = { display: 'flex', flexDirection: 'column', gap: '10px' };
const linkStyle = {
  textDecoration: 'none',
  fontFamily: 'var(--font-sans)',
  fontSize: '15px',
  color: 'var(--text-on-brand-muted)',
  transition: 'color .15s ease',
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface-brand-deep)', color: 'var(--text-on-brand)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px var(--gutter-lg) 40px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'space-between' }}>

          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src="/logo-badge.svg" alt="" style={{ height: '40px' }} />
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#fff' }}>J&amp;J Studios</span>
            </div>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: 'var(--text-on-brand-muted)' }}>
              Zwei Leute, die schnelle, ansprechende Websites für kleine Unternehmen bauen. Wir verschwinden nicht nach dem Launch.
            </p>
          </div>

          <div style={col}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: '4px' }}>
              Studio
            </span>
            {[
              { to: '/',           label: 'Startseite', end: true },
              { to: '/leistungen', label: 'Leistungen' },
              { to: '/referenzen', label: 'Referenzen' },
              { to: '/ueber-uns',  label: 'Über uns' },
              { to: '/kontakt',    label: 'Kontakt' },
            ].map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} style={linkStyle}>{l.label}</NavLink>
            ))}
          </div>

          <div style={col}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: '4px' }}>
              Kontakt
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '15px', color: 'var(--text-on-brand-muted)' }}>
              <Icon name="mail" size={17} /> hallo@jj-studios.de
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '15px', color: 'var(--text-on-brand-muted)' }}>
              <Icon name="phone" size={17} /> +49 (0) XXX XXXXXXX
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '15px', color: 'var(--text-on-brand-muted)' }}>
              <Icon name="clock" size={17} /> Antwort innerhalb eines Tages
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between',
            fontSize: '13.5px', color: 'var(--text-on-brand-muted)',
          }}
        >
          <span>© 2026 J&amp;J Studios — Jakob &amp; Jakob. Alle Rechte vorbehalten.</span>
          <span>Handgemacht, in unserem Zwei-Personen-Studio.</span>
        </div>
      </div>
    </footer>
  );
}
