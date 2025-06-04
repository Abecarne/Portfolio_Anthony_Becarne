"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Video Game Development",
    description: "Specialized in video game development in South Korea, I will create engaging and immersive gaming experiences. This includes game design, development, and optimization.",
    link: "/gaming",
  },
  {
    num: "02",
    title: "Software Development",
    description: "According to your needs, I will develop software solutions that are tailored to your requirements. This includes desktop applications, mobile apps, web apps and more.",
    link: "/softdev",
  },
  {
    num: "03",
    title: "Freelance Web Development",
    description: "I will create a professional website for your business or personal use. I will also provide you with a custom design and a responsive layout.",
    link: "/webdev",
  },
  {
    num: "04",
    title: "Mentorship & Training",
    description: "I offer mentorship and training services to help you enhance your skills and knowledge in software development and related fields.",
    link: "/mentor",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.link}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl " />
                  </Link>
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                <p className="text-white/60 ">{service.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
