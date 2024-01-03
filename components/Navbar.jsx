"use client";

import Link from "next/link";
import { useState } from "react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const toggleSheet = () => {
		setIsSheetOpen(!isSheetOpen);
	};
	return (
		<nav className="flex font-bold text-lg text-cloudGray bg-midnightBlue items-center">
			<div className="lg:flex lg:flex-row hidden flex-col p-4 px-16 justify-between items-center w-full">
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
			<div className="font-black w-fit flex items-center bg-midnightBlue text-cloudGray gap-8 ml-4 mt-4 lg:text-lg lg:hidden">
				<Sheet
					isOpen={isSheetOpen}
					onClose={toggleSheet}
					className="bg-midnightBlue text-cloudGray"
				>
					<SheetTrigger>
						<Menu />
					</SheetTrigger>
					<SheetContent className="bg-midnightBlue text-cloudGray">
						<div className="font-black flex flex-col items-center gap-4 lg:text-lg">
							<p className="font-blacklg:text-3xl text-xl">My Portfolio</p>
							<Link href="/" onClick={toggleSheet}>
								About
							</Link>
							<Link href="/about" onClick={toggleSheet}>
								Skills
							</Link>
							<Link href="/contact" onClick={toggleSheet}>
								My Projects
							</Link>
							<Link href="/" onClick={toggleSheet}>
								Contact
							</Link>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export default Navbar;
