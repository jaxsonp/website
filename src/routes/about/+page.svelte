<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';

	import HomeIcon from '$lib/assets/icons/HomeIcon.svelte';
</script>

<div class="black-glass mt-12 h-full w-full rounded-t-3xl border-x-1 border-x-black p-4 lg:px-16">
	<h1 class="underline-accent my-8 text-center font-bold">About Me</h1>
	<SectionTitle id="intro">Introduction</SectionTitle>
	<SectionTitle id="experience">Experience</SectionTitle>
	<div class="h-[2000px]">test</div>
	<SectionTitle id="resume">Resume</SectionTitle>
	<p class="mx-4 my-12 text-center text-xl md:text-3xl">
		Check out my latest resume
		<a href="/resume.pdf" target="_blank" class="italic underline hover:text-primary">here</a>
	</p>
</div>
<a href="/" class="fixed bottom-2 z-40 ml-4 flex items-center text-2xl hover:text-primary">
	{'<'}
	<HomeIcon class="h-12" />
</a>
