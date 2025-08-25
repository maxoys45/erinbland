import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Leave blank if you don't need a title.",
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      description: 'This is the URL for the page, for most pages just click "generate".',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: "Leave blank if you don't need a description.",
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'imageWithCaption'}],
    }),
    defineField({
      name: 'contentBlock',
      title: 'Content block',
      type: 'imageWithCaption',
      description: 'This is used on the about page.',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      description: 'This is used on the contact page.',
      of: [{type: 'links'}],
    }),
  ],
})
