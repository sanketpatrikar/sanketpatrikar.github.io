import { useCallback } from "react";
import { useRouter } from "@tanstack/react-router";

export const Header = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const previousPage = useCallback(() => router.history.back(), [router]);

	return (
		<header className="flex gap-7 items-center mb-8">
			<button
				type="button"
				onClick={previousPage}
				className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
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
			</button>
			<h1 className="text-3xl md:text-5xl tracking-[-0.052em]">{children}</h1>
		</header>
	);
};
