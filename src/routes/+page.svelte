<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import { goto } from '$app/navigation';

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

	let socials_popup_visibile = $state(false);
	let show_socials_popup = () => {
		socials_popup_visibile = true;
	};
	let hide_socials_popup = () => {
		socials_popup_visibile = false;
		window.location.hash = '';
	};

	onMount(() => {
		let check_social_popup = () => {
			if (window.location.hash === '#socials') {
				show_socials_popup();
			}
			return false;
		};
		addEventListener('hashchange', check_social_popup);
		check_social_popup();
	});
</script>

<div class="h-full w-full">
	<div class="z-10 lg:fixed lg:flex lg:h-full lg:w-[325px] lg:items-center xl:w-[375px]">
		<!-- Side card -->
		<div
			class="lg:black-glass flex w-full flex-col items-center rounded-2xl px-4 py-8 lg:border-1 lg:border-black"
		>
			<!-- side card shadow -->
			<div
				class="clip-left -z-10 hidden h-full rounded-r-2xl shadow-light shadow-white/20 lg:absolute lg:left-[100px] lg:top-0 lg:block lg:w-[225px] xl:w-[275px]"
			></div>
			<!-- side card content -->
			<img
				src={headshotImg}
				class="w-[150px] rounded-full border-2 border-black shadow-light shadow-white/20 md:w-[200px] lg:w-1/2"
				alt="Me"
			/>
			<div class="mb-4 mt-8">
				<p class="text-xl text-white">Hi, I'm</p>
				<h1 class="text-6xl font-bold underline decoration-primary decoration-8 underline-offset-2">
					Jaxson<br />Pahukula
				</h1>
			</div>
			<div class="mb-2 mt-4 flex items-center gap-1">
				<LocationIcon class="inline h-5 text-light-gray" />
				<p class="inline text-xl">Maui, HI</p>
			</div>
			<div
				class="black-glass my-2 flex flex-col items-start gap-y-1 rounded-xl p-4 px-10 *:text-xl lg:bg-transparent lg:p-0 lg:filter-none"
			>
				{#snippet bullet()}
					<span class="font-bold text-secondary">{'> '}</span>
				{/snippet}
				<a href="mailto:jaxpahu@gmail.com" class="hover:text-primary">
					{@render bullet()}<span class="underline">jaxpahu@gmail.com</span>
				</a>
				<a href="https://github.com/jaxsonp" class="hover:text-primary">
					{@render bullet()} Github
				</a>
				<a href="https://www.linkedin.com/in/jaxsonp/" class="hover:text-primary">
					{@render bullet()} LinkedIn
				</a>
				<a href="./#socials" class="italic text-light-gray hover:text-primary">
					{@render bullet()} More socials...
				</a>
			</div>
		</div>
	</div>
	<div class="black-glass z-0 flex rounded-t-3xl lg:ml-[100px] lg:h-full lg:rounded-none">
		<div class="hidden min-w-[225px] lg:block xl:min-w-[275px]"></div>
		<div class="flex w-full flex-col py-8 pl-8 pr-12 lg:justify-center">
			<!-- Main page content -->
			{#snippet NavItem(text: string, href: string, Icon: Component)}
				<a
					{href}
					class="group flex items-center space-x-4 py-4 text-light-gray hover:scale-105 md:my-2"
				>
					<Icon class="w-8 group-hover:text-primary md:w-10" />
					<p class="text-3xl group-hover:text-primary md:text-4xl lg:text-3xl xl:text-4xl">
						{text}
					</p>
				</a>
			{/snippet}
			<div class="mb-4 md:mt-16 lg:px-4 xl:px-10">
				<p class="indent-8 leading-6 md:text-xl">
					Hi 👋 I'm Jaxson, currently a computer science student at Purdue University. I'm
					passionate about programming and software development, and I enjoy playing music too.
					Welcome to my homepage!
				</p>
			</div>
			<SectionTitle id="about-me">About Me</SectionTitle>
			<div class=" my-2 grid grid-cols-1 place-items-center md:grid-cols-2">
				{@render NavItem('Intro', './about#intro', PersonIcon)}
				{@render NavItem('Experience', './about#experience', BriefcaseIcon)}
				{@render NavItem('Resume', './resume.pdf', FileIcon)}
			</div>
			<SectionTitle id="projects">Projects</SectionTitle>
			<div class="my-2 grid grid-cols-1 place-items-center md:grid-cols-2">
				{@render NavItem('Favorites', './projects#favorites', SparkleIcon)}
				{@render NavItem('All', './projects#all', GridIcon)}
			</div>
			<SectionTitle id="">Other</SectionTitle>
			<div class="my-2 grid grid-cols-1 place-items-center md:grid-cols-2">
				{@render NavItem('Socials', './#socials', PeopleIcon)}
				{@render NavItem('Stargaze', './stargaze', TelescopeIcon)}
			</div>
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
					<a {href} class="flex items-center gap-4 p-[3px] text-xl hover:text-secondary">
						<Icon class="h-6" />
						{text}
					</a>
				{/snippet}
				<div class="m-4 flex flex-col">
					{@render social_link(
						'Facebook',
						'https://www.facebook.com/profile.php?id=100086394281851',
						FacebookIcon
					)}
					{@render social_link('Github', 'https://www.instagram.com/jaxson.mp/', GithubIcon)}
					{@render social_link('Instagram', 'https://www.instagram.com/jaxson.mp/', InstagramIcon)}
					{@render social_link('LinkedIn', 'https://www.linkedin.com/in/jaxsonp/', LinkedInIcon)}
				</div>
			</div>
		</div>
	{/if}
</div>
