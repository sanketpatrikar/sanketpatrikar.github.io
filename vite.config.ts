import mdx from "@mdx-js/rollup";
import rehypeShiki from "@shikijs/rehype";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

const config = defineConfig({
  assetsInclude: ["**/*.pdf"],
  staged: {
    "*.{js,jsx,ts,tsx}": ["pnpm exec oxfmt --write", "pnpm exec oxlint"],
    "*.{css,json,md,mdx,yml,yaml}": "pnpm exec oxfmt --write",
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        autoSubfolderIndex: true,
        crawlLinks: true,
        enabled: true,
        retryCount: 3,
      },
      sitemap: {
        enabled: true,
        host: "https://sanketpatrikar.com",
      },
    }),
    viteReact(),
    mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [
        [
          rehypeShiki,
          {
            theme: "catppuccin-frappe",
          },
        ],
      ],
    }),
  ],
  ssr: {
    noExternal: ["react-tweet"],
  },
});

export default config;
