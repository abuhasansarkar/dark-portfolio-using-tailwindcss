"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";

const services = [
  {
    number: "01",
    title: "WordPress Website",
    desc: "Someting like that. Here we are write best deescription.",
    href: "/",
  },
  {
    number: "02",
    title: "React-Js Website",
    desc: "Someting like that. Here we are write best deescription.",
    href: "/",
  },
  {
    number: "03",
    title: "Elementor Website",
    desc: "Someting like that. Here we are write best deescription.",
    href: "/",
  },
  {
    number: "04",
    title: "Website Maintains",
    desc: "Someting like that. Here we are write best deescription.",
    href: "/",
  },
];

const Services = () => {
  return (
    <section className="container min-h-[80vh] flex flex-col justify-center py-12 lg:py-3 ">
      <motion.div
        className="grid md:grid-cols-2 gap-[60px] "
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {services.map(service => (
          <div
            className="w-full flex flex-col justify-center gap-6 group"
            key={service.number}
          >
            <div className="flex items-center justify-between">
              <div className="text-5xl text-outline group-hover:text-outline-hover text-transparent font-extrabold transition-all duration-500">
                {service.number}
              </div>
              <Link
                className="w-[50px] h-[50px] rounded-full group-hover:bg-accent hover:rotate-45 bg-white text-black flex items-center justify-center transition-all duration-500 "
                href={service.href}
              >
                <CallMadeOutlinedIcon />
              </Link>
            </div>

            <h2 className="h3">{service.title}</h2>
            <p>{service.desc}</p>

            <div className="border-b border-accent/50 w-full" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
