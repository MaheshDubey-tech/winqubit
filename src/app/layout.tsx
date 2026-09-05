import type { Metadata } from 'next';
import { Outfit, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { DataProvider } from '@/context/DataContext';
import { LenisProvider } from '@/components/layout/LenisProvider';
import { BackgroundAurora } from '@/components/layout/BackgroundAurora';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  weight: ['500', '700']
});

export const metadata: Metadata = {
  title: 'WINQubit | Dream. Build. Lead. — Student Innovation Ecosystem',
  description: 'WINQubit: Women-Led. Inclusive. Student-Driven. A student innovation and pre-incubation ecosystem powered by InQubit across premier academic institutions in Mumbai.',
  keywords: ['WINQubit', 'Student Innovation', 'Pre-Incubation', 'InQubit', 'TSEC', 'TSDC', 'TIAT', 'TIHM', 'HackSpark', 'Prototype Grants'],
  openGraph: {
    title: 'WINQubit | Student Innovation & Pre-Incubation',
    description: 'Dream. Build. Lead. Empowering student innovators across TSEC, TSDC, TIAT, and TIHM.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased text-[#1E1632] selection:bg-[#E83CB7] selection:text-white">
        <DataProvider>
          <LenisProvider>
            <BackgroundAurora />
            <Navbar />
            <main className="min-h-screen pt-4 pb-12">
              {children}
            </main>
            <Footer />
          </LenisProvider>
        </DataProvider>
      </body>
    </html>
  );
}
