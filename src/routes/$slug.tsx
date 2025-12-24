import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
const postModules = import.meta.glob("../content/posts/*.mdx");

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

	const [Post, setPost] = useState(undefined);

	useEffect(() => {
		loader().then((Post) => setPost(() => Post.default));
	}, [loader]);

	if (!Post) {
		return <div>loading...</div>;
	}
	return <Post />;
}
