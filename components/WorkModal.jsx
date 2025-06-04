import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

const WorkModal = ({
  project,
  fullscreen,
  onClose,
  onToggleFullscreen,
}) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
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
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Fullscreen Toggle Button */}
        <button
          className="absolute top-4 right-14 text-white text-2xl z-10"
          onClick={onToggleFullscreen}
          aria-label={fullscreen ? "Exit Fullscreen" : "Fullscreen"}
        >
          {fullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
        </button>
        <div className={fullscreen ? "p-8 md:p-16 h-full flex flex-col" : ""}>
          <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
          <h3 className="text-xl text-accent mb-2">{project.category}</h3>
          <ul className="flex gap-2 flex-wrap mb-4">
            {project.stack.map((item, i) => (
              <li key={i} className="text-accent text-base">
                {item.name}
                {i < project.stack.length - 1 && ","}
              </li>
            ))}
          </ul>
          <div className="mb-4 flex-1 flex items-center justify-center">
            {project.video ? (
              <iframe
                src={project.video}
                title={project.title}
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
                src={project.image}
                width={fullscreen ? 1200 : 600}
                height={fullscreen ? 700 : 350}
                className="object-cover rounded-lg"
                alt={project.title}
              />
            )}
          </div>
          <p className="text-white/80 mb-4">{project.description}</p>
          <div className="flex gap-4 mt-2">
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                className="text-accent underline"
              >
                Live project
              </Link>
            )}
            {project.url && (
              <Link
                href={project.url}
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
  );
};

export default WorkModal;