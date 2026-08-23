import { HeadContent, Scripts, createRootRoute, useRouterState } from "@tanstack/react-router";

import { NotFound } from "@/components/NotFound";
import { getSeoMeta } from "@/lib/seo";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		links: [
			{
				href: appCss,
				rel: "stylesheet",
			},
			{
				href: "/favicon.svg",
				rel: "icon",
				type: "image/svg+xml",
			},
			// To help RSS readers find your feed
			{
				rel: "alternate",
				type: "application/rss+xml",
				title: "Posts by Sanket Patrikar",
				href: "https://sanketpatrikar.com/feed.xml",
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
			...getSeoMeta(),
		],
	}),

	notFoundComponent: NotFound,
	shellComponent: RootDocument,
});

function RouteTransition({ children }: { children: React.ReactNode }) {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});

	return (
		<div key={pathname} className="page-enter">
			{children}
		</div>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
				<script
					dangerouslySetInnerHTML={{
						__html: reloadOnPreloadErrorScript,
					}}
				/>
			</head>
			<body className="min-h-screen bg-white text-[#2f3340] pt-(--header-offset) px-4 sm:px-6 antialiased">
				<RouteTransition>{children}</RouteTransition>
				<Scripts />
			</body>
		</html>
	);
}

const reloadOnPreloadErrorScript = `
(function () {
	var reload = function () {
		window.location.reload()
	}

	window.addEventListener("vite:preloadError", function (event) {
		event.preventDefault()
		reload()
	})

	window.addEventListener("error", function (event) {
		if (
			event.message &&
			event.message.includes("Failed to fetch dynamically imported module")
		) {
			event.preventDefault()
			reload()
		}
	})

	window.addEventListener("unhandledrejection", function (event) {
		if (
			event.reason &&
			String(event.reason).includes("Failed to fetch dynamically imported module")
		) {
			event.preventDefault()
			reload()
		}
	})
})()
`;
