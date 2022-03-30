import type { PortableTextBlock } from "@portabletext/types";
import type { Cell } from "./cell";

export type Project = {
  title: string;
  text: PortableTextBlock;
  alt?: string;
  content: Cell[];
};
