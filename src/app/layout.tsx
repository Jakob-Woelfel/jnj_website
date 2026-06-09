import type { Metadata } from 'next';
import { Newsreader, Figtree } from 'next/font/google';
import Nav    from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default:  'J&J Studios — Websites für lokale Unternehmen',
    template: '%s | J&J Studios',
  },
  description: 'Wir bauen schnelle, ansprechende Websites für kleine Unternehmen. Kein Fachjargon, keine Überraschungen.',
  metadataBase: new URL('https://jj-studios.de'),
  openGraph: {
    siteName: 'J&J Studios',
    locale:   'de_DE',
    type:     'website',
  },
  icons: { icon: '/logo-badge.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${newsreader.variable} ${figtree.variable}`}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
