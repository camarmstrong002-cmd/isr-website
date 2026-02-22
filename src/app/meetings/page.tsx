import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Card from '@/components/Card'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'ISR — Meetings',
}

export default function MeetingsPage() {
  return (
    <main>
      <PageHero
        title="Meetings"
        subtitle="ISR convenes at international spine conferences to advance collaborative registry standards."
      />

      <section className="content-section">
        <div className="container">
          <ScrollReveal>
            <p>
              <strong>Next Meeting:</strong> At Eurospine in Copenhagen, October
              21st–25th October 2025.
            </p>
          </ScrollReveal>

          <div className="card-grid">
            <ScrollReveal delay={1}>
              <Card
                title="Vienna 2024"
                description="EUROSPINE Annual Meeting — 3rd & 4th October 2024. Reed Messe Wien Exhibition & Congress Centre."
                href="/meetings/vienna-2024"
              />
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <Card
                title="Frankfurt 2023"
                description="EUROSPINE Annual Meeting — 5th & 6th October 2023. Messe Frankfurt."
                href="/meetings/frankfurt-2023"
              />
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <Card
                title="London 2022"
                description="1st International Meeting of Spinal Registries — March 2023 at the Royal National Orthopaedic Hospital, Stanmore."
                href="/meetings/london-2022"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
