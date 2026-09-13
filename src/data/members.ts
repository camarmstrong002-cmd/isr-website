export type MemberType = 'international' | 'national' | 'non-national'

export interface Member {
  name: string
  country: string
  type: MemberType
}

export const members: Member[] = [
  { name: 'Spine Tango', country: 'International', type: 'international' },
  { name: 'American Spine Registry', country: 'United States', type: 'national' },
  { name: 'Australian Spine Registry', country: 'Australia', type: 'national' },
  { name: 'British Spine Registry', country: 'United Kingdom', type: 'national' },
  { name: 'Canadian Spine Registry', country: 'Canada', type: 'national' },
  { name: 'Danish Spinal Registry', country: 'Denmark', type: 'national' },
  { name: 'Finnish Spine Registry', country: 'Finland', type: 'national' },
  { name: 'German Spine Registry', country: 'Germany', type: 'national' },
  { name: 'Hong Kong Spine Registry', country: 'Hong Kong', type: 'national' },
  { name: 'Italian Spine Registry', country: 'Italy', type: 'national' },
  { name: 'Norwegian Registry for Spine Surgery', country: 'Norway', type: 'national' },
  { name: 'Swedish Spine Registry', country: 'Sweden', type: 'national' },
  { name: 'Swiss Spine Registry', country: 'Switzerland', type: 'national' },
  { name: 'Kaiser Permanente', country: 'United States', type: 'non-national' },
]

export const memberTypeLabel: Record<MemberType, string> = {
  international: 'International registry',
  national: 'National registry',
  'non-national': 'Non-national registry',
}

export const memberCount = members.length
export const countryCount = new Set(
  members.filter((m) => m.type !== 'international').map((m) => m.country)
).size
