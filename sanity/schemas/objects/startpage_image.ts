const startpageImage = {
  name: "startpageImage",
  type: "image",
  fields: [
    {
      name: "alt",
      title: "Alternative text",
      type: "string",
      description: "Important for SEO and accessiblity.",
      validation: (Rule: any) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "width",
      title: "Width",
      description: "From 0 to 100",
      type: "number",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "spacingTop",
      title: "Spacing top",
      description: "From 0 to 100",
      type: "number",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "spacingBottom",
      title: "Spacing bottom",
      description: "From 0 to 100",
      type: "number",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "position",
      type: "string",
      title: "Position",
      options: {
        isHighlighted: true,
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
          { title: "Bottom", value: "bottom" },
        ],
        layout: "radio",
      },
    },
  ],
  preview: {
    select: {
      title: "alt",
      media: "asset",
    },
    prepare({ media, title }: any) {
      return {
        media,
        title,
      };
    },
  },
};

export default startpageImage;
