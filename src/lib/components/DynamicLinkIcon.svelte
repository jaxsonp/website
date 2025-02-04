<script lang="ts">
	import GithubIcon from '$lib/assets/icons/GithubIcon.svelte';
	import CratesioIcon from '$lib/assets/icons/CratesioIcon.svelte';
	import DevpostIcon from '$lib/assets/icons/DevpostIcon.svelte';
	import ReadTheDocsIcon from '$lib/assets/icons/ReadTheDocsIcon.svelte';
	import LinkIcon from '$lib/assets/icons/LinkIcon.svelte';

	let { link }: { link: string } = $props();
</script>

<!-- Gets a link icon based on what the link is -->
{#if link.includes('github.com')}
	<GithubIcon />
{:else if link.includes('crates.io')}
	<CratesioIcon />
{:else if link.includes('devpost.com')}
	<DevpostIcon />
{:else if link.includes('readthedocs.io')}
	<ReadTheDocsIcon />
{:else}
	<LinkIcon />
{/if}
