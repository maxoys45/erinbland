import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Menu item',
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
    defineField({
      name: 'children',
      title: 'Sub menu items',
      type: 'array',
      description: 'Leave blank if page does not have any sub menu items.',
      of: [{type: 'subMenuItem'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'page.title',
    },
  },
})
