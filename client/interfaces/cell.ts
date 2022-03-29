import type { PortableTextBlock } from "@portabletext/types";

export type Cell = {
  _type: string;
  videoURL: string;
  position: string;
  width: number;
  spacingTop: number;
  spacingBottom: number;
  fontSize: number;
  lineHeight: number;
  text: PortableTextBlock;
  alt: string;
};
