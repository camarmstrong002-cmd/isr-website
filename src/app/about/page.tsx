import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = { title: 'ISR — About' }

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About" subtitle="Understanding who we are and how we started" />

      <section className="content-section">
        <div className="container">
          <div className="prose">
            <ScrollReveal>
              <h2 className="section-heading">Who are we?</h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p>Across the world there are a number of Spinal Registries that collect data about spinal surgery. Mostly they are national registries, collecting data about the spinal surgery that has been undertaken on people in their country.</p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p>Many of these registries want to work together and they have formed a very loose alliance which we now refer to as the ISR. It is an entirely voluntary arrangement and there is no official constitution, subscription or rules.</p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <p>ISR is fortunate to have the backing of NEC Software Solutions who provide Registry solutions nationally and internationally. They take care of the secretarial and organisational arrangements of ISR as well as contribute to our meetings with their expertise.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="prose">
            <ScrollReveal>
              <h2 className="section-heading">When did it start?</h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p>Round about the time that the new European Medical Device Regulations (MDR) came into effect and when the spinal surgeons in the UK wanted to introduce ODEP (Orthopaedic Data Evaluation Panel), it was realised that there was no uniform way of collecting data for these organisations. Importantly, manufacturers of spinal devices need clinical data, including PROMS (Patient Reported Outcome Measures) and implant data to submit for their CE marks and other regulatory requirements.</p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p>ODEP for spines was being prepared and it was also clear that there was a complete dearth of implant data for manufacturers to submit.</p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <p>Thus, in March 2023 ODEP instigated the first International Meeting of Spinal Registries courtesy of the Royal National Orthopaedic Hospital based at Stanmore, just north of London. Representatives from most of the world&#39;s leading registries attended in person and there was an online option as well.</p>
            </ScrollReveal>
            <ScrollReveal>
              <p>Several decisions emanated from the meeting. Firstly it would be a good idea to share information and learn from each other. Also, to set up guidelines for the collection of spinal surgery data in an organised way that would allow analysis of each other&#39;s data sets without any inconsistency.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="prose">
            <ScrollReveal>
              <h2 className="section-heading">Get in Touch</h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p>If you would like to learn more about ISR, get involved, or have any questions, please send us a message using the form below.</p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
