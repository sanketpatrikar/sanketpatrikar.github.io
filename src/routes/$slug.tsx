import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState, type ComponentType } from "react";

import { getCanonicalLink, getSeoMeta } from "@/lib/seo";

type PostModule = {
	default: ComponentType;
	frontmatter: {
		date: string;
		description?: string;
		title: string;
	};
};

const postModules = import.meta.glob<PostModule>("../content/posts/*.mdx");

export const Route = createFileRoute("/$slug")({
	component: PostComponent,

	loader: async ({ params }) => {
		const path = `../content/posts/${params.slug}.mdx`;
		const loadPost = postModules[path];

		if (!loadPost) {
			throw notFound();
		}

		const post = await loadPost();
		return { frontmatter: post.frontmatter, slug: params.slug };
	},

	head: ({ loaderData }) => {
		if (!loaderData) {
			return {};
		}

		const { frontmatter, slug } = loaderData;
		const description =
			frontmatter.description ?? `Read ${frontmatter.title} by Sanket Patrikar.`;
		const path = `/${slug}`;

		return {
			links: [getCanonicalLink(path)],
			meta: getSeoMeta({
				title: `${frontmatter.title} | Sanket Patrikar`,
				description,
				path,
				type: "article",
			}),
		};
	},
});

function PostComponent() {
	const { slug } = Route.useParams();
	const path = `../content/posts/${slug}.mdx`;
	const loader = postModules[path];

	const [Post, setPost] = useState<ComponentType>();

	useEffect(() => {
		loader().then((Post) => setPost(() => Post.default));
	}, [loader]);

	if (!Post) {
		return null;
	}
	return <Post />;
}
