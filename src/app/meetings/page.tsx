import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Card from '@/components/Card'
import ScrollReveal from '@/components/ScrollReveal'
import { meetings } from '@/data/meetings'

export const metadata: Metadata = {
  title: 'ISR meetings at EUROSPINE',
  description: 'Past and upcoming International Spine Registries meetings, held alongside EUROSPINE: London 2023, Frankfurt 2023, Vienna 2024, Copenhagen 2025 and Gothenburg 2026.',
  alternates: { canonical: '/meetings' },
  openGraph: { title: 'ISR meetings at EUROSPINE', description: 'Past and upcoming International Spine Registries meetings, held alongside EUROSPINE: London 2023, Frankfurt 2023, Vienna 2024, Copenhagen 2025 and Gothenburg 2026.', url: '/meetings' },
}

export default function MeetingsPage() {
  return (
    <main id="content">
      <PageHero overline="Meetings" title="ISR convenes where the spine community already gathers" subtitle="Each meeting is held alongside an international spine conference, with registry leads, surgeons, manufacturers and regulators in the room." />

      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <p className="label">Next meeting</p>
              <h2>EUROSPINE, Gothenburg</h2>
              <p className="lead">6th October 2026.</p>
            </div>
            <p className="label" style={{ marginBottom: 'var(--s4)' }}>Past meetings</p>
            <div className="index">
              {meetings.map((m) => (
                <Card key={m.slug} meta={m.date} title={m.title} description={`${m.venue}, ${m.location}`} href={`/meetings/${m.slug}`} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
