import localFont from "next/font/local";

export const consolas = localFont({
	src: [
		{
			path: "./fonts/consolas.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/consolas_italic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/consolas_bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/consolas_bold_italic.ttf",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-consolas",
});
