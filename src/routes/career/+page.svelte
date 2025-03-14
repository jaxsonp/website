<script lang="ts">
	import { Timeline } from 'svelte-vertical-timeline';
	import TimelineEntry from '$lib/components/TimelineEntry.svelte';

	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import HomeIcon from '$lib/assets/icons/HomeIcon.svelte';
</script>

<div class="black-glass h-full w-full border-x-1 border-x-black p-4 lg:px-16">
	<h1 class="underline-accent my-8 text-center font-bold">Professional Overview</h1>
	<SectionTitle id="intro">Introduction</SectionTitle>
	<p class="px-[10%]">
		Pretend there is a good professional introduction here, I will get around to writing this
		someday.
	</p>
	<SectionTitle id="experience">Experience</SectionTitle>
	<div id="timeline" class="xl:mx-16">
		<Timeline position="right" style="padding: 0" center={false}>
			<TimelineEntry time="Summer 2024">
				<h3>Griffiss Institute</h3>
				<h4>VICEROY Maven Research Intern - Rome, NY</h4>
				<p>
					As part of the VICEROY Maven intern program, I participated in cybersecurity lessons with
					various Department of Defense (DoD) personnel on Air Force and DoD-oriented cyber
					missions. I was also able to work on a research project throughout the summer at the Air
					Force Research Laboratory in NY.
				</p>
				<p>
					At the end of my internship, I was selected to represent VICEROY and P3I at the Pentagon
					in a meeting with HON Shyu (OUSD(R&E)) and dialogued with the offices of Hawai’i’s
					senators and congressmen/women in Washington DC.
				</p>
				<div class="image-container">
					<img
						src="/pics/20240619_025840_04E50C.jpeg"
						alt="My co-interns and I overlooking the airstrip"
					/>
					<img src="/pics/20240809_194005_98C4F4.jpeg" alt="Me at the Pentagon" />
				</div>
			</TimelineEntry>
			<TimelineEntry time="Aug 2023 - May 2024">
				<h3>The Data Mine - Purdue University</h3>
				<h4>Undergraduate Researcher</h4>
				<p>
					I collaborated with Raytheon Technologies and other students to create a hard drive
					remaining-useful-life prediction model. Together we learned and applied various data
					science techniques such as anomaly detection, k-means clustering, LSTM models, and more.
				</p>
			</TimelineEntry>
			<TimelineEntry time="Summer 2023">
				<h3>Applied Research Laboratory at UH</h3>
				<h4>Software Dev. Assistant/Intern - Kihei, HI</h4>
				<p>
					I had a great time collaborating on a team researching new technologies for portal
					software at MHPCC, the DoD's vanguard high performance computing center. With my brother,
					I worked on developing backend software for a mock central administration platform for
					managing containerized apps and software on servers and swarms. I used Python, Flask, and
					Docker to create and document a REST API for this project.
				</p>
				<p>
					<img
						class="float-right max-h-[200px]"
						src="pics/20230804_115740-1500x1125.jpg"
						alt="Me and my brother presenting our project at an intern spotlight"
					/>
					During my internship I also researched and stood up Grafana, a monitoring and data analytics
					application for aggregating data and generating graphs and visuals. I gained experience with
					linux servers and time series databases, and created various scripts to automate operations.
				</p>
			</TimelineEntry>
			<TimelineEntry time="Jan-Dec 2023">
				<h3>Data Science Labs, Purdue University</h3>
				<h4>Lab Instructor/TA</h4>
				<p>
					As a lab instructor, I taught students to apply concepts from Calculus I and II to basic
					data science problems in a lab setting. I led students in engaging lab projects using
					Jupyter notebooks, Python, Raspberry Pis, and various prototyping electronic components. I
					collaborated with other instructors and advisors to develop, correct, and refine the
					course curriculum and prepare course materials and hardware.
				</p>
				<p>
					Some of favorite projects included computing heart rates using PPG sensors, and measuring
					tall buildings using accelerometers and trigonometry.
				</p>
			</TimelineEntry>
		</Timeline>
	</div>
	<SectionTitle id="resume">Resume</SectionTitle>
	<p class="mx-4 my-12 text-center text-xl md:text-2xl">
		Check out my latest resume
		<a href="/Resume-Jaxson-Pahukula.pdf" target="_blank" class="italic text-white underline"
			>here</a
		>
	</p>
	<br />
	<Footer />
</div>
<a href="/" class="fixed bottom-2 z-40 ml-4 flex items-center text-2xl">
	{'<'}
	<HomeIcon class="h-12" />
</a>

<style>
	p {
		@apply my-2 indent-8;
	}

	#timeline h3 {
		@apply mt-0;
	}

	#timeline h4 {
		@apply mb-4 ml-6 italic;
	}

	#timeline p {
		@apply indent-4 leading-tight;
	}

	img {
		@apply rounded-md;
	}

	#timeline img {
		@apply m-2 object-contain;
	}

	.image-container {
		@apply md:flex md:h-[250px] md:justify-evenly md:gap-2;
	}
	.image-container img {
		@apply max-h-[300px];
	}
</style>
