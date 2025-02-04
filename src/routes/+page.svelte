<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import { pushState } from '$app/navigation';

	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import DynamicLinkIcon from '$lib/components/DynamicLinkIcon.svelte';
	import ProjectTag from '$lib/components/ProjectTag.svelte';
	import { getThumbnail } from '$lib/lib';

	import headshotImg from '$lib/assets/headshot.jpg';
	import PersonIcon from '$lib/assets/icons/PersonIcon.svelte';
	import BriefcaseIcon from '$lib/assets/icons/BriefcaseIcon.svelte';
	import FileIcon from '$lib/assets/icons/FileIcon.svelte';
	import GridIcon from '$lib/assets/icons/GridIcon.svelte';
	import SparkleIcon from '$lib/assets/icons/SparkleIcon.svelte';
	import LocationIcon from '$lib/assets/icons/LocationIcon.svelte';
	import InstagramIcon from '$lib/assets/icons/InstagramIcon.svelte';
	import GithubIcon from '$lib/assets/icons/GithubIcon.svelte';
	import XIcon from '$lib/assets/icons/XIcon.svelte';
	import LinkedInIcon from '$lib/assets/icons/LinkedInIcon.svelte';
	import FacebookIcon from '$lib/assets/icons/FacebookIcon.svelte';
	import PeopleIcon from '$lib/assets/icons/PeopleIcon.svelte';
	import TelescopeIcon from '$lib/assets/icons/TelescopeIcon.svelte';
	import LeetcodeIcon from '$lib/assets/icons/LeetcodeIcon.svelte';
	import ContactIcon from '$lib/assets/icons/ContactIcon.svelte';
	import EmailIcon from '$lib/assets/icons/EmailIcon.svelte';

	let socials_popup_visibile = $state(false);
	let show_socials_popup = () => {
		socials_popup_visibile = true;
	};
	let hide_socials_popup = () => {
		socials_popup_visibile = false;
		window.location.hash = '';
	};

	onMount(() => {
		/*let check_social_popup = () => {
			if (window.location.hash === '#socials') {
				show_socials_popup();
			}
			return false;
		};
		addEventListener('hashchange', check_social_popup);
		check_social_popup();*/
	});

	import projectFile from '$lib/projects.json';
	let featuredProjects: Project[] = projectFile.featured;
	featuredProjects.forEach((project) => {
		project.tags.sort();
		project.links.sort();
	});
</script>

<div class="h-full w-full">
	<div class="flex w-full flex-col items-center justify-center py-32">
		<img
			src={headshotImg}
			class="w-[200px] rounded-full border-2 border-black shadow-light shadow-white/50"
			alt="Me"
		/>
		<div class="mt-4">
			<p class="text-2xl text-white">Hi, I'm</p>
			<h1 class="underline-accent text-6xl font-bold">
				Jaxson<br />Pahukula
			</h1>
		</div>
	</div>
	<div class="black-glass z-0 flex rounded-t-3xl p-4 lg:px-12">
		<div class="flex w-full flex-col">
			{#snippet NavItem(text: string, href: string, Icon: Component)}
				<a
					{href}
					class="my-1 flex items-center justify-self-center py-2 text-3xl text-light-gray hover:scale-105 md:text-4xl lg:text-3xl xl:text-4xl"
				>
					<Icon class="mr-4 w-8 md:w-10" />
					{text}
				</a>
			{/snippet}
			<SectionTitle id="about">About Me</SectionTitle>
			<div class="flex flex-col items-center">
				<p class="mt-8 indent-8 md:w-3/4">
					Hi, I'm Jaxson! I'm a computer science student from Hawai'i studying at Purdue University.
					I'm passionate about programming, playing music, and volleyball. Welcome to my homepage!
				</p>
				<div class="my-2 flex flex-col items-start gap-y-1 rounded-xl p-4 px-10 *:text-xl">
					{#snippet bullet()}
						<span class="font-bold text-secondary">{'> '}</span>
					{/snippet}
					<a href="mailto:jaxpahu@gmail.com" target="_blank">
						{@render bullet()}<span class="underline">jaxpahu@gmail.com</span>
					</a>
					<a href="https://github.com/jaxsonp" target="_blank">
						{@render bullet()} Github
					</a>
					<a href="https://www.linkedin.com/in/jaxsonp/" target="_blank">
						{@render bullet()} LinkedIn
					</a>
					<a href="./#socials" class="italic text-light-gray">
						{@render bullet()} More socials...
					</a>
				</div>
			</div>
			<SectionTitle id="projects">Featured Projects</SectionTitle>
			<div class="mb-10 mt-16 space-y-10 lg:px-12 xl:px-24">
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
			<p class="mb-4 text-center text-4xl">
				Check out <a href="/projects#all" class="underline">all my projects {'>'}</a>
			</p>
			<SectionTitle id="cv">My CV</SectionTitle>
			<p class="">TODO</p>
			<a href="career ">
				<p class="underline">Go -{'>'}</p>
			</a>
			<SectionTitle id="cv">Fun stuff</SectionTitle>
			<p class="">TODO</p>
			<!-- add stargazing -->
		</div>
	</div>
	{#if socials_popup_visibile}
		<div
			class="black-glass fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center"
		>
			<div class="rounded-3xl bg-black px-8 py-6">
				<button class="float-right text-white hover:text-secondary" onclick={hide_socials_popup}>
					<XIcon class="h-6" />
				</button>
				<h1 class="italic">Socials</h1>
				<hr class="mb-8 mt-4 bg-primary" />
				{#snippet social_link(text: string, href: string, Icon: Component)}
					<a
						{href}
						target="_blank"
						class="flex items-center gap-4 p-[3px] text-xl hover:text-secondary"
					>
						<Icon class="h-6 w-6" />
						{text}
					</a>
				{/snippet}
				<div class="m-4 flex flex-col">
					{@render social_link('Gmail', 'mailto:jaxpahu@gmail.com', EmailIcon)}
					{@render social_link(
						'Facebook',
						'https://www.facebook.com/profile.php?id=100086394281851',
						FacebookIcon
					)}
					{@render social_link('Github', 'https://www.instagram.com/jaxson.mp/', GithubIcon)}
					{@render social_link('Instagram', 'https://www.instagram.com/jaxson.mp/', InstagramIcon)}
					{@render social_link('Leetcode', 'https://leetcode.com/colbyjack/', LeetcodeIcon)}
					{@render social_link('LinkedIn', 'https://www.linkedin.com/in/jaxsonp/', LinkedInIcon)}
				</div>
			</div>
		</div>
	{/if}
</div>
