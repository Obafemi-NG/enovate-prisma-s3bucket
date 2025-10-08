"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

interface ExpertiseProps {
  id: string;
  icon: string;
  title: string;
  detail: string;
  gif: StaticImageData;
}

function ExpertiseCard({ id, icon, title, detail, gif }: ExpertiseProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={id}
      className={`w-[24rem] h-[17.5rem]  `}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        // style={{ position: "relative" }}
        animate={{
          rotateY: isHovered ? 180 : 0,
          transition: { type: "tween", duration: 0.8 },
        }}
        className="w-full h-full "
      >
        <motion.div
          className=" w-full h-full bg-light-background rounded-2xl flex flex-col items-center p-6 "
          animate={{ opacity: isHovered ? 0 : 1 }}
        >
          <Image src={icon} alt={title} width={48} height={48} />
          <h3 className={` text-lg font-medium font-sans mt-3.5 `}>
            {" "}
            {title}{" "}
          </h3>
          <p
            className={` font-body-inter mt-2.5 font-[300] text-[1rem] text-justify `}
          >
            {" "}
            {detail}{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            transition: { type: "tween", duration: 0.8 },
          }}
          className={`w-full h-fit`}
        >
          <Image
            src={gif}
            alt={title}
            className={`rounded-2xl`}
            fill
            objectFit="cover"
            unoptimized={true}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ExpertiseCard;
