import { Link, createFileRoute } from "@tanstack/react-router";

import { getCanonicalLink, homeStructuredData } from "@/lib/seo";

export const Route = createFileRoute("/")({
	component: App,
	head: () => ({
		links: [getCanonicalLink()],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(homeStructuredData),
			},
		],
	}),
});

function App() {
	return (
		<main className="mx-auto w-full max-w-3xl px-6 pb-20 pt-12 sm:px-10 md:mx-0 md:px-12 md:pt-20 lg:px-16">
			<section>
				<div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
					<a href="https://x.com/patrikarsanket" className="nav-link" rel="me">
						X / Twitter
					</a>
					<a href="https://github.com/sanketpatrikar" className="nav-link" rel="me">
						GitHub
					</a>
					<a href="https://linkedin.com/in/sanketpatrikar" className="nav-link" rel="me">
						LinkedIn
					</a>
				</div>

				<h1 className="font-display text-4xl leading-tight tracking-[-0.035em] text-[var(--heading)] sm:text-5xl">
					Hi, I&apos;m Sanket Patrikar.
				</h1>

				<div className="mt-7 space-y-5 text-lg leading-[1.65] sm:text-xl">
					<p>
						I&apos;m a software engineer based in Nagpur, India. I enjoy the unglamorous
						parts of software: understanding a mature codebase, finding the real bottleneck,
						and making the next change easier than the last.
					</p>
					<p className="text-muted">
						I care about clear interfaces, fast feedback loops, and infrastructure that
						supports the product instead of getting in its way.
					</p>
				</div>

				<div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--border)] pt-6 text-sm font-semibold">
					<a href="mailto:sanketspatrikar@gmail.com" className="text-accent hover:text-[var(--accent-strong)]">
						Say hello
					</a>
					<Link to="/posts" className="nav-link">
						Read posts
					</Link>
					<a href="/resume-sanket-patrikar.pdf" className="nav-link">
						Resume
					</a>
				</div>
			</section>
		</main>
	);
}
