"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TopButton from "@/components/TopButton";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const MainLayout = ({ children }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Add scroll event listener for animations
		const handleScroll = () => {
			const sections = document.querySelectorAll(".animated-section");
			const windowHeight = window.innerHeight;

			sections.forEach((section) => {
				const sectionTop = section.getBoundingClientRect().top;

				if (sectionTop < windowHeight * 1.35) {
					// Adjust the multiplier (e.g., 0.6) for a later trigger
					section.classList.add("animated-section-active");
				}
			});
		};

		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
				/>
			</head>
			<body
				className={`${
					poppins.className
				} flex flex-col min-h-screen bg-midnightBlue ${
					loading ? "loading" : ""
				}`}
			>
				{loading ? (
					<div className="loader-container bg-smoothRed">
						<div className="loader-background"></div>
						<div className="loader-content flex justify-center items-center w-full h-screen align-middle">
							<ClimbingBoxLoader
								color={"#ECF0F1"}
								loading={loading}
								size={50}
								aria-label="Loading Spinner"
								data-testid="loader"
								className="max-w-lg:size-20 lg:size-100" // Adjust the sizes as needed
							/>
						</div>
					</div>
				) : (
					<>
						<div className="flex-grow m-auto lg:max-w-[1200px] bg-midnightBlue">
							<Navbar />
							<div className="animated-section" id="home">
								{children}
							</div>
							<Hero />
							<div className="animated-section" id="hero"></div>
							<div className="animated-section" id="about">
								<About />
							</div>
							<div className="animated-section" id="skills">
								<Skills />
							</div>
							<div className="animated-section" id="projects">
								<Projects />
							</div>
							<div className="animated-section" id="contact">
								<Contact />
							</div>
							<Footer />
						</div>
					</>
				)}
			</body>
		</html>
	);
};

export default MainLayout;
