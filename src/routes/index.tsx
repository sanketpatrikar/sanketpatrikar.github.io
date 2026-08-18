import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="mx-auto flex w-full max-w-4xl flex-col gap-12 pb-16 pt-10 md:gap-16 md:pb-20 md:pt-12">
			<section className="flex flex-col gap-10 md:gap-12">
				<div className="flex flex-col items-center gap-7 text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left md:gap-12">
					<div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full md:h-44 md:w-44">
						<img
							src="/sanket-patrikar.png"
							alt="Sanket Patrikar"
							className="h-full w-full object-cover object-[50%_24%]"
						/>
					</div>

					<div className="flex flex-col gap-2">
						<h1 className="whitespace-nowrap text-[clamp(1.25rem,6vw,2.25rem)] leading-tight tracking-[-0.045em] text-[#171923] md:text-5xl">
							Hey, I&apos;m <strong className="font-bold">Sanket Patrikar</strong>
						</h1>
						<p className="text-xl leading-snug text-muted md:text-[1.7rem]">
							Software Engineer based in Nagpur, India
						</p>
						<div className="mt-3 flex flex-nowrap justify-center gap-3 whitespace-nowrap text-[clamp(0.75rem,3.8vw,1rem)] text-[#3b82b6] sm:justify-start sm:text-lg">
							<Link
								to="/resume"
								className="rounded-full py-1.5 transition hover:bg-[#e4f2fa] hover:text-[#2c668f] sm:px-3"
							>
								Resume
							</Link>
							<Link
								to="/posts"
								className="rounded-full py-1.5 transition hover:bg-[#e4f2fa] hover:text-[#2c668f] sm:px-3"
							>
								Blog
							</Link>
							<a
								href="mailto:sanketspatrikar@gmail.com"
								className="inline-flex items-center rounded-full py-1.5 transition hover:bg-[#e4f2fa] hover:text-[#2c668f] sm:px-3"
							>
								Email
							</a>
							<a
								href="https://x.com/patrikarsanket"
								className="inline-flex items-center rounded-full py-1.5 transition hover:bg-[#e4f2fa] hover:text-[#2c668f] sm:px-3"
							>
								Twitter
							</a>
							<a
								href="https://github.com/sanketpatrikar"
								className="inline-flex items-center rounded-full py-1.5 transition hover:bg-[#e4f2fa] hover:text-[#2c668f] sm:px-3"
							>
								GitHub
							</a>
							<a
								href="https://linkedin.com/in/sanketpatrikar"
								className="inline-flex items-center rounded-full py-1.5 transition hover:bg-[#e4f2fa] hover:text-[#2c668f] sm:px-3"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>

				<p className="max-w-[52rem] text-xl leading-[1.65] text-muted md:text-[1.4rem]">
					I build and modernize web applications across React, Node.js, PostgreSQL, AWS,
					Docker, and Terraform, with a focus on performance, maintainability, and systems
					that are pleasant to work with.
				</p>
			</section>
		</main>
	);
}
