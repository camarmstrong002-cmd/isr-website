import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'ISR — Library',
  description:
    'ISR position statements, presentations, and reference documents on spinal registry standards.',
}

interface Publication {
  date: string
  type: string
  title: string
  description: string
  file: string
}

const publications: Publication[] = [
  {
    date: '21 October 2025',
    type: 'Presentation',
    title: 'International Spinal Registries — MedTech Europe',
    description:
      'EUDAMED timeline, UDI and device registration timelines for spine implants, and the official roadmap from the European Commission.',
    file: 'PDF · Available on request',
  },
]

export default function LibraryPage() {
  return (
    <main>
      <PageHero
        overline="Resources"
        title="Library"
        subtitle="Position statements, presentations, and reference documents from the ISR Agenda Setting Group."
      />

      <section className="content-section">
        <div className="container">
          <ScrollReveal>
            <div className="prose">
              <p>
                A growing collection of citation-ready documents — position statements
                ratified by the Agenda Setting Group, presentations from ISR meetings,
                and references on the regulatory landscape that shapes our work.
              </p>
            </div>
          </ScrollReveal>

          <div className="library-list">
            {publications.map((p) => (
              <ScrollReveal key={p.title}>
                <article className="library-item">
                  <div className="library-meta">
                    <div className="library-type">{p.type}</div>
                    <div className="library-date">{p.date}</div>
                  </div>
                  <div className="library-body">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="library-file">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 2h6l4 4v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" />
                        <path d="M10 2v4h4" />
                      </svg>
                      <span>{p.file}</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
