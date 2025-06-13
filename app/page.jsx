"use client";

import { CiRead } from "react-icons/ci";
import { Button } from "../components/ui/button";

import Photo from "../components/Photo";
import Social from "../components/Socials";

const Home = () => {
  return (
    <section className="h-full relative">
      {/* Availability indicator fixed at top right, under navbar */}
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none px-9">
            
            <span className="opacity-80">Creative Developer</span>
            <h2 className="h2">
              Hello, I'm
              <br />
              <span className="text-accent h2 xl:h1">Anthony Becarne</span>
            </h2>
            
            <p className="xl:max-w-[500px] xl:mb-9 text-white/80">
              Passionate about creativity and technology, I specialize in crafting
              immersive digital experiences. With a focus on software engineering
              and video game development, I bring ideas to life through innovative
              solutions and engaging interfaces.
            </p>

            <span className="flex items-center gap-2 text-m font-medium xl:text-xl mb-5">
              <span className="relative flex h-5 w-5 m-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-accent"></span>
              </span>
              <span className="text-accent whitespace">
                Available for freelance or contract
              </span>
            </span>

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
          
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
