import type { Metadata } from "next";
import { useEffect } from "react";

import "./globals.css";
import { consolas } from "./fonts";

import Backdrop from "@lib/components/Backdrop";

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
				<Backdrop />
				{children}
			</body>
		</html>
	);
}
