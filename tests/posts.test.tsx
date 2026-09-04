import { createElement } from "react";
import { renderToReadableStream } from "react-dom/server";
import { afterEach, expect, test, vi } from "vitest";

vi.mock("../src/lib/posts", () => ({
  postModules: {
    "../content/posts/example.mdx": async () => ({
      default: () => createElement("article", null, "An article available without JavaScript"),
      frontmatter: { title: "Example", date: "2026-09-04" },
    }),
  },
}));

import { Route } from "../src/routes/$slug";

afterEach(() => vi.restoreAllMocks());

test("article body is present during server rendering", async () => {
  vi.spyOn(Route, "useLoaderData").mockReturnValue({
    slug: "example",
    frontmatter: { title: "Example", date: "2026-09-04" },
  });
  const Post = Route.options.component!;
  const stream = await renderToReadableStream(createElement(Post));
  await stream.allReady;
  expect(await new Response(stream).text()).toContain(
    "<article>An article available without JavaScript</article>",
  );
});

test("loader returns serializable metadata and rejects unknown slugs", async () => {
  const loader = Route.options.loader;
  if (typeof loader !== "function") throw new Error("post loader missing");
  const load = (slug: string) => loader({ params: { slug } } as Parameters<typeof loader>[0]);
  expect(await load("example")).toEqual({
    slug: "example",
    frontmatter: { title: "Example", date: "2026-09-04" },
  });
  await expect(load("missing")).rejects.toMatchObject({ isNotFound: true });
});
