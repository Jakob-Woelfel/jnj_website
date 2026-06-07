import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/core/Button';
import Icon from '@/components/Icon';

const LINKS = [
  { to: '/',           label: 'Startseite', end: true },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/referenzen', label: 'Referenzen' },
  { to: '/ueber-uns',  label: 'Über uns' },
];

const navLinkStyle = ({ isActive }) => ({
  textDecoration: 'none',
  fontFamily: 'var(--font-sans)',
  fontSize: '15px',
  fontWeight: isActive ? 600 : 500,
  color: isActive ? 'var(--green-800)' : 'var(--text-muted)',
  padding: '8px 14px',
  borderRadius: 'var(--radius-md)',
  transition: 'color .15s ease',
  display: 'inline-block',
});

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goKontakt = () => { navigate('/kontakt'); setOpen(false); };

  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'color-mix(in srgb, var(--paper) 88%, transparent)',
        backdropFilter: 'saturate(140%) blur(10px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)', margin: '0 auto',
          padding: '14px var(--gutter-lg)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px',
        }}
      >
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo-horizontal.svg" alt="J&J Studios" style={{ height: '38px', display: 'block' }} />
        </NavLink>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="jj-desktop-nav">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} style={navLinkStyle}>
              {l.label}
            </NavLink>
          ))}
          <span style={{ marginLeft: '10px' }}>
            <Button variant="accent" size="sm" iconRight={<Icon name="arrowRight" size={16} />} onClick={goKontakt}>
              Kostenlos beraten lassen
            </Button>
          </span>
        </nav>

        <button
          className="jj-mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
          style={{ display: 'none', background: 'none', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', padding: '8px', cursor: 'pointer', color: 'var(--green-800)' }}
        >
          <Icon name={open ? 'x' : 'menu'} size={22} />
        </button>
      </div>

      {open && (
        <div
          className="jj-mobile-menu"
          style={{ borderTop: '1px solid var(--border-subtle)', padding: '12px var(--gutter)', display: 'flex', flexDirection: 'column', gap: '4px', background: 'var(--paper)' }}
        >
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              style={{ textDecoration: 'none', display: 'block', fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 500, color: 'var(--text-strong)', padding: '12px 8px', borderRadius: 'var(--radius-md)' }}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/kontakt"
            onClick={() => setOpen(false)}
            style={{ textDecoration: 'none', display: 'block', fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 500, color: 'var(--text-strong)', padding: '12px 8px', borderRadius: 'var(--radius-md)' }}
          >
            Kontakt
          </NavLink>
          <div style={{ padding: '8px' }}>
            <Button variant="accent" fullWidth onClick={goKontakt}>
              Kostenlos beraten lassen
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
