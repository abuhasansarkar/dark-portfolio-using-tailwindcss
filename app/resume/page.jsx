"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";

// icon
import { FaWordpressSimple } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { PiFigmaLogoDuotone } from "react-icons/pi";


// data
const aboutData = {
  title: "About Me",
  desc: "Hi, I'm AbuHasan and I'm professional MERN Stack Web Developer and WordPress Expert. I've 3+ years of exprience in those fileds. If you need any help please contact me.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "AbuHasan Sarkar",
    },
    {
      fieldName: "Phone & WhatsApp",
      fieldValue: "(+880)1767603775",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Natioality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "abuhasansarkar2@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bangla, Urdu, Hindi",
    },
  ],
};

// Working Experience

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  desc: "Hi, I'm AbuHasan and I'm professional MERN Stack Web Developer and WordPress Expert. I've 3+ years of exprience in those fileds. If you need any help please contact me.",
  items: [
    {
      company: "Creatiqo",
      Position: "Web Developer",
      duration: "September 2023 - Present",
    },
    {
      company: "Webpro AI Solution",
      Position: "Web Developer",
      duration: "May 2023 - August 2023",
    },
    {
      company: "bdCalling IT LTD",
      Position: "Web Developer Intern",
      duration: "December 2022 - February 2023",
    },
    {
      company: "bdCalling IT LTD",
      Position: "Web Developer Intern",
      duration: "December 2022 - February 2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  desc: "Here is my Education or Quealification",
  items: [
    {
      institute: "ICT Divition Bangladesh",
      degree: "Advance Website Design & Development (LEDP)",
    },
    {
      institute: "UI-Lab",
      degree: "Web Development & WordPress Customization",
    },
    {
      institute: "Moqbular Rahman Govt. College, Panchagarh",
      degree: "Bachelor of Arts (BA)",
    },
    {
      institute: "Moqbular Rahman Govt. College, Panchagarh",
      degree: "Higher Secondary Cirtificate (HSC)",
    },
    {
      institute: "Thakurpara Hight School",
      degree: "Secondary School Cirtificate (HSC)",
    },
  ],
};

const skills = {
  title: "My Skills",
  desc: "Skill related explaination is here.",
  skillList: [
    {
      icon: <FaWordpressSimple />,
      name: "wordPress",
    },
    {
      icon: <TiHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3Alt />,
      name: "css 3",
    },
    {
      icon: <TbBrandJavascript />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react js",
    },
    {
      icon: <RiNextjsLine />,
      name: "next js",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "tailwindCss",
    },
    {
      icon: <RiBootstrapLine />,
      name: "bootstrap",
    },
    {
      icon: <PiFigmaLogoDuotone />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <section>
      <div className="container">
        <motion.div
          className="min-h-[80vh] flex items-center justify-between py-12 lg:py-0 "
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
        >
          <Tabs
            defaultValue="experience"
            className="flex flex-col lg:justify-start lg:flex-row gap-[50px] w-full"
          >
            <TabsList className="flex flex-col gap-4 w-full lg:max-w-[380px] mb-auto mx-auto xl:mx-0">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="aboutme">About Me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh]  w-full ">
              {/* Experience */}
              <TabsContent value="experience" className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
                  }}
                  className="text-center lg:text-left"
                >
                  <h3 className="h2 mb-3">{experience.title}</h3>
                  <p> {experience.desc} </p>
                  <ScrollArea className="h-[400px] mt-6 ">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      {experience.items.map((item, i) => (
                        <li
                          className="bg-[#1d273b] h-[180px] flex flex-col  items-center lg:items-start p-5 justify-center rounded-lg gap-3"
                          key={i}
                        >
                          <p className="text-accent text-sm">{item.duration}</p>
                          <h3 className="text-xl mb-3">{item.Position}</h3>
                          <p className="text-white/70 text-sm">
                            <span className="text-accent">-</span>
                            {item.company}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
              {/* Education */}
              <TabsContent value="education" className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
                  }}
                  className="text-center lg:text-left"
                >
                  <h3 className="h2 mb-3">{education.title}</h3>
                  <p> {education.desc} </p>
                  <ScrollArea className="h-[400px] mt-6 ">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      {education.items.map((item, i) => (
                        <li
                          className="bg-[#1d273b] h-[180px] flex flex-col  items-center lg:items-start p-5 justify-center rounded-lg gap-3"
                          key={i}
                        >
                          <p className="text-white/70 text-sm">
                            {" "}
                            <span className="text-accent">-</span>{" "}
                            {item.institute}
                          </p>
                          <h3 className="text-xl text-accent mb-3">
                            {item.degree}
                          </h3>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
              {/* Skills */}
              <TabsContent
                
                value="skills"
                className="w-full"
              >
                <motion.div initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
                }} className="text-center lg:text-left">
                  <h3 className="h2 mb-3">{skills.title}</h3>
                  <p> {skills.desc} </p>
                  <ScrollArea className="h-[400px] mt-6 ">
                    <ul className="grid grid-cols-3 md:grid-cols-4 gap-7">
                      {skills.skillList.map((skill, i) => (
                        <li
                          className="bg-[#1d273b] flex flex-col w-full items-center  p-7 justify-center rounded-lg gap-3 text-center group "
                          key={i}
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger>
                                <span className="text-5xl lg:text-7 w-full m-auto group-hover:text-accent transition-all duration-500 text-center">
                                  {skill.icon}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <span className="capitalize">{skill.name}</span>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
              {/* About Me */}
              <TabsContent value="aboutme" className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
                  }}
                  className="text-center lg:text-left"
                >
                  <h3 className="h2 mb-3">{aboutData.title}</h3>
                  <p> {aboutData.desc} </p>
                  <ScrollArea className="h-[400px] mt-6 ">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7">
                      {aboutData.info.map((item, i) => (
                        <li className="flex gap-2 justify-center lg:justify-start" key={i}>
                          <span className="text-accent">{item.fieldName}:</span>
                          <span className="text-white/ font-bold">
                            {item.fieldValue}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
