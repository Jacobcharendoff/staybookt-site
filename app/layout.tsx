import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const instrument = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], display: 'swap', variable: '--font-instrument' });

const TITLE = 'StayBookt | Marketing-firm-grade websites + operating platform for owner-operated service businesses';
const DESCRIPTION = 'We build the website, run the back office, and get the phone ringing for owner-operated service businesses. Pay for performance. Headquartered in Newmarket, Ontario.';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://staybookt-site.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s · StayBookt' },
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: SITE_URL,
    siteName: 'StayBookt', locale: 'en_CA', type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
