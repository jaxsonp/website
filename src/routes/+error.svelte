<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<div class="black-glass rounded-xl p-4 *:text-center">
		<h1>Error {page.status}</h1>
		<h2>{page.error?.message}</h2>
		<p class="my-4">
			<a href="/" class="underline">&lt- home</a>
		</p>
	</div>
</div>
