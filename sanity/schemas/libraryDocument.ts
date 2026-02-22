import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'libraryDocument',
  title: 'Library Document',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'file', title: 'File', type: 'file' }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'date' }),
  ]
})
