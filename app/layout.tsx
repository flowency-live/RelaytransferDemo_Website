import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { tenantConfig } from '@/lib/config/tenant';
import { Header, Footer } from '@/components/shared';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: tenantConfig.name,
    template: `%s | ${tenantConfig.name}`,
  },
  description: tenantConfig.description,
  keywords: [
    'private healthcare transport',
    'medical transfer',
    'executive transport',
    'Cheshire',
    'airport transfer',
    'clinic transfer',
  ],
  authors: [{ name: tenantConfig.legal.companyName }],
  openGraph: {
    title: tenantConfig.name,
    description: tenantConfig.tagline,
    type: 'website',
    locale: 'en_GB',
    siteName: tenantConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: tenantConfig.name,
    description: tenantConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
