import type { Metadata } from "next";

import "./globals.css";
import { consolas } from "@lib/fonts";

import Backdrop from "@components/Backdrop";

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
				{children}
				<Backdrop />
			</body>
		</html>
	);
}
