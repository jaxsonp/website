<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, id = '' }: { children: Snippet; id: string } = $props();
</script>

<div class="mt-8 items-center md:flex">
	<hr class="w-full md:w-8" />
	<h2 {id} class="m-4 text-4xl font-bold italic md:my-0 md:text-5xl">
		{@render children()}
	</h2>
	<hr class="flex-grow" />
</div>
