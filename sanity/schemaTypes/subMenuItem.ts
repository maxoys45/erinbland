import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subMenuItem',
  title: 'Sub menu item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{type: 'page'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'page.title',
    },
  },
})
