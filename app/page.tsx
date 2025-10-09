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

export default function Home() {
  // const member = await prisma.teamMember.findMany();
  // useEffect(() => {
  //   GET("swiggly.png");
  // }, []);
  return (
    <main className="  ">
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
            Enovate is a <b className="font-bold"> Design-As-A-Service </b>
            agency that help startups and business owners with their design
            through a subscription-based plan that fits their budget. We also
            work on their web and mobile applications.
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
      <section className="w-full h-[20rem] relative">
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
      <section className="max-w-[1200px] mx-auto my-8  ">
        <div className=" mx-auto grid w-fit gap-x-24 gap-y-28 grid-cols-[1fr_1fr]">
          <Folder />
          <Folder />
          <Folder />
          <Folder />
        </div>
      </section>
    </main>
  );
}
