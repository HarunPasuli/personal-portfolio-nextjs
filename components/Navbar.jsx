"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Menu } from "lucide-react";
import "./Navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
	const [isNavbarFixed, setIsNavbarFixed] = useState(false);
	const [activeLink, setActiveLink] = useState(""); // State to track active link
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

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
			className={`flex fixed max-w-md:relative z-50 top-0 left-0 lg:w-full w-fit font-bold text-lg text-cloudGray bg-midnightBlue items-center ${
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
			<div className="font-black w-[200vw] overflow-x-hidden flex items-center pb-2 bg-midnightBlue text-cloudGray gap-8 ml-4 mt-4 lg:text-lg lg:hidden">
				<button onClick={toggleSidebar}>
					<Menu size={50} />
				</button>
				<Sidebar
					isOpen={isSidebarOpen}
					onClose={() => setIsSidebarOpen(false)}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
