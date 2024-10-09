import Image from "next/image";

import headshot from "@public/headshot.png";

export default function Home() {
	return (
		<main className="w-full h-full">
			<div className="lg:scale-0 lg:hidden">
				<IntroCard />
			</div>
			<div className="flex items-center justify-center w-full h-full">
				<div className="bg-gradient-to-l from-black/30 bg-opacity-30 h-3/4 w-[12.5%]" />
				<div className="blurred bg-black/30 border-y-[1px] border-black p-10 w-3/4 h-3/4 flex items-center gap-12">
					<div className="scale-0 hidden lg:block lg:scale-100">
						<IntroCard />
					</div>
					<div>Contents</div>
				</div>
				<div className="bg-gradient-to-r from-black/30 bg-opacity-30 h-3/4 w-[12.5%]" />
			</div>
		</main>
	);
}

function IntroCard() {
	return (
		<section className="lg:bg-black/20 rounded-2xl lg:shadow-light p-10 md:pb-0 lg:pt-0 max-h-[600px] flex flex-col items-center">
			<Image
				className="rounded-full border-2 my-4"
				src={headshot.src}
				alt="Picture of me"
				width={150}
				height={150}
				priority
			/>
			<div>
				<p className="mb-0 text-[1.5rem]">Hi, I'm</p>
				<h1 className="decoration-blue decoration-8 underline underline-offset-2 mt-0 leading-none">
					Jaxson <br />
					Pahukula
				</h1>
			</div>
			<div className="text-xl grow flex flex-col justify-center md:gap-2 xl:gap-4 mb-8">
				<a href="/resume.pdf">My Resume 🗋</a>
				<a href="mailto:jaxpahu@gmail.com">jaxpahu@gmail.com 🖂</a>
				<a href="https://github.com/jaxsonp">Github {">"}</a>
				<a href="https://www.linkedin.com/in/jaxsonp/">LinkedIn {">"}</a>
			</div>
		</section>
	);
}
