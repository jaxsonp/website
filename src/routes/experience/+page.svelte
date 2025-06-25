<script lang="ts">
	import { Timeline } from 'svelte-vertical-timeline';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TimelineEntry from '$lib/components/TimelineEntry.svelte';

	import maven1Pic from '$lib/assets/pics/maven1.jpeg';
	import maven2Pic from '$lib/assets/pics/maven2.jpeg';
	import arlPic from '$lib/assets/pics/arl.jpg';
</script>

<Header page="Experience" />
<main class="flex flex-col items-center gap-y-10 p-6 md:w-[80%] md:max-w-[1100px]">
	<h1>My Career</h1>
	<div class="black-glass shadow-light rounded-2xl p-4 md:max-w-[75%] md:px-8">
		<h2 class="my-4"><span class="text-primary">&gt</span> Introduction</h2>
		<p>Pretend there is a good professional introduction here, I will get around to writing this someday.</p>
		<p class="text-center">
			TLDR: <a href="./resume" class="text-secondary hover:text-primary underline">My resume</a>
		</p>
	</div>
	<div class="black-glass shadow-light w-full rounded-2xl p-4 md:px-8">
		<h2 class="my-4"><span class="text-primary">&gt</span> Work Experience</h2>
		<Timeline position="right" style="padding: 0" center={false}>
			<TimelineEntry time="Summer 2024">
				<h3>Griffiss Institute, VICEROY Maven Program</h3>
				<h4>Research Intern - Rome, NY</h4>
				<p>
					As part of the VICEROY Maven intern program, I participated in cybersecurity lessons with various Department
					of Defense (DoD) personnel on Air Force and DoD-oriented cyber missions. I was also able to work on a research
					project throughout the summer at the Air Force Research Laboratory in NY.
				</p>
				<p>
					At the end of my internship, I was selected to represent VICEROY and P3I at the Pentagon in a meeting with HON
					Shyu (OUSD(R&E)) and dialogued with the offices of Hawai’i’s senators and congressmen/women in Washington DC.
				</p>
				<div class="flex flex-col gap-4 md:h-[250px] md:flex-row md:justify-evenly">
					<img src={maven1Pic} alt="Co-interns and I overlooking the airstrip" class="object-contain" />
					<img src={maven2Pic} alt="Me at the Pentagon" class="object-contain" />
				</div>
			</TimelineEntry>
			<TimelineEntry time="Fall 2023 - Spring 2024">
				<h3>The Data Mine, Purdue University</h3>
				<h4>Undergrad Researcher</h4>
				<p>
					I worked with Raytheon Technologies and other students to create a hard drive remaining-useful-life prediction
					model. Together we learned and applied various data science techniques such as anomaly detection, k-means
					clustering, LSTM models, and more.
				</p>
			</TimelineEntry>
			<TimelineEntry time="Summer 2023">
				<h3>Applied Research Laboratory at UH</h3>
				<h4>Software Dev. Intern - Kihei, HI</h4>
				<p>
					At ARL, I collaborated on a team researching new technologies for portal software at the Maui high performance
					computing center (MHPCC). I worked on developing backend software for a mock central administration platform
					for managing containerized apps and software on servers and swarms. I used Python, Flask, and Docker to create
					and document a REST API for this project.
				</p>
				<p>
					<img src={arlPic} alt="Presenting my project" class="float-right ml-2 max-h-[200px]" />
					I also researched and stood up Grafana, a monitoring and data analytics application for aggregating data and generating
					graphs and visuals. I gained experience with linux servers and time series databases, and created various scripts
					to automate operations.
				</p>
			</TimelineEntry>
			<TimelineEntry time="Jan-Dec 2023">
				<h3>Data Science Labs, Purdue University</h3>
				<h4>Lab Instructor</h4>
				<p>
					As a lab instructor, I taught students to apply concepts from Calculus I and II to basic data science problems
					in a lab setting. I led students in engaging lab projects using Jupyter notebooks, Python, Raspberry Pis, and
					various prototyping electronic components. I collaborated with other instructors and advisors to develop,
					correct, and refine the course curriculum and prepare course materials and hardware.
				</p>
				<p>
					Some of favorite projects included computing heart rates using PPG sensors, and measuring tall buildings using
					accelerometers and trigonometry.
				</p>
			</TimelineEntry>
		</Timeline>
	</div>
</main>
<Footer />

<style>
	p {
		text-indent: 2rem;
		margin: 8px 0;
	}

	h3 {
		font-weight: 700;
	}

	h4 {
		font-style: italic;
	}

	img {
		border-radius: 8px;
	}
</style>
