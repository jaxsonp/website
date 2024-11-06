<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
</script>

<div class="black-glass mt-12 h-full w-full rounded-t-2xl border-x-1 border-x-black p-4 lg:px-16">
	<h1 class="my-8 text-center underline decoration-primary">About Me</h1>
	<SectionTitle id="intro">Introduction</SectionTitle>
	<SectionTitle id="experience">Experience</SectionTitle>

	<SectionTitle id="resume">Resume</SectionTitle>
	<div class="my-2 flex justify-center">
		<iframe
			title="My Resume"
			src="../resume.pdf"
			frameborder="0"
			class="h-[500px] w-full md:h-[750px] md:w-[600px] md:p-12 lg:h-[800px] lg:w-[80%] xl:h-[980px]"
		>
		</iframe>
	</div>
</div>
