import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProviders } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jeslynnivedhitha.vercel.app'),
  title: 'Jeslyn Nivedhitha S | Software Engineer & Data Scientist',
  description:
    'Portfolio of Jeslyn Nivedhitha S – Software Engineer specializing in full-stack web, industrial automation, and data analytics.',
  keywords: [
    'Jeslyn Nivedhitha S',
    'Software Engineer',
    'Data Scientist',
    'Full Stack Engineer',
    'Industrial Automation',
    'WPF Developer',
    'React',
    'Next.js',
    'Coimbatore',
    'PSG Tech',
  ],
  authors: [{ name: 'Jeslyn Nivedhitha S' }],
  creator: 'Jeslyn Nivedhitha S',
  openGraph: {
    title: 'Jeslyn Nivedhitha S | Software Engineer & Data Scientist',
    description:
      'Portfolio of Jeslyn Nivedhitha S – Software Engineer specializing in full-stack web, industrial automation, and data analytics.',
    url: 'https://jeslynnivedhitha.vercel.app',
    siteName: 'Jeslyn Nivedhitha S Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jeslyn Nivedhitha S - Software Engineer & Data Scientist Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeslyn Nivedhitha S | Software Engineer & Data Scientist',
    description:
      'Portfolio of Jeslyn Nivedhitha S – Software Engineer specializing in full-stack web, industrial automation, and data analytics.',
    images: ['/images/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`light ${inter.variable}`}>
      <body className={`${inter.className} bg-canvas text-ink`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
