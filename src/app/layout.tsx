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
  title: 'WINQubit | Women Led Innovation — Dream. Build. Lead.',
  description: 'Empowering women researchers, engineers, and visionaries to pioneer breakthrough innovations in Quantum Computing, Artificial Intelligence, and Deep-Tech Engineering.',
  keywords: ['WINQubit', 'Women Led Innovation', 'Quantum Computing', 'Women in STEM', 'AI Innovation', 'Post-Quantum Cryptography', 'Deep Tech'],
  openGraph: {
    title: 'WINQubit | Women Led Innovation',
    description: 'Pioneering Quantum & AI Innovation Led By Women. Dream. Build. Lead.',
    images: ['/winqubit-logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-[#E83CB7]/30 selection:text-[#5D1451]">
        <DataProvider>
          <LenisProvider>
            <BackgroundAurora />
            <Navbar />
            <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              {children}
            </main>
            <Footer />
          </LenisProvider>
        </DataProvider>
      </body>
    </html>
  );
};
