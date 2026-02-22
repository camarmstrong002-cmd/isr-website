import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import MemberItem from '@/components/MemberItem'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = { title: 'ISR — Member Organisations' }

const internationalMembers = ['Spine Tango']

const nationalMembers = [
  'American Spine Registry',
  'Australian Spine Registry',
  'British Spine Registry',
  'Canadian Spine Registry',
  'Danish Spinal Registry',
  'Finnish Spine Registry',
  'German Spine Registry',
  'Hong Kong Spine Registry',
  'Italian Spine Registry',
  'Norwegian Registry for Spine Surgery',
  'Swedish Spine Registry',
  'Swiss Spine Registry',
]

const nonNationalMembers = ['Kaiser Permanente']

export default function MemberOrganisationsPage() {
  return (
    <main>
      <PageHero
        overline="Network"
        title="Member Organisations"
        subtitle="Membership of ISR is unlimited. It is open to any registry who already has a spinal registry or is thinking about creating one."
      />

      <section className="content-section">
        <div className="container">
          <ScrollReveal>
            <div className="prose">
              <p>At present we have representatives from the following spinal registries.</p>
            </div>
          </ScrollReveal>

          <div style={{ marginTop: 'var(--sp-7)' }}>
            <ScrollReveal>
              <div className="overline">International Spine Registry</div>
            </ScrollReveal>
            <div className="member-grid">
              {internationalMembers.map((name) => (
                <ScrollReveal key={name}>
                  <MemberItem name={name} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'var(--sp-7)' }}>
            <ScrollReveal>
              <div className="overline">National Spine Registries</div>
            </ScrollReveal>
            <div className="member-grid">
              {nationalMembers.map((name) => (
                <ScrollReveal key={name}>
                  <MemberItem name={name} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'var(--sp-7)' }}>
            <ScrollReveal>
              <div className="overline">Non-National Spine Registries</div>
            </ScrollReveal>
            <div className="member-grid">
              {nonNationalMembers.map((name) => (
                <ScrollReveal key={name}>
                  <MemberItem name={name} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
