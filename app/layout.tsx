import type { Metadata } from 'next';
import './globals.css';

const TITLE = 'StayBookt | The operating layer for service businesses';
const DESCRIPTION = 'Type your business URL. See where you leak. We fix it. StayBookt is a Service-as-Software operating engine for service businesses — Pulse identifies the leak, the team ships the fix, the flywheel compounds.';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://staybookt-site.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s · StayBookt' },
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SITE_URL, siteName: 'StayBookt', locale: 'en_CA', type: 'website' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
