import { createFileRoute, notFound } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { getCanonicalLink, getSeoMeta } from "@/lib/seo";
import { postModules } from "@/lib/posts";

const postComponents = Object.fromEntries(
  Object.entries(postModules).map(([path, load]) => [path, lazy(load)]),
);

export const Route = createFileRoute("/$slug")({
  component: PostComponent,

  loader: async ({ params }) => {
    const path = `../content/posts/${params.slug}.mdx`;
    const load = postModules[path];

    if (!load) {
      throw notFound();
    }

    const post = await load();
    return { frontmatter: post.frontmatter, slug: params.slug };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {};
    }

    const { frontmatter, slug } = loaderData;
    const description = frontmatter.description ?? `Read ${frontmatter.title} by Sanket Patrikar.`;
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
  const { slug } = Route.useLoaderData();
  const Post = postComponents[`../content/posts/${slug}.mdx`];

  if (!Post) {
    throw notFound();
  }

  return (
    <Suspense fallback={<p role="status">Loading article…</p>}>
      <Post />
    </Suspense>
  );
}
