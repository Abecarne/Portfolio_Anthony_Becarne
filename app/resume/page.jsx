"use client";

import {
  DiCss3,
  DiGit,
  DiHtml5,
  DiJqueryLogo,
  DiJsBadge,
  DiLinux,
  DiMongodb,
  DiNodejs,
  DiNpm,
  DiPython,
  DiReact,
  DiSass,
  DiUnitySmall
} from "react-icons/di";
import { HiAcademicCap, HiBriefcase } from "react-icons/hi";
import { RiNextjsLine } from "react-icons/ri";
import { SiAutodeskmaya, SiBlender, SiTailwindcss, SiTypescript, SiUnrealengine } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp, TbSql } from "react-icons/tb";


import { motion } from "framer-motion";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

const about = {
  title: "About Me",
  description:
    "I am a passionate software developer with a strong interest in video game development and web technologies. I have experience in various programming languages and frameworks, and I am always eager to learn new skills and improve my knowledge.",
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
    "During my career, I have had the opportunity to work on various projects and with different companies. Here are some of my experiences:",
  items: [
    {
      company: "Epitech",
      position: "Educational Supervisor",
      duration: "2025 | 7 months Fixed-Term",
      description:
        "Assisting students in their learning process, providing support and guidance in their technical projects. In charge of organizing workshops and events to enhance the learning experience. Specialized in teaching web development, software engineering, and video game development.",
    },
    {
      company: "Verdia",
      position: "E-commerce Developer",
      duration: "2025 | 1 month internship",
      description:
        "Updated and maintained the company's e-commerce website. Developed new features and optimized the user experience. Worked with an existing Odoo project for a national client.",
    },
    {
      company: "EXOTEC",
      position: "R&D Software Engineer",
      duration: "2023 | 4 months internship",
      description:
        "Procedural generation of 3D models for the training of Machine Learning models for computer vision. Development with Python, Blender API for 3D assets and OpenCV for texture generation.",
    },
    {
      company: "AQUILAB",
      position: "Software Developer",
      duration: "2021 | 6 months internship",
      description:
        "Update of the company's medicine management software. Development with C++, Qt and Boost libraries.",
    },
    {
      company: "Open Classrooms",
      position: "Frontend Developer",
      duration: "2019 | 2 weeks internship",
      description:
        "Development of dynamic and responsive web pages. Development with HTML, CSS and JavaScript.",
    },
  ],
};

const education = {
  icon: HiBriefcase,
  title: "My education",
  description:
    "I have always been passionate about computer science and software development. Here are some of the degrees I have obtained:",
  items: [
    {
      institution: "Epitech",
      degree: "Master's in IT Engineering",
      courses: "Software Engineering, Data Science, Video Game Development",
      country: "France",
      duration: "2020 - 2025",
    },
    {
      institution: "계명대학교 | Keimyung University",
      degree: "Bachelor's in Game Software Engineering",
      courses: "Game Development, Computer Graphics, 3D Modeling & Animation",
      country: "South Korea",
      duration: "2023 - 2024",
    },
    {
      institution: "Frontend Mentor",
      degree: "Frontend Developer",
      courses: "Frontend Development, Responsive Design, UI/UX",
      country: "Online",
      duration: "2023 - 2024",
    },
    {
      institution: "Lille University",
      degree: "Bachelor 1 in Engineering Sciences",
      courses: "Mathematics, Physics, Computer Science",
      country: "France",
      duration: "2019 - 2020",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I have acquired a wide range of skills during my career. Here are some of the technologies I am proficient in:",
  skillList: [
    { name: "C++", icon: <TbBrandCpp /> },
    { name: "Python", icon: <DiPython /> },
    { name: "SQL", icon: <TbSql /> },
    { name: "Unreal Engine", icon: <SiUnrealengine /> },
    { name: "Unity", icon: <DiUnitySmall /> },
    { name: "Blender", icon: <SiBlender /> },
    { name: "Autodesk Maya", icon: <SiAutodeskmaya /> },
    { name: "C#", icon: <TbBrandCSharp /> },
    { name: "HTML", icon: <DiHtml5 /> },
    { name: "CSS", icon: <DiCss3 /> },
    { name: "JavaScript", icon: <DiJsBadge /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <DiReact /> },
    { name: "Next.js", icon: <RiNextjsLine /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "jQuery", icon: <DiJqueryLogo /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Sass", icon: <DiSass /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "Linux", icon: <DiLinux /> },
    { name: "Git", icon: <DiGit /> },
    { name: "NPM", icon: <DiNpm /> },
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
      className="min-h-[80vh] flex justify-center py-12 xl:py-0"
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
                  <ul className="columns-1 lg:columns-2 gap-[30px] space-y-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 break-inside-avoid"
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
                          <p className="text-white/40 text-sm text-center lg:text-left">{item.courses}</p>
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
                <ScrollArea className="h-[450px]">
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
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
