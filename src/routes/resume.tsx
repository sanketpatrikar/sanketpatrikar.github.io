import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";

import { getCanonicalLink, getSeoMeta } from "@/lib/seo";

export const Route = createFileRoute("/resume")({
	component: Resume,
	head: () => ({
		links: [getCanonicalLink("/resume")],
		meta: getSeoMeta({
			title: "Resume | Sanket Patrikar",
			description:
				"Resume of Sanket Patrikar, a software engineer specialising in React, Node.js, PostgreSQL, and AWS.",
			path: "/resume",
		}),
	}),
});

const resumePdf = "/resume-sanket-patrikar.pdf";

function SectionTitle({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="border-b border-[var(--border)] pb-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
			{children}
		</h2>
	);
}

function Resume() {
	return (
		<main className="mx-auto w-full max-w-4xl px-6 pb-28 pt-12 sm:px-10 md:mx-0 md:px-12 md:pt-16 lg:px-16">
			<header className="border-b border-[var(--border)] pb-10">
				<p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Resume</p>
				<h1 className="mt-4 font-display text-4xl leading-none tracking-[-0.045em] text-[var(--heading)] sm:text-5xl">
					Sanket Patrikar
				</h1>
				<p className="mt-4 text-lg leading-relaxed text-[var(--heading)]">
					Software Engineer <span className="text-muted">|</span> React, Node.js, PostgreSQL, AWS <span className="text-muted">|</span>{" "}
					Modernization &amp; Performance
				</p>
				<div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm leading-relaxed text-muted">
					<span>Nagpur, Maharashtra</span>
					<span aria-hidden="true">|</span>
					<a className="nav-link" href="tel:+917972933216">
						+91 7972933216
					</a>
					<span aria-hidden="true">|</span>
					<a className="nav-link" href="mailto:sanketspatrikar@gmail.com">
						sanketspatrikar@gmail.com
					</a>
					<span aria-hidden="true">|</span>
					<a className="nav-link" href="https://linkedin.com/in/sanketpatrikar">
						linkedin.com/in/sanketpatrikar
					</a>
					<span aria-hidden="true">|</span>
					<a className="nav-link" href="https://sanketpatrikar.com">
						sanketpatrikar.com
					</a>
				</div>
			</header>

			<section className="mt-14" aria-labelledby="experience-heading">
				<SectionTitle>Experience</SectionTitle>
				<div className="mt-8">
					<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
						<div>
							<h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--heading)]">Kizora Software Pvt. Ltd.</h3>
							<p className="mt-1 text-muted">Software Engineer · Nagpur, Maharashtra</p>
						</div>
						<p className="shrink-0 text-sm font-medium text-muted">Sep 2023 - Present</p>
					</div>
					<ul className="mt-7 list-disc space-y-3 pl-5 leading-relaxed marker:text-[var(--accent)]">
						<li>
							Contributed to modernization and feature development for a US-based waste management and recycling platform used by admins and end users for operations, monitoring, reporting, and sensor-data ingestion.
						</li>
						<li>Improved developer experience, frontend performance, and maintainability in a legacy React codebase.</li>
						<li>Migrated the legacy React application from Webpack to Vite, reducing build times from 15 minutes to 10 seconds and bundle size from 35 MB to 15 MB.</li>
						<li>Upgraded the frontend from React 15 to React 18, refactoring core class components to hooks and modernizing legacy modules for continued development.</li>
						<li>Migrated routing from React Router v4 to v7 and built a compatibility HOC to support gradual migration between class and function components.</li>
						<li>Implemented lazy loading, chunking, and module caching to reduce the initial JavaScript payload and improve load times after repeat visits.</li>
						<li>Upgraded Node.js from v8 to v24 LTS and modernized dependencies, enabling tree-shaking, reducing bundle size, lowering dependency count, and reducing vulnerable packages.</li>
						<li>Load tested report-specific endpoints using Apache JMeter, identified concurrency bottlenecks, and contributed to shifting read-heavy workloads to a reader database instance.</li>
						<li>Optimized high-frequency SQL queries for scheduled reports through indexing and query restructuring, reducing execution time from 3 seconds to 500 ms.</li>
						<li>Performed preliminary frontend security testing using OWASP ZAP and contributed fixes including improved security headers, tighter CSP rules, and more secure high-value cookies.</li>
						<li>Worked on AWS infrastructure restructuring with Terraform, adding an NLB/ALB architecture to support AWS WAF while continuing to accept TCP-based sensor payloads.</li>
					</ul>
				</div>
			</section>

			<section className="mt-14" aria-labelledby="skills-heading">
				<SectionTitle>Technical Skills</SectionTitle>
				<dl className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-[10rem_1fr]">
					<dt className="font-semibold text-[var(--heading)]">Frontend</dt>
					<dd className="m-0 leading-relaxed text-muted">React, TypeScript / JavaScript, Vite, React Query, HTML, CSS</dd>
					<dt className="font-semibold text-[var(--heading)]">Backend / Database</dt>
					<dd className="m-0 leading-relaxed text-muted">Node.js, PostgreSQL, MySQL, Query Optimization</dd>
					<dt className="font-semibold text-[var(--heading)]">Cloud / DevOps</dt>
					<dd className="m-0 leading-relaxed text-muted">AWS, Docker, Terraform</dd>
					<dt className="font-semibold text-[var(--heading)]">Testing / Security</dt>
					<dd className="m-0 leading-relaxed text-muted">Apache JMeter, OWASP ZAP, Vitest, Playwright</dd>
					<dt className="font-semibold text-[var(--heading)]">Tools</dt>
					<dd className="m-0 leading-relaxed text-muted">Git, OpenAI Codex, Claude Code</dd>
				</dl>
			</section>

			<section className="mt-14" aria-labelledby="education-heading">
				<SectionTitle>Education</SectionTitle>
				<div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
					<div>
						<h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--heading)]">KDK College of Engineering</h3>
						<p className="mt-1 text-muted">Bachelor of Engineering in Information Technology · Nagpur, Maharashtra</p>
					</div>
					<p className="shrink-0 text-sm font-medium text-muted">Aug 2019 - May 2023</p>
				</div>
			</section>

			<a
				href={resumePdf}
				download="resume-sanket-patrikar.pdf"
				aria-label="Download resume as PDF"
				title="Download PDF"
				className="fixed bottom-6 right-6 z-20 inline-flex size-14 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg shadow-black/15 transition duration-200 hover:scale-105 hover:bg-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] md:bottom-8 md:right-8"
			>
				<Download aria-hidden="true" className="size-5" strokeWidth={2} />
			</a>
		</main>
	);
}
