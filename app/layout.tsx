import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import WhatsapLive from '@/components/whatsapLive';
import ScrollToTop from '@/components/scroll-to-top';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Waliullah | Jr. Software Engineer',
  description: 'Professional portfolio of a Junior Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <link rel="icon" type="image/png" href="/fabicon.png" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            {/* <ScrollToTop /> */}
            <WhatsapLive />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}