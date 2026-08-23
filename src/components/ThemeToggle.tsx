import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

import { applyTheme, getCurrentTheme, themeStorageKey } from "@/lib/theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
	useEffect(() => {
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const followSystemTheme = (event: MediaQueryListEvent) => {
			try {
				if (window.localStorage.getItem(themeStorageKey)) {
					return;
				}
			} catch {}

			applyTheme(event.matches ? "dark" : "light");
		};

		media.addEventListener("change", followSystemTheme);
		return () => media.removeEventListener("change", followSystemTheme);
	}, []);

	const toggleTheme = () => {
		const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
		applyTheme(nextTheme);

		try {
			window.localStorage.setItem(themeStorageKey, nextTheme);
		} catch {}
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label="Toggle color theme"
			title="Toggle color theme"
			className={`relative inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-[var(--heading)] transition-colors hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${className}`}
		>
			<Sun aria-hidden="true" className="theme-icon theme-icon-sun size-5" strokeWidth={1.8} />
			<Moon aria-hidden="true" className="theme-icon theme-icon-moon size-5" strokeWidth={1.8} />
		</button>
	);
}
