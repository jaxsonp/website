<script lang="ts">
	import Masonry from '$lib/components/masonry.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import headshotImg from '$lib/assets/headshot.jpg?enhanced';

	import cubegameThumbnail from '$lib/assets/project-thumbnails/cubegame.png?enhanced';
	import circuitCourtThumbnail from '$lib/assets/project-thumbnails/circuit-court.png?enhanced';
	import factoryScriptThumbnail from '$lib/assets/project-thumbnails/factoryscript.png?enhanced';
	import dockerDashThumbnail from '$lib/assets/project-thumbnails/docker-dash.jpeg?enhanced';
	import rsCubeThumbnail from '$lib/assets/project-thumbnails/rs-cube.gif';
	import websiteThumbnail from '$lib/assets/project-thumbnails/website.png?enhanced';
	import chip8Thumbnail from '$lib/assets/project-thumbnails/chip-8.png?enhanced';
	import beatBallotThumbnail from '$lib/assets/project-thumbnails/beat-ballot.png?enhanced';
	import sciCalcThumbnail from '$lib/assets/project-thumbnails/sci-calc.png?enhanced';
	import cs334GraphicsThumbnail from '$lib/assets/project-thumbnails/cs334-graphics.png?enhanced';
</script>

<header class="sticky top-0 z-50 w-full">
	<div class="black-glass shadow-light m-2 flex w-max items-center gap-x-2 rounded-full">
		<enhanced:img
			src={headshotImg}
			alt="A really pretty face"
			width="40"
			class="shadow-light rounded-full border-1 border-black"
		/>
		<p class="pr-4 text-lg">
			<a href="/" class="font-bold">JAXSON PAHUKULA</a> <span class="text-primary">/</span> Projects
		</p>
	</div>
</header>
<main class="flex md:min-w-[80%] flex-col gap-y-10 p-6">
	<h1 class="text-center text-shadow-lg">Project Gallery</h1>
	<h2 class="text-center italic text-shadow-lg">My favorites</h2>
	{#snippet big_project(title: string, desc: string | string[], imgSrc: any, enhanced: boolean = true)}
		<div class="black-glass shadow-light m-auto min-h-[200px] max-w-[800px] rounded-2xl md:grid md:grid-cols-[2fr_1fr]">
			<div class="p-4">
				<h2><span class="text-primary">-&gt</span>&nbsp{title}</h2>
				{#if typeof desc === 'string'}
					<p class="mt-2 ml-4 indent-4 leading-tight">{desc}</p>
				{:else}
					<ul class="list-gt-bullet mt-2">
						{#each desc as line}
							<li class="my-2 leading-[1.15]">{line}</li>
						{/each}
					</ul>
				{/if}
			</div>
			{#if enhanced}
				<enhanced:img
					src={imgSrc}
					alt={title + ' thumbnail'}
					class="h-full w-full rounded-b-2xl object-cover md:rounded-r-2xl md:rounded-bl-none"
				/>
			{:else}
				<img
					src={imgSrc}
					alt={title + ' thumbnail'}
					class="h-full w-full rounded-b-2xl object-cover md:rounded-r-2xl md:rounded-bl-none"
				/>
			{/if}
		</div>
	{/snippet}
	{@render big_project(
		'Circuit Court',
		[
			'Play as the prosecutor or the defense, presenting arguments to an LLM judge to try and sway its verdict in your favor!',
			'Frontend made with React and Babylon.js, assets made in Blender, Backend made with Python.',
			'Created in 36 hours for the Boilermake XII hackathon.',
		],
		circuitCourtThumbnail
	)}
	{@render big_project(
		'FactoryScript',
		[
			'FactoryScript is an interpreted, graph-based esolang. it is mostly a gag language, and the interpreter is written in rust.',
			'programs (factories) are graphs where the nodes (stations) are connected by unicode box characters (conveyor belts).',
		],
		factoryScriptThumbnail
	)}
	{#snippet small_project(title: string, desc: string | string[], imgSrc: any, enhanced: boolean = true)}
		<div class="black-glass shadow-light w-auto max-w-[400px] rounded-2xl">
			<div class="px-4 py-2">
				<h2><span class="text-primary">&gt</span>&nbsp{title}</h2>
				{#if typeof desc === 'string'}
					<p class="my-2 indent-4 leading-tight">{desc}</p>
				{:else}
					<ul class="list-gt-bullet my-2">
						{#each desc as line}
							<li class="my-2 leading-[1.15]">{line}</li>
						{/each}
					</ul>
				{/if}
			</div>
			{#if enhanced}
				<enhanced:img
					src={imgSrc}
					alt={title + ' thumbnail'}
					class="h-full max-h-[200px] w-full rounded-b-2xl object-cover"
				/>
			{:else}
				<img src={imgSrc} alt={title + ' thumbnail'} class="h-full max-h-[200px] w-full rounded-b-2xl object-cover" />
			{/if}
		</div>
	{/snippet}
	<h2 class="mt-14 text-center italic text-shadow-lg">Other stuff I made</h2>
	<Masonry gridGap="2rem">
		{@render small_project(
			'Cubegame',
			[
				'A completely original voxel game with no relation to Minecraft.',
				'Written in Rust, made with a custom rendering engine built with wgpu.',
				'WIP (multiplayer is on the horizon)',
			],
			cubegameThumbnail
		)}
		{@render small_project(
			'Docker Dash',
			'A proof-of-concept dashboard for administrators to manage containerized applications on a server/cluster. I worked on the backend of this web app during my internship at ARL Maui.',
			dockerDashThumbnail
		)}
		{@render small_project(
			'Beat Ballot',
			[
				'Create collaborative spotify playlists with your friends by voting on which songs to add or remove.',
				'React on the frontend, Flask + SQLite on the backend.',
				'Created in 36 hours for the Boilermake XI hackathon.',
			],
			beatBallotThumbnail
		)}
		{@render small_project(
			'CHIP-8 emulator',
			'A CHIP-8 interpreter written in Rust, emulating the original COSMAC VIP interpreter. Includes an elementary assembler and example ROMS, including space invaders and snake, a clock, and more.',
			chip8Thumbnail
		)}
		{@render small_project(
			'Toy 3D Renderer',
			[
				'A 3D rendering pipeline with point lights, shadows, texture mapping, reflective materials, etc.',
				'First implemented fully from scratch in software, then converted to hardware shaders.',
				'🫖🫖🫖',
			],
			cs334GraphicsThumbnail
		)}
		{@render small_project(
			'sci-calc',
			'An easy to use, fully functional scientific calculator library and CLI. Uses syntax tree parsing for robust error handling. Also features comprehensive built-in functions, variable recall, and more.',
			sciCalcThumbnail
		)}
		{@render small_project('rs-cube', 'Simply a rotating 3d cube in your terminal', rsCubeThumbnail, false)}
		{@render small_project('This website', '', websiteThumbnail)}
	</Masonry>
</main>
<Footer />
