import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const Folder = () => {
  const [folderHovered, setFolderHovered] = useState<boolean>(false);
  return (
    <motion.div
      animate={{
        overflow: folderHovered ? "visible" : "hidden",
      }}
      className={`relative w-[30rem] h-[350px] flex items-end  rounded-b-lg  `}
    >
      <div className=" absolute w-[25%] h-full top-0 bottom-0 left-0 bg-enovate-dark-blue rounded-b-lg rounded-t-xl inset-shadow-sm z-0 " />
      <div
        onMouseOver={() => setFolderHovered(true)}
        onMouseLeave={() => setFolderHovered(false)}
        className=" w-full h-[80%] bg-enovate-blue inset-shadow-sm rounded-t-xl rounded-b-lg absolute bottom-0 right-0 left-0 z-20 content shadow-lg shadow-enovate-light-blue/70 "
      />
      <div className=" w-full h-[90%] bg-enovate-dark-blue rounded-b-lg rounded-t-xl z-10  ">
        <ProjectCard folderHovered={folderHovered} />
      </div>
    </motion.div>
  );
};

export default Folder;
