<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';

	import HomeIcon from '$lib/assets/icons/HomeIcon.svelte';
</script>

<div class="black-glass mt-12 h-full w-full rounded-t-3xl border-x-1 border-x-black p-4 lg:px-16">
	<h1 class="underline-accent my-8 text-center font-bold">About Me</h1>
	<div class="mx-4 md:mx-16 xl:mx-32">
		<p>
			Hi, I'm Jaxson Pahukula. I was born in Oregon and raised in Hawai'i on the island of Maui. I
			am mixed Hawaiian, white, and other asian ethnicities. I love to code, and am currently
			enjoying getting my B.S in Computer Science from Purdue University in Indiana, and expecting
			to graduate in May 2025.
		</p>
		<p>
			As for my free time, I love working on <a href="/projects" class="italic underline"
				>personal projects</a
			>, playing music, playing volleyball, and touching grass in general. My main instrument is the
			drums, but I am learning the bass and I am planning to pick up some more instruments when I
			get the chance. I mainly play worship music, but also casually play genres like pop, R&B, and
			some alt stuff.
		</p>
		<div class="image-container mb-8 mt-4">
			<img alt="Me playin drums" src="/pics/drums.jpg" />
			<img alt="Gon fishin" src="/pics/fishin.jpg" />
		</div>
		<p>I also have a cat, Simba</p>
		<div class="image-container">
			<img alt="Simba, my cat" src="/pics/cat1.jpg" />
			<img alt="Simba again" src="/pics/cat2.jpg" class="m-8" />
			<img alt="Simba again 2" src="/pics/cat3.jpg" />
		</div>
	</div>
</div>
<a href="/" class="fixed bottom-2 z-40 ml-4 flex items-center text-2xl">
	{'<'}
	<HomeIcon class="h-12" />
</a>

<style>
	p {
		@apply my-2 indent-8;
	}

	.image-container {
		@apply md:flex md:h-[250px] md:justify-evenly md:gap-2;
	}
	.image-container img {
		@apply max-h-[300px];
	}
</style>
