/** @format */

import React from "react";
import Image from "next/image";
import { categories, exploreMore } from "../common/Helper";

const ShopCategories = () => {
  return (
    <div className=" mt-16 max-w-[1194px] w-full px-3 mx-auto">
      <h2 className=" text-[42px] leading-[63px] font-semibold text-[rgba(37,61,78,1)]  max-lg:text-[34px] max-md:text-[28px] max-sm:text-[24px] ">
        Shop <span className=" text-black">by Categories</span>
      </h2>
      {/* <div className="mt-6 grid grid-cols-8 max-xl:grid-cols-7 max-lg:grid-cols-6 max-md:grid-cols-5 max-sm:grid-cols-4 gap-4  ">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg  w-full p-[11px_15px]`}
            style={{
              backgroundColor: `${item.bg}`,
            }}>
            <div className="w-full h-[75px] relative overflow-hidden   ">
              <Image src={item.img} alt="#" fill />
            </div>
            <p className=" text-[14px] text-center text-[rgba(37,61,78,1)] leading-[15px] font-bold mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className=" mt-[100px] grid grid-cols-3 max-xl:grid-cols-2 gap-[30px] max-sm:grid-cols-1 ">
        {exploreMore.map((item, index) => (
          <div
            key={index}
            className=" py-[38px_81px] pl-[30px] bg-no-repeat rounded-lg "
            style={{
              backgroundColor: item.bg,
              backgroundImage: `url(${item.bgImg})`,
            }}>
            <h3 className=" text-[20px] leading-[25px] text-[rgba(37,61,78,1)] font-bold max-w-[233px] w-full">
              {item.heading}
            </h3>
            <button className=" bg-black max-w-[190px] cursor-pointer w-full flex gap-4 justify-center items-center text-white text-[14px] leading-[21px] font-bold rounded-sm py-[11px_13px]  mt-4">
              {item.buttonData}
              {item.buttonSvg}
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ShopCategories;
