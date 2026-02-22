export interface AgendaItem {
  time: string
  description: string
}

export interface AgendaDay {
  title: string
  note?: string
  items: AgendaItem[]
}

export interface NarrativeSection {
  heading: string
  content: string[]
  list?: string[]
}

export interface Meeting {
  slug: string
  title: string
  date: string
  location: string
  venue: string
  description: string
  invitees?: string
  during?: string
  agendaDays?: AgendaDay[]
  narrativeSections?: NarrativeSection[]
}

export const meetings: Meeting[] = [
  {
    slug: 'vienna-2024',
    title: 'Vienna 2024',
    date: '3rd & 4th October 2024',
    location: 'Vienna, Austria',
    venue: 'Reed Messe Wien Exhibition & Congress Centre',
    description:
      'Meeting of the International Spinal Registries (ISR) at the meeting of EUROSPINE — 3rd and 4th October 2024, Reed Messe Wien Exhibition & Congress Centre, Vienna.',
    invitees:
      'All interested parties including registry leads, spinal surgeons, manufacturers, regulators, registry designers / data handlers etc.',
    during:
      'EUROSPINE Annual Meeting in Vienna, Austria on 3rd October, afternoon and concluding on the 4th morning.',
    agendaDays: [
      {
        title: 'Thursday 3rd October — Schubert 6',
        note: 'The meeting room will be available from 12:30 so we can start promptly at 1pm with a proposed finish at 5:15pm.',
        items: [
          { time: '13:00', description: 'Welcome and Introductions. What we want to achieve in this meeting — Keith Tucker' },
          { time: '13:15', description: 'The Policy Documents. How and why they have been put together — Oge Swaby. Moderators: Rebecca or Sonja / Esther Apos / Bjorn Knutsson' },
          { time: '13:25', description: 'Q&A' },
          { time: '13:30', description: 'MDS Policy document — Jarkko Halme' },
          { time: '13:50', description: 'Q&A' },
          { time: '14:00', description: 'PROMS Policy document — Peter Fritzell' },
          { time: '14:20', description: 'Q&A' },
          { time: '14:30', description: 'Implants Policy document — Emin Aghayev' },
          { time: '14:50', description: 'Q&A' },
          { time: '15:00', description: 'Implementation 1 — Barriers to implementing proposed changes. Moderators: Richard Armstrong / Mike Hutton / Tore Solberg. Representatives of each available registry to speak on difficulties encountered by European, Canadian/USA, and rest of world registries.' },
          { time: '15:40', description: 'Refreshments' },
          { time: '16:00', description: 'Does what we are proposing mesh with the MDR and other regulatory agencies? Chair: Keith Tucker / Amie Smirthwaite' },
          { time: '16:10', description: 'What does the MDR demand for monitoring of new and legacy devices — Rob Nelissen' },
          { time: '16:20', description: 'How is Industry coping? (Including Q&As) — Josh Bridgens' },
          { time: '16:30', description: 'Update on MDR implementation / MDR state of play from MedTech Europe (incl. Q&A) — Jana Russo' },
          { time: '16:40', description: 'Update from Notified Bodies (Including Q&As) — Marion Soubelet' },
          { time: '16:50', description: 'A Common Specification for spinal devices (Including Q&As) — Amie Smirthwaite' },
          { time: '17:00', description: 'Discussion including where does SOTA fit in?' },
          { time: '17:15', description: 'Close' },
        ],
      },
      {
        title: 'Friday 4th October — Suite 1 & 2',
        items: [
          { time: '08:30', description: 'Coffee' },
          { time: '08:45', description: 'Introduction, review of previous day\'s decisions, target for this morning\'s meeting. Oge Swaby / Keith Tucker. Moderator: Jarkko / Emin' },
          { time: '09:00', description: 'The Spine Atlas initiative: an infrastructure for international collaborative epidemiological studies — Christian Herrmann' },
          { time: '09:15', description: 'Standardisation of global registries in other domains. — Oge Swaby' },
          { time: '09:30', description: 'Implementing ISR MDS — Jarkko Halme / Michael Johnson. Which registries could implement from now? How do we roll this out?' },
          { time: '09:50', description: 'Implementing ISR PROMS — Peter Fritzell / Sashin Ahuja. Which registries could implement from now?' },
          { time: '10:10', description: 'Implementing Implant capture into registries. Update from Spine Tango — Emin Aghayev. Implant rollout — Edd Caton' },
          { time: '10:30', description: 'Update from ODEP, the latest on submission forms — Mike Hutton / Sashin Ahuja' },
          { time: '10:40', description: 'Q&A' },
          { time: '11:00', description: 'Refreshments' },
          { time: '11:20', description: 'Future Structure of ISR (including funding, communications and ISR Website) — All' },
          { time: '11:35', description: 'Final comments' },
          { time: '12:00', description: 'Close' },
        ],
      },
    ],
  },
  {
    slug: 'frankfurt-2023',
    title: 'Frankfurt 2023',
    date: '5th & 6th October 2023',
    location: 'Frankfurt, Germany',
    venue: 'Messe Frankfurt',
    description:
      'Meeting of the International Spinal Registries at the meeting of EUROSPINE — Messe Frankfurt, 5th and 6th October 2023.',
    agendaDays: [
      {
        title: 'Thursday 5th October — Room 45213',
        note: 'EUROSPINE Annual Meeting in Frankfurt, Germany. All times are in CET.',
        items: [
          { time: '13:30', description: 'Welcome and Introductions. A vision for the future including core datasets etc plus some mistakes we could all learn from! — Keith Tucker' },
          { time: '13:40', description: 'Review of feedback from meeting of 23/3/23 in England — Oge Swaby' },
          { time: '13:50', description: 'A view from MedTech Europe, EU regulations update and how we need to work with them — Jana Russo' },
          { time: '14:05', description: 'BSI Perspective on Registry data used for spinal devices to support certification — Marion Soubelet' },
          { time: '14:15', description: 'Spine Tango and implant data collection including the component database — Emin Aghayev' },
          { time: '14:25', description: 'Discussion' },
          { time: '14:35', description: 'Structuring the collected data for commonality. A minimum data set for registries. Why minimum data sets? (Emin Aghayev), Comparison of data structures (Oge Swaby), Structures of collecting data (Mita De), A suggested minimum data set (Jarkko Halme)' },
          { time: '15:05', description: 'Discussion leading to agreement — Led by Jarkko Halme' },
          { time: '15:20', description: 'Refreshments' },
          { time: '15:30', description: 'Presentation on PROMS: Simplicity and usability (Peter Fritzell), What\'s on offer (Olle Hagg), PROMs and Patients — maximising compliance (Esther Apos)' },
          { time: '15:50', description: 'Discussion leading to agreement — Led by Peter Fritzell' },
          { time: '16:00', description: 'What should be captured for Implant data monitoring: Spine Tango and SIRIS (Emin Aghayev), Italian Arthroplasty Registry (Marina Torre), British Spine Registry (Sashin Ahuja), National Joint Registry (Edd Caton), MedTech view (Jana Russo)' },
          { time: '16:30', description: 'Discussion leading to agreement — Led by Emin Aghayev' },
          { time: '16:50', description: 'New MDCG guidance — Amie Smirthwaite' },
          { time: '17:00', description: 'Wrap up and close' },
        ],
      },
      {
        title: 'Friday 6th October — Room 45214',
        items: [
          { time: '09:00', description: 'Review of opinions and comments from yesterday — Oge Swaby, Keith Tucker' },
          { time: '09:15', description: 'Manufacturer\'s session. Moderator: Marion Soubelet. Manufacturers reflections (Josh Bridgens / Benjamin Hagedorn), Accessing implant data (Jana Russo), EU MDR Clinical Evidence (Joerg Kintscher)' },
          { time: '09:30', description: 'Discussion leading to agreement — Led by Marion Soubelet / Sashin Ahuja' },
          { time: '09:35', description: 'Summary of agreed ways forward: Core data set (Jarkko Halme), PROMS (Peter Fritzell / Olle Hagg), Implant data (Emin Aghayev), Nested studies (Amie Smirthwaite)' },
          { time: '10:05', description: 'Spine Tango offering for implant data collection including cost — Emin Aghayev' },
          { time: '10:15', description: 'The importance of bar codes and their accuracy/content — Richard Armstrong / Oge Swaby' },
          { time: '10:25', description: 'Partnership with Spine Tango — which registries would like to sign up? — All' },
          { time: '10:35', description: 'Collaboration with data — Marina Torre / Richard Armstrong / Edd Caton' },
          { time: '10:45', description: 'Decision on communications — Keith Tucker / Oge Swaby' },
          { time: '11:00', description: 'Next steps' },
          { time: '11:15', description: 'Final discussion and thanks' },
          { time: '11:30', description: 'Finish' },
        ],
      },
    ],
  },
  {
    slug: 'london-2022',
    title: 'London 2022',
    date: 'March 2023',
    location: 'London, United Kingdom',
    venue: 'Royal National Orthopaedic Hospital, Stanmore',
    description:
      '1st International Meeting of Spinal Registries — March 2023, Royal National Orthopaedic Hospital, Stanmore, London.',
    narrativeSections: [
      {
        heading: 'Key Outcomes',
        content: [
          'On the 23rd of March 2023, Beyond Compliance and ODEP hosted the 1st International Meeting of Spinal Registries at the Royal National Orthopaedic Hospital, in Stanmore, UK. This meeting brought together international registries from all around the world as well as other key stakeholders which included regulators, clinicians, and medical device manufacturers.',
          'There were 41 attendees in the hall and 81 online.',
          'The meeting started with the welcome address of Prof. Deborah Eastwood, President BOA (British Orthopaedic Association) that highlighted the importance of the national and international cooperation confirming that ISAR has been instrumental in defining what we are now.',
          'Keith Tucker introduced the meeting. The purpose is to work to protect patient from harm, promote good practice, understand the new regulatory landscape and its demand, know the experience of the registries and start a joint cooperation.',
          'All agreed in the need to internationally cooperate in order to define a core minimum dataset common to all the registries, allowing for future comparison of data.',
        ],
      },
      {
        heading: 'Key Topics Discussed',
        content: [
          'Notified bodies highlighted the importance of registries as specific method and source of reliable data to support certification processes of legacy products, according to MDR.',
          'Manufacturers drew attention to the fact that MDR has totally changed the approach — claiming device equivalence is no longer viable. Now there is the need to provide data for each indication and for each device variant. RCTs cost many millions of dollars; registries are a reliable source.',
          'Rob Nelissen highlighted that MDR aim is to not circulate medical devices that might give harm and informed about the activities done by the EU expert panel (Clinical Evaluation Consultation Procedure, CECP).',
          'Alan Fraser reported on the EU project CORE-MD to support the EU Commission with the advice of experts for high risk devices.',
          'FDA and IMDRF described the IMDRF reports recalling the definition of Registry and showed the activities performed within the Coordinated Registries Network on different topics.',
          'Keith Tucker described ODEP and Beyond Compliance (BC). ODEP started in 2002 following the Capital incident. Aim of ODEP is to work with manufacturers to improve quality of devices.',
        ],
      },
      {
        heading: 'Attendees',
        content: [
          'Notified bodies: BSI, TUV, RQM+',
          'Industry: DePuy, MedTech EU, Medtronic, Nuvasive, ABHI UK, Stryker',
          'Regulators: Clinicians members of CIE (Rob Nelissen, Alan Fraser), MHRA, FDA and IMDRF',
          'Registries: British Spinal Registry (BSR), Spine Tango, Swiss spinal implant registry (SIRIS), FinSpine, Australian Spinal Registry, Norwegian Spine Registry, Italian Registry (RIDIS), Swedish Registry (Swespine), ASR (American Spine Registry), Hong Kong Registry, German Spinal Registry, Kaiser Permanente Registry',
          'Benchmarking/monitoring: ODEP, Beyond Compliance',
        ],
      },
      {
        heading: 'Conclusions',
        content: [
          'The discussion highlighted that it is central to provide data to improve patient safety and that the following needs should be satisfied:',
        ],
        list: [
          'Combining data from different registries in order to detect failure much earlier',
          'Sustainability of registries well funded by governmental funds',
          'High level of coverage and completeness',
          'UDI to identify implanted devices',
          'Set up a common dataset common to all the registries to make data comparable',
          'Contribution by industry to get data',
          'Linkage between Hospital Discharge Records and Registries',
        ],
      },
    ],
  },
]

export function getMeetingBySlug(slug: string): Meeting | undefined {
  return meetings.find((m) => m.slug === slug)
}

export function getAllMeetingSlugs(): string[] {
  return meetings.map((m) => m.slug)
}
