import S from "@sanity/desk-tool/structure-builder";

export const Work = S.listItem()
  .title("Work")
  .child(
    S.documentTypeList("work")
      .title("Work")
      .filter("_type == $type")
      .params({ type: "work" })
  );
