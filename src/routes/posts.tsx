import { Link, createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";

const postModules = import.meta.glob("../content/posts/*.mdx", { eager: true });

const posts = Object.entries(postModules).map(([path, module]) => {
	const slug = path.replace("../content/posts/", "").replace(".mdx", "");

	return {
		date: module.frontmatter.date,
		slug,
		title: module.frontmatter.title,
	};
});

export const Route = createFileRoute("/posts")({ component: Posts });

function Posts() {
	return (
		<div>
			<div className="max-w-3xl">
				<Header> Posts </Header>
				<div className="space-y-3">
					{posts.length > 0 ? (
						posts.map((post) => (
							<div key={post.slug} className="flex gap-4 items-baseline">
								<span className="text-sm text-gray-400 w-24 shrink-0">
									{post.date}
								</span>
								<Link to={`/${post.slug}`} className="hover:underline">
									{post.title}
								</Link>
							</div>
						))
					) : (
						<div className="text-gray-600">Nothing here yet.</div>
					)}
				</div>
			</div>
		</div>
	);
}
