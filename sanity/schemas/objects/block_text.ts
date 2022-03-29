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
