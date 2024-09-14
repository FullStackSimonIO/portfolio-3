"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Fit Mit Mary",
    description: (
      <>
        Project for a customer. Yoga & Sports courses.
        <br />
        Basic Setup with <span className="text-accent">NextJS 14</span>.
        Frontend done with <span className="text-accent">TailwindCSS</span>,
        <span className="text-accent">React</span>, Shadcn-UI and Aceternity-UI.
        Backend with PostgreSQL, Prisma and Vercel used. Contact form automation
        with nodemailer. Different Server Actions & API&apos;s integrated.
      </>
    ),
    stack: [{ name: "nextjs" }, { name: "tailwind" }, { name: "postgres" }],
    image: "/assets/work/thumb1.png",
    live: "https://fit-mit-mary.de",
    github: "https://github.com/fullstacksimonio/fit-mit-mary-z",
  },

  {
    num: "02",
    category: "Fullstack",
    title: "Portfolio Project 1",
    description: "Portfolio Project.",
    stack: [{ name: "nextjs" }, { name: "react" }, { name: "tailwind" }],
    image: "/assets/work/thumb2.png",
    live: "https://fit-mit-mary.de",
    github: "https://github.com/fullstacksimonio/fit-mit-mary-z",
  },

  {
    num: "03",
    category: "Fullstack",
    title: "Portfolio Project 3",
    description:
      "Project for a customer. Yoga & Sports courses. NextJS 14, Tailwindcss, Shadcn-UI, Prisma, PostgreSQL, Vercel used. Contact Form automation with nodemailer. Different Server Actions integrated.",
    stack: [{ name: "nextjs" }, { name: "react" }, { name: "tailwind" }],
    image: "/assets/work/thumb3.png",
    live: "/",
    github: "/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (slide) => {
    // get current slide index
    const currentIndex = slide.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none text-transparent text-outline">
            <div className="flex flex-col gap-[30px]">
              {/* Outline Number */}
              <div className="text-8xl leading-none font-extrabold">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Project Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl uppercase text-accent">
                      {item.name}
                      {/* Add comma if not last item */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* Border */}
            </div>
            <div className="flex items-center gap-4 pt-8">
              {/* Live Project */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent className="text-white">
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              {/* Github Project */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent className="text-white">
                      <p>Github Repo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div>
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="Fit Mit Mary Website"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Buttons */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center rounded-full transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
