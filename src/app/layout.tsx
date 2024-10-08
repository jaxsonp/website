import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
	weight: "400",
	style: ["normal", "italic"],
	subsets: ["latin"],
});

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
			<body className={`${spaceMono.className} antialiased w-screen h-screen`}>{children}</body>
		</html>
	);
}
