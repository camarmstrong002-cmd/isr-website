import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'meeting',
  title: 'Meeting',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'venue', title: 'Venue', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({
      name: 'agendaDays',
      title: 'Agenda Days',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'dayTitle', title: 'Day Title', type: 'string' }),
          defineField({ name: 'room', title: 'Room', type: 'string' }),
          defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                defineField({ name: 'time', title: 'Time', type: 'string' }),
                defineField({ name: 'description', title: 'Description', type: 'text' }),
              ]
            }]
          })
        ]
      }]
    }),
    defineField({ name: 'notes', title: 'Notes', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'attendees', title: 'Attendees', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'conclusions', title: 'Conclusions', type: 'array', of: [{ type: 'block' }] }),
  ]
})
