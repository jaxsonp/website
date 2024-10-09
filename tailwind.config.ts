import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			white: "#e3e8ff",
			"light-gray": "#c4ceff",
			blue: "dodgerblue",
			black: "#000000",
		},
		fontFamily: {
			mono: ["var(--font-consolas)", "mono"],
		},
		extend: {
			boxShadow: {
				light: "0 6px 32px -12px rgba(255, 255, 255, 0.15)",
			},
			dropShadow: {
				light: "0 6px 32px -12px rgba(255, 255, 255, 0.15)",
			},
		},
		screens: {
			sm: "414px",
			md: "768px",
			lg: "1024px",
			xl: "1420px",
		},
	},
	plugins: [],
};
export default config;
