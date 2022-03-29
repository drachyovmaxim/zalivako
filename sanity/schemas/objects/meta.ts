const meta = {
  title: "Meta information",
  name: "metaFields",
  type: "object",
  fields: [
    {
      name: "metaTitle",
      title: "Meta title",
      type: "string",
    },
    {
      name: "metaDescription",
      title: "Meta description",
      type: "text",
    },
    {
      name: "openGraphImage",
      title: "Open Graph image",
      type: "image",
      description: "Ideal size for open graph images is 1200 x 600",
    },
  ],
};

export default meta;
