import React from "react";
import Link from "next/link";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const serializers: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link passHref href={value.href}>
          <a rel={rel} target={value.blank ? "_blank" : "_self"}>
            {children}
          </a>
        </Link>
      );
    },
  },
};

const TextParser = ({ data }: { data: PortableTextBlock }) => (
  <PortableText value={data} components={serializers} />
);

export default TextParser;
