import type { Cell } from "./cell";

export type Work = {
  slug: {
    current: string;
  };
  year: string;
  preview: Cell[];
};
