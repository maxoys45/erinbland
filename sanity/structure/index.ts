import type {StructureResolver} from 'sanity/structure'
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
      // Website copy
      S.listItem()
        .id('copy')
        .schemaType('copy')
        .title('Website copy')
        .child(S.editor().id('copy').schemaType('copy').documentId('copy')),

      // Navigation
      S.listItem()
        .id('navigation')
        .schemaType('navigation')
        .title('Main menu')
        .child(S.editor().id('navigation').schemaType('navigation').documentId('navigation')),

      // Divider
      S.divider(),

      /**
       * The rest of the document types
       * - Must exclude any specified above ^
       */
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'navigation' && item.getId() !== 'copy',
      ),

      // How to show specific pages in a new folder:

      // S.listItem()
      //   .title('Melon')
      //   .child(
      //     S.documentList()
      //       .apiVersion('2025-08-20')
      //       .title('Melon child')
      //       .schemaType('page')
      //       .filter('_type == "page" && title == "Activewear"'),
      //   ),
    ])
