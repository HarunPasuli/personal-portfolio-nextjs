import SkillsCard from "./SkillsCard";
import { skills } from "@/constants/skills";

const Skills = () => {
	return (
		<section className="gap-10 justify-center text-left bg-cloudGray text-midnightBlue p-16">
			<h2 className="uppercase text-left font-bold text-4xl py-4">Skills</h2>
			<div className="flex flex-col items-center"></div>
			<div className="mt-10">
				<div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 justify-center items-center lg:grid-cols-4 gap-10">
					{skills.map((skill, index) => (
						<SkillsCard key={index} title={skill.title} image={skill.imgUrl} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
