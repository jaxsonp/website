"use client";

import { useEffect } from "react";

import { initializeStars, drawStars } from "@lib/stars";

export default function Backdrop() {
	useEffect(() => {
		if (typeof window !== undefined) {
			let backdropCanvas = document.getElementById("backdrop") as HTMLCanvasElement;
			if (backdropCanvas === null) {
				console.error("Couldn't get backdrop element");
				return;
			}

			initializeStars(window.innerWidth, window.innerHeight);
			drawStars(backdropCanvas);
			const resizeHandler = () => {
				backdropCanvas.width = window.innerWidth;
				backdropCanvas.height = window.innerHeight;
				initializeStars(window.innerWidth, window.innerHeight);
				drawStars(backdropCanvas);
			};
			window.addEventListener("resize", resizeHandler, false);
			resizeHandler();
		}
	});
	return <canvas id="backdrop" className="fixed w-screen h-screen -z-50" />;
}
