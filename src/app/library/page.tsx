import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Library: position statements and documents',
  description: 'ISR position statements on the minimum data set, PROMs and implant collection, plus presentations and regulatory references for spine registries.',
  alternates: { canonical: '/library' },
  openGraph: { title: 'Library: position statements and documents', description: 'ISR position statements on the minimum data set, PROMs and implant collection, plus presentations and regulatory references for spine registries.', url: '/library' },
}

export default function LibraryPage() {
  return (
    <main id="content">
      <PageHero overline="Library" title="Documents, presentations and position statements" subtitle="A growing collection of citation-ready documents: position statements ratified by the Agenda Setting Group, presentations from ISR meetings, and references on the regulatory landscape that shapes our work." />

      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <div className="split">
              <div className="split-aside"><p className="label">Presentations</p><h2>Regulatory context</h2></div>
              <div className="ledger">
                <div className="ledger-row three">
                  <span className="ledger-num num">2025</span>
                  <div>
                    <h3>International Spinal Registries — MedTech Europe</h3>
                    <p className="meta">Presentation · 21 October 2025 · PDF, available on request</p>
                  </div>
                  <p>EUDAMED timeline, UDI and device registration timelines for spine implants, and the official roadmap from the European Commission.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <div className="split">
              <div className="split-aside"><p className="label">Position statements</p><h2>Three documents from the Agenda Setting Group</h2></div>
              <div className="ledger">
                <div className="ledger-row three"><span className="ledger-num">01</span><div><h3>Minimum data set</h3><p className="meta">Presented by Jarkko Halme</p></div><p>The core fields every registry should collect, under the same headings.</p></div>
                <div className="ledger-row three"><span className="ledger-num">02</span><div><h3>PROMs</h3><p className="meta">Presented by Peter Fritzell</p></div><p>Which patient-reported outcome measures to collect, and when.</p></div>
                <div className="ledger-row three"><span className="ledger-num">03</span><div><h3>Implant collection</h3><p className="meta">Presented by Emin Aghayev</p></div><p>How implants should be recorded against a shared implant library.</p></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
