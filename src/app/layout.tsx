import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ISR — International Spine Registries',
  description: 'Collaboration for better spine care through standardized data collection across international registries.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
