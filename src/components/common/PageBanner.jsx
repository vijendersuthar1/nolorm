/** @format */
import React from "react";
import { Greater, HomeIcon } from "./icons";
import Link from "next/link";

const PageBanner = ({ title }) => {
  return (
    <div className="bg-[url('/images/herobg.png')] bg-no-repeat bg-cover">
      <div className="max-w-[1170px] h-[270px] w-full mx-auto px-4">
        <h1 className="text-[56px] font-bold pt-[61px] text-[#253D4E] max-md:text-[45px] font-[quicksand]">
          {title}
        </h1>
        <div className="flex gap-2 items-center w-full justify-start pt-5">
          <div className="flex gap-1 items-center font-[lato]">
            <HomeIcon />
            <Link href="/" className="text-[#130017] ">
              Home
            </Link>
          </div>
          <div className="pt-[5px]">
            <Greater />
          </div>
          <Link
            href={`${title.toLowerCase().replace(/ /g, "-")}`}
            className="text-[#253D4E]">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
