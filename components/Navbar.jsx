import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flex font-bold text-lg text-cloudGray bg-midnightBlue items-center">
			<div className="flex md:flex-row flex-col p-4 px-16 justify-between items-center w-full">
				<Link href="/">
					<h1 className="text-4xl">Harun Pasuli</h1>
				</Link>
				<div className="flex space-x-4">
					<a href="#about">About</a>
					<a href="#skills">Skills</a>
					<a href="#my-projects">My Projects</a>
					<a href="#contact">Contact</a>
				</div>
				<div className="bg-smoothRed rounded-sm px-8 py-1">
					<button className="uppercase">Download CV</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
