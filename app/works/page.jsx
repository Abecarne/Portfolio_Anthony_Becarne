"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi"; // Add this for fullscreen icons

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
		num: "03",
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
		num: "04",
		category: "FullStack Development",
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
		num: "05",
		category: "FullStack Development",
		title: "Vocabulary",
		description:
			"A fullstack web application that helps users to learn new words and their meanings. Users can create an account, add new words, and test their knowledge with quizzes.",
		stack: [
			{ name: "Next.js" },
			{ name: "React.js" },
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
];

const categories = [
	"All",
	...Array.from(new Set(projects.map((p) => p.category))),
];

const Works = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [activeProject, setActiveProject] = useState(null);
	const [fullscreen, setFullscreen] = useState(false); // Fullscreen state

	const filteredProjects =
		selectedCategory === "All"
			? projects
			: projects.filter((p) => p.category === selectedCategory);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<h1 className="text-4xl font-bold mb-8 text-accent">My Projects</h1>
				{/* Filter Buttons */}
				<div className="flex gap-4 mb-8 flex-wrap">
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
				<div className="h-[80vh] overflow-y-auto pr-2">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{filteredProjects.map((project, idx) => (
							<motion.div
								key={idx}
								whileHover={{ scale: 1.03 }}
								className="bg-[#232329] rounded-xl p-8 flex flex-col gap-4 shadow-lg cursor-pointer transition"
								onClick={() => setActiveProject(project)}
							>
								<h2 className="text-2xl font-bold text-white">
									{project.title}
								</h2>
								<h3 className="text-lg text-accent">{project.category}</h3>
								<div className="flex items-center justify-center min-h-[200px]">
									{project.video ? (
										<iframe
											src={project.video}
											title={project.title}
											className="w-full h-56 rounded-lg"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									) : (
										<Image
											src={project.image}
											width={400}
											height={250}
											className="object-cover rounded-lg"
											alt={project.title}
										/>
									)}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
			{/* Modal Overlay for Zoomed Card */}
			<AnimatePresence>
				{activeProject && (
					<motion.div
						className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => {
							setActiveProject(null);
							setFullscreen(false);
						}}
					>
						<motion.div
							className={`bg-[#232329] rounded-xl shadow-2xl relative transition-all duration-300
                                ${fullscreen
									? "w-screen h-screen max-w-none max-h-none p-0 rounded-none"
									: "max-w-2xl w-full p-8"}
                            `}
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
							onClick={(e) => e.stopPropagation()}
						>
							{/* Close Button */}
							<button
								className="absolute top-4 right-4 text-white text-2xl z-10"
								onClick={() => {
									setActiveProject(null);
									setFullscreen(false);
								}}
								aria-label="Close"
							>
								&times;
							</button>
							{/* Fullscreen Toggle Button */}
							<button
								className="absolute top-4 right-14 text-white text-2xl z-10"
								onClick={() => setFullscreen((f) => !f)}
								aria-label={fullscreen ? "Exit Fullscreen" : "Fullscreen"}
							>
								{fullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
							</button>
							<div className={fullscreen ? "p-8 md:p-16 h-full flex flex-col" : ""}>
								<h2 className="text-3xl font-bold text-white mb-2">
									{activeProject.title}
								</h2>
								<h3 className="text-xl text-accent mb-2">
									{activeProject.category}
								</h3>
								<ul className="flex gap-2 flex-wrap mb-4">
									{activeProject.stack.map((item, i) => (
										<li key={i} className="text-accent text-base">
											{item.name}
											{i < activeProject.stack.length - 1 && ","}
										</li>
									))}
								</ul>
								<div className="mb-4 flex-1 flex items-center justify-center">
									{activeProject.video ? (
										<iframe
											src={activeProject.video}
											title={activeProject.title}
											className={
												fullscreen
													? "w-full h-full min-h-[400px] rounded-lg"
													: "w-full h-96 rounded-lg"
											}
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									) : (
										<Image
											src={activeProject.image}
											width={fullscreen ? 1200 : 600}
											height={fullscreen ? 700 : 350}
											className="object-cover rounded-lg"
											alt={activeProject.title}
										/>
									)}
								</div>
								<p className="text-white/80 mb-4">
									{activeProject.description}
								</p>
								<div className="flex gap-4 mt-2">
									{activeProject.live && (
										<Link
											href={activeProject.live}
											target="_blank"
											className="text-accent underline"
										>
											Live project
										</Link>
									)}
									{activeProject.url && (
										<Link
											href={activeProject.url}
											target="_blank"
											className="text-accent underline"
										>
											Github repository
										</Link>
									)}
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default Works;
