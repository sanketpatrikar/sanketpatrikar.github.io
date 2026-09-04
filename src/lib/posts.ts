import type { ComponentType } from "react";

type PostModule = {
  default: ComponentType;
  frontmatter: {
    date: string;
    description?: string;
    title: string;
  };
};

export const postModules = import.meta.glob<PostModule>("../content/posts/*.mdx");
