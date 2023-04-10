import '#/styles/globals.css';
import '#/styles/styles.scss';

import type { Metadata } from 'next';

import Footer from '#/components/Footer';
import Header from '#/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'Ashley Okoli',
    template: '%s | Ashley Okoli',
  },
  description: 'I snatch souls for fun.',
  openGraph: {
    title: 'Ashley Okoli',
    description: 'I snatch souls for fun.',
    url: 'https://ashleyokoli.com',
    siteName: 'Ashley Okoli',
    images: [
      {
        url: 'https://ashleyokoli/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Ashley Okoli',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: 'static/favicon.ico',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app notion">
        <div className="viewpoint z-60"></div>
        <div className="frame text-clip">
          <Header />
          <div className="page-scroller">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
