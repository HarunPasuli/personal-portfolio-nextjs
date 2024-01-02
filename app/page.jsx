import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

const Home = () => {
	return (
		<div className="flex flex-col items-center w-full">
			<Hero />
			<About />
			<Projects />
		</div>
	);
};

export default Home;
