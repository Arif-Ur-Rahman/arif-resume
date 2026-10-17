import './globals.css';
import type { Metadata } from 'next';
import { Inter_Tight, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import ScrollProgress from '@/components/scroll-progress';
import BackgroundFX from '@/components/background-fx';
import Preloader from '@/components/preloader';
import { GameProvider } from '@/components/game-provider';
import BubbleGame from '@/components/bubble-game';

// Tight, crisp grotesque for UI, body and display weights
const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Mono for labels, indices and small technical details
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Elegant italic serif for accent words inside headlines
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arif-resume-five.vercel.app'),
  title: 'Arif Ur Rahman | Software Engineer',
  description:
    'Frontend Software Engineer specializing in React, Next.js, and TypeScript. Building responsive, accessible, and high-performance web applications.',
  icons: { icon: '/fabicon.png' },
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#09090c' },
    { media: '(prefers-color-scheme: light)', color: '#faf8f5' },
  ],
  openGraph: {
    title: 'Arif Ur Rahman | Software Engineer',
    description:
      'Frontend Software Engineer crafting thoughtful interfaces for the modern web with React, Next.js & TypeScript.',
    images: ['/assets/images/ArifUrRahman.jpg'],
    type: 'website',
  },
};

// Runs before paint: skip the intro curtain if it already played this session
const introScript = `try{if(sessionStorage.getItem('intro-seen'))document.documentElement.dataset.intro='seen'}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <GameProvider>
            <Preloader />
            <BackgroundFX />
            <ScrollProgress />
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <ScrollToTop />
            </div>
            <BubbleGame />
          </GameProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
