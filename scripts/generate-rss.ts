import { Feed } from "feed";
import { readdirSync, readFileSync, writeFileSync } from "fs";
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

// Read all MDX posts
const postsDir = join(process.cwd(), "src/content/posts");
const files = readdirSync(postsDir).filter((file) => file.endsWith(".mdx"));

for (const file of files) {
	const slug = file.replace(".mdx", "");
	const content = readFileSync(join(process.cwd(), "src/content/posts", file), "utf-8");
	const { data: frontmatter } = matter(content);

	feed.addItem({
		title: frontmatter.title,
		author: [AUTHOR],
		id: `${SITE_URL}/posts/${slug}`,
		link: `${SITE_URL}/posts/${slug}`,
		date: new Date(frontmatter.date),
	});
}

// Write feed to dist
writeFileSync("dist/feed.xml", feed.rss2());
console.log("RSS feed generated successfully at dist/feed.xml");
