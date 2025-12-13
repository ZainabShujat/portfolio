import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
      <body className={`${inter.className} bg-black text-white`}>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
