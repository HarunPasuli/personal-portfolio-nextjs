import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Projects = () => {
	return (
		<section className="gap-10 justify-center text-left bg-cloudGray text-midnightBlue p-16">
			<h2 className="uppercase text-left font-bold text-4xl py-4">
				My Projects
			</h2>
			<div className="flex flex-col items-center"></div>
			<div className="mt-10">
				<div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 justify-center items-center lg:grid-cols-2 gap-10">
					<li className="w-full shadow-sm bg-midnightBlue">
						<div className="w-full flex flex-col items-center justify-center py-[30px] p-2 h-64 md:py-[60px] rounded-md bg-light-bg">
							<Image
								src="/assets/projects/SimplyRecipes.png"
								width={400}
								height={180}
								alt="Recipe Website"
							/>
							<p className="text-cloudGray text-xl mt-3">Recipe Website</p>
						</div>
					</li>

					<li className="w-full shadow-sm bg-midnightBlue">
						<div className="w-full flex flex-col items-center justify-center py-[30px] h-64 md:py-[60px] rounded-md bg-light-bg">
							<Image
								src="/assets/projects/BlogWebsite.png"
								width={400}
								height={180}
								alt="Blog Website"
							/>
							<p className="text-cloudGray text-xl mt-3">Blog Website</p>
						</div>
					</li>

					<li className="w-full shadow-sm bg-midnightBlue">
						<div className="w-full flex flex-col items-center justify-center py-[30px] h-64 md:py-[60px] rounded-md bg-light-bg">
							<Image
								src="/assets/projects/RecipeBook.png"
								width={400}
								height={180}
								alt="Recipe Book"
							/>
							<p className="text-cloudGray text-xl mt-3">Recipe Book</p>
						</div>
					</li>
				</div>
			</div>
		</section>
	);
};

export default Projects;
