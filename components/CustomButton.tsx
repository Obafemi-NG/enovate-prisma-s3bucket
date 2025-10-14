"use client";

import React, { useState } from "react";
import { easeInOut, motion } from "motion/react";
import type { Variants } from "motion/react";
import { button } from "motion/react-client";

interface CustomBtnProps {
  text: string;
  Icon: React.ReactNode;
  variant: string;
}

const CustomButton = ({ text, Icon, variant }: CustomBtnProps) => {
  const [buttonHovered, setButtonHovered] = useState<boolean>(false);
  return (
    <motion.button
      onMouseOver={() => setButtonHovered(true)}
      onMouseLeave={() => setButtonHovered(false)}
      className={` flex  items-center gap-x-2 rounded-3xl px-6 py-4 hover:cursor-pointer transition-shadow ease-in-out duration-700 ${
        variant === "solid"
          ? "bg-title-gray border border-title-gray text-white hover:shadow-solid-purple "
          : "bg-white border border-title-gray text-title-gray hover:shadow-outline-blue "
      } `}
    >
      <p className={`font-body-inter font-medium`}> {text} </p>
      <motion.div
        initial={{ display: "none" }}
        exit={{
          display: "none",
          transition: {
            duration: 0.4,
            ease: "easeOut",
          },
        }}
        animate={{
          display: buttonHovered ? "flex" : "none",
          opacity: [0, 0.4, 1],
          x: buttonHovered ? 5 : -5,
          transition: {
            duration: 0.7,
            times: [0, 0.6, 1],
            ease: "easeInOut",
          },
        }}
      >
        {Icon}
      </motion.div>
    </motion.button>
  );
};

export default CustomButton;
