import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import MemberItem from '@/components/MemberItem'
import ScrollReveal from '@/components/ScrollReveal'
import { members, memberCount, countryCount, memberTypeLabel, MemberType } from '@/data/members'

export const metadata: Metadata = {
  title: 'Member Organisations — International Spine Registries',
  description: 'The international and national spinal registries that make up the ISR member network.',
}

const groups: { type: MemberType; heading: string }[] = [
  { type: 'international', heading: 'International' },
  { type: 'national', heading: 'National' },
  { type: 'non-national', heading: 'Non-national' },
]

export default function MemberOrganisationsPage() {
  return (
    <main id="content">
      <PageHero
        overline="Member organisations"
        title={`${memberCount} registries across ${countryCount} countries`}
        subtitle="Membership of ISR is unlimited. It is open to any organisation that already has a spine registry or is thinking about creating one."
      />

      {groups.map((g) => {
        const rows = members.filter((m) => m.type === g.type)
        return (
          <section className="section" key={g.type}>
            <div className="wrap">
              <ScrollReveal>
                <div className="split">
                  <div className="split-aside">
                    <p className="label">{g.heading}</p>
                    <h2>{rows.length === 1 ? 'One registry' : `${rows.length} registries`}</h2>
                  </div>
                  <div className="table-scroll">
                    <table className="table">
                      <thead><tr><th>Registry</th><th>Country</th><th>Type</th></tr></thead>
                      <tbody>
                        {rows.map((m) => <MemberItem key={m.name} name={m.name} country={m.country} type={memberTypeLabel[m.type]} />)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )
      })}

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="split-aside"><p className="label">Join</p><h2>Run a spine registry, or planning one?</h2></div>
            <div>
              <p className="lead">ISR is a voluntary arrangement with no subscription. Get in touch and we will invite you to the next meeting.</p>
              <div style={{ marginTop: 'var(--s5)' }}><Link href="/about#contact" className="btn btn-primary">Contact ISR</Link></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
