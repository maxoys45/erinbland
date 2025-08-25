import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'links',
  title: 'Links',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
  },
})
