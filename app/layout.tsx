import './globals.css';
import type { Metadata } from 'next';
import { Hanken_Grotesk, Fraunces } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';

// Matter-like geometric grotesque for UI / body
const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Editorial serif for display headings — italic loaded for accent words
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  style: ['normal', 'italic'],
  axes: ['opsz'],
});

export const metadata: Metadata = {
  title: 'Arif Ur Rahman | Software Engineer',
  description:
    'Frontend Software Engineer specializing in React, Next.js, and TypeScript. Building responsive, accessible, and high-performance web applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" type="image/png" href="/fabicon.png" />
      <body className={`${hankenGrotesk.variable} ${fraunces.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
