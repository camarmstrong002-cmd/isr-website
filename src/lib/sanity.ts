// Sanity CMS client and queries
// Pages currently use hardcoded content with these queries available for migration.
// To migrate a page: import the relevant query function, call it in the server component,
// and conditionally render Sanity data if available, falling back to hardcoded content.

import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
})

// Types
export interface SanityMember {
  _id: string
  name: string
  category: 'international' | 'national' | 'non-national'
  country?: string
  order: number
}

export interface SanityPerson {
  _id: string
  name: string
  role: string
  country: string
  bio: any[] // Portable Text
  group: 'member' | 'facilitator'
  order: number
}

export interface SanityMeeting {
  _id: string
  title: string
  slug: { current: string }
  date: string
  location: string
  venue: string
  description: string
  agendaDays?: {
    dayTitle: string
    room: string
    items: { time: string; description: string }[]
  }[]
  notes?: any[]
  attendees?: any[]
  conclusions?: any[]
}

export interface SanityLibraryDocument {
  _id: string
  title: string
  description: string
  file?: { asset: { url: string } }
  publishedAt: string
}

// Queries
export async function getMembers(): Promise<SanityMember[] | null> {
  try {
    const members = await client.fetch(
      `*[_type == "member"] | order(order asc)`,
      {},
      { next: { tags: ['member'] } }
    )
    return members.length > 0 ? members : null
  } catch {
    return null
  }
}

export async function getPersons(group: string): Promise<SanityPerson[] | null> {
  try {
    const persons = await client.fetch(
      `*[_type == "person" && group == $group] | order(order asc)`,
      { group },
      { next: { tags: ['person'] } }
    )
    return persons.length > 0 ? persons : null
  } catch {
    return null
  }
}

export async function getMeetings(): Promise<SanityMeeting[] | null> {
  try {
    const meetings = await client.fetch(
      `*[_type == "meeting"] | order(date desc)`,
      {},
      { next: { tags: ['meeting'] } }
    )
    return meetings.length > 0 ? meetings : null
  } catch {
    return null
  }
}

export async function getMeeting(slug: string): Promise<SanityMeeting | null> {
  try {
    return await client.fetch(
      `*[_type == "meeting" && slug.current == $slug][0]`,
      { slug },
      { next: { tags: ['meeting'] } }
    )
  } catch {
    return null
  }
}

export async function getLibraryDocuments(): Promise<SanityLibraryDocument[] | null> {
  try {
    const docs = await client.fetch(
      `*[_type == "libraryDocument"] | order(publishedAt desc)`,
      {},
      { next: { tags: ['libraryDocument'] } }
    )
    return docs.length > 0 ? docs : null
  } catch {
    return null
  }
}
