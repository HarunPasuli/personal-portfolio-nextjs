import {
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiFillInstagram,
	AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="flex flex-col font-bold text-cloudGray justify-center items-center text-center align-middle">
			<div className="flex space-x-4 py-2 text-xl">
				<a href="#about">About</a>
				<a href="#skills">Skills</a>
				<a href="#my-projects">My Projects</a>
				<a href="#contact">Contact</a>
			</div>
			<div>
				<div className="flex flex-col gap-2 py-2">
					<div className="flex gap-5">
						<a href="https://www.github.com/HarunPasuli" className="text-3xl">
							<AiFillGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/harun-pasuli-b58254256/"
							className="text-3xl"
						>
							<AiFillLinkedin />
						</a>
						<a
							href="https://www.instagram.com/harunpasuli24/"
							className="text-3xl"
						>
							<AiFillInstagram />
						</a>
					</div>
				</div>
			</div>
			<p className="py-2 pb-8">
				Copyright © {new Date().getFullYear()} Harun Pasuli. All rights
				reserved.
			</p>
		</footer>
	);
};

export default Footer;
