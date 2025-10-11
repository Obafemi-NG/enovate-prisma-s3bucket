"use client";

import Image from "next/image";
import prisma from "@/lib/prisma";
import CustomButton from "@/components/CustomButton";
import CheckSubscription from "@/public/icons/CheckSubscription";
import Calendar from "@/public/icons/Calendar";
import { expertiseList } from "@/data/expertiseList";
import ExpertiseCard from "@/components/ExpertiseCard";
// import { GET } from "./api/images/presigned/route";
// import { useEffect } from "react";
import Folder from "@/components/Folder";

import write from "../public/icons/write.svg";
import heart from "../public/icons/heart.svg";
import discuss from "../public/icons/discuss.svg";
import lineFrame from "../public/icons/line-frame.svg";
import verticalLineFrame from "../public/icons/step-gradient.svg";
import plus from "../public/icons/plus.svg";
import minus from "../public/icons/minus.svg";
import ChatIcon from "@/public/icons/ChatIcon";

import { useState } from "react";

import { faq } from "@/data/faq";
import MailIcon from "@/public/icons/MailIcon";
import HandShake from "@/public/icons/HandShake";

export default function Home() {
  // const member = await prisma.teamMember.findMany();
  // useEffect(() => {
  //   GET("swiggly.png");
  // }, []);

  const [showAnswer, setShowAnswer] = useState<Record<string, boolean>>({});
  const toggleAnswer = (id: string) => {
    setShowAnswer({
      [id]: !showAnswer[id],
    });
  };

  return (
    <main className="  ">
      {/* HERO SECTION */}
      <section className="max-w-[1200px] mx-auto min-h-[100vh] relative   ">
        <Image
          src="/images/pathhero_path.png"
          alt="hero_bg"
          fill
          className=" object-contain "
        />
        <div className=" absolute 2xl:translate-y[-70%] translate-y-[-50%] top-[50%]">
          <h1
            className={` text-[5rem] font-sans font-[700] text-center text-title-gray leading-tight -tracking-wide `}
          >
            We create stunning and
            <span
              className={`bg-linear-to-tr from-enovate-blue via-enovate-purple to-enovate-green bg-clip-text text-transparent`}
            >
              {" "}
              <br /> timeless experiences{" "}
            </span>
          </h1>
          <h2
            className={` font-body-inter text-lg text-subtitle-gray w-[75%] text-center mx-auto mt-8 font-normal  `}
          >
            Enovate is a <b className="font-bold">global digital agency </b>{" "}
            specializing in the design and development of modern websites, web
            applications, and mobile apps. We help startups, entrepreneurs, and
            small businesses bring their ideas to life through clean design,
            robust technology, and user-centered experiences.
          </h2>
          <div className=" mx-auto mt-12 w-fit flex items-center gap-x-8 ">
            <CustomButton
              text="Check out our subscription"
              variant="solid"
              Icon={<CheckSubscription />}
            />
            <CustomButton
              text="Schedule a consultation"
              variant="outline"
              Icon={<Calendar />}
            />
          </div>
        </div>
      </section>
      {/* AREAS OF EXPERTISE SECTION */}
      <section className={`max-w-[1200px] mx-auto my-12 `}>
        <div className="text-center">
          <h3
            className={` text-title-gray font-sans text-5xl font-[700] tracking-tight `}
          >
            Our areas of{" "}
            <span
              className={`bg-linear-to-br from-enovate-blue via-enovate-purple to-enovate-green bg-clip-text text-transparent`}
            >
              expertise
            </span>
          </h3>
          <p
            className={` mt-4 font-normal font-body-inter w-[65%] mx-auto text-subtitle-gray `}
          >
            We provide a full suite of creative design including illustrations,
            web design and app development services, with special care for
            mobile.
          </p>
        </div>
        <div className=" grid grid-cols-[1fr_1fr] gap-8 w-fit mx-auto mt-12  ">
          {expertiseList.map((data) => {
            return (
              <ExpertiseCard
                key={data.id}
                id={data.id}
                title={data.title}
                detail={data.descprition}
                icon={data.icon}
                gif={data.gif}
              />
            );
          })}
        </div>
      </section>
      <section className="w-full  h-[20rem] relative">
        <Image
          src={`${
            process.env.AWS_S3_BUCKET_BASE_URL ||
            process.env.NEXT_PUBLIC_AWS_S3_BUCKET_BASE_URL
          }Subtract.png`}
          alt="enovate-path"
          fill
          className=" object-cover "
        />
      </section>
      {/* PROJECTS SECTION */}
      <section className="max-w-[1200px] mx-auto my-24  ">
        <h3
          className={`text-title-gray font-sans text-5xl font-[700] tracking-tight mx-auto text-center `}
        >
          Projects we are{" "}
          <span
            className={`bg-linear-to-br from-enovate-blue via-enovate-purple to-enovate-green bg-clip-text text-transparent`}
          >
            {" "}
            proud
          </span>{" "}
          of
        </h3>
        <p
          className={`mt-4 font-normal font-body-inter w-[65%] mx-auto text-subtitle-gray text-center `}
        >
          At Enovate, we specialize on high performance immersive digital
          experience aimed at delivering our clients a competitive advantage. We
          deliver industry leading solutions.
        </p>
        <div className=" mx-auto grid w-fit gap-x-24 gap-y-28 grid-cols-[1fr_1fr] mt-21 ">
          <Folder />
          <Folder />
          <Folder />
          <Folder />
        </div>
      </section>
      {/* OUR PROCESS OF WORKING SECTION */}
      <section className="max-w-[1200px] mx-auto my-24  ">
        <h4
          className={`text-title-gray font-sans text-5xl font-[700] leading-snug mx-auto text-center w-[65%]  `}
        >
          The process of building your next{" "}
          <span className={`text-enovate-dark-green`}>project</span> in 3 steps
        </h4>
        <div className=" flex items-start justify-between mt-12 ">
          <div className={``}>
            <div className={` flex items-center `}>
              <div className={` bg-enovate-dark-blue w-fit p-2 rounded-lg`}>
                <Image src={write} alt="write" width={32} height={32} />
              </div>
              <Image
                src={lineFrame}
                alt="line-frame"
                className={` w-[70%] mx-auto`}
              />
            </div>
            <p className={`font-body-inter text-[1rem] font-light mt-[1rem]`}>
              {" "}
              Write us a description of your project.{" "}
            </p>
            <Image
              src={verticalLineFrame}
              alt="line-frame"
              className={` min-md:hidden `}
            />
          </div>
          <div className={``}>
            <div className={` flex items-center `}>
              <div className={`bg-enovate-dark-purple w-fit p-2 rounded-lg `}>
                <Image src={discuss} alt="discuss" width={32} height={32} />
              </div>

              <Image
                src={lineFrame}
                alt="line-frame"
                className={` w-[70%] mx-auto `}
              />
            </div>
            <p className={`font-body-inter text-[1rem] font-light mt-[1rem]`}>
              {" "}
              We discuss the details and start implementation.{" "}
            </p>
            <Image
              src={verticalLineFrame}
              alt="line-frame"
              className={`min-md:hidden`}
            />
          </div>
          <div className={``}>
            <div className={` flex items-center `}>
              <div className={`bg-enovate-dark-green w-fit p-2 rounded-lg `}>
                <Image src={heart} alt="heart" height={32} width={32} />
              </div>
            </div>
            <p className={` font-body-inter text-[1rem] font-light mt-[1rem] `}>
              You get an amazing project that we are all proud of.
            </p>
          </div>
        </div>
      </section>
      {/* SECTION FOR FREQUENTLY ASKED QUESTION */}
      <section className="max-w-[1200px] mx-auto my-28  ">
        <h4
          className={` text-title-gray font-sans text-5xl font-[700] leading-snug mx-auto text-center mb-12 `}
        >
          Frequently asked questions
        </h4>
        <div className={`grid grid-cols-[2fr_1fr] gap-x-28  `}>
          <div className={``}>
            {faq.map((item) => {
              return (
                <div
                  key={item.id}
                  className={` w-[90%] border-b border-b-light-background py-6 `}
                  onClick={() => toggleAnswer(item.id)}
                >
                  <div className={` flex items-center justify-between pb-3.5 `}>
                    <p className={` font-body-inter font-medium  `}>
                      {item.question}
                    </p>
                    {showAnswer[item.id] ? (
                      <Image src={minus} alt="minus" />
                    ) : (
                      <Image src={plus} alt="plus" />
                    )}
                  </div>
                  <p
                    className={` font-body-inter font-light w-[90%] text-justify `}
                  >
                    {" "}
                    {showAnswer[item.id] && item.answer}{" "}
                  </p>
                </div>
              );
            })}
          </div>
          <div
            className={` bg-light-background rounded-2xl p-6 flex flex-col items-center place-self-start`}
          >
            <div className="py-[0.53rem] px-[0.42rem]  ">
              <ChatIcon />
            </div>
            <h4
              className={` text-title-gray text-2xl font-medium font-sans text-center mt-4 `}
            >
              Do you have any more questions?
            </h4>
            <p
              className={` text-center font-body-inter text-subtitle-gray mt-4 mb-10 `}
            >
              Feel free to write us now. We’d be glad to give adequate
              information in response{" "}
            </p>
            <CustomButton
              text="Shoot us an email"
              variant="solid"
              Icon={<MailIcon />}
            />
            {/* <motion.button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:HQ@enovate.work";
            }}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              gap: isHovered ? "1rem" : "0.5rem",
              transition: { duration: 0.7, ease: easeInOut },
            }}
            className={``}
          >
            <p>Shoot us an email</p>
            <div className={styles["arrow-right"]}>
              {" "}
            <Image
              className={``}
              src={mail}
              alt="arrow-right"
            />{" "}
            {/* </div>
          </motion.button> */}
          </div>
        </div>
      </section>
      {/* SECTION FOR SWIGGLY IMAGE */}
      <section className="w-full  h-[20rem] relative">
        <Image
          src={`${
            process.env.AWS_S3_BUCKET_BASE_URL ||
            process.env.NEXT_PUBLIC_AWS_S3_BUCKET_BASE_URL
          }swiggly.png`}
          alt="enovate-path"
          fill
          className=" object-contain "
        />
      </section>
      <section className="max-w-[1200px] mx-auto rounded-2xl my-28 bg-light-background py-16 relative ">
        <div className="bg-[url('/images/pattern_bg.png')] bg-cover  opacity-10 z-0 absolute inset-0 bg-center "></div>
        <div className=" z-20 relative flex flex-col gap-y-6 items-center ">
          <h4
            className={` font-body-inter text-5xl text-title-gray font-semibold `}
          >
            We deliver what you need
          </h4>
          <CustomButton
            text="Let&rsquo;s work together"
            variant="outline"
            Icon={<HandShake color="#5A5A5A" />}
          />
        </div>
      </section>
    </main>
  );
}
