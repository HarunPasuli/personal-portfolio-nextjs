import Image from "next/image";

const SkillsCard = ({ title, image }) => {
	return (
		<li className="w-full shadow-sm bg-midnightBlue">
			<div className="w-full flex flex-col items-center justify-center py-[30px] h-64 md:py-[60px] rounded-md bg-midnightBlue">
				<Image src={image} width={100} height={100} alt={title} />
				<p className="uppercase text-cloudGray mt-3">{title}</p>
			</div>
		</li>
	);
};

export default SkillsCard;
