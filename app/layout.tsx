import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: 'Zainab Shujat — Creative Developer',
  description: 'Building worlds that work. Developer, designer, and maker of thoughtful things.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <meta name="google-site-verification" content="8B-z-nY8ZpOg1qgralDyM2dsUQz73RRDfN0E7KS-7Nc" />
      <body className={`${inter.className} bg-black text-white`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-226TP61TFY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-226TP61TFY');
          `}
        </Script>
        
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
