<script lang="ts">
	import headshotImg from '$lib/assets/headshot.jpg?enhanced';

	let { page } = $props();
</script>

<header class="sticky top-0 z-50 w-full">
	<div class="black-glass shadow-light m-2 flex w-max max-w-full items-center gap-x-2 rounded-full">
		<enhanced:img
			src={headshotImg}
			alt="A really pretty face"
			width="40"
			class="shadow-light rounded-full border-1 border-black"
		/>
		<p class="pr-4 text-lg">
			<a href="/" class="font-bold">JAXSON PAHUKULA</a> <span class="text-primary">/</span>&nbsp{page}
		</p>
	</div>
</header>
