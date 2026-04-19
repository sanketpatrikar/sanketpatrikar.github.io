import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="mx-auto w-full max-w-3xl pb-16">
			<p className="mb-8 text-base">
				<Link to="/posts">← Posts</Link>
			</p>

			<div className="mb-8 flex items-center gap-5">
				<img
					src="/pfp-circle.png"
					alt="Sanket Patrikar"
					className="h-20 w-20 rounded-full border border-[#ddd4c4]"
				/>
				<div>
					<h1>Sanket Patrikar</h1>
					<p className="m-0 text-muted">Software Engineer.</p>
				</div>
			</div>

			<ul className="mb-10 flex list-none flex-wrap gap-x-5 gap-y-1 p-0 text-base">
				<li>
					<a href="https://github.com/sanketpatrikar">[GitHub]</a>
				</li>
				<li>
					<a href="https://x.com/patrikarsanket">[Twitter/X]</a>
				</li>
				<li>
					<Link to="/resume">[Resume]</Link>
				</li>
				<li>
					<a href="/feed.xml">[RSS]</a>
				</li>
			</ul>

			<p>
				I build product-focused web software with React and TypeScript, and I enjoy shaping
				frontend architecture that scales with both users and teams.
			</p>
			<p>
				Most recently, I led modernization work across the stack: Webpack to Vite, React 15
				to 18, and Node 8 to 24. The goal was simple: faster delivery, better performance,
				and lower operational drag.
			</p>

			<h2>What I Work On</h2>
			<p>
				Frontend systems, design systems, migration strategy, and developer experience. I
				also work on backend-heavy tasks when needed: SQL tuning, API integrations, and
				infra-aware debugging.
			</p>

			<h2>Current Focus</h2>
			<p>
				Building maintainable interfaces with clear UX, reducing bundle/runtime cost, and
				creating reliable delivery pipelines that teams can trust.
			</p>

			<h2>Get in touch</h2>
			<p className="mb-0">
				<a href="mailto:sanketspatrikar@gmail.com">sanketspatrikar@gmail.com</a>
			</p>
		</main>
	);
}
