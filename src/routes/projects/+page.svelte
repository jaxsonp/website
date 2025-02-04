<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import ProjectTag from '$lib/components/ProjectTag.svelte';
	import DynamicLinkIcon from '$lib/components/DynamicLinkIcon.svelte';
	import { getThumbnail } from '$lib/lib';

	import HomeIcon from '$lib/assets/icons/HomeIcon.svelte';
	import GithubIcon from '$lib/assets/icons/GithubIcon.svelte';
	import LinkIcon from '$lib/assets/icons/LinkIcon.svelte';
	import CratesioIcon from '$lib/assets/icons/CratesioIcon.svelte';
	import DevpostIcon from '$lib/assets/icons/DevpostIcon.svelte';
	import ReadTheDocsIcon from '$lib/assets/icons/ReadTheDocsIcon.svelte';

	// importing projects and gathering tags
	import projectFile from '$lib/projects.json';

	// counting occurences of tags
	let tagOccurences: { [tag: string]: number } = {};
	const updateTagOccurences = (tag: string) => {
		if (tag in tagOccurences) {
			tagOccurences[tag]++;
		} else {
			tagOccurences[tag] = 1;
		}
	};

	let featuredProjects: Project[] = projectFile.featured;
	featuredProjects.forEach((project) => {
		project.tags.sort();
		project.tags.forEach(updateTagOccurences);
		project.links.sort();
	});

	let allProjects: Project[] = projectFile.all;
	allProjects.forEach((project) => {
		project.tags.sort();
		project.tags.forEach(updateTagOccurences);
		project.links.sort();
	});

	// getting all the tags and sorting by how common they are
	let allTags = Object.keys(tagOccurences);
	allTags.sort();
	allTags.sort((a, b) => {
		return tagOccurences[a] >= tagOccurences[b] ? -1 : 1;
	});
	let tagFilter = $state([]);
</script>

<div class="black-glass h-full w-full border-x-1 border-x-black p-4 lg:px-16">
	<h1 class="underline-accent my-8 text-center font-bold">Featured Projects</h1>
	<!-- Filtering by tag -->
	<!--<div class="mx-16 my-8 flex flex-wrap space-x-2">
		<p class="mx-4 text-xl text-light-gray">Filter by tag:</p>
		{#each allTags as tag}
			{@render render_tag(tag)}
		{/each}
	</div>-->
	<div class="my-12 space-y-10 lg:px-12 xl:px-24">
		{#each featuredProjects as project}
			<div
				class="mx-4 grid grid-cols-1 rounded-2xl bg-black/40 shadow-light shadow-white/25 md:min-h-[225px] md:grid-cols-[2fr_1fr]"
			>
				<img
					src={getThumbnail(project.thumbnailFile)}
					alt={project.title + ' thumbnail'}
					class="md:transparent-gradient-left col-start-1 row-start-1 h-[200px] w-full rounded-t-2xl object-cover md:col-start-2 md:h-full md:rounded-none md:rounded-r-2xl"
				/>
				<div
					class="z-10 col-start-1 row-start-1 flex w-min space-x-2 place-self-end self-end rounded-tl-lg bg-black p-2 md:col-start-2 md:rounded-br-2xl"
				>
					{#each project.links as link}
						<a href={link} target="_blank" class="text-white *:h-7 *:w-7 hover:scale-110">
							<DynamicLinkIcon {link} />
						</a>
					{/each}
				</div>
				<div class="flex flex-col p-4 md:pr-0">
					<h3 class="">
						<span class="mr-4 text-primary">{'=>'}</span>{project.title}
					</h3>
					<ul class="grow">
						{#each project.description.split('\n') as paragraph}
							<li class="my-2 ml-5 list-[square] text-lg text-secondary">
								<p class="indent-4 leading-tight">
									{paragraph}
								</p>
							</li>
						{/each}
					</ul>
					<div class="flex justify-end space-x-1">
						{#each project.tags as tag}
							<ProjectTag {tag} />
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<hr />
	<h1 class="underline-accent my-8 text-center font-bold" id="all">All Projects</h1>
	<div class="my-16 grid grid-cols-1 grid-rows-[masonry] gap-12 md:grid-cols-2">
		{#each allProjects as project}
			<div
				class="grid h-min w-full max-w-[400px] grid-rows-[125px_1fr] justify-self-center rounded-2xl bg-black/40 shadow-light shadow-white/20 transition-transform hover:scale-[102%] hover:shadow-primary/60 md:max-w-full xl:grid-rows-[175px_1fr]"
			>
				<img
					src={getThumbnail(project.thumbnailFile)}
					alt={project.title + ' thumbnail'}
					class="transparent-gradient-bottom col-start-1 row-start-1 h-full w-full rounded-t-2xl object-cover"
				/>
				<div
					class="z-10 col-start-1 row-start-1 flex space-x-2 place-self-end self-end rounded-l-2xl bg-black p-2"
				>
					{#each project.links as link}
						<a href={link} target="_blank" class="text-white *:h-7 *:w-7 hover:scale-110">
							<DynamicLinkIcon {link} />
						</a>
					{/each}
				</div>
				<div>
					<h3 class="ml-2"><span class="mr-2 text-primary">{'>'}</span>{project.title}</h3>
					<p class="my-2 px-4">{project.description}</p>
					<div class="mx-3 mb-2 flex grow flex-wrap justify-end space-x-1">
						{#each project.tags as tag}
							<ProjectTag {tag} />
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<a href="/" class="fixed bottom-2 z-40 ml-4 flex items-center text-3xl">
	{'<'}
	<HomeIcon class="h-12" />
</a>
