import { Link, createFileRoute } from "@tanstack/react-router";

import { SocialLinks } from "@/components/SocialLinks";
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
		<main className="mx-auto w-full max-w-[44rem] px-6 pb-24 pt-12 sm:px-10 md:mx-0 md:px-12 md:pt-16 lg:px-16">
			<section>
				<SocialLinks className="mb-8" />

				<h1 className="font-display text-[2.15rem] leading-tight tracking-[-0.035em] text-[var(--heading)] sm:text-[2.6rem]">
					Hi, I&apos;m Sanket Patrikar.
				</h1>

				<div className="mt-6 space-y-5 text-base leading-[1.55] sm:text-lg">
					<p>
						<strong className="font-semibold text-[var(--heading)]">Right now,</strong> I
						spend most of my time building software and making old systems easier to work
						with. Alongside that, I tinker with tools, chase oddly specific bugs, and write
						when I have something worth saying.
					</p>
					<p className="text-muted">
						Based in Nagpur, India. Usually somewhere between code, docs, and a terminal.
					</p>
				</div>
			</section>

			<section className="projects-section mt-24" aria-labelledby="projects-heading">
				<h2 id="projects-heading" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
					Current projects
				</h2>
				<p className="mt-6 text-lg text-muted">Projects will appear here when they are ready.</p>
			</section>

			<section className="mt-24" aria-labelledby="posts-heading">
				<div className="flex items-center justify-between gap-6">
					<h2 id="posts-heading" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
						Posts
					</h2>
					<Link to="/posts" className="text-sm text-accent hover:text-[var(--accent-strong)]">
						All posts <span aria-hidden="true">→</span>
					</Link>
				</div>

				<div className="mt-8">
					<p className="font-display text-2xl text-[var(--heading)]">Coming soon.</p>
					<p className="mt-2 max-w-lg leading-relaxed text-muted">
						Notes, ideas, and things worth writing down will show up here.
					</p>
				</div>
			</section>
		</main>
	);
}
