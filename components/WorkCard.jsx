import Image from "next/image";
import { motion } from "framer-motion";

const WorkCard = ({ project, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-[#232329] rounded-xl p-8 flex flex-col gap-4 shadow-lg cursor-pointer transition"
    onClick={onClick}
  >
    <h2 className="text-2xl font-bold text-white">{project.title}</h2>
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
);

export default WorkCard;