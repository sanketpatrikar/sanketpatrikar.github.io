import { Link } from "@tanstack/react-router";

import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteNavigation() {
	return (
		<header className="border-b border-[var(--border)] bg-[var(--page-bg)]">
			<div className="relative h-36 overflow-hidden sm:h-44 md:h-56">
				<img
					src="/profile-cover.webp"
					alt=""
					width="1024"
					height="341"
					decoding="async"
					className="size-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
				<div className="absolute right-4 top-4 sm:right-6 sm:top-6">
					<ThemeToggle className="bg-black/20 text-white hover:bg-black/35" />
				</div>
			</div>

			<div className="mx-auto w-full max-w-[72rem] px-5 sm:px-8 md:px-12">
				<div className="relative z-10 flex items-start justify-between gap-4">
					<Link to="/" aria-label="Sanket Patrikar home" className="-mt-10 shrink-0 sm:-mt-16">
						<picture className="block size-20 overflow-hidden rounded-full bg-[var(--surface)] ring-4 ring-[var(--page-bg)] sm:size-32 md:size-36">
							<source srcSet="/sanket-patrikar.avif" type="image/avif" />
							<img
								src="/sanket-patrikar.webp"
								alt="Sanket Patrikar"
								width="512"
								height="512"
								decoding="async"
								className="size-full object-cover object-[50%_24%]"
							/>
						</picture>
					</Link>

					<div className="pt-4 sm:pt-5">
						<SocialLinks className="gap-1.5 sm:gap-3 [&>a]:inline-flex [&>a]:size-8 [&>a]:items-center [&>a]:justify-center [&>a]:rounded-full [&>a]:border [&>a]:border-[var(--border)] [&>a]:bg-[var(--surface)] [&>a]:shadow-sm sm:[&>a]:size-10" />
					</div>
				</div>

				<div className="pb-8 pt-3 sm:pt-4">
					<Link to="/" className="block w-fit">
						<p className="font-display text-[2.15rem] font-bold leading-[0.95] tracking-[-0.045em] text-[var(--heading)] sm:text-[2.6rem]">
							Sanket Patrikar
						</p>
						<p className="mt-3 text-base text-muted sm:text-lg">Software engineer in Nagpur, India</p>
					</Link>

					<nav aria-label="Primary" className="mt-6 flex items-center gap-5 font-semibold">
						<Link to="/resume" className="nav-link">
							Resume
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
