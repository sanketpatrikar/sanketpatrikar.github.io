import { useRouter } from "@tanstack/react-router";
import { useCallback } from "react";

export const Header = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const previousPage = useCallback(() => router.history.back(), [router]);

	return (
		<header className="mb-12 flex flex-col gap-5">
			<button
				type="button"
				onClick={previousPage}
				className="w-fit border-0 bg-transparent p-0 text-[1rem] text-[#1e4f87] underline decoration-[0.06em] underline-offset-[0.2em] hover:text-[#163c66]"
			>
				← Home
			</button>
			<h1>{children}</h1>
		</header>
	);
};
