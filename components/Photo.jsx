"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <motion.div
      className="w-full h-full relative mb-5 md:mb-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="w-[300px] h-[30] lg:w-[500px] lg:h-[500px] m-auto object-cover mix-blend-lighten ">
          <Image
            className="object-contain rounded-full w-full object-cover z-10"
            src="/assets/abuhasan.png"
            width="500"
            height="500"
          />
        </div>
      </motion.div>

      {/* Circle */}
      <motion.svg
        className="w-[300px] lg:w-[506px] h-[300px] m-auto lg:h-[506px] absolute top-0 left-0 right-0 bottom-0 z-0"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 12 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Photo;
