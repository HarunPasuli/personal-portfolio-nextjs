"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import "./Nabar.css";

const Navbar = () => {
	const [isNavbarFixed, setIsNavbarFixed] = useState(false);
	const [activeLink, setActiveLink] = useState(""); // State to track active link

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		setIsNavbarFixed(scrollTop > 50); // Adjust the threshold based on your needs
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const toggleSheet = (e) => {
		e.preventDefault(); // Prevent the default behavior
		setIsSheetOpen(!isSheetOpen);
	};

	const handleLinkClick = (link) => {
		console.log(`Link clicked: ${link}`);
		setActiveLink(link);
	};
	return (
		<nav
			className={`flex lg:fixed top-0 left-0 lg:w-full w-fit font-bold text-lg text-cloudGray bg-midnightBlue items-center ${
				isNavbarFixed ? "fixed-navbar" : ""
			}`}
		>
			<div className="lg:flex lg:flex-row hidden flex-col p-4 px-16 justify-between items-center w-full">
				<Link href="/">
					<h1 className="text-4xl">Harun Pasuli</h1>
				</Link>
				<div className="flex space-x-4">
					<a
						href="#home"
						className={activeLink === "home" ? "active" : ""}
						onClick={() => handleLinkClick("home")}
					>
						Home
					</a>
					<a
						href="#about"
						className={activeLink === "about" ? "active" : ""}
						onClick={() => handleLinkClick("about")}
					>
						About
					</a>
					<a
						href="#skills"
						className={activeLink === "skills" ? "active" : ""}
						onClick={() => handleLinkClick("skills")}
					>
						Skills
					</a>
					<a
						href="#my-projects"
						className={activeLink === "my-projects" ? "active" : ""}
						onClick={() => handleLinkClick("my-projects")}
					>
						My Projects
					</a>
					<a
						href="#contact"
						className={activeLink === "contact" ? "active" : ""}
						onClick={() => handleLinkClick("contact")}
					>
						Contact
					</a>
				</div>
				<div className="bg-smoothRed rounded-sm px-8 py-1">
					<button className="uppercase">Download CV</button>
				</div>
			</div>
			<div className="font-black w-fit flex items-center bg-midnightBlue text-cloudGray gap-8 ml-4 mt-4 lg:text-lg lg:hidden">
				<Sheet
					isOpen={isSheetOpen}
					onClose={toggleSheet}
					className="bg-midnightBlue text-cloudGray"
				>
					<SheetTrigger>
						<Menu size={50} onClick={toggleSheet} />
					</SheetTrigger>
					<SheetContent className="bg-midnightBlue text-cloudGray">
						<div className="font-black flex flex-col items-center gap-4 lg:text-lg text-3xl">
							<p className="font-black lg:text-3xl text-4xl">My Portfolio</p>

							<a
								href="#home"
								className={activeLink === "home" ? "active" : ""}
								onClick={() => handleLinkClick("home")}
							>
								Home
							</a>
							<a
								href="#about"
								className={activeLink === "about" ? "active" : ""}
								onClick={() => handleLinkClick("about")}
							>
								About
							</a>
							<a
								href="#skills"
								className={activeLink === "skills" ? "active" : ""}
								onClick={() => handleLinkClick("skills")}
							>
								Skills
							</a>
							<a
								href="#my-projects"
								className={activeLink === "my-projects" ? "active" : ""}
								onClick={() => handleLinkClick("my-projects")}
							>
								My Projects
							</a>
							<a
								href="#contact"
								className={activeLink === "contact" ? "active" : ""}
								onClick={() => handleLinkClick("contact")}
							>
								Contact
							</a>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export default Navbar;
