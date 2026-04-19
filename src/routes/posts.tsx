import { Link, createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";

type PostModule = {
	frontmatter: {
		date: string;
		title: string;
	};
};

const postModules = import.meta.glob<PostModule>("../content/posts/*.mdx", { eager: true });

const posts = Object.entries(postModules)
	.map(([path, module]) => {
		const slug = path.replace("../content/posts/", "").replace(".mdx", "");

		return {
			date: module.frontmatter.date,
			slug,
			title: module.frontmatter.title,
		};
	})
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const Route = createFileRoute("/posts")({ component: Posts });

function Posts() {
	return (
		<main className="mx-auto w-full max-w-3xl pb-16">
			<Header>Posts</Header>
			<div className="space-y-4">
				{posts.length > 0 ? (
					posts.map((post) => (
						<div
							key={post.slug}
							className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6"
						>
							<span className="w-28 shrink-0 text-sm text-muted">{post.date}</span>
							<Link
								to="/$slug"
								params={{ slug: post.slug }}
								className="text-[1.1rem]"
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
