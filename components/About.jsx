const About = () => {
	return (
		<section className="flex flex-col justify-center align-middle text-left bg-cloudGray text-midnightBlue p-16">
			<div className="flex justify-center flex-col">
				<h2 className="uppercase font-bold text-4xl py-4">About Me</h2>
				<p className="font-medium text-xl">
					I&apos;m passionate about crafting digital solutions and bringing
					ideas to life through code. With experience in HTML, CSS, JS , PHP and
					Laravel, I enjoy working on diverse projects that challenge and
					inspire me. My goal is to improve my skills as a programmer and
					improve each day.
				</p>
			</div>
			<div className="mt-10">
				<div className="w-full">
					<ul className="flex justify-between gap-10 flex-col md:flex-row">
						<li className="w-full shadow-sm bg-midnightBlue">
							<div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
								<h3 className="text-[40px] mb-[3px font-bold text-smoothRed">
									10+
								</h3>
								<span className="uppercase text-cloudGray">
									Certifications and awards
								</span>
							</div>
						</li>
						<li className="w-full shadow-sm bg-midnightBlue">
							<div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
								<h3 className="text-[40px] mb-[3px font-bold text-smoothRed">
									20+
								</h3>
								<span className="uppercase text-cloudGray">
									Projects Completed
								</span>
							</div>
						</li>
						<li className="w-full shadow-sm bg-midnightBlue">
							<div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg">
								<h3 className="text-[40px] mb-[3px font-bold text-smoothRed">
									3+
								</h3>
								<span className="uppercase text-cloudGray">
									Years of Experience
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
