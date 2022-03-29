import slug from "slugify";

const work = {
  name: "work",
  title: "Works",
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
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) => slug(input, { lower: true }),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Year",
      name: "year",
      type: "date",
      options: {
        dateFormat: "DD.MM.YY",
        calendarTodayLabel: "Today",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "preview",
      type: "array",
      of: [
        {
          name: "empty",
          title: "Empty cell",
          type: "empty",
        },
        { type: "blockText" },
        {
          name: "image",
          title: "Image",
          type: "startpageImage",
        },
        {
          name: "video",
          title: "Video",
          type: "file",
          options: {
            accept: "video/*",
          },
        },
      ],
    },
    {
      name: "content",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "mainImage",
        },
        {
          name: "audio",
          title: "Audio",
          type: "file",
          options: {
            accept: "audio/*",
          },
        },
        {
          name: "video",
          title: "Video",
          type: "file",
          options: {
            accept: "video/*",
          },
        },
      ],
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
            annotations: [],
          },
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Year",
      name: "year",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
};

export default work;
