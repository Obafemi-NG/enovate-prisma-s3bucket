import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface CardProps {
  folderHovered: boolean;
}

const ProjectCard = ({ folderHovered }: CardProps) => {
  return (
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: folderHovered ? -100 : 0,
        // rotate: folderHovered ? 3 : 0,
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
      className=" w-[95%] mx-auto rounded-lg h-[100%] origin-bottom relative"
    >
      <Image
        src={`${
          process.env.AWS_S3_BUCKET_BASE_URL ||
          process.env.NEXT_PUBLIC_AWS_S3_BUCKET_BASE_URL
        }astroxtrade.png`}
        alt="enovate-path"
        fill
        className=" object-cover rounded-2xl "
      />
    </motion.div>
  );
};

export default ProjectCard;
