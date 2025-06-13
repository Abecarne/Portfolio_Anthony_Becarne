import { motion } from "framer-motion";
import Image from "next/image";
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
    DiUnitySmall,
} from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { SiAutodeskmaya, SiBlender, SiTailwindcss, SiTypescript, SiUnrealengine } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp, TbSql } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

// Map stack name to icon component
const stackIcons = {
  "React.js": <DiReact />,
  "React": <DiReact />,
  "Next.js": <RiNextjsLine />,
  "Node.js": <DiNodejs />,
  "NodeJS": <DiNodejs />,
  "Python": <DiPython />,
  "Unity": <DiUnitySmall />,
  "Unreal Engine": <SiUnrealengine />,
  "Unreal Engine 5": <SiUnrealengine />,
  "Blender": <SiBlender />,
  "Blender 3D": <SiBlender />,
  "Autodesk Maya": <SiAutodeskmaya />,
  "HTML": <DiHtml5 />,
  "CSS": <DiCss3 />,
  "JavaScript": <DiJsBadge />,
  "TypeScript": <SiTypescript />,
  "TailwindCSS": <SiTailwindcss />,
  "MongoDB": <DiMongodb />,
  "Git": <DiGit />,
  "Sass": <DiSass />,
  "Scss": <DiSass />,
  "jQuery": <DiJqueryLogo />,
  "Linux": <DiLinux />,
  "NPM": <DiNpm />,
  "C++": <TbBrandCpp />,
  "C#": <TbBrandCSharp />,
  "SQL": <TbSql />,
  "MySQL": <TbSql />,
  "Boost": <TbBrandCpp />,
  "SFML": <TbBrandCpp />,
  "CMake": <TbBrandCpp />,
  "Perforce": <DiGit />,
  "Houdini": <SiBlender />,
};

const WorkCard = ({ project, onClick }) => {
  const mainStack = project.stack[0]?.name;
  const MainStackIcon = stackIcons[mainStack];

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-[#232329] rounded-xl p-8 flex flex-col gap-4 shadow-lg cursor-pointer transition relative"
      onClick={onClick}
    >
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger className="absolute top-4 right-4 text-5xl text-accent">
                <div className=" text-5xl group-hover:text-accent transition-all duration-300">
                    {MainStackIcon}
                </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" >
                <p className="capitalize">{mainStack}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      
      <h2 className="text-lg xl:text-2xl font-bold text-white">{project.title}</h2>
      <h3 className="xl:text-lg text-accent">{project.category}</h3>
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
  );
};

export default WorkCard;