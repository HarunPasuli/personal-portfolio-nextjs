import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
	title: "Portfolio",
	description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={
					poppins.className + " flex flex-col min-h-screen bg-midnightBlue"
				}
			>
				<div className="flex-grow m-auto max-w-[1200px] bg-midnightBlue">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
