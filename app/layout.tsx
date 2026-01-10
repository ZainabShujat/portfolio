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
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MF94KHX2');
        `}} />
        {/* End Google Tag Manager */}
        {/* <!-- Primary Meta Tags --> */}
<title>Zainab Shujat — Creative Developer</title>
<meta name="title" content="Zainab Shujat — Creative Developer" />
<meta name="description" content="Building worlds that work. Developer, designer, and maker of thoughtful things." />

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website" />
<meta property="og:url" content="https://zainabshujat.dev/" />
<meta property="og:title" content="Zainab Shujat — Creative Developer" />
<meta property="og:description" content="Building worlds that work. Developer, designer, and maker of thoughtful things." />
<meta property="og:image" content="https://zainabshujat.dev/og-image.png" />

{/* <!-- X (Twitter) --> */}
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://zainabshujat.dev/" />
<meta property="twitter:title" content="Zainab Shujat — Creative Developer" />
<meta property="twitter:description" content="Building worlds that work. Developer, designer, and maker of thoughtful things." />
<meta property="twitter:image" content="https://zainabshujat.dev/og-image.png" />

{/* <!-- Meta Tags Generated with https://metatags.io --> */}
        <link rel="canonical" href="https://zainabshujat.dev/" />
        <meta name="google-site-verification" content="8B-z-nY8ZpOg1qgralDyM2dsUQz73RRDfN0E7KS-7Nc" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KX34GJ8GPS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KX34GJ8GPS');
          `}
        </Script>
        
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
