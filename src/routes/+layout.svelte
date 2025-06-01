<script lang="ts">
	import { browser } from '$app/environment';

	// stylin
	import '../app.css';

	// background stuff
	import { initializeSky, resizeSky, drawStars } from '$lib/stars';
	if (browser) {
		window.addEventListener('load', () => {
			let canvas = document.getElementById('star-canvas') as HTMLCanvasElement;
			if (canvas !== null) {
				initializeSky(canvas);

				const resizeHandler = () => {
					canvas.width = window.innerWidth;
					canvas.height = window.innerHeight;
					resizeSky(canvas.width, canvas.height);
					drawStars();
				};
				window.addEventListener('resize', resizeHandler, false);

				// initializing
				resizeHandler();
			}
		});
	}

	let { children } = $props();
</script>

<canvas id="star-canvas" class="absolute -z-50 h-screen w-screen"></canvas>
{@render children()}
<footer class="absolute bottom-1 left-2 flex gap-x-1">
	<span>&copy Jaxson Pahukula, 2025</span>
	*
	<a href="https://github.com/jaxsonp/website" target="_blank" class="underline">source</a>
	*
	<a href="/stargaze" class="underline">stargaze</a>
</footer>

<style>
	#star-canvas {
		background: rgb(15, 15, 40);
		background: linear-gradient(
			-2deg,
			rgba(25, 74, 165, 1) 0%,
			rgba(24, 52, 107, 1) 10%,
			rgba(17, 35, 71, 1) 25%,
			rgba(15, 15, 20, 1) 100%
		);
	}
</style>
