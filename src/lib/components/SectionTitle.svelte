<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, id = '' }: { children: Snippet; id: string } = $props();
</script>

<div class="mb-4 mt-12 flex w-full items-center">
	<hr class="w-0 md:w-8" />
	<h2 {id} class="m-4 text-4xl font-bold italic md:my-0">
		{@render children()}
	</h2>
	<hr class="flex-grow" />
</div>
