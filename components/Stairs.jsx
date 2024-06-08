"use client";

import { motion } from "framer-motion";

// Variants
// ==============
// Initial animation
const stairsAnimation = {
  initial: {
    top: "0%",
  },

  animate: {
    top: "100%",
  },

  exit: {
    top: ["100%", "0%"],
  },
};

// Calculate the reverse index for staggred delay

const reverseIndex = index => {
  const totalSteps = 7; //Number of stepts
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(7)].map((_, index) => {
        return (
          <motion.div
            className="h-full w-full bg-white relative"
            key={index}
            variants={stairsAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
          />
        );
      })}
    </>
  );
};

export default Stairs;
