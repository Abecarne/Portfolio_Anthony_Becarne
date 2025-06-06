"use client";

import { CiRead } from "react-icons/ci";
import { Button } from "../components/ui/button";

import Photo from "../components/Photo";
import Social from "../components/Socials";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Creative Developer</span>
            <h2 className="h1">
              Hello, I'm
              <br />
              <span className="text-accent">Anthony Becarne</span>
            </h2>
            <p className="max-w-[500px] mb-9 text-white/80">
              Passionate about creativity and technology, I specialize in crafting immersive digital experiences. With a focus on software engineering and video game development, I bring ideas to life through innovative solutions and engaging interfaces.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() =>
                  window.open("/assets/resume/Anthony Becarne Resume.pdf")
                }
              >
                <span>View CV</span>
                <CiRead className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
