import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'country', title: 'Country', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'group',
      title: 'Group',
      type: 'string',
      options: {
        list: [
          { title: 'Member', value: 'member' },
          { title: 'Facilitator', value: 'facilitator' },
        ]
      },
      validation: r => r.required()
    }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ]
})
