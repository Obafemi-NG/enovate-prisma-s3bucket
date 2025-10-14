"use client";

import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import {
  foundOptions,
  serviceCharges,
  workOptions,
} from "@/data/contactFormData";
import ArrowRight from "@/public/icons/ArrowRight";
import MailIcon from "@/public/icons/MailIcon";
import React, { ChangeEvent, useState } from "react";

const ContactUs = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<"naira" | "dollar">(
    "naira"
  );

  const serviceChargeData = serviceCharges.map((data) => {
    return data;
  });
  const currentCharge = serviceChargeData.find(
    (data) => data.currency === selectedCurrency
  );

  const handleTextChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    console.log(value);
  };
  const [formValue, setFormValue] = useState({
    name: "",
    companyName: "",
    gotToKnowEnovate: "",
    service: "",
    budget: "",
    email: "",
    moreDetails: "",
  });

  return (
    <main>
      <section className="pt-41 max-w-[1200px] mx-auto">
        <h2 className=" font-sans text-title-gray text-[5rem] font-[700] w-[80%] text-center mx-auto leading-[5rem]  ">
          Let&rsquo;s make it work{" "}
          <span className="bg-linear-to-tr from-enovate-blue  to-enovate-green bg-clip-text text-transparent">
            together
          </span>
        </h2>
        <form
          className=" font-body-inter mt-[5rem] gap-y-2 flex flex-col "
          action=""
        >
          <div className=" flex gap-x-4 py-4">
            <div className=" flex items-baseline gap-x-4   ">
              <p className={` text-2xl font-medium `}>Hi, My name is </p>
              <CustomInput
                type="text"
                placeHolder="Type your name"
                name="name"
                value={formValue.name}
                onChangeHandler={handleTextChange}
                required={true}
              />
            </div>
            <div className=" flex gap-x-4 ">
              <p className=" text-2xl font-medium ">and I currently work in</p>
              <CustomInput
                type="text"
                placeHolder="Type your company's name"
                name="companyName"
                value={formValue.companyName}
                onChangeHandler={handleTextChange}
                required={true}
              />
            </div>
          </div>
          <div className=" flex items-center gap-x-4 py-4 ">
            <p className=" text-2xl font-medium ">
              I found Enovate Agency using
            </p>
            {foundOptions.map((option) => {
              return (
                <div key={option.id}>
                  <CustomInput
                    type="radio"
                    name="gotToKnowEnovate"
                    value={option.name}
                    onChangeHandler={handleTextChange}
                    required={false}
                    label={option.name}
                  />
                </div>
              );
            })}
          </div>
          <div className=" flex items-start gap-4 flex-nowrap  py-4 ">
            <p className={` text-2xl font-medium `}>
              I’m looking for help with
            </p>
            <div className=" flex flex-wrap  gap-2 w-[70%] ">
              {workOptions.map((option) => {
                return (
                  <div key={option.id}>
                    <CustomInput
                      type="radio"
                      name="service"
                      value={option.name}
                      onChangeHandler={handleTextChange}
                      required={true}
                      label={option.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flex items-center gap-x-4 py-4 ">
            <p className={` text-2xl font-medium `}>My budget is around</p>
            <div className="flex items-center p-2 gap-x-1 border rounded-2xl ">
              {serviceChargeData.map((data) => {
                return (
                  <div
                    key={data.currency}
                    className={` flex items-center gap-x-0.5 `}
                  >
                    <div
                      className={` border w-4 h-4 rounded-full hover:cursor-pointer ${
                        data.currency === selectedCurrency
                          ? "bg-title-gray"
                          : "bg-transparent"
                      } `}
                      onClick={() => setSelectedCurrency(data.currency)}
                    ></div>
                    <p className={``}>
                      {" "}
                      {data.currency === "naira"
                        ? "₦"
                        : data.currency === "dollar"
                        ? "$"
                        : null}{" "}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-2 ">
              {currentCharge?.charges.map((data) => {
                return (
                  <div className={``} key={data.id}>
                    <CustomInput
                      type="radio"
                      name="budget"
                      onChangeHandler={handleTextChange}
                      value={data.amount}
                      // id={data.id}
                      required={false}
                      label={data.amount}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flex gap-x-4 py-4 ">
            <p className={` text-2xl font-medium `}>Kindly contact me at</p>
            <CustomInput
              name="email"
              value={formValue.email}
              onChangeHandler={handleTextChange}
              required={true}
              type="text"
              placeHolder="Type your email"
            />
            <p className={` text-2xl font-medium `}>
              to start the conversation.
            </p>
          </div>
          <div className=" flex flex-col gap-y-4 py-4 ">
            <p className=" text-title-gray text-2xl font-medium ">
              I will like to share more details about the project{" "}
              <span className=" text-subtitle-gray ">(optional):</span>{" "}
            </p>
            <textarea
              name="moreDetails"
              id="moreDetails"
              value={formValue.moreDetails}
              onChange={handleTextChange}
              className=" resize-none border outline-none p-6 rounded-2xl w-[50%] "
              rows={4}
            ></textarea>
          </div>
          <div>
            <CustomButton
              text="Let&rsquo;s collaborate"
              variant="solid"
              Icon={<ArrowRight />}
            />
          </div>
        </form>
      </section>
      <section className="max-w-[1200px] mx-auto rounded-2xl my-28 bg-enovate-dark-purple py-16 relative ">
        <div className="bg-[url('/images/pattern_bg.png')] bg-cover  opacity-10 z-0 absolute inset-0 bg-center "></div>
        <div className=" z-20 relative flex flex-col gap-y-6 items-center ">
          <h4 className={` font-sans text-5xl text-white font-semibold `}>
            Do you have more questions?
          </h4>
          <CustomButton
            text="Shoot us an email"
            variant="outline"
            Icon={<MailIcon color="#5a5a5a" />}
          />
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
