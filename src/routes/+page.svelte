<script lang="ts">
	import { type Component } from 'svelte';

	import Footer from '$lib/components/Footer.svelte';

	import headshotImg from '$lib/assets/headshot.jpg?enhanced';

	import InstagramIcon from '$lib/assets/icons/InstagramIcon.svelte';
	import GithubIcon from '$lib/assets/icons/GithubIcon.svelte';
	import LinkedInIcon from '$lib/assets/icons/LinkedInIcon.svelte';
	import FacebookIcon from '$lib/assets/icons/FacebookIcon.svelte';
	import LeetcodeIcon from '$lib/assets/icons/LeetcodeIcon.svelte';
	import RedditIcon from '$lib/assets/icons/RedditIcon.svelte';
	import EmailIcon from '$lib/assets/icons/EmailIcon.svelte';
	import SpotifyIcon from '$lib/assets/icons/SpotifyIcon.svelte';
</script>

<div class="flex grow flex-col items-center justify-center mx-2">
	<div class="flex flex-col">
		<enhanced:img
			src={headshotImg}
			alt="A really pretty face"
			class="shadow-light relative top-6 h-[120px] w-[120px] rounded-full border-2 border-black m-auto"
		/>
		<h1 class="z-10 mt-0 leading-[0.75] text-center" style="margin-top: 0; line-height: 0.75; font-size: 48px; z-index: 1;">
			JAXSON PAHUKULA
		</h1>
	</div>

	<main class="black-glass shadow-light mb-8 rounded-2xl px-6 *:text-center">
		<p>
			Hi, welcome to my website, have a cookie<br />
			<script>
				document.cookie = 'cookie=🍪';
			</script>
		</p>

		<div class="flex justify-center">
			<ul class="list-gt-bullet flex w-fit flex-col items-start text-left">
				<li>
					<a href="mailto:jaxpahu@gmail.com" target="_blank">jaxpahu@gmail.com</a>
				</li>
				<li>
					<a href="https://github.com/jaxsonp" target="_blank">Github</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/jaxsonp/" target="_blank">LinkedIn</a>
				</li>
			</ul>
		</div>

		<p>───━━━━━━━━━━━━━━━───</p>

		<p>
			Browse my <a href="/projects" class="text-secondary hover:text-primary underline">Project Gallery</a>
			<br /><br />
			If you’re a hiring manager, check out
			<a href="/experience" class="text-secondary hover:text-primary underline">my CV</a>
		</p>

		<p>───━━━━━━━━━━━━━━━───</p>

		<p style="margin-bottom: 12px;">My digital footprint:</p>
		<ul class="mb-6 grid list-inside list-none grid-cols-[auto_auto] justify-center gap-x-3 gap-y-1">
			{#snippet social_link(text: string, href: string, Icon: Component)}
				<li class="social-link">
					<a {href} target="_blank" class="flex items-center gap-2">
						<Icon class="h-4 w-4" />
						{text}
					</a>
				</li>
			{/snippet}
			{@render social_link('Email', 'mailto:jaxpahu@gmail.com', EmailIcon)}
			{@render social_link('Facebook', 'https://www.facebook.com/profile.php?id=100086394281851', FacebookIcon)}
			{@render social_link('Github', 'https://github.com/jaxsonp', GithubIcon)}
			{@render social_link('Instagram', 'https://www.instagram.com/jaxson.mp/', InstagramIcon)}
			{@render social_link('Leetcode', 'https://leetcode.com/colbyjack/', LeetcodeIcon)}
			{@render social_link('LinkedIn', 'https://www.linkedin.com/in/jaxsonp/', LinkedInIcon)}
			{@render social_link('Reddit', 'https://www.reddit.com/user/cojack808/', RedditIcon)}
			{@render social_link(
				'Spotify',
				'https://open.spotify.com/user/4jtq72to3phoh40qj10gghrrm?si=8b5e640043c24fd1',
				SpotifyIcon
			)}
		</ul>
	</main>
</div>
<Footer />

<style>
	p {
		margin: 2rem 0;
	}
</style>
