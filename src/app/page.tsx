import Image, { StaticImageData } from "next/image";
import React, { SVGAttributes } from "react";

import headshot from "@lib/assets/headshot.png";
import UserIcon from "@components/icons/UserIcon";
import CubeIcon from "@components/icons/CubeIcon";
import BookIcon from "@components/icons/BookIcon";
import LockIcon from "@components/icons/LockIcon";

export default function Home() {
	return (
		<main className="w-full h-full lg:flex flex-col justify-center">
			<div className="lg:scale-0 lg:hidden">
				<IntroCard />
			</div>
			<div className="flex justify-center w-full pt-8 pb-16 lg:py-0 lg:h-3/4">
				<div className="bg-gradient-to-l from-black/30 bg-opacity-30 min-h-full w-[12.5%]" />
				<div className="blurred bg-black/30 border-y-[1px] border-black p-10 w-3/4 lg:h-full flex items-center gap-12">
					<div className="scale-0 hidden lg:block lg:scale-100">
						<IntroCard />
					</div>
					<div className="grow h-full flex flex-col">
						<h2 className="text-light-gray italic mt-0 md:mb-0">Go to...</h2>
						<div className="grow grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-0 h-full items-stretch content-around">
							<NavLink label="About me" thumbnail={UserIcon} />
							<NavLink label="Projects" thumbnail={CubeIcon} />
							<NavLink label="Blog" thumbnail={BookIcon} />
							<NavLink label="Internal" thumbnail={LockIcon} />
						</div>
					</div>
				</div>
				<div className="bg-gradient-to-r from-black/30 bg-opacity-30 min-h-full w-[12.5%]" />
			</div>
		</main>
	);
}

function IntroCard() {
	return (
		<section className="lg:bg-black/20 rounded-2xl lg:shadow-light p-10 md:pb-0 lg:pt-0 h-full gap-4 xl-gap-12 max-h-[600px] xl:max-h-[800px] flex flex-col items-center">
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
			<div className="text-2xl grow flex flex-col justify-center gap-2 xl:gap-4 mb-8">
				<a href="mailto:jaxpahu@gmail.com">jaxpahu@gmail.com</a>
				<a href="https://github.com/jaxsonp">Github {">"}</a>
				<a href="https://www.linkedin.com/in/jaxsonp/">LinkedIn {">"}</a>
			</div>
		</section>
	);
}

type IconComponent = React.ComponentType<SVGAttributes<SVGAElement>>;

function NavLink(props: { label: string; thumbnail: IconComponent }) {
	return (
		<a className="group transition flex flex-col items-center gap-4 p-4 hover:scale-105">
			<props.thumbnail className="stroke-light-gray stroke-1 group-hover:stroke-blue max-h-[100px]" />
			<p className="text-5xl text-center text-white group-hover:text-blue">{props.label}</p>
		</a>
	);
}
