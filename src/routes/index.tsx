import { Link, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
	return (
		<main className="mx-auto flex w-full max-w-5xl flex-col gap-12 py-16">
			<section className="flex flex-col gap-6">
				<p className="text-xs uppercase tracking-[0.35em] text-muted">
					Full-stack developer
				</p>
				<h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.04em]">
					Sanket Patrikar
				</h1>
				<p className="text-lg md:text-xl max-w-3xl text-muted">
					I build simple, scalable products and delightful experiences for the web.
					Focused on React, TypeScript, and Postgres with an eye for craft and
					clarity.
				</p>
				<div className="flex flex-wrap gap-4 text-base md:text-lg">
					<Link
						to="/resume"
						className="rounded-full border border-[#e5e7eb] px-4 py-2 transition hover:bg-[#f3f4f6]"
					>
						Resume
					</Link>
					<Link
						to="/posts"
						className="rounded-full border border-[#e5e7eb] px-4 py-2 transition hover:bg-[#f3f4f6]"
					>
						Posts
					</Link>
				</div>
			</section>

			<section className="grid gap-10 border-t border-[#e5e7eb] pt-10 md:grid-cols-[1.2fr_0.8fr]">
				<div className="space-y-6">
					<h2 className="font-display text-3xl md:text-4xl">Selected focus</h2>
					<ul className="space-y-4 text-muted text-base md:text-lg">
						<li>
							<span className="text-accent">01</span> — Product-minded engineering,
							from design systems to data-rich platforms.
						</li>
						<li>
							<span className="text-accent">02</span> — Building fast, resilient
							frontends with React, TanStack, and Vite.
						</li>
						<li>
							<span className="text-accent">03</span> — Pragmatic backend work in
							Node, Postgres, and infrastructure automation.
						</li>
					</ul>
				</div>
				<div className="space-y-6 rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
					<div>
						<p className="text-xs uppercase tracking-[0.35em] text-muted">
							Currently
						</p>
						<p className="mt-2 text-base md:text-lg">
							Software engineer at Kizora Software, modernizing applications and
							improving performance.
						</p>
					</div>
					<div>
						<p className="text-xs uppercase tracking-[0.35em] text-muted">Contact</p>
						<p className="mt-2 text-base md:text-lg">
							<a
								href="mailto:sanketspatrikar@gmail.com"
								className="underline decoration-[#c07b4a] underline-offset-4"
							>
								sanketspatrikar@gmail.com
							</a>
						</p>
					</div>
					<div className="flex flex-wrap gap-4 text-base md:text-lg">
						<a
							href="https://x.com/patrikarsanket"
							className="underline decoration-[#c07b4a] underline-offset-4"
						>
							X
						</a>
						<a
							href="https://github.com/sanketpatrikar"
							className="underline decoration-[#c07b4a] underline-offset-4"
						>
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/sanketpatrikar"
							className="underline decoration-[#c07b4a] underline-offset-4"
						>
							LinkedIn
						</a>
					</div>
				</div>
			</section>
		</main>
	)
}
