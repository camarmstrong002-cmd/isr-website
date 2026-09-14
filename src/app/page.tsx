import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import RecordCard from '@/components/RecordCard'
import MemberItem from '@/components/MemberItem'
import { members, memberCount, countryCount, memberTypeLabel } from '@/data/members'
import { meetings } from '@/data/meetings'

export const metadata = {
  title: 'International Spine Registries',
  description: 'The world’s national spine registries are collaborating on a shared minimum data set, common patient-reported outcomes, and a unified implant library.',
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
                One language for the world’s spinal data.{' '}
                <span className="muted">Every registry, collecting the same core the same way.</span>
              </h1>
              <p className="lead">The world’s national spine registries are collaborating on a shared minimum data set, common patient-reported outcomes and a unified implant library, so that every patient’s data can speak to every other patient’s, across every border.</p>
              <div className="hero-actions">
                <Link href="/library" className="btn btn-primary">Read the position statements</Link>
                <Link href="/member-organisations" className="btn btn-secondary">Member registries</Link>
              </div>
            </div>
            <RecordCard />
          </div>

          <dl className="stats">
            <div className="stat"><dd className="stat-value">{memberCount}</dd><dt className="stat-label">Member registries</dt></div>
            <div className="stat"><dd className="stat-value">{countryCount}</dd><dt className="stat-label">Countries represented</dt></div>
            <div className="stat"><dd className="stat-value">3</dd><dt className="stat-label">Position statements</dt></div>
            <div className="stat"><dd className="stat-value">{meetings.length}</dd><dt className="stat-label">Meetings since 2023</dt></div>
          </dl>
        </div>
      </section>

      {/* Why */}
      <section className="section" id="mission">
        <div className="wrap">
          <ScrollReveal>
            <div className="split">
              <div className="split-aside">
                <p className="label">Why this exists</p>
                <h2>Spinal implants outlast borders</h2>
              </div>
              <div>
                <p className="pull">A patient receives a device in one country, retires to another, returns to a clinic in a third. <span className="muted">Their device is the same. Their data isn’t.</span></p>
                <div className="prose" style={{ marginTop: 'var(--s6)' }}>
                  <p>National registries have collected meticulous outcomes data for over twenty years. But each captures different fields, in different formats, against different implant taxonomies, making cross-border analysis nearly impossible. Regulators cannot see signals across markets. Manufacturers cannot prove device performance at scale. Surgeons cannot learn from each other’s patients.</p>
                  <p>ISR exists to end that fragmentation. It brings surgeons, registries, MedTech companies and regulators into one room to agree what every spine registry should record, so the data being so carefully collected around the world is useful for the benefit of patients.</p>
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
                <h2>Three standards. One outcome.</h2>
                <p className="lead">Agreed at Frankfurt in 2023 and ratified as position statements at Vienna in 2024.</p>
              </div>
              <div className="ledger">
                <div className="ledger-row">
                  <span className="ledger-num">01</span>
                  <div>
                    <h3>A shared minimum data set</h3>
                    <p>Every participating registry collects the same core fields, in the same format, against the same definitions, so a record from one country means the same thing as a record from another.</p>
                  </div>
                </div>
                <div className="ledger-row">
                  <span className="ledger-num">02</span>
                  <div>
                    <h3>Common patient-reported outcomes</h3>
                    <p>A consensus set of PROMs adopted across all member registries. Patient voice, captured consistently, so recovery experience can be compared, not just reoperation rates.</p>
                  </div>
                </div>
                <div className="ledger-row">
                  <span className="ledger-num">03</span>
                  <div>
                    <h3>A unified implant library</h3>
                    <p>A single canonical reference for every device tracked across all member registries, so the same rod or cage shares one identity wherever it is implanted.</p>
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
              <p className="lead" style={{ marginTop: 'var(--s4)' }}>Conceived by ODEP, the Orthopaedic Data Evaluation Panel, when it became clear that spinal implant data barely existed.</p>
              <div className="timeline">
                <div className="tl">
                  <div className="tl-year">2017<small>The gap</small></div>
                  <h3>British spine surgeons approach ODEP</h3>
                  <p>They cannot get the registry data they need to support implant submissions to the Orthopaedic Data Evaluation Panel. Almost no one can.</p>
                </div>
                <div className="tl">
                  <div className="tl-year">2020<small>The catalyst</small></div>
                  <h3>The EU Medical Device Regulation comes into force</h3>
                  <p>Manufacturers will now need long-term registry data to keep selling their products in Europe. The shortage becomes a crisis.</p>
                </div>
                <div className="tl">
                  <div className="tl-year">Mar 2023<small>Stanmore, London</small></div>
                  <h3>ODEP convenes the world’s registries</h3>
                  <p>Representatives from spine registries around the world meet for the first time, at the Royal National Orthopaedic Hospital. The will to collaborate is unanimous.</p>
                </div>
                <div className="tl">
                  <div className="tl-year">Oct 2023<small>Frankfurt</small></div>
                  <h3>ISR becomes an association</h3>
                  <p>Six months later at EUROSPINE the group reconvenes, joined by industry, regulators and national associations. By the end of two days the three standards are agreed.</p>
                </div>
                <div className="tl">
                  <div className="tl-year">Oct 2024<small>Vienna</small></div>
                  <h3>The first three position statements</h3>
                  <p>The Agenda Setting Group ratifies the minimum data set, the PROMs consensus and the implant library.</p>
                </div>
                <div className="tl">
                  <div className="tl-year">Oct 2025<small>Copenhagen</small></div>
                  <h3>Fourth meeting at EUROSPINE</h3>
                  <p>Gothenburg follows in October 2026.</p>
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
              <p className="lead">Ratified by the Agenda Setting Group. Citation-ready and versioned, for established registries to align with and new registries to build on.</p>
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
