"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <motion.div
      className="w-full h-full relative"
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
        <div className="w-[260px] h-[300] lg:w-[480px] lg:h-[480px] m-auto object-cover mix-blend-lighten overflow-hidden">
          <Image
            className="object-contain rounded-full w-full object-cover h-full"
            src="/assets/abuhasan.png"
            width="500"
            height="500"
          />
        </div>
      </motion.div>

      {/* Circle */}
      <motion.svg
        className="w-[300px] h-[300px] lg:w-[480px] lg:h-[480px] m-auto absolute top-0 left-0 right-0 bottom-0  z-10"
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
      <div className="w-[300px] h-[300px] m-auto lg:w-[480px] lg:h-[485px] m-auto rounded-full absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(255,255,255,0.00)_0%,#111827_100%)]"></div>
    </motion.div>
  );
};

export default Photo;
