const blockText = {
  title: "Text",
  name: "blockText",
  type: "object",
  fields: [
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
    prepare() {
      return {
        title: "Text Section",
      };
    },
  },
};

export default blockText;
