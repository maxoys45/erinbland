import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'erinbland',

  projectId: 'ys85ypuo',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev) =>
      prev.filter((item) => item.templateId !== 'copy' && item.templateId !== 'navigation'),
  },
})
