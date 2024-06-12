"use client";
import { useState } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NorthEastOutlinedIcon from "@mui/icons-material/NorthEastOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastIcon from "@mui/icons-material/East";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1. simple react project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stacks: [
      { name: "html 5" },
      { name: "css 3" },
      { name: "javascript" },
      { name: "react" },
    ],
    image: "/assets/work/thumb1.png",
    github: "http://github.com/",
    live: "/",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 1. simple react project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stacks: [
      { name: "html 5" },
      { name: "css 3" },
      { name: "tailwindcss" },
      { name: "javascript" },
      { name: "react" },
    ],
    image: "/assets/work/thumb2.png",
    github: "http://github.com/",
    live: "/",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1. simple react project",
    desc: "Lorem ipsum dolor sit amet coicing elit.",
    stacks: [
      { name: "html 5" },
      { name: "css 3" },
      { name: "tailwindcss" },
      { name: "javascript" },
    ],
    image: "/assets/work/thumb3.png",
    github: "http://github.com/",
    live: "/",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 1. simple react project",
    desc: "Lorem ipsum doonsectetur adipisicing elit.",
    stacks: [
      { name: "html 5" },
      { name: "css 3" },
      { name: "tailwindcss" },
      { name: "javascript" },
      { name: "react" },
    ],
    image: "/assets/work/thumb4.jpg",
    github: "http://github.com/",
    live: "/",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 1. simple react project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stacks: [
      { name: "html 5" },
      { name: "css 3" },
      { name: "tailwindcss" },
      { name: "react" },
    ],
    image: "/assets/work/thumb5.jpg",
    github: "http://github.com/",
    live: "/",
  },
  {
    num: "06",
    category: "frontend",
    title: "project 1. simple react project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stacks: [
      { name: "html 5" },
      { name: "css 3" },
      { name: "tailwindcss" },
      { name: "javascript" },
      { name: "react" },
    ],
    image: "/assets/work/thumb6.jpg",
    github: "http://github.com/",
    live: "/",
  },
  {
    num: "07",
    category: "frontend",
    title: "project 1. simple react project",
    desc: "Lorem iit amet consectetur adipisicing elit.",
    stacks: [
      { name: "html 5" },
      { name: "css 3" },
      { name: "tailwindcss" },
      { name: "javascript" },
      { name: "react" },
    ],
    image: "/assets/work/thumb7.jpg",
    github: "http://github.com/",
    live: "/",
  },
];

const Page = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = swiper => {
    // get current slide index
    const currentSlideIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentSlideIndex]);
  };

  return (
    <motion.section
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:flex-row-reverse">
          {/* Slider */}
          <div className="w-full lg:w-[50%] overflow-hidden">
            <Swiper
              className="mb-12"
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, i) => {
                return (
                  <SwiperSlide className="" key={i}  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
                    <img
                      src={item.image}
                      fill
                      className="object-cover rounded-lg"
                      alt={`Slider image ${item.num}`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Text */}
          <div className="w-full lg:w-[50%]">
            <div className="flex flex-col gap-5">
              {/* Outline title */}
              <span className="text-outline text-2xl text-transparent leading-none uppercase">
                {project.category}
              </span>
              <span className="text-outline text-8xl text-transparent leading-none font-extrabold">
                {project.num}
              </span>
              <h2 className="font-bold text-4xl leading-none text-white ">
                {project.title}
              </h2>
              {/* Description */}
              <p>{project.desc}</p>
              {/* Stacks */}
              <ul className="flex gap-4 flex-wrap items-center">
                {project.stacks.map((stack, i) => (
                  <li
                    className="border border-accent text-accent text-sm px-3 py-1 rounded"
                    key={i}
                  >
                    {stack.name}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 mt-5"></div>
              <div className="flex gap-5 items-center mt-5">
                <Link
                  className="hover:bg-accent hover:text-primary text-accent rounded-full w-12 h-12 flex items-center justify-center border-2 border-accent transition-all duration-500"
                  href={project.live}
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <NorthEastOutlinedIcon />
                      </TooltipTrigger>
                      <TooltipContent>Live Website</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  className="hover:bg-accent hover:text-primary text-accent rounded-full w-12 h-12 flex items-center justify-center border-2 border-accent transition-all duration-500"
                  href={project.github}
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <GitHubIcon />
                      </TooltipTrigger>
                      <TooltipContent>Github Repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
