import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'ISR — Library',
  description: 'ISR publications, position statements, and reference documents on spinal registry standards.',
}

export default function LibraryPage() {
  return (
    <main>
      <PageHero
        overline="Resources"
        title="Library"
        subtitle="Publications, position statements, and reference documents."
      />

      <section className="content-section">
        <div className="container">
          <ScrollReveal>
            <div className="prose">
              <p>The ISR Library contains key documents and presentations related to our work, including regulatory timelines and position statements.</p>
            </div>
          </ScrollReveal>

          <div className="card-grid">
            <ScrollReveal>
              <div className="card">
                <h3>MedTech Europe Presentation</h3>
                <p>2025_10_21_International Spinal Registries_MedTech Europe prez.pdf</p>
                <p style={{ marginTop: 'var(--sp-3)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Includes EUDAMED timeline, UDI &amp; device registration timelines for spine implants, and official roadmap from European Commission.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
