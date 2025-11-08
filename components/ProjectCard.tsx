import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface CardProps {
  folderHovered: boolean;
  imgUrl: string;
}

const ProjectCard = ({ folderHovered, imgUrl }: CardProps) => {
  return (
    <motion.div
      className=" w-[95%] mx-auto h-[100%] origin-bottom relative responsive-project-card "
      initial={{
        y: 0,
      }}
      animate={{
        y: folderHovered ? "var(--animate-card)" : 0,
        rotate: 1.5,
        transition: {
          duration: 0.8,
          type: "spring",
          bounce: 0.4,
        },
      }}
      exit={{
        y: 0,
        transition: {
          duration: 0.8,
        },
      }}
    >
      <Image
        src={imgUrl}
        alt="enovate-path"
        fill
        className=" object-fill rounded-2xl "
      />
    </motion.div>
  );
};

export default ProjectCard;
