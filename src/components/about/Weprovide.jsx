import React from "react";
import { Ticket } from "../common/icons";
import Image from "next/image";
import { provided, reviews } from "../common/Helper";

const Weprovide = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto px-4 pt-24 max-sm:pt-5">
      <h2 className="text-[42px] text-[#253D4E] font-semibold font-[quicksand] leading-[63px] text-center max-sm:text-[35px] max-sm:pt-3 ">
        What We Provide?
      </h2>
      <div className="pt-28 grid grid-cols-3 gap-[96px_30px] max-xl:grid-cols-2 max-md:grid-cols-1">
        {provided.map((items, index) => (
          <div
            key={index}
            className="max-w-[370px] mx-auto w-full border border-1px rounded-lg border-[#E9ECF4]"
          >
            <Image
              className="flex mx-auto -translate-y-12"
              src={items.img}
              alt="ticket"
              width={108}
              height={108}
            />
            <h2 className="text-[20px] text-[#253D4E] font-bold font-[quicksand] text-center ">
              {items.title}
            </h2>
            <p className="text-[14px] text-[#253D4E] font-[lato] text-center  line-clamp-3 max-w-[290px] w-full mx-auto pt-4 leading-[21px]">
              {items.description}
            </p>
            <div key={index} className="flex pt-4 justify-center pb-[25px]">
              <button className="font-[quicksand] font-bold text-[#130017] bg-[#F2F0F0] rounded-sm px-[15px] py-2.5 cursor-pointer hover:bg-[black] hover:text-[white] duration-500 ">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[1170px] w-full py-12 px-4 grid grid-cols-4 mt-24 text-center divide-x-2 divide-[#939393] items-center rounded-[13px] max-md:grid-cols-2 max-md:divide-x-0 max-md:gap-10 shadow-[0_0_1px_rgba(9,30,66,0.31),0_9px_15px_rgba(9,30,66,0.08)]">
        {reviews.map((items, index) => (
          <div key={index} className="max-w-[290.16px] w-full">
            <h2 className="text-[56px] text-[#253D4E] font-[quicksand] font-bold ">
              {items.h2}
            </h2>
            <p className="text-[14px] text-[#130017] font-[lato] ">{items.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weprovide;
