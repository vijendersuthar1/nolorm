import Image from "next/image";
import React from "react";
import { Starvin } from "../common/icons";

const Details = () => {
  return (
    <div className="max-w-[1170px] flex w-full mx-auto px-4 pt-24 gap-[23.4px]">
      <div>
        <Image src="/image/powder.png" alt="powder" width={570} height={607} />
      </div>
      <div className="font-[quicksand] max-w-[573.3px] w-full">
        <h2 className="text-[42px] text-[#253D4E] font-semibold ">
          Welcome to Lorem ip
        </h2>
        <ul className="pt-4 flex flex-col gap-2 text-[16px] text-[#253D4E] leading-6">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </li>
        </ul>
        <div className="flex gap-2 pt-[104px]">
          <div>
            <Image
              src="/image/starmin.png"
              alt="starmin"
              width={175}
              height={181.28}
            />
          </div>
          <div>
            <Image
              src="/image/starmin.png"
              alt="starmin"
              width={175}
              height={181.25}
            />
          </div>
          <div>
            <Image
              src="/image/stardhara.png"
              alt="stardhara"
              width={175}
              height={178.83}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
