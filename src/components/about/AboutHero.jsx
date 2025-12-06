import React from "react";
import { Greater, HomeIcon } from "../common/icons";
import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="bg-[url('/image/herobg.png')] bg-no-repeat bg-cover">
      <div className="max-w-[1170px] h-[270px] w-full mx-auto px-4">
        <h1 className="text-[56px] font-bold pt-[61px] text-[#253D4E] font-[quicksand]">
          About Us
        </h1>
        <div className="flex gap-[] items-center max-w-[159.82px] w-full justify-between pt-5">
          <div className="flex gap-1 items-center font-[lato]">
            <HomeIcon />
            <Link href="/" className="text-[#130017] ">
              Home
            </Link>
          </div>
          <div className="pt-[5px]">
            <Greater />
          </div>
          <Link href="/" className="text-[#253D4E]">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
