"use client";

import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
	const [text] = useTypewriter({
		words: ["Developer", "Software Engineer"],
		loop: {},
		typeSpeed: 60,
		deleteSpeed: 30,
	});
	return (
		<section
			className="flex items-center justify-center align-middle bg-midnightBlue pt-32 p-16 pb-24"
			id="home"
		>
			<div className="flex lg:flex-row flex-col items-center align-middle gap-4 lg:gap-60">
				<div className="font-bold justify-start text-cloudGray text-left">
					<h2 className="md:text-5xl text-4xl  leading-tight">
						Hi, I&apos;m Harun a <br />
						<span className="text-smoothRed">{text}</span>
						<span className="text-smoothRed">
							<Cursor cursorStyle="|" />
						</span>
						<br />
						from Prizren, Kosovo
					</h2>
					<p className="text-xl py-4">
						I&apos;m passionate about crafting digital solutions and bringing
						ideas to life through code.
					</p>
				</div>
				<div className="flex items-center justify-center align-middle">
					<Image
						src="/assets/assets/HeaderImg.png"
						width={500}
						height={500}
						alt="Header Image"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
