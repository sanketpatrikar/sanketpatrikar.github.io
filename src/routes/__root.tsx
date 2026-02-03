import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"

import appCss from "../styles.css?url"

export const Route = createRootRoute({
	head: () => ({
		links: [
			{
				href: appCss,
				rel: "stylesheet",
			},
			{
				href: "https://fonts.googleapis.com",
				rel: "preconnect",
			},
			{
				crossOrigin: "anonymous",
				href: "https://fonts.gstatic.com",
				rel: "preconnect",
			},
			{
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,100..900&family=Geist:wght@100..900&display=swap",
				rel: "stylesheet",
			},
			// To help RSS readers find your feed
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
})

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
				<script
					dangerouslySetInnerHTML={{
						__html:
							'window.addEventListener("vite:preloadError", () => { window.location.reload() })',
					}}
				/>
			</head>
			<body className="min-h-screen bg-white text-[#1f1a16] pt-(--header-offset) px-6 antialiased">
				{children}
				<Scripts />
			</body>
		</html>
	)
}
