import { Link, createFileRoute } from "@tanstack/react-router";

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
		<div className="min-h-screen pt-20 px-6">
			<div className="max-w-3xl">
				<div className="flex">
					<Link
						to="/"
						className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-8 hover:bg-gray-300 transition-colors"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M19 12H5M12 19l-7-7 7-7" />
						</svg>
					</Link>
					<h1 className="ml-5 text-3xl md:text-5xl [letter-spacing:-0.052em] mb-8">
						Posts
					</h1>
				</div>
				<div className="space-y-3">
					{posts.map((post) => (
						<div key={post.slug} className="flex gap-4 items-baseline">
							<span className="text-sm text-gray-400 w-24 shrink-0">{post.date}</span>
							<Link to={`/${post.slug}`} className="hover:underline">
								{post.title}
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
