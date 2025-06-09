<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { onMount, onDestroy } from 'svelte';

	let container;
	let timeout = 0;

	onMount(() => {
		const root = document.documentElement;

		const handleMouseMove = () => {
			root.style.setProperty('--body-opacity', '1');
			document.body.style.cursor = 'auto';
			console.log('show');

			if (timeout) {
				clearTimeout(timeout);
			}
			timeout = setTimeout(() => {
				root.style.setProperty('--body-opacity', '0');
				document.body.style.cursor = 'none';
				console.log('hide');
			}, 2000);
		};

		window.addEventListener('mousemove', handleMouseMove);
		handleMouseMove();

		onDestroy(() => {
			console.log('removing');
			window.removeEventListener('mousemove', handleMouseMove);
			if (timeout) {
				clearTimeout(timeout);
			}
			document.body.style.cursor = 'auto';
		});
	});
</script>

<div bind:this={container} class="flex h-screen w-screen flex-col gap-y-6">
	<div class="grow"></div>
	<h1 class="text-center text-3xl">It's a beautiful night, isn't it?</h1>
	<a href="/" class="text-center text-2xl">&lt- Home</a>
	<Footer />
</div>

<style>
	* {
		@apply transition-opacity duration-1000;
		opacity: var(--body-opacity);
	}
</style>
