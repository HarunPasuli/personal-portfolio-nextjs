"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function MainLayout({ children }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<html lang="en">
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
								className="sm:size-20 lg:size-100" // Adjust the sizes as needed
							/>
						</div>
					</div>
				) : (
					<div className="flex-grow m-auto lg:max-w-[1200px] bg-midnightBlue">
						<Navbar />
						{children}
						<Footer />
					</div>
				)}
			</body>
		</html>
	);
}
