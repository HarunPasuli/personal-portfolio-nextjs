import Image from "next/image";

const Skills = () => {
	return (
		<section className="gap-10 justify-center text-left bg-cloudGray text-midnightBlue p-16">
			<h2 className="uppercase text-left font-bold text-4xl py-4">Skills</h2>
			<div className="flex flex-col items-center"></div>
			<div className="mt-10">
				<div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 justify-center items-center lg:grid-cols-4 gap-10">
					<li className="w-full shadow-sm bg-midnightBlue">
						<div className="w-full flex flex-col items-center justify-center py-[30px] h-64 md:py-[60px] rounded-md bg-light-bg">
							<Image
								src="/assets/programming/HTML5.png"
								width={100}
								height={100}
								alt="HTML5"
							/>
							<p className="uppercase text-cloudGray mt-3">HTML5</p>
						</div>
					</li>

					<li className="w-full shadow-sm bg-midnightBlue">
						<div className="w-full flex flex-col items-center justify-center py-[30px] h-64 md:py-[60px] rounded-md bg-light-bg">
							<Image
								src="/assets/programming/CSS3.png"
								width={100}
								height={100}
								alt="CSS3"
							/>
							<p className="uppercase text-cloudGray mt-3">CSS</p>
						</div>
					</li>

					<li className="w-full shadow-sm bg-midnightBlue">
						<div className="w-full flex flex-col items-center justify-center py-[30px] h-64 md:py-[60px] rounded-md bg-light-bg">
							<Image
								src="/assets/programming/JS.png"
								width={100}
								height={100}
								alt="JavaScript"
							/>
							<p className="uppercase text-cloudGray mt-3">JavaScript</p>
						</div>
					</li>

					<li className="w-full shadow-sm bg-midnightBlue">
						<div className="w-full flex flex-col items-center justify-center py-[30px] h-64 md:py-[60px] rounded-md bg-light-bg">
							<Image
								src="/assets/programming/React.png"
								width={100}
								height={100}
								alt="React"
							/>
							<p className="uppercase text-cloudGray mt-3">React</p>
						</div>
					</li>

					<li className="w-full shadow-sm bg-midnightBlue">
						<div className="w-full flex flex-col items-center justify-center py-[30px] h-64 md:py-[60px] rounded-md bg-light-bg">
							<Image
								src="/assets/programming/NodeJS.png"
								width={100}
								height={100}
								alt="NodeJS"
							/>
							<p className="uppercase text-cloudGray mt-3">NodeJS</p>
						</div>
					</li>

					<li className="w-full shadow-sm bg-midnightBlue">
						<div className="w-full flex flex-col items-center justify-center py-[30px] h-64 md:py-[60px] rounded-md bg-light-bg">
							<Image
								src="/assets/programming/MongoDB.png"
								width={100}
								height={100}
								alt="MongoDB"
							/>
							<p className="uppercase text-cloudGray mt-3">MongoDB</p>
						</div>
					</li>

					<li className="w-full shadow-sm bg-midnightBlue">
						<div className="w-full flex flex-col items-center justify-center pt-4 h-64 rounded-md bg-light-bg">
							<Image
								src="/assets/programming/PHP.png"
								width={100}
								height={100}
								alt="PHP"
							/>
							<p className="uppercase text-cloudGray pt-16">PHP</p>
						</div>
					</li>

					<li className="w-full shadow-sm bg-midnightBlue">
						<div className="w-full flex flex-col items-center justify-center py-[30px] h-64 md:py-[60px] rounded-md bg-light-bg">
							<Image
								src="/assets/programming/Laravel.png"
								width={100}
								height={100}
								alt="Laravel"
							/>
							<p className="uppercase text-cloudGray mt-3">Laravel</p>
						</div>
					</li>
				</div>
			</div>
		</section>
	);
};

export default Skills;
