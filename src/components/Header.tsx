import { useRouter } from "@tanstack/react-router"
import { useCallback } from "react"

export const Header = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter()
	const previousPage = useCallback(() => router.history.back(), [router])

	return (
		<header className="flex gap-6 items-center mb-10">
			<button
				type="button"
				onClick={previousPage}
				className="w-10 h-10 rounded-full border border-[#e5e7eb] text-[#2e251f] flex items-center justify-center hover:bg-[#f3f4f6] transition-colors cursor-pointer"
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
			<h1 className="font-display text-4xl md:text-5xl tracking-[-0.03em]">
				{children}
			</h1>
		</header>
	)
}
