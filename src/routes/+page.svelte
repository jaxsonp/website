<script lang="ts">
	import headshotImg from '$lib/assets/headshot.jpg';
</script>

<div class="h-full w-full">
	<div class="lg:absolute lg:flex lg:h-full lg:w-[350px] lg:items-center xl:w-[375px]">
		<!-- Side card -->
		<div
			class="lg:black-glass z-10 flex w-full flex-col items-center rounded-2xl px-4 py-8 lg:h-[600px] lg:border-1 lg:border-black"
		>
			<!-- side card shadow -->
			<div
				class="clip-left -z-10 hidden h-full w-[250px] rounded-r-2xl shadow-light shadow-white/20 lg:absolute lg:left-[100px] lg:top-0 lg:block xl:left-[125px]"
			></div>
			<!-- side card content -->
			<img
				src={headshotImg}
				class="w-[150px] rounded-full border-2 border-black shadow-light shadow-white/20 md:w-[200px] lg:w-1/2"
				alt="Me"
			/>
			<div class="my-4">
				<p class="text-xl text-white">Hi, I'm</p>
				<h1 class="text-6xl font-bold underline decoration-blue decoration-8 underline-offset-2">
					Jaxson<br />Pahukula
				</h1>
			</div>
		</div>
	</div>
	<div class="black-glass flex h-full rounded-t-3xl lg:ml-[100px] lg:rounded-none xl:ml-[125px]">
		<div class="hidden min-w-[250px] lg:block"></div>
		<div class="w-full p-12">
			<!-- Content -->
			<p class="m-8 text-2xl italic">Welcome to my homepage!</p>
		</div>
	</div>
</div>
