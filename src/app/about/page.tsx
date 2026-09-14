import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'About ISR',
  description: 'Who the International Spine Registries (ISR) are: a voluntary alliance of the world’s spine registries, conceived by ODEP in 2023 and supported by NEC Software Solutions. How it started and how to get in touch.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About ISR', description: 'Who the International Spine Registries (ISR) are: a voluntary alliance of the world’s spine registries, conceived by ODEP in 2023 and supported by NEC Software Solutions. How it started and how to get in touch.', url: '/about' },
}

export default function AboutPage() {
  return (
    <main id="content">
      <PageHero overline="About" title="A voluntary alliance of the world’s spine registries" subtitle="No constitution, no subscription, no rules. Just registries that want to work together." />

      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <div className="split">
              <div className="split-aside"><p className="label">Who we are</p><h2>Registries that chose to collaborate</h2></div>
              <div className="prose">
                <p>Across the world there are a number of spinal registries that collect data about spinal surgery. Mostly they are national registries, collecting data about the spinal surgery undertaken on people in their country.</p>
                <p>Many of these registries want to work together and have formed a very loose alliance which we now refer to as the ISR. It is an entirely voluntary arrangement and there is no official constitution, subscription or rules.</p>
                <p>ISR is fortunate to have the backing of NEC Software Solutions, who provide registry solutions nationally and internationally. They take care of the secretarial and organisational arrangements of ISR and contribute their expertise to our meetings.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <div className="split">
              <div className="split-aside"><p className="label">When it started</p><h2>March 2023, Stanmore</h2></div>
              <div className="prose">
                <p>Round about the time the new European Medical Device Regulations (MDR) came into effect, and when spinal surgeons in the UK wanted to introduce ODEP (the Orthopaedic Data Evaluation Panel), it was realised there was no uniform way of collecting data for these organisations. Manufacturers of spinal devices need clinical data, including PROMs (patient-reported outcome measures) and implant data, to submit for CE marks and other regulatory requirements.</p>
                <p>ODEP for spines was being prepared, and it was also clear that there was a complete dearth of implant data for manufacturers to submit.</p>
                <p>So in March 2023 ODEP instigated the first International Meeting of Spinal Registries, courtesy of the Royal National Orthopaedic Hospital at Stanmore, just north of London. Representatives from most of the world’s leading registries attended in person, with an online option as well.</p>
                <p>Several decisions emanated from the meeting. Firstly, it would be a good idea to share information and learn from each other. Secondly, to set up guidelines for the collection of spinal surgery data in an organised way that would allow analysis of each other’s data sets without inconsistency.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="wrap">
          <ScrollReveal>
            <div className="split">
              <div className="split-aside">
                <p className="label">Contact</p>
                <h2>Get in touch</h2>
                <p className="lead">Membership, collaboration or general enquiries. We reply to every message.</p>
              </div>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
