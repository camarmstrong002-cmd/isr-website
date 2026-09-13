import type { Metadata } from 'next'
import { schibsted } from '@/lib/fonts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'International Spine Registries',
  description:
    'ISR brings the world’s spine registries together to collect data the same way, so implants and outcomes can be compared across borders.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={schibsted.variable}>
      <body>
        <a href="#content" className="skip">Skip to content</a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
