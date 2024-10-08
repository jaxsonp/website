import type { Metadata } from "next";
import "./globals.css";

import { consolas } from "./fonts";

export const metadata: Metadata = {
	title: "Jaxson Pahukula's website",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${consolas.variable} antialiased w-screen h-screen`}>
				<div id="backdrop" className="fixed w-full h-full -z-50" />
				{children}
			</body>
		</html>
	);
}
