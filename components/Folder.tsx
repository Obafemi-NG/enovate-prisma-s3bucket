"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, Variants } from "motion/react";
import { Project } from "@/lib/tanstackQuery/queries/projectsQuery";
import Image from "next/image";
import ArrowTopRight from "@/public/icons/ArrowTopRight";
import Link from "next/link";

const Folder = ({ id, title, imageUrl, detail, link, tag }: Project) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  // const [folderIsInView, setFolderIsInView] = useState<boolean>(false)
  const [folderHovered, setFolderHovered] = useState<boolean>(false);
  // Get screensize of device inorder to enable or disable the hover effect of the project folder
  useEffect(() => {
    const getScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    getScreenSize();
    window.addEventListener("resize", getScreenSize);

    // clean up the use-effect
    return () => window.removeEventListener("resize", getScreenSize);
  }, []);

  const handleMouseOver = () => {
    if (!isDesktop) return;
    setFolderHovered(true);
  };
  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setFolderHovered(false);
  };
  // const handleOnScreen = () => {
  //   if (isDesktop) return;
  // }

  const cardVariants: Variants = {
    offscreen: {
      y: 0,
      rotate: 0,
    },
    onscreen: {
      y: "var(--animate-card)",
      rotate: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  const folderVariants: Variants = {
    onscreen: {
      overflow: "visible",
    },
  };

  const detailsVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 10,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "tween",
      },
    },
  };

  return (
    <motion.div
      initial={!isDesktop && `offscreen`}
      whileInView={!isDesktop ? `onscreen` : undefined}
      viewport={{ amount: 0.9 }}
      variants={folderVariants}
      animate={{
        overflow: folderHovered ? "visible" : "hidden",
      }}
      className={`relative w-[30rem] max-sm:w-[100%] h-[350px] flex items-end  rounded-b-lg  `}
    >
      <div className=" absolute w-[25%] h-full top-0 bottom-0 left-0 bg-enovate-dark-blue rounded-b-lg rounded-t-xl inset-shadow-sm z-0 " />
      <div
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className=" w-full h-[80%] bg-enovate-blue inset-shadow-sm rounded-t-xl rounded-b-lg absolute bottom-0 right-0 left-0 z-20 content shadow-lg shadow-enovate-light-blue/70 "
      >
        {(folderHovered || !isDesktop) && (
          <motion.div
            variants={detailsVariants}
            // className="bg-linear-90 from-enovate-light-blue via-enovate-light-purple to-enovate-light-green  "
            className="mt-8 py-4 px-2.5 bg-enovate-dark-purple  "
          >
            <p className=" font-sans text-title-gray font-semibold text-2xl ">
              {title}
            </p>
            <div className=" flex items-center gap-x-1.5 mt-1.5 ">
              {tag?.map((tagName, index) => {
                return (
                  <p
                    className=" font-mono text-white px-1 py-1 border border-white font-normal text-xs "
                    key={index}
                  >
                    {tagName}
                  </p>
                );
              })}
            </div>
            <p className=" mt-5 font-medium font-body-inter text-sm text-white ">
              {detail}
            </p>
            <div className="flex mt-7 ">
              <Link
                href={link}
                target="_blank"
                className="font-body-inter ml-auto font-medium flex item-center border-b border-b-transparent hover:border-b-title-gray transition-all duration-500 "
              >
                <p>Checkout {title} website</p>

                <ArrowTopRight />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
      <div className=" w-full h-[90%] bg-enovate-dark-blue rounded-b-lg rounded-t-xl z-10  ">
        <motion.div
          className=" w-[95%] mx-auto h-[100%] origin-bottom relative responsive-project-card "
          initial={{
            y: 0,
          }}
          animate={{
            y: folderHovered ? "var(--animate-card)" : 0,
            // rotate: 1.5,
            transition: {
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
            },
          }}
          variants={cardVariants}
          exit={{
            y: 0,
            transition: {
              duration: 0.8,
            },
          }}
        >
          <Image
            src={imageUrl}
            alt="enovate-path"
            fill
            className=" object-fill rounded-2xl "
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Folder;
