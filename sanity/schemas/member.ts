import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'member',
  title: 'Member Organisation',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'International', value: 'international' },
          { title: 'National', value: 'national' },
          { title: 'Non-National', value: 'non-national' },
        ]
      },
      validation: r => r.required()
    }),
    defineField({ name: 'country', title: 'Country', type: 'string' }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ]
})
