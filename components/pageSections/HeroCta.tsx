"use client";

import React from "react";
import CustomButton from "../CustomButton";
import CheckSubscription from "@/public/icons/CheckSubscription";
import Calendar from "@/public/icons/Calendar";
import { redirect, RedirectType } from "next/navigation";

const handleConsultationBooking = () => {
  redirect("https://calendly.com/hq-enovate", RedirectType.push);
};

const HeroCta = () => {
  return (
    <div className=" mx-auto mt-12 w-fit flex items-center gap-x-8 max-sm:flex-col max-sm:gap-y-4 ">
      {/* <CustomButton
        text="Check out our subscription"
        variant="solid"
        Icon={<CheckSubscription />}
      /> */}
      <CustomButton
        text="Schedule a consultation"
        variant="outline"
        Icon={<Calendar />}
        onClickFn={handleConsultationBooking}
      />
    </div>
  );
};

export default HeroCta;
