"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import Image from "next/image";
import Link from "next/link";

import WorkSliderButton from "../../components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Game Development",
    title: "R-Type",
    description:
      "R-Type multiplayer clone made in C++ with a custom game engine and SFML for Graphics. The game features different levels, enemies & their own AI behavior, and a boss. Up to 4 players can play together in a local network. The game is inspired by the classic R-Type game.",
    stack: [{ name: "C++" }, { name: "Boost" }, { name: "SFML" }, { name: "CMake" }, { name: "Git" }],
    image: "/assets/works/rtype_preview.png",
    video: "https://www.youtube.com/embed/bC9gDVmy5RU",
    live: "https://github.com",
    url: "https://github.com",
  },
  {
    num: "02",
    category: "Game Development",
    title: "Sense | Chapter 1",
    description:
    "Sense is a 3D innovative RPG game made in Unreal Engine 5. Sense bases its gameplay on the player's human senses. The first chapter of the game is a prototype that showcases the game's mechanics for the vision. In a team of 7, I was the Artitic Director, Level Designer, 3D Artist and Game Designer.",
    stack: [{ name: "Unreal Engine 5" }, { name: "Blender 3D" }, { name: "Houdini" }, { name: "Perforce" }],
    video: "https://www.youtube.com/embed/O5ToL-oFs4Y",
    live: "",
    url: "https://www.frontendmentor.io/profile/Abecarne",
  },
  {
    num: "03",
    category: "Game Development",
    title: "Rainbow Rumble",
    description:
      "A 3D FPS game made in Unity. The game features 3 different weapons, 3 different enemies, and a boss. The player fights against waves of enemies to gain points and upgrade its weapons.",
    stack: [{ name: "Unity" }, { name: "C#" }, { name: "Blender" }, { name: "Git" }],
    image: "/assets/works/rainbow_rumble_preview.png",
    video: "https://www.youtube.com/embed/780mI3jOHPc",
    live: "https://www.youtube.com/watch?v=780mI3jOHPc&ab_channel=Soryoz",
    url: "https://github.com",
  },
  {
    num: "04",
    category: "FullStack Development",
    title: "AREA",
    description:
      "A fullstack web and mobile application that uses different APIs such as Youtube, Gmail, Twitch, Twitter and GitHub. Users can create an account, connect their services, and create applets.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "Javascript" }, { name: "MySQL"}, { name: "Express"}, { name: "Scss"}],
    image: "/assets/works/area_preview.png",
    live: "https://github.com",
    url: "https://github.com",
  },
  {
    num: "05",
    category: "FullStack Development",
    title: "Vocabulary",
    description:
      "A fullstack web application that helps users to learn new words and their meanings. Users can create an account, add new words, and test their knowledge with quizzes.",
    stack: [{ name: "Next.js" }, { name: "React.js" }, { name: "TypeScript" }, { name: "TailwindCSS" }, { name: "MongoDB" }, { name: "Express" }, { name: "NodeJS" }],
    image: "/assets/works/project01.png",
    live: "https://github.com",
    url: "https://github.com",
  },
];

const Works = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

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
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Title */}
              <h1 className="text-5xl font-bold leading-none text-white">
                {project.title}
              </h1>
              {/* Category */}
              <h2 className="text-3xl font-bold leading-none text-white/60 group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/*  Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/*  Remove comma for the last one */}
                    {index < project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.url}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 pointer-events-none"></div>

                      {/* Image */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        {project.video ? (
                          <iframe
                            src={project.video}
                            title={project.title}
                            className="w-full h-full aspect-video rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt={project.title}
                          />
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* Bottom */}
              <WorkSliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              ></WorkSliderButton>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
