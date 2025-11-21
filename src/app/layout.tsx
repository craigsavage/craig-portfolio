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

export const metadata: Metadata = {
  title: 'Craig Savage — Software Engineer Portfolio',
  description: "Craig's software engineer portfolio website.",
  metadataBase: new URL(BASE_URL),

  keywords: [
    'Craig Savage',
    'Software Engineer',
    'Portfolio',
    'Full-Stack Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
  ],

  openGraph: {
    title: 'Craig Savage — Software Engineer Portfolio',
    description: "Craig's software engineer portfolio website.",
    locale: 'en_US',
    type: 'website',
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
