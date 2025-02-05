<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import { pushState } from '$app/navigation';

	import SectionTitle from '$lib/components/SectionTitle.svelte';

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

	import projectFile from '$lib/projects.json';
	import SpotifyIcon from '$lib/assets/icons/SpotifyIcon.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let featuredProjects: Project[] = projectFile.featured;
	featuredProjects.forEach((project) => {
		project.tags.sort();
		project.links.sort();
	});
</script>

{#snippet bullet()}
	<p class="inline font-bold text-secondary">{'> '}</p>
{/snippet}

<div class="flex h-full w-full flex-col items-center">
	<div class="my-12 flex flex-col items-center space-y-6">
		<img
			src={headshotImg}
			class="w-[175px] rounded-full border-2 border-black shadow-light shadow-white/50"
			alt="Me"
		/>
		<div class="mt-4">
			<p class="text-2xl text-white">Hi, I'm</p>
			<h1 class="underline-accent text-6xl font-bold">
				Jaxson<br />Pahukula
			</h1>
		</div>
	</div>
	<div class="black-glass rounded-t-3xl px-2 py-4 md:w-3/4 md:px-8 xl:px-12">
		<p class="mt-8 px-[10%] indent-8">
			Hi, I'm Jaxson, and you've just found my website. I'm from Hawaiʻi, and I'm studying computer
			science student at Purdue University. I like programming and playing music.
		</p>
		<div class="flex justify-center">
			<div class="flex flex-col items-start gap-y-1 rounded-xl p-4 px-10">
				<a href="mailto:jaxpahu@gmail.com" target="_blank" class="group">
					{@render bullet()}
					<p class="inline underline group-hover:text-primary">jaxpahu@gmail.com</p>
				</a>
				<a href="https://github.com/jaxsonp" target="_blank" class="group">
					{@render bullet()}
					<p class="inline group-hover:text-primary">Github</p>
				</a>
				<a href="https://www.linkedin.com/in/jaxsonp/" target="_blank" class="group">
					{@render bullet()}
					<p class="inline group-hover:text-primary">LinkedIn</p>
				</a>
				<a href="/#socials" class="group">
					{@render bullet()}
					<p class="inline italic group-hover:text-primary">More socials...</p>
				</a>
			</div>
		</div>
		<SectionTitle id="projects">Projects</SectionTitle>
		<p class="m-4 text-center">
			Check out <a href="/projects" class="underline">my project gallery {'>'}</a>
		</p>
		<p class="mt-4 text-center">Or check out the projects I host here:</p>
		<div class="flex justify-center">
			<div class="flex flex-col items-start gap-y-1 rounded-xl px-10">
				<a href="/" target="_blank" class="group">
					{@render bullet()}
					<p class="inline underline group-hover:text-primary">TODO put stuff here</p>
				</a>
			</div>
		</div>
		<SectionTitle id="cv">My CV</SectionTitle>
		<p class="text-center underline">
			<a href="/career" target="_blank">
				CV Page (WIP) {'>'}
			</a>
		</p>
		<p class="text-center underline">
			<a href="/Resume-Jaxson-Pahukula.pdf" target="_blank">
				My resume {'>'}
			</a>
		</p>
		<SectionTitle id="socials">Socials</SectionTitle>
		<p class="text-center">Stalk me on:</p>
		<div class="flex w-full justify-center">
			{#snippet social_link(text: string, href: string, Icon: Component)}
				<a {href} target="_blank" class="group flex items-center gap-4 p-[3px]">
					<Icon class="h-6 w-6" />
					<p class="w-min text-xl group-hover:text-primary">
						{text}
					</p>
				</a>
			{/snippet}
			<div class="my-4 inline-grid gap-x-4 md:grid-cols-2">
				{@render social_link('Email', 'mailto:jaxpahu@gmail.com', EmailIcon)}
				{@render social_link(
					'Facebook',
					'https://www.facebook.com/profile.php?id=100086394281851',
					FacebookIcon
				)}
				{@render social_link('Github', 'https://github.com/jaxsonp', GithubIcon)}
				{@render social_link('Instagram', 'https://www.instagram.com/jaxson.mp/', InstagramIcon)}
				{@render social_link('Leetcode', 'https://leetcode.com/colbyjack/', LeetcodeIcon)}
				{@render social_link('LinkedIn', 'https://www.linkedin.com/in/jaxsonp/', LinkedInIcon)}
				{@render social_link(
					'Spotify',
					'https://open.spotify.com/user/4jtq72to3phoh40qj10gghrrm?si=8b5e640043c24fd1',
					SpotifyIcon
				)}
			</div>
		</div>
		<Footer />
	</div>
</div>
