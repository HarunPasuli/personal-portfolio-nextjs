"use client";

import { useState } from "react";
import { projects } from "@/constants/projects";

const ProjectFilter = ({ onFilterChange }) => {
	const allStacks = [
		"All",
		...new Set(projects.flatMap((project) => project.stack)),
	];
	const [selectedStack, setSelectedStack] = useState("All");

	const handleButtonClick = (stack) => {
		const updatedStack = stack === selectedStack ? "All" : stack;
		setSelectedStack(updatedStack);
		onFilterChange(
			updatedStack === "All" ? allStacks.slice(1) : [updatedStack]
		);
	};

	return (
		<div>
			<h3 className="m-4">Filter by Stack:</h3>
			<div className="flex m-4">
				{allStacks.map((stack) => (
					<button
						key={stack}
						className={`mr-4 ${
							stack === selectedStack
								? "bg-midnightBlue text-cloudGray px-4 py-1"
								: ""
						}`}
						onClick={() => handleButtonClick(stack)}
					>
						{stack}
					</button>
				))}
			</div>
		</div>
	);
};

export default ProjectFilter;
