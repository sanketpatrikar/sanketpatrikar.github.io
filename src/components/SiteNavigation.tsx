import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

const showMobileMenu = false;

export function SiteNavigation() {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (!isMenuOpen) {
			return;
		}

		const previousOverflow = document.documentElement.style.overflow;
		document.documentElement.style.overflow = "hidden";
		return () => {
			document.documentElement.style.overflow = previousOverflow;
		};
	}, [isMenuOpen]);

	const openMenu = () => {
		dialogRef.current?.showModal();
		setIsMenuOpen(true);
	};

	const closeMenu = () => {
		dialogRef.current?.close();
	};

	return (
		<>
			<aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col bg-[var(--page-bg)] p-8 md:flex">
				<Link to="/" className="group block w-fit">
					<picture className="block size-16 overflow-hidden rounded-full bg-[var(--surface)]">
						<source srcSet="/sanket-patrikar.avif" type="image/avif" />
						<img
							src="/sanket-patrikar.webp"
							alt=""
							width="512"
							height="512"
							decoding="async"
							className="size-full object-cover object-[50%_24%] transition-transform duration-300 group-hover:scale-105"
						/>
					</picture>
					<p className="mt-4 text-xl font-bold tracking-[-0.025em] text-[var(--heading)]">
						Sanket Patrikar
					</p>
					<p className="mt-2 max-w-48 text-sm leading-relaxed text-muted">
						Software engineer in Nagpur, India
					</p>
				</Link>

				<nav aria-label="Primary" className="mt-12 flex flex-col items-start gap-5 font-semibold">
					<Link to="/resume" className="nav-link">
						Resume
					</Link>
				</nav>

				<div className="mt-auto text-sm">
					<SocialLinks />
				</div>
			</aside>

			<header className="sticky top-0 z-30 flex h-20 items-center justify-between bg-[var(--nav-bg)] px-5 backdrop-blur-xl md:hidden">
				<Link to="/" className="flex items-center gap-3">
					<picture className="block size-11 overflow-hidden rounded-full bg-[var(--surface)]">
						<source srcSet="/sanket-patrikar.avif" type="image/avif" />
						<img
							src="/sanket-patrikar.webp"
							alt=""
							width="512"
							height="512"
							decoding="async"
							className="size-full object-cover object-[50%_24%]"
						/>
					</picture>
					<span className="font-bold tracking-[-0.02em] text-[var(--heading)]">Sanket Patrikar</span>
				</Link>

				<div className="flex items-center gap-1">
					<ThemeToggle />
					<button
						type="button"
						onClick={openMenu}
						aria-label="Open menu"
						aria-haspopup="dialog"
						aria-expanded={isMenuOpen}
						className={showMobileMenu ? "inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-[var(--heading)] transition-colors hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]" : "hidden"}
					>
						<Menu aria-hidden="true" className="size-5" strokeWidth={1.8} />
					</button>
				</div>
			</header>

			<div className="fixed right-8 top-8 z-40 hidden md:block">
				<ThemeToggle />
			</div>

			<dialog
				ref={dialogRef}
				onClose={() => setIsMenuOpen(false)}
				className="menu-dialog fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-[var(--page-bg)] p-0 text-[var(--ink)] md:hidden"
			>
				<div className="flex min-h-dvh flex-col px-6 py-5">
					<div className="flex h-11 items-center justify-between">
						<Link to="/" onClick={closeMenu} className="flex items-center gap-3">
							<picture className="block size-11 overflow-hidden rounded-full bg-[var(--surface)]">
								<source srcSet="/sanket-patrikar.avif" type="image/avif" />
								<img
									src="/sanket-patrikar.webp"
									alt=""
									width="512"
									height="512"
									decoding="async"
									className="size-full object-cover object-[50%_24%]"
								/>
							</picture>
							<span className="font-bold tracking-[-0.02em] text-[var(--heading)]">
								Sanket Patrikar
							</span>
						</Link>

						<div className="flex items-center gap-1">
							<ThemeToggle />
							<button
								type="button"
								onClick={closeMenu}
								aria-label="Close menu"
								className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-[var(--heading)] transition-colors hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
							>
								<X aria-hidden="true" className="size-5" strokeWidth={1.8} />
							</button>
						</div>
					</div>

					<nav aria-label="Mobile" className="mt-16 flex flex-col items-start gap-7 text-2xl font-semibold">
						<Link to="/resume" onClick={closeMenu} className="nav-link">
							Resume
						</Link>
					</nav>

					<div className="mt-auto pb-4 text-sm text-muted">
						<SocialLinks />
					</div>
				</div>
			</dialog>
		</>
	);
}
