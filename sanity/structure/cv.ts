import S from "@sanity/desk-tool/structure-builder";

export const CV = S.listItem()
  .title("CV")
  .child(S.editor().schemaType("cv").documentId("cv"));
