const mainImage = {
  name: "mainImage",
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

export default mainImage;
