"use client";

import WorkCard from "@/components/WorkCard";
import WorkModal from "@/components/WorkModal";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
	{
		num: "01",
		category: "Game Development",
		title: "Rainbow Rumble",
		description:
			"A 3D FPS game made in Unity. The game features 3 different weapons, 3 different enemies, and a boss. The player fights against waves of enemies to gain points and upgrade its weapons.",
		stack: [
			{ name: "Unity" },
			{ name: "C#" },
			{ name: "Blender" },
			{ name: "Git" },
		],
		image: "/assets/works/rainbow_rumble_preview.png",
		video: "https://www.youtube.com/embed/780mI3jOHPc",
		live: "https://www.youtube.com/watch?v=780mI3jOHPc&ab_channel=Soryoz",
		url: "",
	},
	{
		num: "02",
		category: "Web Development",
		title: "Portfolio Anthony Becarne",
		description:
			"A personal portfolio website showcasing my projects and skills.",
		stack: [
			{ name: "React.js" },
			{ name: "Next.js" },
			{ name: "TypeScript" },
			{ name: "TailwindCSS" },
			{ name: "Git" },
		],
		image: "/assets/works/portfolio.png",
		live: "",
		url: "",
	},
	{
		num: "03",
		category: "AI Development",
		title: "Gomoku AI",
		description:
			"Gomoku AI is a project that implements an AI player for the classic game Gomoku (Five in a Row). The AI uses minmax to predict and counter the player's moves.",
		stack: [
			{ name: "C++" },
			{ name: "Bash" },
			{ name: "Git" },
		],
		image: "/assets/works/gomokuAI.jpg",
		video: "",
		live: "",
		url: "https://github.com/Abecarne/GomokuAI",
	},
	{
		num: "04",
		category: "Game Development",
		title: "Sense | Chapter 1",
		description:
			"Sense is a 3D innovative RPG game made in Unreal Engine 5. Sense bases its gameplay on the player's human senses. The first chapter of the game is a prototype that showcases the game's mechanics for the vision. In a team of 7, I was the Artitic Director, Level Designer, 3D Artist and Game Designer.",
		stack: [
			{ name: "Unreal Engine 5" },
			{ name: "Blender 3D" },
			{ name: "Houdini" },
			{ name: "Perforce" },
		],
		video: "https://www.youtube.com/embed/O5ToL-oFs4Y",
		live: "",
		url: "",
	},
	{
		num: "05",
		category: "Game Development",
		title: "R-Type",
		description:
			"R-Type multiplayer clone made in C++ with a custom game engine and SFML for Graphics. The game features different levels, enemies & their own AI behavior, and a boss. Up to 4 players can play together in a local network. The game is inspired by the classic R-Type game.",
		stack: [
			{ name: "C++" },
			{ name: "Boost" },
			{ name: "SFML" },
			{ name: "CMake" },
			{ name: "Git" },
		],
		image: "/assets/works/rtype_preview.png",
		video: "https://www.youtube.com/embed/bC9gDVmy5RU",
		live: "",
		url: "",
	},
	{
		num: "06",
		category: "Web Development",
		title: "AREA",
		description:
			"A fullstack web and mobile application that uses different APIs such as Youtube, Gmail, Twitch, Twitter and GitHub. Users can create an account, connect their services, and create applets.",
		stack: [
			{ name: "React.js" },
			{ name: "Node.js" },
			{ name: "Javascript" },
			{ name: "MySQL" },
			{ name: "Express" },
			{ name: "Scss" },
		],
		image: "/assets/works/area_preview.png",
		live: "",
		url: "",
	},
	{
		num: "07",
		category: "Web Development",
		title: "Vocabulary",
		description:
			"A fullstack web application that helps users to learn new words and their meanings. Users can create an account, add new words, and test their knowledge with quizzes.",
		stack: [
			{ name: "React.js" },
			{ name: "Next.js" },
			{ name: "TypeScript" },
			{ name: "TailwindCSS" },
			{ name: "MongoDB" },
			{ name: "Express" },
			{ name: "NodeJS" },
		],
		image: "/assets/works/project01.png",
		live: "",
		url: "",
	},
	{
		num: "08",
		category: "AI Development",
		title: "Trading Bot",
		description:
			"A trading bot that uses decisional AI to predict stock prices and make trades.",
		stack: [
			{ name: "Python" },
			{ name: "Pandas" },
			{ name: "NumPy" },
		],
		image: "/assets/works/trade.jpg",
		live: "",
		url: "https://github.com/Abecarne/TradeBot",
	},
];

const categories = [
	"All",
	...Array.from(new Set(projects.map((p) => p.category))),
];

const allStacks = Array.from(
  new Set(projects.flatMap((p) => p.stack.map((s) => s.name)))
);

const Works = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedStacks, setSelectedStacks] = useState([]);
    const [activeProject, setActiveProject] = useState(null);
    const [fullscreen, setFullscreen] = useState(false);

    // Disable scroll when modal is open and fullscreen
    useEffect(() => {
        if (activeProject && fullscreen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeProject, fullscreen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && activeProject) {
                setActiveProject(null);
                setFullscreen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeProject]);

    const filteredProjects = projects.filter((p) => {
      const categoryOk = selectedCategory === "All" || p.category === selectedCategory;
      const stacksOk =
        selectedStacks.length === 0 ||
        selectedStacks.every((stack) => p.stack.map((s) => s.name).includes(stack));
      return categoryOk && stacksOk;
    });

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex flex-col justify-center xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
					<h1 className="text-xl xl:text-4xl font-bold text-accent mb-4 md:mb-0">
						My Projects
					</h1>
					<div className="flex gap-4 flex-wrap">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setSelectedCategory(cat)}
								className={`px-4 py-2 rounded-full border transition ${
									selectedCategory === cat
										? "bg-accent text-primary font-bold"
										: "bg-[#232329] text-white/70 border-white/10 hover:bg-accent/30"
								}`}
							>
								{cat}
							</button>
						))}
					</div>
				</div>
				<div className="h-[80vh] overflow-y-auto pr-2">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{filteredProjects.map((project, idx) => (
							<WorkCard
								key={idx}
								project={project}
								onClick={() => setActiveProject(project)}
							/>
						))}
					</div>
				</div>
			</div>
			{/* Modal Overlay for Zoomed Card */}
			<AnimatePresence>
				{activeProject && (
					<WorkModal
						project={activeProject}
						fullscreen={fullscreen}
						onClose={() => {
							setActiveProject(null);
							setFullscreen(false);
						}}
						onToggleFullscreen={() => setFullscreen((f) => !f)}
					/>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default Works;
