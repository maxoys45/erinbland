import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
