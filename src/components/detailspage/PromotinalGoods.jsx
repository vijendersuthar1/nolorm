"use client";
import React, { useState } from "react";
import { PromotionalGoods } from "../common/Helper";
import Image from "next/image";
import { AddToCard, Productlike, ProductRatings } from "../common/icons";
import Link from "next/link";

const PromotinalGoods = () => {
  const [wishlist, setWishlist] = useState([1, 3]);

  const addedToWishlist = (index) => {
    setWishlist((prev) => {
      if (prev.includes(index)) {
        console.log(prev, "prev");
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };
  console.log(wishlist, "wishlist");
  return (
    <>
      <div className="max-w-[1170px] w-full mx-auto px-3 ">
        <h2 className="font-[quicksand] font-semibold text-[29.52px] leading-[44.29px] text-[#253D4E] ">
          Promotional Goods
        </h2>
        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2  max-lg:grid-cols-3 max-sm:grid-cols-1 pt-7 pb-3">
          {PromotionalGoods.map((items, index) => (
            <div
              key={index}
              className="border-[#939393] border-[0.7px] rounded-[12.65px] max-w-[186.28px] w-full  relative overflow-hidden max-md:mx-auto "
            >
              <Link
                href="/details-page"
                className="h-[183px] max-w-[184px]  flex justify-center items-center relative"
              >
                <Image src={items.img} alt="5star-dhara" fill />
              </Link>
              <div className="p-[14.06px] flex flex-col gap-2">
                <div>
                  {" "}
                  <span className="font-[Quicksand] font-regular leading-[14.76px] text-[#253D4E] text-[9.84px]">
                    Category
                  </span>
                  <h3 className="font-bold font-[quicksand] text-[#253D4E] leading-[21.09px] text-[14.06px]  truncate ">
                    {" "}
                    {items.productname}
                  </h3>
                </div>
                <div className="flex items-center">
                  <div className="flex cursor-pointer ">
                    <div>
                      <ProductRatings />
                    </div>
                    <div>
                      <ProductRatings />
                    </div>
                    <div>
                      <ProductRatings />
                    </div>
                    <div>
                      <ProductRatings />
                    </div>
                    <div>
                      <ProductRatings />
                    </div>
                  </div>
                  <p className="text-[#253D4E] font-[lato] text-[9.84px] leading-[14.76px] w-[11.3] flex justify-end ">
                    5
                  </p>
                </div>
                <p className="font-[lato] text-[9.84px] leading-[14.76px] text-[#253D4E]  ">
                  Price per kg
                </p>
                <div className="flex gap-2">
                  <p className="text-[11.25px] text-[#253D4E] font-[lato] leading-[16.87px] ">
                    $24.00
                  </p>
                  <del className="font-[lato] text-[11.25px] leading-[16.87px] ">
                    $30.00
                  </del>
                </div>
                <Link href="/details-page">
                  <button className="w-[145.76px] h-[32.33px] flex gap-[5.54px] justify-center items-center rounded-[2.81px] bg-[#130017] text-white font-[Quicksand] font-bold mx-auto cursor-pointer hover:bg-[#939393] ">
                    <AddToCard /> Add To Cart
                  </button>
                </Link>
              </div>
              <div className=" w-[85.23] h-[25.30] flex justify-center items-center font-[Quicksand] text-[white] text-[11.25px] absolute -rotate-45 left-[-25] bg-[#F74B81] top-[7] ">
                {items.productlabel}
              </div>
              <div
                onClick={() => addedToWishlist(index)}
                className="absolute top-[7px] right-[7px] cursor-pointer"
              >
                <Productlike like={wishlist.includes(index)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PromotinalGoods;
