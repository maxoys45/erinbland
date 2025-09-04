import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageWithCaption',
  title: 'Image with caption',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      media: 'image',
      filename: 'image.asset.originalFilename',
    },
    prepare({media, filename}) {
      return {
        title: filename || 'Untitled image',
        media,
      }
    },
  },
})
