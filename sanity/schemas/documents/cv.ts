import slug from "slugify";

const cv = {
  name: "cv",
  title: "CV",
  type: "document",
  fieldsets: [
    {
      name: "meta",
      title: "Meta infomation",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      type: "metaFields",
      name: "meta",
      fieldset: "meta",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          type: "block",
          lists: [],
          styles: [],
          marks: {
            decorators: [],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                    validation: (Rule: any) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ["https", "http", "mailto", "tel"],
                      }),
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};

export default cv;
