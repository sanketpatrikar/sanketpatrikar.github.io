import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({ component: Resume });

const experience = [
	"Contributed to modernization and feature development for a US-based waste management and recycling platform used by admins and end users for operations, monitoring, reporting, and sensor-data ingestion.",
	"Improved developer experience, frontend performance, and maintainability in a legacy React codebase.",
	"Migrated the legacy React application from Webpack to Vite, reducing build times from 15 minutes to 10 seconds and bundle size from 35 MB to 15 MB.",
	"Upgraded the frontend from React 15 to React 18, refactoring core class components to hooks and modernizing legacy modules for continued development.",
	"Migrated routing from React Router v4 to v7 and built a compatibility HOC to support gradual migration between class and function components.",
	"Implemented lazy loading, chunking, and module caching to reduce the initial JavaScript payload and improve load times after repeat visits.",
	"Upgraded Node.js from v8 to v24 LTS and modernized dependencies, enabling tree-shaking, reducing bundle size, lowering dependency count, and reducing vulnerable packages.",
	"Load tested report-specific endpoints using Apache JMeter, identified concurrency bottlenecks, and contributed to shifting read-heavy workloads to a reader database instance.",
	"Optimized high-frequency SQL queries for scheduled reports through indexing and query restructuring, reducing execution time from 3 seconds to 500 ms.",
	"Performed preliminary frontend security testing using OWASP ZAP and contributed fixes including improved security headers, tighter CSP rules, and more secure high-value cookies.",
	"Worked on AWS infrastructure restructuring with Terraform, adding an NLB/ALB architecture to support AWS WAF while continuing to accept TCP-based sensor payloads.",
];

const skills = [
	["Frontend", "React, TypeScript / JavaScript, Vite, React Query, HTML, CSS"],
	["Backend / Database", "Node.js, PostgreSQL, MySQL, Query Optimization"],
	["Cloud / DevOps", "AWS, Docker, Terraform"],
	["Testing / Security", "Apache JMeter, OWASP ZAP, Vitest, Playwright"],
	["Tools", "Git"],
];

function Resume() {
	return (
		<main className="mx-auto w-full max-w-5xl py-16">
			<Link
				to="/"
				className="mb-12 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5eaf5] text-[#2f3340] transition hover:bg-[#e5eaf5]"
				aria-label="Back to home"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M19 12H5M12 19l-7-7 7-7" />
				</svg>
			</Link>

			<section className="flex flex-col gap-10">
				<div className="flex flex-col gap-4 border-b border-[#e5eaf5] pb-10">
					<p className="text-xs uppercase tracking-[0.35em] text-muted">Resume</p>
					<h1 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
						Sanket Patrikar
					</h1>
					<p className="max-w-3xl text-xl leading-snug text-muted md:text-2xl">
						Software Engineer | React, Node.js, PostgreSQL, AWS | Modernization &amp;
						Performance
					</p>
					<div className="flex flex-wrap gap-x-4 gap-y-2 text-muted">
						<span>Nagpur, Maharashtra</span>
						<a
							href="mailto:sanketspatrikar@gmail.com"
							className="underline decoration-[#a0d2eb] decoration-2 underline-offset-4"
						>
							sanketspatrikar@gmail.com
						</a>
						<a
							href="https://linkedin.com/in/sanketpatrikar"
							className="underline decoration-[#a0d2eb] decoration-2 underline-offset-4"
						>
							linkedin.com/in/sanketpatrikar
						</a>
						<a
							href="https://sanketpatrikar.github.io"
							className="underline decoration-[#a0d2eb] decoration-2 underline-offset-4"
						>
							sanketpatrikar.github.io
						</a>
					</div>
				</div>

				<section className="grid gap-6 border-b border-[#e5eaf5] pb-10 md:grid-cols-[12rem_1fr]">
					<h2 className="font-display text-2xl tracking-[-0.03em]">Experience</h2>
					<div className="flex flex-col gap-5">
						<div>
							<div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
								<h3 className="text-xl font-semibold">Kizora Software Pvt. Ltd.</h3>
								<p className="text-sm text-muted">Sep 2023 - Present</p>
							</div>
							<p className="text-muted">Software Engineer | Nagpur, Maharashtra</p>
						</div>
						<ul className="flex list-disc flex-col gap-3 pl-5 text-muted marker:text-[#a0d2eb]">
							{experience.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</section>

				<section className="grid gap-6 border-b border-[#e5eaf5] pb-10 md:grid-cols-[12rem_1fr]">
					<h2 className="font-display text-2xl tracking-[-0.03em]">Technical Skills</h2>
					<div className="flex flex-col gap-3 text-muted">
						{skills.map(([category, items]) => (
							<p key={category}>
								<strong className="text-[#2f3340]">{category}:</strong> {items}
							</p>
						))}
					</div>
				</section>

				<section className="grid gap-6 md:grid-cols-[12rem_1fr]">
					<h2 className="font-display text-2xl tracking-[-0.03em]">Education</h2>
					<div>
						<div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
							<h3 className="text-xl font-semibold">KDK College of Engineering</h3>
							<p className="text-sm text-muted">Aug 2019 - May 2023</p>
						</div>
						<p className="text-muted">
							Bachelor of Engineering in Information Technology | Nagpur, Maharashtra
						</p>
					</div>
				</section>

				<div className="sticky bottom-6 z-50 flex justify-end pointer-events-none">
					<a
						href="/resume-sanket-patrikar.pdf"
						download
						className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#a0d2eb] text-[#2f3340] shadow-lg shadow-[#a0d2eb]/30 transition hover:bg-[#6eb8dc]"
						title="Download PDF"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<title>Download PDF</title>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							<polyline points="7 10 12 15 17 10" />
							<line x1="12" y1="15" x2="12" y2="3" />
						</svg>
					</a>
				</div>
			</section>
		</main>
	);
}
