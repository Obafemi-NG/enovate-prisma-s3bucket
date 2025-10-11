"use client";

import Image from "next/image";
import React, { useState } from "react";

interface TeamMemberProps {
  id: number;
  imgUrl: string;
  name: string;
  position: string;
  bio: string | null;
}

const MemberCard = ({ id, imgUrl, name, position, bio }: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={` p-0.5 rounded-2xl bg-transparent hover:bg-linear-90 from-enovate-light-blue via-enovate-light-purple to-enovate-light-green w-fit `}
    >
      <div className={`rounded-2xl bg-enovate-main-background p-4 `}>
        <div className={` h-[17.5rem] w-[14.5rem] relative `}>
          <Image
            src={imgUrl}
            alt={name}
            style={
              isHovered
                ? { backgroundColor: "#7683ee" }
                : { backgroundColor: "#f9f9f9" }
            }
            fill
            className={` object-cover rounded-2xl `}
          />
        </div>
        <div className={` pt-4 `}>
          <h4 className={` font-sans text-xl font-medium `}> {name} </h4>
          <p className={` mt-1 font-body-inter text-sm  `}> {position} </p>
          <p> {bio} </p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
