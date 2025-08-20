import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'copy',
  title: 'Copy',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Brand name',
      type: 'string',
      initialValue: 'erin bland',
    }),
    defineField({
      name: 'copyright',
      title: 'Footer copyright',
      type: 'string',
      initialValue: 'Copyright © All rights reserved.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Copy',
      }
    },
  },
})
