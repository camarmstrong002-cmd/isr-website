import ScrollReveal from '@/components/ScrollReveal'
import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'ISR — International Spine Registries',
  description: 'Collaboration for better spine care through standardized data collection.',
}

export default function Home() {
  return (
    <main>

      {/* ═══ HERO ═══ */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <ScrollReveal>
                <h1>International<br />Spine Registries</h1>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <p className="hero-subtitle">Welcome to the Website of the International Spine Registries (ISR)!</p>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <div className="hero-actions">
                  <a href="#mission" className="btn btn-light">
                    Our Mission
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </a>
                  <a href="#explore" className="btn btn-ghost">
                    Explore ISR
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <div className="hero-logo-area">
              <Image
                className="hero-logo-img"
                src="/isr-logo.png"
                alt="International Spine Registries Logo"
                width={300}
                height={300}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WELCOME ═══ */}
      <section className="welcome" id="mission">
        <div className="container">
          <div className="welcome-inner">
            <ScrollReveal>
              <div className="overline">Welcome</div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="welcome-heading">Collaboration is vital to better spine care</h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="welcome-body">Welcoming a broad range of stakeholders, ISR brings together international surgeons, MedTech companies, registry provider and regulators.</p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <p className="welcome-body">The ISR believe that collaboration is vital to better spine care:</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="divider"></div>

      {/* ═══ MISSION ═══ */}
      <section className="mission">
        <div className="container">
          <div className="mission-grid">
            <div>
              <ScrollReveal>
                <div className="overline">Our Goal</div>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <h2 className="mission-heading">Better outcomes through data</h2>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <div className="mission-quote">
                  <p>To deliver the best outcomes for patients, you need granular information on how different implants perform over time.</p>
                </div>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal>
                <p className="mission-body">Our goal is to enhance the volume and quality of that data by working towards common collection methods for spinal registries across the world. By having everyone in the room – representatives from manufacturers and regulators as well as surgeons – we can develop meaningful standards that work for all parties.</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HISTORY ═══ */}
      <section className="history" id="history">
        <div className="container">
          <div className="history-header">
            <ScrollReveal>
              <div className="overline overline-dark">History</div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="history-heading">Born out of necessity</h2>
            </ScrollReveal>
          </div>
          <div className="timeline">
            <ScrollReveal>
              <div className="tl-item">
                <div className="tl-dot"></div>
                <div className="tl-label">Circa 2017 — The Beginning</div>
                <h3>ODEP &amp; the British Association of Spine Surgeons</h3>
                <p>ISR was born out of necessity! Essentially it was conceived by ODEP. In about 2017 a number of members of the British Association of Spine Surgeons approached ODEP (The Orthopaedic Data Evaluation Panel) asking if they could join.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="tl-item">
                <div className="tl-dot"></div>
                <div className="tl-label">Early Findings — The Data Gap</div>
                <h3>Very Little Data Available</h3>
                <p>Early on it became apparent that there was very little data available for manufacturers to use to support their ODEP submissions. There was very little if not, none, available from registries.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="tl-item">
                <div className="tl-dot"></div>
                <div className="tl-label">MDR Introduction — The Catalyst</div>
                <h3>EU Medical Device Regulations</h3>
                <p>It was also realised that with the introduction of the MDR (EU Medical Device Regulations) not only would it be beneficial if manufacturers had data from registries for ODEP they would need it for the MDR if they were going to be able to continue selling their products.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="tl-item">
                <div className="tl-dot"></div>
                <div className="tl-label">Post-COVID — London Meeting</div>
                <h3>ODEP Convenes the World&apos;s Registries</h3>
                <p>What this led to, after COVID had become less of a problem, was ODEP inviting representatives of all the world&apos;s spinal registries to London to set about stimulating the collection of implant data besides alongside other important information collected around spinal surgery. The meeting was a success and good relationships were established. There was a strong will for all registries to collaborate.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ NEXT STEP ═══ */}
      <section className="nextstep">
        <div className="container">
          <div className="nextstep-inner">
            <ScrollReveal>
              <div className="overline">Next Step</div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="nextstep-heading">From London to Frankfurt</h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="nextstep-body">Following the successful meeting in Stanmore, London in March 2023, the ISR reconvened at the meeting of Eurospine in Frankfurt in October 2023. The meeting lasted over two half days and again it included representatives from most of the world&apos;s spinal registries together with representatives from Industry, Regulatory authorities and some of the national Spinal Associations. At that time it was obvious that we had developed into an association albeit a loose one.</p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <p className="nextstep-body">It was decided that to move on with our wish to co-operate with each other we should agree on a way forward for each registry to collect:</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ PILLARS ═══ */}
      <section className="pillars">
        <div className="container">
          <div className="pillars-header">
            <ScrollReveal>
              <div className="overline">Key Agreements</div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="pillars-heading">Three pillars of collaboration</h2>
            </ScrollReveal>
          </div>
          <div className="pillars-grid">
            <ScrollReveal>
              <div className="p-card">
                <div className="p-card-num">01</div>
                <h3>An Agreed Minimum Data Set</h3>
                <p>A standardised minimum data set that all registries can adopt, enabling meaningful cross-registry comparison and analysis of spinal implant outcomes.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="p-card">
                <div className="p-card-num">02</div>
                <h3>An Agreement on Which PROMs Should Be Collected</h3>
                <p>A consensus on which Patient-Reported Outcome Measures should be collected, ensuring patient voices are captured consistently across all participating registries.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="p-card">
                <div className="p-card-num">03</div>
                <h3>A Library for Implant Data</h3>
                <p>A comprehensive library for implant data, creating a centralised resource that supports manufacturers, regulators, and surgeons in tracking device performance.</p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <p className="pillars-footnote">Since then representatives of the major registries have formed an &quot;Agenda Setting Group&quot; that has worked on future developments and organising future meetings.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ GOALS ═══ */}
      <section className="goals">
        <div className="container">
          <div className="goals-inner">
            <ScrollReveal>
              <div className="overline">What Do We Want to Achieve?</div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="goals-heading">Maximising the usefulness of data</h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="goals-body">Primarily we want to maximise the usefulness of the data that is being so carefully collected by registries all around the world for the benefit of patients.</p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="goals-callout">We want to promote good practice and safe implants.</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ POSITION STATEMENTS ═══ */}
      <section className="statements" id="statements">
        <div className="container">

          {/* Intro */}
          <div className="statements-intro">
            <ScrollReveal>
              <div className="overline">Position Statements</div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="statements-heading">Position Statements....</h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="statements-body">The ISR Agenda setting Group have put together documents on the following important aspects of their work. The purpose of these documents is:</p>
            </ScrollReveal>
          </div>

          {/* Purpose cards */}
          <div className="purpose-grid">
            <ScrollReveal delay={2}>
              <div className="purpose-card">
                <div className="purpose-card-letter">a</div>
                <p>To encourage established registries to collect data in a consistent way and</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="purpose-card">
                <div className="purpose-card-letter">b</div>
                <p>for developing registries to design their data collecting system along the ISR recommended method.</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Outcomes + Consistency */}
          <div className="outcomes-section">
            <div className="outcomes-left">
              <ScrollReveal>
                <h3 className="outcomes-subhead">This should mean:</h3>
              </ScrollReveal>
              <ul className="s-list">
                <ScrollReveal>
                  <li>
                    <div className="s-check">
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 7l3.5 3.5L12 4" /></svg>
                    </div>
                    <span>that comparing data between registries is eminently possible</span>
                  </li>
                </ScrollReveal>
                <ScrollReveal delay={1}>
                  <li>
                    <div className="s-check">
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 7l3.5 3.5L12 4" /></svg>
                    </div>
                    <span>That Manufacturers can obtain data from more than one registry knowing that it has been collected against the same headings</span>
                  </li>
                </ScrollReveal>
                <ScrollReveal delay={2}>
                  <li>
                    <div className="s-check">
                      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 7l3.5 3.5L12 4" /></svg>
                    </div>
                    <span>Research and audit are facilitated</span>
                  </li>
                </ScrollReveal>
              </ul>
            </div>
            <div className="consistency-section">
              <ScrollReveal>
                <div className="consistency-label">The list includes</div>
              </ScrollReveal>
              <div className="c-grid">
                <ScrollReveal>
                  <div className="c-card">
                    <div className="c-card-num">01</div>
                    <h4>Consistency with the Minimum Data set</h4>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={1}>
                  <div className="c-card">
                    <div className="c-card-num">02</div>
                    <h4>Consistency with PROMS</h4>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={2}>
                  <div className="c-card">
                    <div className="c-card-num">03</div>
                    <h4>Consistency with Implant collection</h4>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <ScrollReveal>
            <p className="s-footnote">This does not mean that registries are restricted to what they collect but that the core data collection is the same in all the registries that adopt these recommendations.</p>
          </ScrollReveal>

        </div>
      </section>

      {/* ═══ EXPLORE ═══ */}
      <section className="explore" id="explore">
        <div className="container">
          <div className="explore-header">
            <ScrollReveal>
              <div className="overline">Explore</div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="explore-heading">Discover more</h2>
            </ScrollReveal>
          </div>
          <div className="e-grid">
            <ScrollReveal>
              <Card
                title="Agenda Setting Group"
                description="The core working group driving ISR's strategic direction and future meeting agendas."
                href="/agenda-setting-group"
              />
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <Card
                title="Member Organisations"
                description="The global network of spinal registries, associations, and regulatory bodies."
                href="/member-organisations"
              />
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <Card
                title="Meetings"
                description="Vienna 2024, Frankfurt 2023, and the inaugural London 2022."
                href="/meetings"
              />
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <Card
                title="About"
                description="Our structure, governance, and objectives."
                href="/about"
              />
            </ScrollReveal>
            <ScrollReveal delay={4}>
              <Card
                title="Library"
                description="Publications, position statements, and reference documents."
                href="/library"
              />
            </ScrollReveal>
            <ScrollReveal delay={5}>
              <Card
                title="Contact Us"
                description="Membership, collaboration, or general enquiries."
                href="/contact"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

    </main>
  )
}
