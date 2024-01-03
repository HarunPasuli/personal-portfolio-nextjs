import Image from "next/image";
import { FaGithub, FaEye } from "react-icons/fa";

const ProjectCard = ({ title, stack, imgUrl }) => {
	return (
		<li className="w-full shadow-sm bg-midnightBlue">
			<div className="w-full flex flex-col items-center justify-center py-[30px] p-2 h-64 md:py-[60px] rounded-md bg-light-bg">
				<Image src={imgUrl} width={400} height={180} alt={title} />
				<p className="text-cloudGray text-xl mt-3">{title}</p>
				<div className="flex mt-2">
					<FaGithub className="mr-2" />
					<FaEye />
				</div>
			</div>
		</li>
	);
};

export default ProjectCard;
