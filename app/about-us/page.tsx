import React from "react";

import prisma from "@/lib/prisma";
import MemberCard from "@/components/TeamCard";
import Image from "next/image";
import { howWeWork } from "@/data/howWeWork";
import CustomButton from "@/components/CustomButton";
import Suitcase from "@/public/icons/Suitcase";

const AboutUs = () => {
  // const team = await prisma.teamMember.findMany();
  return (
    <main className=" ">
      <section className=" bg-[url('/images/pathhero_path.png')] bg-center bg-contain bg-no-repeat  mx-auto relative">
        <div className="pt-41 max-w-[1200px] mx-auto">
          <h2 className=" font-sans font-semibold text-7xl text-center text-title-gray z-20 ">
            About us
          </h2>
          <p className=" font-body-inter text-subtitle-gray mt-4 text-[1rem] font-light text-center w-[70%] mx-auto">
            Our team blends creativity with technical expertise to build digital
            products that are not only visually appealing but also scalable and
            performance-driven. At Enovate, we believe in innovation,
            collaboration, and delivering solutions that empower brands to grow
            and make an impact online.
          </p>
          <div className="mt-24">
            <h2 className="font-sans font-semibold text-5xl text-center text-title-gray  ">
              We are builders & innovators
            </h2>
            {/* <div className=" pt-8 flex gap-x-6 items-center justify-center ">
              {team.map((member) => {
                return (
                  <MemberCard
                    key={member.id}
                    id={member.id}
                    name={member.name}
                    position={member.position}
                    imgUrl={member.imageUrl}
                    bio={member.bio}
                  />
                );
              })}
            </div> */}
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
      <section className="max-w-[1200px] mx-auto mb-28 ">
        <h2 className=" font-sans text-title-gray text-5xl font-[600] text-center ">
          How we work
        </h2>
        <div className=" grid grid-cols-[1fr_1fr] ">
          {howWeWork.map((data) => {
            return (
              <div
                className=" flex flex-col items-center py-6 px-16 gap-y-2  "
                key={data.id}
              >
                <Image src={data.imgUrl} alt={data.title} />

                <h3
                  className={` font-body-inter font-medium text-2xl text-title-gray `}
                >
                  {data.title}
                </h3>
                <p
                  className={` text-center text-subtitle-gray font-body-inter font-[400] text-[1rem] `}
                >
                  {data.detail}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto rounded-2xl my-28 bg-enovate-dark-green py-16 relative ">
        <div className="bg-[url('/images/pattern_bg.png')] bg-cover  opacity-10 z-0 absolute inset-0 bg-center "></div>
        <div className=" z-20 relative flex flex-col gap-y-6 items-center ">
          <h4 className={` font-sans text-5xl text-white font-semibold `}>
            Let&rsquo;s help build & launch your product
          </h4>
          <CustomButton
            text="Work with us"
            variant="solid"
            Icon={<Suitcase color="#fff" />}
          />
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
