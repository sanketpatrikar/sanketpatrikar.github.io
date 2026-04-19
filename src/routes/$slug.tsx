import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";

type PostModule = {
	default: React.ComponentType;
};

const postModules = import.meta.glob<PostModule>("../content/posts/*.mdx");

export const Route = createFileRoute("/$slug")({
	component: PostComponent,

	loader: async ({ params }) => {
		const path = `../content/posts/${params.slug}.mdx`;

		if (!postModules[path]) {
			throw notFound();
		}

		return { slug: params.slug };
	},
});

function PostComponent() {
	const { slug } = Route.useParams();
	const path = `../content/posts/${slug}.mdx`;
	const loader = postModules[path];

	const [PostComponentNode, setPostComponentNode] = useState<React.ComponentType | null>(null);

	useEffect(() => {
		loader().then((loadedPost) => setPostComponentNode(() => loadedPost.default));
	}, [loader]);

	if (!PostComponentNode) {
		return null;
	}

	return <PostComponentNode />;
}
