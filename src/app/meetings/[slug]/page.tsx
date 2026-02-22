import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import AgendaItem from '@/components/AgendaItem'
import ScrollReveal from '@/components/ScrollReveal'
import { meetings, getMeetingBySlug, getAllMeetingSlugs } from '@/data/meetings'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllMeetingSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const meeting = getMeetingBySlug(slug)
  if (!meeting) return { title: 'Meeting Not Found' }
  return { title: `ISR — ${meeting.title}` }
}

export default async function MeetingPage({ params }: PageProps) {
  const { slug } = await params
  const meeting = getMeetingBySlug(slug)
  if (!meeting) notFound()

  return (
    <main>
      <PageHero title={meeting.title} subtitle={meeting.description} />

      {/* Invitees / During info (Vienna) */}
      {(meeting.invitees || meeting.during) && (
        <section className="content-section">
          <div className="container">
            {meeting.invitees && (
              <ScrollReveal>
                <p>
                  <strong>Invitees:</strong> {meeting.invitees}
                </p>
              </ScrollReveal>
            )}
            {meeting.during && (
              <ScrollReveal delay={1}>
                <p>
                  <strong>During:</strong> {meeting.during}
                </p>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* Agenda-based meetings (Vienna & Frankfurt) */}
      {meeting.agendaDays?.map((day, dayIndex) => (
        <section key={dayIndex} className="content-section">
          <div className="container">
            <ScrollReveal>
              <h2 className="section-heading">{day.title}</h2>
            </ScrollReveal>
            {day.note && (
              <ScrollReveal>
                <p className="prose" style={{ marginBottom: 'var(--sp-5)' }}>
                  {day.note}
                </p>
              </ScrollReveal>
            )}
            <div className="agenda-list">
              {day.items.map((item, i) => (
                <ScrollReveal key={i}>
                  <AgendaItem time={item.time} description={item.description} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Narrative-based meeting (London) */}
      {meeting.narrativeSections?.map((section, sectionIndex) => (
        <section key={sectionIndex} className="content-section">
          <div className="container">
            <ScrollReveal>
              <h2 className="section-heading">{section.heading}</h2>
            </ScrollReveal>
            <div className="meeting-notes prose">
              {section.content.map((paragraph, pIndex) => (
                <ScrollReveal key={pIndex} delay={pIndex < 4 ? pIndex : 0}>
                  <p>{paragraph}</p>
                </ScrollReveal>
              ))}
              {section.list && (
                <ScrollReveal>
                  <ul>
                    {section.list.map((item, liIndex) => (
                      <li key={liIndex}>{item}</li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}
