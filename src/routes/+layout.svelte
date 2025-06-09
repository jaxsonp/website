<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.css';

	// background stuff
	import { initializeSky, resizeSky, drawStars } from '$lib/stars';

	let canvas: HTMLCanvasElement;
	onMount(() => {
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
	});

	let { children } = $props();
</script>

<canvas bind:this={canvas} class="fixed -z-50 h-screen w-screen"></canvas>
<div class="flex min-h-screen flex-col items-center">
	{@render children()}
</div>

<style>
	canvas {
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
