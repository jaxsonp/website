<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, id = '' }: { children: Snippet; id: string } = $props();
</script>

<div class="mt-12 flex items-center">
	<hr class="w-4 md:w-8" />
	<h2 {id} class="mx-4 w-min text-4xl font-bold italic md:w-auto md:text-5xl">
		{@render children()}
	</h2>
	<hr class="flex-grow" />
</div>
