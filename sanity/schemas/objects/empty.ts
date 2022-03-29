const empty = {
  name: "empty",
  type: "object",
  title: "Empty",
  hidden: true,
  description: "An empty block to create space between sections",
  fields: [
    {
      name: "size",
      title: "Size",
      type: "string",
      options: {
        list: [{ title: "Small", value: "small" }],
        layout: "radio",
      },
    },
  ],
  initialValue: () => ({
    size: "small",
  }),
  preview: {
    prepare() {
      return {
        title: `Empty cell`,
      };
    },
  },
};

export default empty;
