"use client";

import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiPython,
  DiReact,
  DiNodejs,
  DiUnitySmall,
  DiMongodb,
  DiLinux,
  DiGit,
  DiNpm,
  DiTerminal,
  DiDatabase,
  DiSass,
  DiJqueryLogo,
  DiVisualstudio,
} from "react-icons/di";

import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { HiAcademicCap, HiBriefcase } from "react-icons/hi";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a software developer with a passion for building web applications. I excel at crafting elegant digital solutions that help businesses grow.",
  infos: [
    {
      fieldName: "Name",
      fieldValue: "Anthony Becarne",
    },
    {
      fieldName: "Country",
      fieldValue: "France",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "anthony.becarne@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "French, English, Spanish, Korean",
    },
  ],
};

const experience = {
  icon: HiAcademicCap,
  title: "My experiences",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      company: "Exotec",
      position: "R&D Software Engineer",
      duration: "2020 - 2021",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      company: "Freelance",
      position: "Software Developer",
      duration: "2019 - 2020",
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "2018 - 2019",
    },
    {
      company: "Exotec",
      position: "R&D Software Engineer",
      duration: "2020 - 2021",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      company: "Freelance",
      position: "Software Developer",
      duration: "2019 - 2020",
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "2018 - 2019",
    },
  ],
};

const education = {
  icon: HiBriefcase,
  title: "My education",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      institution: "Epitech",
      degree: "Master in Computer Science",
      country: "France",
      duration: "2020 - 2025",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      institution: "Keimyung University",
      degree: "Bachelor in Game Software Engineering",
      country: "South Korea",
      duration: "2023 - 2024",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      institution: "Lille University",
      degree: "Bachelor 1 in Engineering Sciences",
      country: "France",
      duration: "2019 - 2020",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      institution: "Frontend Mentor",
      degree: "Frontend Developer",
      country: "Online",
      duration: "2021 - 2022",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  skillList: [
    {
      name: "HTML",
      icon: <DiHtml5 />,
    },
    {
      name: "CSS",
      icon: <DiCss3 />,
    },
    {
      name: "JavaScript",
      icon: <DiJsBadge />,
    },
    {
      name: "React",
      icon: <DiReact />,
    },
    {
      name: "Next.js",
      icon: <RiNextjsLine />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Sass",
      icon: <DiSass />,
    },
    {
      name: "jQuery",
      icon: <DiJqueryLogo />,
    },
    {
      name: "Node.js",
      icon: <DiNodejs />,
    },
    {
      name: "Python",
      icon: <DiPython />,
    },
    {
      name: "Unity",
      icon: <DiUnitySmall />,
    },
    {
      name: "MongoDB",
      icon: <DiMongodb />,
    },
    {
      name: "Linux",
      icon: <DiLinux />,
    },
    {
      name: "Git",
      icon: <DiGit />,
    },
    {
      name: "NPM",
      icon: <DiNpm />,
    },
    {
      name: "Terminal",
      icon: <DiTerminal />,
    },
    {
      name: "Database",
      icon: <DiDatabase />,
    },
    {
      name: "Visual Studio",
      icon: <DiVisualstudio />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70px] w-full">
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.infos.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <p>
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </p>
                          <p>{item.description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                          <p>
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          </p>
                          <p className="text-white/60 my-0">{item.country}</p>
                          <p className="min-h-[60px] flex items-center">
                            {item.degree}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
