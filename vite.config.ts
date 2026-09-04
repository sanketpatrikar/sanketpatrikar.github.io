import { globSync } from "node:fs";
import { basename } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, type UserConfig, type PluginOption } from "vite";

export default defineConfig(async ({ command }) => {
  const development = command === "serve";
  const posts = globSync("src/content/posts/*.mdx");
  const plugins: PluginOption[] = [
    tailwindcss(),
    tanstackStart({
      pages: posts.map((file) => ({ path: `/${basename(file, ".mdx")}` })),
      prerender: {
        autoSubfolderIndex: true,
        crawlLinks: false,
        enabled: true,
        retryCount: 3,
      },
      sitemap: { enabled: true, host: "https://sanketpatrikar.com" },
    }),
    viteReact(),
  ];

  if (development) {
    const { devtools } = await import("@tanstack/devtools-vite");
    plugins.unshift(devtools());
  }

  if (development || globSync("src/**/*.mdx").length > 0) {
    const [
      { default: mdx },
      { default: rehypeShiki },
      { default: remarkFrontmatter },
      { default: remarkMdxFrontmatter },
    ] = await Promise.all([
      import("@mdx-js/rollup"),
      import("@shikijs/rehype"),
      import("remark-frontmatter"),
      import("remark-mdx-frontmatter"),
    ]);
    plugins.push(
      mdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [
          [
            rehypeShiki,
            {
              theme: "catppuccin-frappe",
              langs: [],
              lazy: true,
              fallbackLanguage: "text",
              cache: development ? undefined : new Map(),
            },
          ],
        ],
      }),
    );
  }

  return {
    build: { rolldownOptions: { experimental: { lazyBarrel: true } } },
    assetsInclude: ["**/*.pdf"],
    staged: {
      "*.{js,jsx,ts,tsx}": ["pnpm exec oxfmt --write", "pnpm exec oxlint"],
      "*.{css,json,md,mdx,yml,yaml}": "pnpm exec oxfmt --write",
    },
    resolve: { tsconfigPaths: true },
    plugins,
    ssr: { noExternal: ["react-tweet"] },
  } satisfies UserConfig & { staged: Record<string, string | string[]> };
});
