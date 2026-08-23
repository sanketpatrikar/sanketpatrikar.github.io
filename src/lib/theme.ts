export type Theme = "light" | "dark";

export const themeStorageKey = "color-theme";

export function applyTheme(theme: Theme) {
	const root = document.documentElement;
	root.dataset.theme = theme;
	root.style.colorScheme = theme;
	document
		.querySelector<HTMLMetaElement>("#theme-color")
		?.setAttribute("content", theme === "dark" ? "#0b0d11" : "#ffffff");
}

export function getCurrentTheme(): Theme {
	if (document.documentElement.dataset.theme === "dark") {
		return "dark";
	}

	return "light";
}

export const themeScript = `
(function () {
	var theme = "light"
	try {
		var stored = window.localStorage.getItem("${themeStorageKey}")
		theme = stored === "light" || stored === "dark"
			? stored
			: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
	} catch (_) {
		theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
	}
	document.documentElement.dataset.theme = theme
	document.documentElement.style.colorScheme = theme
	document.querySelector("#theme-color").setAttribute("content", theme === "dark" ? "#0b0d11" : "#ffffff")
})()
`;
