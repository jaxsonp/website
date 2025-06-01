<script lang="ts">
	import { type Component } from 'svelte';

	import headshotImg from '$lib/assets/headshot.jpg';

	import InstagramIcon from '$lib/assets/icons/InstagramIcon.svelte';
	import CTFTimeIcon from '$lib/assets/icons/CTFTimeIcon.svelte';
	import GithubIcon from '$lib/assets/icons/GithubIcon.svelte';
	import LinkedInIcon from '$lib/assets/icons/LinkedInIcon.svelte';
	import FacebookIcon from '$lib/assets/icons/FacebookIcon.svelte';
	import LeetcodeIcon from '$lib/assets/icons/LeetcodeIcon.svelte';
	import RedditIcon from '$lib/assets/icons/RedditIcon.svelte';
	import EmailIcon from '$lib/assets/icons/EmailIcon.svelte';
	import HtbIcon from '$lib/assets/icons/HTBIcon.svelte';
	import SpotifyIcon from '$lib/assets/icons/SpotifyIcon.svelte';
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<div style="display: flex; flex-direction: column; align-items: center;">
		<img
			src={headshotImg}
			alt="A really pretty face"
			class="shadow-light w-[130px] h-[130px] border-2 border-black relative top-4 rounded-full"
		/>
		<h1 style="margin-top: 0; line-height: 0.75; font-size: 48px; z-index: 1;">JAXSON PAHUKULA</h1>
	</div>

	<main class="black-glass shadow-light px-6 rounded-2xl mb-8 *:text-center">
		<p>
			Hi, welcome to my website, have a cookie<br />
			<script>
				document.cookie = 'cookie=🍪';
			</script>
		</p>

		<p style="text-align: left; width: min-content; margin: auto;">
			<a href="mailto:jaxpahu@gmail.com" target="_blank">
				<span class="text-secondary">&gt</span>&nbspjaxpahu@gmail.com<br />
			</a>
			<a href="https://github.com/jaxsonp" target="_blank">
				<span class="text-secondary">&gt</span>&nbspGithub<br />
			</a>
			<a href="https://www.linkedin.com/in/jaxsonp/" target="_blank">
				<span class="text-secondary">&gt</span>&nbspLinkedIn<br />
			</a>
		</p>

		<p>───━━━━━━━━━━━━━━━───</p>

		<p>
			Browse my <a href="/projects" class="text-secondary underline hover:text-primary">Project Gallery</a>
			<br /><br />
			If you’re a hiring manager, check out <a href="/experience" class="text-secondary underline hover:text-primary">my CV</a>
		</p>

		<p>───━━━━━━━━━━━━━━━───</p>

		<p style="margin-bottom: 12px;">My digital footprint:</p>
		<ul
			class="grid grid-cols-[auto_auto] list-inside list-none justify-center gap-x-3 gap-y-1 mb-6"
		>
			{#snippet social_link(text: string, href: string, Icon: Component)}
				<li class="social-link">
					<a href="{href}" target="_blank" class="flex gap-2 items-center"> 
						<Icon class="h-4 w-4" />
						{text}
					</a>
				</li>
			{/snippet}
			{@render social_link("CTFtime", "", CTFTimeIcon)}
			{@render social_link("Email", "mailto:jaxpahu@gmail.com", EmailIcon)}
			{@render social_link("Facebook", "https://www.facebook.com/profile.php?id=100086394281851", FacebookIcon)}
			{@render social_link("Github", "https://github.com/jaxsonp", GithubIcon)}
			{@render social_link("Instagram", "https://www.instagram.com/jaxson.mp/", InstagramIcon)}
			{@render social_link("Leetcode", "https://leetcode.com/colbyjack/", LeetcodeIcon)}
			{@render social_link("LinkedIn", "https://www.linkedin.com/in/jaxsonp/", LinkedInIcon)}
			{@render social_link("Reddit", "https://www.reddit.com/user/cojack808/", RedditIcon)}
			{@render social_link("Spotify", "https://open.spotify.com/user/4jtq72to3phoh40qj10gghrrm?si=8b5e640043c24fd1", SpotifyIcon)}
		</ul>
	</main>
</div>
