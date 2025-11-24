import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { BASE_URL } from '@/lib/constants';
import Providers from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/** Root Layout Metadata */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Craig Savage | Senior Software Engineer',
  description:
    'Senior Software Engineer based in Toronto, specializing in full-stack development, scalable systems, and high-performance architecture.',

  applicationName: 'Craig Savage Portfolio',
  authors: [{ name: 'Craig Savage', url: BASE_URL }],

  keywords: [
    'Craig Savage',
    'Software Engineer',
    'Full-Stack Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Portfolio',
  ],

  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Craig Savage | Senior Software Engineer',
    description:
      'Portfolio of Craig Savage — Senior Software Engineer focused on full-stack development, distributed systems, and scalable architectures.',
    siteName: 'Craig Savage Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Craig Savage | Senior Software Engineer Portfolio',
      },
    ],
  },
};

/** Root Layout Component */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-gray-100`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
