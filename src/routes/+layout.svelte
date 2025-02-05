<script lang="ts">
	import { browser } from '$app/environment';
	// stylin
	import '../app.css';

	// background stuff
	import { initializeStars, drawStars } from '$lib/stars';
	if (browser) {
		window.onload = () => {
			let canvas = document.getElementById('background') as HTMLCanvasElement;
			if (canvas !== null) {
				const resizeHandler = () => {
					canvas.width = window.innerWidth;
					canvas.height = window.innerHeight;
					initializeStars(canvas.width, canvas.height);
					drawStars(canvas);
				};
				window.addEventListener('resize', resizeHandler, false);

				// initializing
				resizeHandler();
			}
		};
	}

	let { children } = $props();
</script>

<canvas id="background" class="fixed left-0 top-0 -z-50 h-full w-full"></canvas>
<div class=" flex w-full justify-center">
	<main class="mx-4 min-h-screen w-full lg:m-0 lg:w-[950px] xl:w-[1000px]">
		{@render children()}
	</main>
</div>
