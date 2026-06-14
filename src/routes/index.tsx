import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="mx-auto flex w-full max-w-5xl flex-col gap-12 py-16">
			<section className="flex flex-col gap-6">
				<p className="text-xs uppercase tracking-[0.35em] text-muted">Software engineer</p>
				<h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.04em]">
					Sanket Patrikar
				</h1>
				<div className="flex flex-wrap gap-4 text-base md:text-lg">
					<Link
						to="/resume"
						className="rounded-full border border-[#e5eaf5] px-4 py-2 transition hover:bg-[#e5eaf5]"
					>
						Resume
					</Link>
					{/* <Link
						to="/posts"
						className="rounded-full border border-[#e5eaf5] px-4 py-2 transition hover:bg-[#e5eaf5]"
					>
						Posts
					</Link> */}
				</div>
				<div className="flex max-w-3xl flex-col gap-4 text-lg text-muted md:text-xl">
					<p>
						I’m Sanket, a software engineer based in Nagpur, India. I work on web
						applications across React, Node.js, PostgreSQL, AWS, Docker, and Terraform,
						with a focus on modernization, performance, and maintainability.
					</p>
				</div>
			</section>

			<section className="flex flex-col gap-10 border-t border-[#e5eaf5] pt-10">
				<div className="flex flex-wrap gap-4 text-base md:text-lg">
					<a
						href="mailto:sanketspatrikar@gmail.com"
						className="underline decoration-[#a0d2eb] decoration-2 underline-offset-4"
					>
						sanketspatrikar@gmail.com
					</a>
					<a
						href="https://x.com/patrikarsanket"
						className="underline decoration-[#a0d2eb] decoration-2 underline-offset-4"
					>
						X
					</a>
					<a
						href="https://github.com/sanketpatrikar"
						className="underline decoration-[#a0d2eb] decoration-2 underline-offset-4"
					>
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/sanketpatrikar"
						className="underline decoration-[#a0d2eb] decoration-2 underline-offset-4"
					>
						LinkedIn
					</a>
				</div>
			</section>
		</main>
	);
}
