import type { MetadataRoute } from 'next'
import { SITE_URL, SITE_UPDATED } from '@/lib/site'
import { meetings } from '@/data/meetings'

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(SITE_UPDATED)
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: updated, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: updated, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE_URL}/member-organisations`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/agenda-setting-group`, lastModified: updated, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/meetings`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/library`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
  ]
  const meetingPages: MetadataRoute.Sitemap = meetings.map((m) => ({
    url: `${SITE_URL}/meetings/${m.slug}`,
    lastModified: new Date(m.endDate ?? m.startDate ?? SITE_UPDATED),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  return [...pages, ...meetingPages]
}
