import { Link, createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

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
		<main className="mx-auto w-full max-w-[44rem] px-6 pb-24 pt-12 sm:px-10 md:mx-auto md:px-12 md:pt-16 lg:px-16">
			<section>
				<SocialLinks className="mb-8" />

				<h1 className="font-display text-[2.15rem] leading-tight tracking-[-0.035em] text-[var(--heading)] sm:text-[2.6rem]">
					Hi, I&apos;m Sanket Patrikar.
				</h1>

				<div className="mt-6 space-y-5 text-base leading-[1.55] sm:text-lg">
					<p>
						<strong className="font-semibold text-[var(--heading)]">Right now,</strong> I
						spend most of my time building software, trying to keep up with the latest AI
						releases, and reading up on the current in-trend thing on X.
					</p>
					<p>
						Alongside that, I tinker with tools &amp; technologies, and write when I have
						something worth sharing.
					</p>
					<p className="flex items-center gap-2 text-muted">
						<MapPin className="size-4 shrink-0" aria-hidden="true" />
						Nagpur, India.
					</p>
				</div>

				<Link
					to="/resume"
					className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--heading)] transition-colors hover:text-[var(--accent)]"
				>
					View resume <span aria-hidden="true">→</span>
				</Link>
			</section>

			<section className="projects-section mt-24" aria-labelledby="projects-heading">
				<h2 id="projects-heading" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
					Current projects
				</h2>
				<p className="mt-6 text-lg text-muted">Projects will appear here when they are ready.</p>
			</section>
		</main>
	);
}
