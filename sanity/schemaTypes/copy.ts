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
    }),
    defineField({
      name: 'copyright',
      title: 'Footer copyright',
      type: 'string',
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
