import Link from "next/link";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Sidebar = ({ isOpen, onClose }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
			document.body.style.overflow = "hidden";
		} else {
			setIsClosing(true); // Trigger closing animation
			setTimeout(() => {
				setIsVisible(false);
				setIsClosing(false);
				document.body.style.overflow = "";
			}, 300); // Match the duration of the slideOut animation (300ms in this case)
		}
	}, [isOpen]);

	const handleOverlayClick = () => {
		console.log("Overlay clicked");
		onClose();
	};

	const handleCloseButtonClick = () => {
		setIsClosing(true); // Trigger closing animation
		setTimeout(() => {
			onClose();
			setIsVisible(false);
			setIsClosing(false);
			document.body.style.overflow = "";
		}, 300); // Match the duration of the slideOut animation (300ms in this case)
	};

	return (
		<>
			<div
				className="overlay"
				style={{
					display: isOpen ? "block" : "none",
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "200vh",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					zIndex: 999,
					transition: "opacity 0.3s ease-in-out",
					opacity: isOpen ? 1 : 0,
				}}
				onClick={handleOverlayClick}
			></div>
			<div
				className={`sidebar ${
					isOpen || isClosing
						? "open visible p-8 100vh text-cloudGray bg-midnightBlue"
						: "hidden"
				}`}
				style={{
					transition: "transform 0.3s ease-in-out",
					transform: isOpen ? "translateX(0)" : "translateX(-100%)",
					animation: isOpen
						? "slideIn 0.3s ease-in-out"
						: isClosing
						? "slideOut 0.3s ease-in-out"
						: "",
					height: "200vh", // This should make it full height
					position: "fixed",
					top: 0,
					left: 0,
					width: "50%", // Adjust this value to cover half of the screen
					zIndex: 1000,
				}}
			>
				{/* Close button (X) with animation */}
				{isOpen && (
					<button
						className="close-button py-4 text-3xl text-smoothRed"
						onClick={onClose}
					>
						X
					</button>
				)}
				<Link href="/">
					<h1 className="text-4xl">Harun Pasuli</h1>
				</Link>
				<div
					className={`flex flex-col space-y-4 text-[1.65rem] mt-4 gap-2 ${
						isVisible ? "visible" : ""
					}`}
				>
					<a href="#home" onClick={onClose}>
						Home
					</a>
					<a href="#about" onClick={onClose}>
						About
					</a>
					<a href="#skills" onClick={onClose}>
						Skills
					</a>
					<a href="#my-projects" onClick={onClose}>
						My Projects
					</a>
					<a href="#contact" onClick={onClose}>
						Contact
					</a>
				</div>
				<div
					className={`bg-smoothRed rounded-sm px-8 py-1 mt-4 ${
						isVisible ? "visible" : ""
					}`}
				>
					<button className="uppercase" onClick={onClose}>
						Download CV
					</button>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
