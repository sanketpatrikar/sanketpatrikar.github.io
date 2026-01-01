import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="flex flex-col justify-between overflow-hidden h-[calc(100vh-var(--header-offset))]">
			<div id="hero" className="flex-1">
				<div className="flex gap-6 mb-6">
					<h1 className="text-3xl md:text-5xl tracking-[-0.052em]">
						<span className="">Sanket Patrikar</span>
					</h1>
				</div>
				<p className="text-lg max-w-3xl mb-4">
					Full-stack developer focused on building simple, scalable products. Working
					primarily with React, TypeScript, and Postgres.
				</p>
				<div className="flex flex-col gap-3">
					<Link to="/resume" className="text-lg underline">
						Resume →
					</Link>
					<Link to="/posts" className="text-lg underline">
						Posts →
					</Link>
				</div>
			</div>
			<div id="contact-section" className="mb-8">
				<p className="text-lg max-w-3xl">
					Reach me at{" "}
					<a href="mailto:sanketspatrikar@gmail.com" className="underline">
						sanketspatrikar@gmail.com
					</a>{" "}
					or find me on{" "}
					<a
						href="https://x.com/patrikarsanket"
						className="inline-flex items-center gap-1 underline"
					>
						X
					</a>
					,{" "}
					<a
						href="https://github.com/sanketpatrikar"
						className="inline-flex items-center gap-1 underline"
					>
						GitHub
					</a>
					, and{" "}
					<a
						href="https://linkedin.com/in/sanketpatrikar"
						className="inline-flex items-center gap-1 underline"
					>
						LinkedIn
					</a>
					.
				</p>
			</div>
		</div>
	);
}
