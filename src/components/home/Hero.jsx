/** @format */

"use client";
import React from "react";
import { cards, contactdata } from "../common/Helper";
import { Location, Mail, Phonecall } from "../common/icons";

const Hero = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto font-[quicksand] px-4">
      <div className="mt-[79px] max-lg:mt-[50px] max-md:mt-[30px]">
        <h2 className="text-center font-semibold text-[42px] leading-[52px] text-[#253D4E] max-md:text-[32px] max-sm:text-[22px]  ">
          Let us know <br /> how we can help you
        </h2>
      </div>
      <div className="grid grid-cols-3 mx-auto  pt-[57px] max-md:pt-[30px] max-sm:pt-[25px] max-lg:grid-cols-2 max-lg:gap-6 max-md:grid-cols-1 ">
        {cards.map((items, index) => (
          <div
            key={index}
            className="max-w-[310px] w-full px-2 max-lg:mx-auto mx-auto "
          >
            <p className="text-[32px] text-[#FF0532] font-bold max-md:text-[22px] ">
              {items.title}
            </p>
            <h2 className="text-[#253D4E] text-[32px] font-bold max-md:text-[22px]">
              {items.heading}
            </h2>
            <p className="text-[14px] text-[#253D4E] font-[quicksand]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-24 max-md:mt-16 max-sm:mt-10">
        <iframe
          className="max-w-[1170px] w-full px-4 h-[400px] max-sm:h-[300px] outline-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6954.548369141078!2d75.39871929262475!3d29.36226005109641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391161c4ecaa8653%3A0x5e0bcdc55c6afd21!2sSekhupur%20Daroli%2C%20Haryana%20125053%2C%20India!5e0!3m2!1sro!2sro!4v1765261383380!5m2!1sro!2sro"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-wrap max-lg:justify-center max-lg:text-center gap-5 justify-between items-center mt-24 max-lg:mt-20 max-md:mt-15 max-sm:mt-10">
        {contactdata.map((items, index) => (
          <div key={index}>
            <h2 className="font-bold text-[32px] max-md:text-[28px] max-sm:text-[20px] text-[#253D4E1]">
              {items.heading}
            </h2>
            {items.links.map((i, index) => (
              <div
                key={index}
                className="flex mt-3 cursor-pointer max-lg:justify-center"
              >
                <div> {i.img} </div>
                <p className="pl-[5px] max-md:text-[14px]">{i.link}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-14">
        <h2 className="font-semibold text-[42px] text-[#253D4E] max-lg:text-center max-md:text-[32px] max-sm:text-[22px]">
          Drop Us a Line
        </h2>
        <p className="text-#253D4E] text-[14px] max-lg:text-center max-sm:text-[12px]">
          Your email address will not be published. Required fields are marked
        </p>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name*"
            className="border border-[#F2F0F0] outline-none px-[25px] py-[11px] rounded-sm max-w-[1170px] w-full mt-6 max-lg:px-3 max-lg:py-[5px]"
          />
          <div className="flex gap-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Phone"
              className="border border-[#F2F0F0] outline-none px-[25px] py-[11px] rounded-sm max-w-[1170px] w-full mt-6 max-lg:px-3 max-lg:py-[5px]"
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Email*"
              className="border border-[#F2F0F0] outline-none px-[25px] py-[11px] rounded-sm max-w-[1170px] w-full mt-6 max-lg:px-3 max-lg:py-[5px]"
            />
          </div>
          <textarea
            name="textarea"
            id="textarea"
            className="max-w-[1170px] w-full h-[165px] border border-[#F2F0F0] outline-none mt-6  "
          ></textarea>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="mt-[30px]"
          />
          <label
            htmlFor="checkbox"
            className="text-[14px] font-[quicksand] text-[#253D4E] px-2"
          >
            Save my name, email, and website in this browser
          </label>
          <div className="mt-6 max-lg:flex justify-center">
            <button className="text-white bg-[#130017] cursor-pointer text-bold text-[14px] px-5 py-[13px] max-md:px-3 max-md:py-[7px] rounded-sm hover:bg-[white] hover:text-[#130017] duration-300 border border-[#130017]">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
