import type { Cell } from "./cell";
import type { PortableTextBlock } from "@portabletext/types";

export type Work = {
  slug: {
    current: string;
  };
  year: string;
  title: string;
  text: PortableTextBlock;
  preview: Cell[];
  content: Cell[];
};
