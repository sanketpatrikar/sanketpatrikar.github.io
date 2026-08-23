import { Link, createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { getCanonicalLink, getSeoMeta } from "@/lib/seo";

type PostModule = {
	frontmatter: {
		date: string;
		title: string;
	};
};

const postModules = import.meta.glob<PostModule>("../content/posts/*.mdx", { eager: true });

const posts = Object.entries(postModules).map(([path, module]) => {
	const slug = path.replace("../content/posts/", "").replace(".mdx", "");

	return {
		date: module.frontmatter.date,
		slug,
		title: module.frontmatter.title,
	};
});

export const Route = createFileRoute("/posts")({
	component: Posts,
	head: () => ({
		links: [getCanonicalLink("/posts")],
		meta: getSeoMeta({
			title: "Posts | Sanket Patrikar",
			description: "Writing by Sanket Patrikar about software engineering and building for the web.",
			path: "/posts",
		}),
	}),
});

function Posts() {
	return (
		<main className="mx-auto w-full max-w-4xl py-16">
			<Header>Posts</Header>
			<div className="space-y-5">
				{posts.length > 0 ? (
					posts.map((post) => (
						<div
							key={post.slug}
							className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6"
						>
							<span className="text-xs uppercase tracking-[0.3em] text-muted w-28 shrink-0">
								{post.date}
							</span>
							<Link
								to="/$slug"
								params={{ slug: post.slug }}
								className="text-lg md:text-xl font-display hover:text-accent transition"
							>
								{post.title}
							</Link>
						</div>
					))
				) : (
					<div className="text-muted">Nothing here yet.</div>
				)}
			</div>
		</main>
	);
}
