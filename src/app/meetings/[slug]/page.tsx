import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import AgendaItem from '@/components/AgendaItem'
import ScrollReveal from '@/components/ScrollReveal'
import { getMeetingBySlug, getAllMeetingSlugs } from '@/data/meetings'
import { SITE_URL, SITE_NAME } from '@/lib/site'

interface PageProps { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllMeetingSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const meeting = getMeetingBySlug(slug)
  if (!meeting) return { title: 'Meeting not found' }
  const title = `${meeting.title}: ISR meeting in ${meeting.location}`
  return {
    title,
    description: meeting.description,
    alternates: { canonical: `/meetings/${slug}` },
    openGraph: { title, description: meeting.description, url: `/meetings/${slug}` },
  }
}

export default async function MeetingPage({ params }: PageProps) {
  const { slug } = await params
  const meeting = getMeetingBySlug(slug)
  if (!meeting) notFound()

  const eventJsonLd = meeting.startDate && meeting.startDate.length === 10 ? {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `International Spine Registries meeting, ${meeting.title}`,
    description: meeting.description,
    startDate: meeting.startDate,
    endDate: meeting.endDate ?? meeting.startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: { '@type': 'Place', name: meeting.venue, address: meeting.location },
    organizer: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    url: `${SITE_URL}/meetings/${meeting.slug}`,
  } : null

  return (
    <main id="content">
      {eventJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />}
      <PageHero overline={`${meeting.date} · ${meeting.location}`} title={meeting.title} subtitle={meeting.description} />

      {(meeting.invitees || meeting.during) && (
        <section className="section">
          <div className="wrap">
            <ScrollReveal>
              <div className="split">
                <div className="split-aside"><p className="label">Details</p><h2>Who and when</h2></div>
                <dl className="ledger">
                  {meeting.invitees && (
                    <div className="ledger-row three"><dt className="label" style={{ paddingTop: '0.35em' }}>Invitees</dt><dd style={{ gridColumn: '2 / span 2', color: 'var(--ink-2)' }}>{meeting.invitees}</dd></div>
                  )}
                  {meeting.during && (
                    <div className="ledger-row three"><dt className="label" style={{ paddingTop: '0.35em' }}>During</dt><dd style={{ gridColumn: '2 / span 2', color: 'var(--ink-2)' }}>{meeting.during}</dd></div>
                  )}
                  <div className="ledger-row three"><dt className="label" style={{ paddingTop: '0.35em' }}>Venue</dt><dd style={{ gridColumn: '2 / span 2', color: 'var(--ink-2)' }}>{meeting.venue}</dd></div>
                </dl>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {meeting.agendaDays?.map((day, i) => (
        <section key={i} className="section">
          <div className="wrap">
            <ScrollReveal>
              <div className="split">
                <div className="split-aside">
                  <p className="label">Day {i + 1}</p>
                  <h2>{day.title}</h2>
                  {day.note && <p className="lead">{day.note}</p>}
                </div>
                <div className="table-scroll">
                  <table className="table">
                    <thead><tr><th>Time</th><th>Session</th></tr></thead>
                    <tbody>
                      {day.items.map((item, j) => <AgendaItem key={j} time={item.time} description={item.description} />)}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {meeting.narrativeSections?.map((section, i) => (
        <section key={i} className="section">
          <div className="wrap">
            <ScrollReveal>
              <div className="split">
                <div className="split-aside"><h2>{section.heading}</h2></div>
                <div className="prose">
                  {section.content.map((p, j) => <p key={j}>{p}</p>)}
                  {section.list && <ul>{section.list.map((item, k) => <li key={k}>{item}</li>)}</ul>}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </main>
  )
}
