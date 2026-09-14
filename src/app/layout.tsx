import type { Metadata } from 'next'
import { schibsted } from '@/lib/fonts'
import { SITE_URL, SITE_NAME, SITE_SHORT, SITE_DESCRIPTION } from '@/lib/site'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} (${SITE_SHORT})`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'International Spine Registries', 'ISR', 'spine registry', 'spinal registry', 'spine registries',
    'minimum data set', 'PROMs', 'implant library', 'spinal implants', 'ODEP', 'EUROSPINE', 'MDR registry data',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_GB',
    url: '/',
    title: `${SITE_NAME} (${SITE_SHORT})`,
    description: SITE_DESCRIPTION,
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_SHORT,
  url: SITE_URL,
  logo: `${SITE_URL}/isr-logo.png`,
  description: SITE_DESCRIPTION,
  foundingDate: '2023-03',
  foundingLocation: { '@type': 'Place', name: 'Royal National Orthopaedic Hospital, Stanmore, London' },
  parentOrganization: { '@type': 'Organization', name: 'Orthopaedic Data Evaluation Panel (ODEP)' },
  knowsAbout: ['spine registries', 'spinal implant outcomes', 'minimum data set', 'patient-reported outcome measures', 'implant libraries'],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-GB',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={schibsted.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organisationJsonLd, websiteJsonLd]) }} />
        <a href="#content" className="skip">Skip to content</a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
