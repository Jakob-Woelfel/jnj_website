'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/core/Button';
import Icon from '@/components/Icon';

const LINKS = [
  { href: '/',           label: 'Startseite', exact: true },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ueber-uns',  label: 'Über uns' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const close = () => setOpen(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'color-mix(in srgb, var(--paper) 88%, transparent)', backdropFilter: 'saturate(140%) blur(10px)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px var(--gutter-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo-horizontal.svg" alt="J&J Studios" style={{ height: '38px', display: 'block' }} />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="jj-desktop-nav">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: isActive(l.href, l.exact) ? 600 : 500, color: isActive(l.href, l.exact) ? 'var(--green-800)' : 'var(--text-muted)', padding: '8px 14px', borderRadius: 'var(--radius-md)', transition: 'color .15s ease', display: 'inline-block' }}
            >
              {l.label}
            </Link>
          ))}
          <span style={{ marginLeft: '10px' }}>
            <Button variant="accent" size="sm" href="/kontakt" iconRight={<Icon name="arrowRight" size={16} />}>
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
        <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '12px var(--gutter)', display: 'flex', flexDirection: 'column', gap: '4px', background: 'var(--paper)' }}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} style={{ textDecoration: 'none', display: 'block', fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 500, color: 'var(--text-strong)', padding: '12px 8px', borderRadius: 'var(--radius-md)' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/kontakt" onClick={close} style={{ textDecoration: 'none', display: 'block', fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 500, color: 'var(--text-strong)', padding: '12px 8px', borderRadius: 'var(--radius-md)' }}>
            Kontakt
          </Link>
          <div style={{ padding: '8px' }}>
            <Button variant="accent" fullWidth href="/kontakt" onClick={close}>
              Kostenlos beraten lassen
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
