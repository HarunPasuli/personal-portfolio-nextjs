import Image from "next/image";

const Hero = () => {
	return (
		<section className="flex items-center justify-center align-middle bg-midnightBlue p-16 pb-24 ">
			<div className="flex md:flex-row flex-col items-center align-middle gap-60">
				<div className="font-bold justify-start text-cloudGray text-left">
					<h2 className="text-5xl  leading-tight">
						Hi, I&apos;m Harun a <br />
						<span className="text-smoothRed">Developer </span> <br />
						from Kosovo
					</h2>
					<p className="text-xl py-4">
						dolorem neque dolorum <br /> unde velit ea exercitationem eaque?
						Debitis!
					</p>
				</div>
				<div>
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
