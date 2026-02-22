import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
  ]
})
