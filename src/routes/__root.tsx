import { HeadContent, Scripts, createRootRoute, useRouterState } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const preloadReloadScript = {
	__html: 'window.addEventListener("vite:preloadError", () => { window.location.reload() })',
};

export const Route = createRootRoute({
	head: () => ({
		links: [
			{
				href: appCss,
				rel: "stylesheet",
			},
			{
				rel: "alternate",
				type: "application/rss+xml",
				title: "Posts by Sanket Patrikar",
				href: "https://sanketpatrikar.github.io/feed.xml",
			},
		],
		meta: [
			{
				charSet: "utf-8",
			},
			{
				content: "width=device-width, initial-scale=1",
				name: "viewport",
			},
			{
				title: "Sanket Patrikar",
			},
		],
	}),

	shellComponent: RootDocument,
});

function RouteTransition({ children }: { children: React.ReactNode }) {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});

	return <div key={pathname}>{children}</div>;
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
				<script dangerouslySetInnerHTML={preloadReloadScript} />
			</head>
			<body className="min-h-screen px-6 py-10 md:px-10">
				<RouteTransition>{children}</RouteTransition>
				<Scripts />
			</body>
		</html>
	);
}
