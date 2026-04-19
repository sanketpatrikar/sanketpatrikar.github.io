import mdx from "@mdx-js/rollup";
import rehypeShiki from "@shikijs/rehype";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite-plus";
import viteTsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
	staged: {
		"*": "vp check --fix",
	},
	fmt: {
		ignorePatterns: ["node_modules", "dist", "build", ".tanstack", "routeTree.gen.ts"],
		indentWidth: 4,
		lineWidth: 100,
		semi: true,
		trailingCommas: "es5",
		bracketSpacing: true,
		experimentalSortImports: {
			groupSpecifiers: true,
			ignoreCase: true,
			ignoreDeclarationSort: true,
		},
		experimentalSortPackageJson: true,
		tabWidth: 4,
		useTabs: true,
	},
	lint: {
		categories: {
			correctness: "error",
			suspicious: "error",
			style: "off",
			perf: "warn",
		},
		rules: {
			"react-in-jsx-scope": "off",
		},
		plugins: ["react", "jsx-a11y", "react-perf", "import", "promise"],
		env: {
			browser: true,
		},
		ignorePatterns: ["node_modules", "dist", "build", ".tanstack", "routeTree.gen.ts"],
		options: {
			typeAware: true,
			typeCheck: true,
		},
	},
	assetsInclude: ["**/*.pdf"],
	plugins: [
		devtools(),
		// This is the plugin that enables path aliases
		viteTsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
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
				host: "https://sanketpatrikar.github.io",
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
