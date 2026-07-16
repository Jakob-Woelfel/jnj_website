'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/core/Button';
import Icon from '@/components/Icon';
import Logo from '@/components/layout/Logo';

const LINKS = [
  { href: '/',           label: 'Startseite', exact: true },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ueber-uns',  label: 'Über uns' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Startseite: Nav liegt fixiert über dem Hero-Foto und ist oben transparent
  // mit heller Schrift; ab 40px Scroll (oder bei offenem Menü) Gischt-Blur.
  const isHome = pathname === '/';
  const overPhoto = isHome && !scrolled && !open;

  return (
    <header
      style={{
        position: isHome ? 'fixed' : 'sticky',
        top: 0, left: 0, right: 0, zIndex: 50,
        background: overPhoto ? 'transparent' : 'color-mix(in srgb, var(--paper) 88%, transparent)',
        backdropFilter: overPhoto ? 'none' : 'saturate(140%) blur(10px)',
        borderBottom: overPhoto ? '1px solid transparent' : '1px solid var(--border-subtle)',
        transition: 'background .25s ease, border-color .25s ease',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px var(--gutter-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo variant={overPhoto ? 'onBrand' : 'default'} />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="jj-desktop-nav">
          {LINKS.map((l) => {
            const active = isActive(l.href, l.exact);
            const color = overPhoto
              ? (active ? '#fff' : 'rgba(255, 255, 255, 0.82)')
              : (active ? 'var(--teal-800)' : 'var(--text-muted)');
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{ textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: active ? 600 : 500, color, padding: '8px 14px', borderRadius: 'var(--radius-md)', transition: 'color .15s ease', display: 'inline-block' }}
              >
                {l.label}
              </Link>
            );
          })}
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
          style={{ display: 'none', background: 'none', border: overPhoto ? '1px solid rgba(255, 255, 255, 0.45)' : '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', padding: '8px', cursor: 'pointer', color: overPhoto ? '#fff' : 'var(--teal-800)' }}
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
