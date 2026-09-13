import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import RecordCard from '@/components/RecordCard'
import MemberItem from '@/components/MemberItem'
import { members, memberCount, countryCount, memberTypeLabel } from '@/data/members'
import { meetings } from '@/data/meetings'

export const metadata = {
  title: 'International Spine Registries',
  description: 'ISR brings the world’s spine registries together to collect data the same way, so implants and outcomes can be compared across borders.',
}

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 10.5l4 4 8-9" />
  </svg>
)

export default function Home() {
  return (
    <main id="content">

      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <h1 className="display">
                Better spine care needs comparable data.{' '}
                <span className="muted">ISR is where the world’s spine registries agree how to collect it.</span>
              </h1>
              <p className="lead">Surgeons, registries, manufacturers and regulators, in one room, agreeing what every spine registry should record.</p>
              <div className="hero-actions">
                <a href="#statements" className="btn btn-primary">Read the position statements</a>
                <Link href="/meetings" className="btn btn-secondary">Our meetings</Link>
              </div>
            </div>
            <RecordCard />
          </div>

          <dl className="stats">
            <div className="stat"><dd className="stat-value">{memberCount}</dd><dt className="stat-label">Member registries</dt></div>
            <div className="stat"><dd className="stat-value">{countryCount}</dd><dt className="stat-label">Countries represented</dt></div>
            <div className="stat"><dd className="stat-value">3</dd><dt className="stat-label">Position statements</dt></div>
            <div className="stat"><dd className="stat-value">{meetings.length}</dd><dt className="stat-label">International meetings since 2023</dt></div>
          </dl>
        </div>
      </section>

      {/* Why */}
      <section className="section" id="mission">
        <div className="wrap">
          <ScrollReveal>
            <div className="split">
              <div className="split-aside">
                <p className="label">Why ISR exists</p>
                <h2>Collaboration is vital to better spine care</h2>
              </div>
              <div>
                <p className="pull">To deliver the best outcomes for patients, you need granular information on how different implants perform over time. <span className="muted">Today that information is thin, and scattered across registries that count differently.</span></p>
                <div className="prose" style={{ marginTop: 'var(--s6)' }}>
                  <p>ISR welcomes a broad range of stakeholders: international surgeons, MedTech companies, registry providers and regulators. Our goal is to enhance the volume and quality of implant data by working towards common collection methods for spinal registries across the world.</p>
                  <p>By having everyone in the room, representatives from manufacturers and regulators as well as surgeons, we can develop meaningful standards that work for all parties. Primarily we want to maximise the usefulness of the data that is being so carefully collected by registries around the world, for the benefit of patients. We want to promote good practice and safe implants.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Three agreements */}
      <section className="section" id="agreements">
        <div className="wrap">
          <ScrollReveal>
            <div className="split">
              <div className="split-aside">
                <p className="label">What we agreed</p>
                <h2>Three things every registry should collect the same way</h2>
                <p className="lead">Agreed at Frankfurt in October 2023, once it was clear ISR had become an association, albeit a loose one.</p>
              </div>
              <div className="ledger">
                <div className="ledger-row">
                  <span className="ledger-num">01</span>
                  <div>
                    <h3>An agreed minimum data set</h3>
                    <p>A standardised core that all registries can adopt, so spinal implant outcomes can be compared and analysed across registries.</p>
                  </div>
                </div>
                <div className="ledger-row">
                  <span className="ledger-num">02</span>
                  <div>
                    <h3>Which PROMs should be collected</h3>
                    <p>A consensus on patient-reported outcome measures, so the patient’s own account of the result is captured consistently everywhere.</p>
                  </div>
                </div>
                <div className="ledger-row">
                  <span className="ledger-num">03</span>
                  <div>
                    <h3>A library for implant data</h3>
                    <p>A shared implant library, so manufacturers, regulators and surgeons can track how each device performs.</p>
                  </div>
                </div>
                <p className="footnote" style={{ marginTop: 'var(--s5)', borderTop: 0, paddingTop: 0 }}>Since then, representatives of the major registries have formed an <Link href="/agenda-setting-group" style={{ textDecoration: 'underline', textUnderlineOffset: '0.15em', color: 'var(--ink)' }}>Agenda Setting Group</Link> that works on future developments and organises the meetings.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Members roll */}
      <section className="section" id="members">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <p className="label">Member organisations</p>
              <h2>{memberCount} registries, {countryCount} countries, one way of counting</h2>
              <p className="lead">Membership is unlimited and open to any organisation that runs a spine registry or is thinking about creating one.</p>
            </div>
            <div className="table-scroll">
              <table className="table">
                <thead>
                  <tr><th>Registry</th><th>Country</th><th>Type</th></tr>
                </thead>
                <tbody>
                  {members.map((m) => (
                    <MemberItem key={m.name} name={m.name} country={m.country} type={memberTypeLabel[m.type]} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="roll-foot">
              <p className="meta">Registries currently represented at ISR meetings.</p>
              <Link href="/about#contact" className="btn btn-secondary">Join or enquire</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* History */}
      <section className="section" id="history">
        <div className="wrap">
          <ScrollReveal>
            <div className="stage">
              <p className="label">History</p>
              <h2 className="h2" style={{ marginTop: 'var(--s4)' }}>Born out of necessity</h2>
              <p className="lead" style={{ marginTop: 'var(--s4)' }}>ISR was conceived by ODEP, the Orthopaedic Data Evaluation Panel, when it became clear that spinal implant data barely existed.</p>
              <div className="timeline">
                <div className="tl">
                  <div className="tl-year">c. 2017<small>Sheffield, UK</small></div>
                  <h3>Spine surgeons ask to join ODEP</h3>
                  <p>Members of the British Association of Spine Surgeons approached ODEP asking whether spinal implants could be evaluated the way hips and knees are.</p>
                </div>
                <div className="tl">
                  <div className="tl-year">2018–21<small>The data gap</small></div>
                  <h3>Very little data available</h3>
                  <p>It became apparent that manufacturers had almost no registry data to support ODEP submissions. With the EU Medical Device Regulation arriving, they would need it to keep selling their products at all.</p>
                </div>
                <div className="tl">
                  <div className="tl-year">Mar 2023<small>Stanmore, London</small></div>
                  <h3>ODEP convenes the world’s registries</h3>
                  <p>Representatives of most of the world’s spinal registries met at the Royal National Orthopaedic Hospital. Good relationships were established and there was a strong will to collaborate.</p>
                </div>
                <div className="tl">
                  <div className="tl-year">Oct 2023<small>Frankfurt</small></div>
                  <h3>Three agreements at EUROSPINE</h3>
                  <p>Over two half days, registries, industry, regulators and national spinal associations agreed the minimum data set, PROMs and implant library approach. The Agenda Setting Group followed.</p>
                </div>
                <div className="tl">
                  <div className="tl-year">Oct 2024<small>Vienna</small></div>
                  <h3>Policy documents presented</h3>
                  <p>The three position statements were presented and debated at EUROSPINE Vienna, alongside sessions on implementation barriers and MDR requirements.</p>
                </div>
              </div>
              <div style={{ marginTop: 'var(--s6)' }}>
                <Link href="/meetings" className="btn btn-on-ink">Meeting agendas and notes</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Position statements */}
      <section className="section" id="statements">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-head">
              <p className="label">Position statements</p>
              <h2>Three documents that set out how to collect the core data</h2>
              <p className="lead">Prepared by the Agenda Setting Group, for established registries to align with and for new registries to build on.</p>
            </div>
            <div className="two-col">
              <div>
                <p className="label" style={{ marginBottom: 'var(--s4)' }}>The documents</p>
                <div className="ledger">
                  <div className="ledger-row">
                    <span className="ledger-num">01</span>
                    <div><h3>Consistency with the minimum data set</h3><p>Presented at Vienna 2024 by Jarkko Halme.</p></div>
                  </div>
                  <div className="ledger-row">
                    <span className="ledger-num">02</span>
                    <div><h3>Consistency with PROMs</h3><p>Presented at Vienna 2024 by Peter Fritzell.</p></div>
                  </div>
                  <div className="ledger-row">
                    <span className="ledger-num">03</span>
                    <div><h3>Consistency with implant collection</h3><p>Presented at Vienna 2024 by Emin Aghayev.</p></div>
                  </div>
                </div>
              </div>
              <div>
                <p className="label" style={{ marginBottom: 'var(--s4)' }}>What consistency gives</p>
                <ul className="checks">
                  <li><Check /><span>Comparing data between registries becomes eminently possible.</span></li>
                  <li><Check /><span>Manufacturers can obtain data from more than one registry, knowing it was collected under the same headings.</span></li>
                  <li><Check /><span>Research and audit are facilitated.</span></li>
                  <li><Check /><span>Developing registries can design their data collection along the ISR recommended method from the start.</span></li>
                </ul>
              </div>
            </div>
            <p className="footnote">This does not restrict what registries collect. It means the core data collection is the same in every registry that adopts these recommendations.</p>
          </ScrollReveal>
        </div>
      </section>

    </main>
  )
}
