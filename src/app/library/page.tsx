import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Library — International Spine Registries',
  description: 'ISR publications, position statements, and reference documents on spinal registry standards.',
}

export default function LibraryPage() {
  return (
    <main id="content">
      <PageHero overline="Library" title="Documents, presentations and position statements" subtitle="Key documents related to our work, including regulatory timelines and the three position statements." />

      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <div className="split">
              <div className="split-aside"><p className="label">Presentations</p><h2>Regulatory context</h2></div>
              <div className="ledger">
                <div className="ledger-row three">
                  <span className="ledger-num num">2025</span>
                  <div>
                    <h3>MedTech Europe presentation</h3>
                    <p className="meta">21 October 2025 · PDF</p>
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
