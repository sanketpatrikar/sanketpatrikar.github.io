import { Feed } from "feed";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

// Site info
const SITE_URL = "https://sanketpatrikar.github.io";
const AUTHOR = {
	name: "Sanket Patrikar",
	email: "sanketspatrikar@gmail.com",
	link: SITE_URL,
};

// Create feed
const feed = new Feed({
	id: SITE_URL,
	title: "Sanket Patrikar",
	description:
		"Full-stack developer focused on building simple, scalable products. Working primarily with React, TypeScript, and Postgres.",
	link: SITE_URL,
	language: "en",
	favicon: `${SITE_URL}/favicon.ico`,
	copyright: `All rights reserved ${new Date().getFullYear()} Sanket Patrikar`,
	author: AUTHOR,
});

// Read all MDX posts (handle missing directory gracefully)
const postsDir = join(process.cwd(), "src/content/posts");
const files = existsSync(postsDir)
	? readdirSync(postsDir).filter((file) => file.endsWith(".mdx"))
	: [];

for (const file of files) {
	const slug = file.replace(".mdx", "");
	const content = readFileSync(join(postsDir, file), "utf-8");
	const { data: frontmatter } = matter(content);

	feed.addItem({
		title: frontmatter.title,
		author: [AUTHOR],
		id: `${SITE_URL}/${slug}`,
		link: `${SITE_URL}/${slug}`,
		date: new Date(frontmatter.date),
	});
}

// Write feed to dist (ensure directory exists)
const distDir = join(process.cwd(), "dist/client");
if (!existsSync(distDir)) {
	mkdirSync(distDir, { recursive: true });
}

writeFileSync(join(distDir, "feed.xml"), feed.rss2());
console.log(`RSS feed generated with ${files.length} items at dist/client/feed.xml`);
