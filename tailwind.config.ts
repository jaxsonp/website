import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			white: "#ffffff",
			"light-gray": "#eeeeee",
			blue: "dodgerblue",
			black: "#000000",
		},
		fontFamily: {
			mono: ["var(--font-consolas)", "mono"],
		},
		extend: {
			boxShadow: {
				light: "0 6px 32px -12px rgba(255, 255, 255, 0.2)",
				"sm-light": "0 4px 16px -4px rgba(255, 255, 255, 0.1)",
			},
			dropShadow: {
				light: "0 6px 32px -12px rgba(255, 255, 255, 0.2)",
			},
		},
		screens: {
			sm: "414px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
	},
	plugins: [],
};
export default config;
