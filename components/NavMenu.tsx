import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";
import ArrowRight from "@/public/icons/ArrowRight";
import CloseIcon from "@/public/icons/CloseIcon";
import { AnimatePresence, motion } from "motion/react";

interface NavMenuProps {
  closeMenu: () => void;
}

const NavMenu = ({ closeMenu }: NavMenuProps) => {
  return (
    <motion.div
      key="nav_menu"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
      className=" absolute right-0 mt-1 min-w-[27rem] min-h-[40rem] flex flex-col justify-between p-6 bg-[#FFFFFFB3] border border-enovate-light-blue rounded-2xl backdrop-blur-[20px] -z-10 "
    >
      <div className=" flex items-center justify-between ">
        <p className=" text-title-gray font-medium font-body-inter text-xl  ">
          Explore
        </p>
        <div
          onClick={closeMenu}
          className=" flex items-center gap-x-[1rem] hover:cursor-pointer "
        >
          <p className=" text-subtitle-gray font-body-inter font-medium ">
            Close
          </p>
          <CloseIcon />
        </div>
      </div>
      <ul
        className={` font-body-inter font-medium text-title-gray gap-y-4 flex flex-col text-3xl  `}
      >
        <li onClick={closeMenu} className={``}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={closeMenu} className={``}>
          <Link href="/about-us">About</Link>
        </li>
        <li onClick={closeMenu} className={``}>
          <Link href="/contact-us">Contact</Link>
        </li>
        <li onClick={closeMenu} className={``}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
      <div className=" flex justify-between items-end ">
        <CustomButton
          variant="solid"
          text="Let&rsquo;s work together"
          Icon={<ArrowRight />}
        />
        <ul
          className={` font-body-inter font-normal text-title-gray gap-y-2 flex flex-col `}
        >
          <li className={``}>
            {" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/enovate.work/"
            >
              Instagram
            </Link>{" "}
          </li>
          <li className={``}>
            {" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/EnovateW"
            >
              Twitter
            </Link>{" "}
          </li>
          <li className={``}>
            {" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/enovate-51499b265/"
            >
              LinkedIn
            </Link>{" "}
          </li>
          <li className={``}>
            {" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.behance.net/enovatework"
            >
              Behance
            </Link>{" "}
          </li>
          <li className={``}>
            {" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/enovate"
            >
              Dribbble
            </Link>{" "}
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default NavMenu;
