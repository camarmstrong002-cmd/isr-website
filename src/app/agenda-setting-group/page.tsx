import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import PersonCard from '@/components/PersonCard'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'ISR — Agenda Setting Group',
  description: 'Meet the Agenda Setting Group driving ISR strategy, with representatives from leading global spinal registries.',
}

const members = [
  {
    name: 'Jarkko Halme',
    role: 'Finland',
    bio: '',
  },
  {
    name: 'Emin Aghayev',
    role: 'Switzerland',
    bio: '',
  },
  {
    name: 'Mr Ashley Cole',
    role: 'BMedSci, FRCS(Tr & Orth), DM',
    bio: 'Consultant Orthopaedic Spine Surgeon, Sheffield Children\u2019s Hospital. Ashley Cole is a Consultant Orthopaedic Spine Surgeon working at Sheffield Children\u2019s and Northern General Hospitals, Sheffield from 2003.',
  },
  {
    name: 'Peter Fritzell',
    role: 'Sweden',
    bio: '',
  },
  {
    name: 'Tore Solberg',
    role: 'Norway',
    bio: '',
  },
  {
    name: 'Professor Sashin Ahuja',
    role: 'FRCS (Tr&Orth)',
    bio: 'Consultant Orthopaedic Spinal Surgeon, Welsh Centre for Spinal Surgery & Trauma University Hospital of Wales & Noah\u2019s Ark Children\u2019s Hospital for Wales, Cardiff. Co-Chair of the Spine ODEP & BC. Chair of the UK Spine Societies Board (UKSSB).',
  },
  {
    name: 'Bjorn Knutsson',
    role: 'Sweden',
    bio: '',
  },
  {
    name: 'Olle Hagg',
    role: 'Sweden',
    bio: '',
  },
  {
    name: 'Marina Torre',
    role: 'MEng, Senior Researcher — Italian National Institute of Health (ISS)',
    bio: 'Specialising in medical devices, particularly orthopaedics. She led CE marking for hip prostheses (NB 0373, 1997\u20132004) and has coordinated 28 national health data projects since 2002. Since 2021, she oversees ISS\u2019s international collaborations with the UK\u2019s NJR and EUROSPINE to develop shared databases on orthopaedic and spinal implants. She has served on ethics and advisory boards including NORE and ISAR.',
  },
  {
    name: 'Josh Bridgens',
    role: 'Industry',
    bio: '',
  },
  {
    name: 'Michael Johnson',
    role: 'Australia',
    bio: '',
  },
  {
    name: 'Esther Apos',
    role: 'Australia',
    bio: '',
  },
]

const facilitators = [
  {
    name: 'Keith Tucker',
    role: 'Chair of ODEP',
    paragraphs: [
      'Keith Tucker MB, BS, FRCS is a retired general Orthopaedic surgeon whose practice included patients with a wide range of spinal problems including scoliosis disc problems and degenerative disease. He also undertook children\u2019s orthopaedics and both hip and knee replacement surgery.',
      'He was involved with setting up the National Joint Registry of England, Wales, Northern Ireland and the Isle of Man. He has been the chair of ODEP (Orthopaedic Data Evaluation Panel) since its inception in 2002 and the Beyond Compliance Advisory Board since 2012.',
      'He is a member of NORE (Network of Registries of Europe) and past board member of ISAR (International Society of Arthroplasty Registries). To date he has organised 3 international conferences for AI in MSK and is currently preparing AI25. His research interest includes using machine learning in the early prediction of failing Hip Replacements and Knee Replacements besides investigating its use in the prediction of the course of Adolescent Idiopathic Scoliosis.',
      'He is the author of the fracture and orthopaedic sections of the textbook "Essential Surgery" (Elsevier).',
    ],
  },
  {
    name: 'Oge Swaby',
    role: 'Principal Business Consultant, NEC',
    paragraphs: [
      'Oge Swaby MSc, is a Principal Business Consultant at NEC Software Solutions, specialising in health informatics with a focus on health registries. With over 20 years of experience in the public sector, she manages multiple customer accounts and collaborates at a senior level with public and private healthcare providers, including industry stakeholders, hospitals, clinicians, and regulators across the UK, Europe, North America and Australia.',
      'She is responsible for managing a number of national and International registries, of which include the Spine Registries that are operated by NEC software solution. Her passion lies in supporting and developing high-quality, sustainable health registries that leverage Real World Data. This focus enhances the assessment of treatment outcomes and effectiveness, ultimately improving patient care.',
    ],
  },
]

export default function AgendaSettingGroupPage() {
  return (
    <main>
      <PageHero
        overline="Leadership"
        title="Agenda Setting Group"
        subtitle="The core working group driving ISR's strategic direction and future meeting agendas."
      />

      {/* Overview */}
      <section className="content-section">
        <div className="container">
          <div className="prose">
            <ScrollReveal>
              <h2 className="section-heading">The Agenda Setting Group</h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p>The Agenda setting group was put together after the Frankfurt meeting in order to develop ISR. Its membership includes representatives of the well established registries and is facilitated by ODEP and NEC software solutions.</p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p>It was reckoned that inviting all members to a committee that generated policy was going to be too complicated and therefore a limited number of people, all with significant registry experience should meet regularly and propose policy to the rest of the membership.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="content-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-heading">Members</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose">
              <p>Emin Aghayev (Switzerland), Bjorn Knutsson and Peter Fritzell (Sweden), Marina Torre (Italy), Jarkko Halme (Finland), Sashin Ahuja (UK), Tore Solberg (Norway), Ashley Cole (UK), Esther Apos (Australia), Josh Bridgens (Industry), Keith Tucker (ODEP), Oge Swaby (NEC)</p>
            </div>
          </ScrollReveal>

          <div className="people-grid">
            {members.map((m) => (
              <ScrollReveal key={m.name}>
                <PersonCard name={m.name} role={m.role} bio={m.bio} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilitators */}
      <section className="content-section" style={{ background: 'var(--navy-04)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-heading">Facilitators</h2>
          </ScrollReveal>

          <div className="people-grid">
            {facilitators.map((f) => (
              <ScrollReveal key={f.name}>
                <div className="person-card" style={{ borderLeft: '3px solid var(--navy)' }}>
                  <h3>{f.name}</h3>
                  <p className="role">{f.role}</p>
                  {f.paragraphs.map((p, i) => (
                    <p key={i} style={i > 0 ? { marginTop: 'var(--sp-3)' } : undefined}>
                      {p}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="prose" style={{ marginTop: 'var(--sp-6)' }}>
              <p><strong>Facilitators:</strong> Keith Tucker (ODEP) and Oge Swaby (NEC) act as facilitators and organise the meetings.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
