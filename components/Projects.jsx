"use client";

import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/projects";

const Projects = () => {
	const [filteredProjects, setFilteredProjects] = useState(projects);

	const handleFilterChange = (selectedStacks) => {
		if (selectedStacks.length === 0) {
			setFilteredProjects(projects);
		} else {
			const filtered = projects.filter((project) =>
				project.stack.some((stack) => selectedStacks.includes(stack))
			);
			setFilteredProjects(filtered);
		}
	};

	return (
		<section className="gap-10 justify-center text-left bg-cloudGray text-midnightBlue p-16">
			<h2 className="uppercase text-left font-bold text-4xl py-4">
				My Projects
			</h2>
			<ProjectFilter onFilterChange={handleFilterChange} />
			<div className="mt-10">
				<div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 justify-center items-center lg:grid-cols-2 gap-10">
					{filteredProjects.map((project, index) => (
						<ProjectCard
							key={index}
							title={project.title}
							stack={project.stack}
							imgUrl={project.imgUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
