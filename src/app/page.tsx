import ScrollReveal from '@/components/ScrollReveal'
import Card from '@/components/Card'

export const metadata = {
  title: 'ISR — International Spine Registries',
  description:
    'The world’s national spine registries are collaborating on a shared minimum data set, common patient-reported outcomes, and a unified implant library.',
}

export default function Home() {
  return (
    <main>

      {/* ═══ HERO ═══ */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-inner">
            <ScrollReveal>
              <div className="overline overline-dark">International Spine Registries</div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h1>One language for the world&rsquo;s spinal data.</h1>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="hero-subtitle">
                The world&rsquo;s national spine registries are now collaborating on a shared
                minimum data set, common patient-reported outcomes, and a unified implant
                library &mdash; so that every patient&rsquo;s data can speak to every other
                patient&rsquo;s, across every border.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="hero-actions">
                <a href="/library" className="btn btn-light">
                  Read our position statements
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </a>
                <a href="/member-organisations" className="btn btn-ghost">
                  Member registries
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={4}>
              <ul className="proof-bar" aria-label="Key facts">
                <li>
                  <span className="proof-num">14</span>
                  <span className="proof-label">national registries collaborating</span>
                </li>
                <li>
                  <span className="proof-num">4</span>
                  <span className="proof-label">continents</span>
                </li>
                <li>
                  <span className="proof-num">3</span>
                  <span className="proof-label">position statements</span>
                </li>
                <li>
                  <span className="proof-num proof-num--text">Conceived</span>
                  <span className="proof-label">by ODEP</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ MISSION ═══ */}
      <section className="mission" id="mission">
        <div className="container">
          <div className="mission-grid">
            <div>
              <ScrollReveal>
                <h2 className="mission-heading">Why this exists.</h2>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <p className="mission-body">
                  Spinal implants outlast borders. A patient receives a device in one country,
                  retires to another, returns to a clinic in a third. Their device is the same.
                  Their data isn&rsquo;t.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <p className="mission-body">
                  National registries have collected meticulous outcomes data for over twenty
                  years. But each captures different fields, in different formats, against
                  different implant taxonomies &mdash; making cross-border analysis nearly
                  impossible. The result: regulators cannot see signals across markets.
                  Manufacturers cannot prove device performance at scale. Surgeons cannot
                  learn from each other&rsquo;s patients.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={3}>
                <p className="mission-body">
                  ISR exists to end that fragmentation.
                </p>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={1}>
                <div className="mission-quote">
                  <p>Spinal implants outlast borders.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PILLARS — MANIFESTO ═══ */}
      <section className="pillars" id="standards">
        <div className="container">
          <div className="pillars-header">
            <ScrollReveal>
              <h2 className="pillars-heading">Three standards. One outcome.</h2>
            </ScrollReveal>
          </div>
          <div className="manifesto-grid">
            <ScrollReveal>
              <div className="manifesto-col">
                <div className="manifesto-num">01</div>
                <h3 className="manifesto-title">A shared minimum data set</h3>
                <p className="manifesto-body">
                  Every participating registry collects the same core fields, in the same
                  format, against the same definitions &mdash; so that a record from one
                  country means the same thing as a record from another.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="manifesto-col">
                <div className="manifesto-num">02</div>
                <h3 className="manifesto-title">Common patient-reported outcomes</h3>
                <p className="manifesto-body">
                  A consensus set of PROMs adopted across all member registries. Patient
                  voice, captured consistently &mdash; so recovery experience can be compared,
                  not just reoperation rates.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="manifesto-col">
                <div className="manifesto-num">03</div>
                <h3 className="manifesto-title">A unified implant library</h3>
                <p className="manifesto-body">
                  A single canonical reference for every device tracked across all member
                  registries &mdash; so that the same rod or cage shares one identity wherever
                  it is implanted.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ HISTORY — TIMELINE ═══ */}
      <section className="history" id="history">
        <div className="container">
          <div className="history-header">
            <ScrollReveal>
              <h2 className="history-heading">Born out of necessity.</h2>
            </ScrollReveal>
          </div>
          <ol className="story-timeline">
            <ScrollReveal>
              <li className="story-item">
                <div className="story-year">2017</div>
                <div className="story-body">
                  <h3>The gap</h3>
                  <p>
                    A group of British spine surgeons approach ODEP &mdash; the Orthopaedic
                    Data Evaluation Panel &mdash; with a problem. They cannot get the
                    registry data they need to support implant submissions. Almost no one can.
                  </p>
                </div>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li className="story-item">
                <div className="story-year">2020</div>
                <div className="story-body">
                  <h3>The catalyst</h3>
                  <p>
                    The EU Medical Device Regulation comes into force. Manufacturers will
                    now need long-term registry data to keep selling their products in
                    Europe. The shortage becomes a crisis.
                  </p>
                </div>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li className="story-item">
                <div className="story-year">2023</div>
                <div className="story-body">
                  <h3>London</h3>
                  <p>
                    ODEP convenes representatives from spine registries around the world
                    for the first time, at the Royal National Orthopaedic Hospital in
                    Stanmore. The will to collaborate is unanimous.
                  </p>
                </div>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li className="story-item">
                <div className="story-year">2023</div>
                <div className="story-body">
                  <h3>Frankfurt</h3>
                  <p>
                    Six months later at Eurospine, the group reconvenes &mdash; joined by
                    industry, regulators, and national associations. By the end of two days,
                    ISR has become an association.
                  </p>
                </div>
              </li>
            </ScrollReveal>
            <ScrollReveal>
              <li className="story-item">
                <div className="story-year">2024</div>
                <div className="story-body">
                  <h3>Vienna</h3>
                  <p>
                    The Agenda Setting Group ratifies the first three position statements:
                    the minimum data set, the PROMs consensus, and the implant library.
                  </p>
                </div>
              </li>
            </ScrollReveal>
          </ol>
        </div>
      </section>

      {/* ═══ EXPLORE ═══ */}
      <section className="explore" id="explore">
        <div className="container">
          <div className="explore-header">
            <ScrollReveal>
              <h2 className="explore-heading">Discover more.</h2>
            </ScrollReveal>
          </div>

          <div className="explore-featured">
            <ScrollReveal>
              <Card
                featured
                title="Member Organisations"
                description="Every spine registry currently aligned to the ISR minimum data set, with national contacts."
                href="/member-organisations"
              />
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <Card
                featured
                title="Library"
                description="Three position statements. Citation-ready and versioned."
                href="/library"
              />
            </ScrollReveal>
          </div>

          <div className="explore-secondary">
            <ScrollReveal>
              <Card
                title="Agenda Setting Group"
                description="The registry leads who set what we work on next."
                href="/agenda-setting-group"
              />
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <Card
                title="Meetings"
                description="Gothenburg 2026 next. Copenhagen, Vienna, Frankfurt and London before it."
                href="/meetings"
              />
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <Card
                title="About"
                description="How the consortium is governed and how decisions get made."
                href="/about"
              />
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <Card
                title="Contact"
                description="For registry leads, regulators, manufacturers and researchers."
                href="/about"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING LINE ═══ */}
      <section className="closing-line">
        <div className="container">
          <ScrollReveal>
            <p>
              Twenty years of patient data. Fourteen national registries.
              One language, finally.
            </p>
          </ScrollReveal>
        </div>
      </section>

    </main>
  )
}
