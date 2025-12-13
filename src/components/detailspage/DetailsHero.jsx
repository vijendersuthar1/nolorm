"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BuyNow, Productlike, ProductRatings, Repost } from "../common/icons";

const DetailsHero = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="max-w-[822px] w-full mx-auto px-3 py-[70px] max-md:py-10 max-sm:py-5">
      <div className="flex gap-[27.42px] max-md:flex-col max-md:justify-center items-center ">
        <article>
          <Image
            className="bg-[#D9F2F9] h-[383px] border-[#939393] border-[0.7px] rounded-[5.62px] "
            src="/images/details-hero.png"
            alt="details-hero"
            height={420}
            width={399}
          />
        </article>
        <aside>
          <h1 className="text-[#253D4E] font-[quicksand] font-bold text-[22.49px] leading-[33.74px]">
            Chelated Oral Calcium
          </h1>

          <div className="flex gap-[5.62px] items-center">
            <div  className="flex cursor-pointer ">
              <div  onClick={()=>setActive(!active)}><ProductRatings  active={active} /></div>
              <div  onClick={()=>setActive(!active)}><ProductRatings active={active}  /> </div>
              <div  onClick={()=>setActive(!active)}><ProductRatings active={active}  /></div>
              <div  onClick={()=>setActive(!active)}><ProductRatings  active={active} /></div>
              <div  onClick={()=>setActive(!active)}><ProductRatings active={active}  /></div>
            </div>
            <p className="text-[#253D4E] text-[9.84px] font-lato">(5.0)</p>
          </div>
          <p className="text-[#253D4E] font-[quicksand] pt-[15.47px] text-[14px] leading-[21.09px] font-bold">
            Price for 1 kg
          </p>
          <div className="flex items-center pt-[11px] gap-2">
            <p className="font-[quicksand] font-semibold text-[#1E293B] text-[29.52px] leading-[44.29px]">
              $24.00
            </p>
            <div className="flex flex-col">
              <span className="font-[lato] text-[#F74B4B] text-[8.44px] leading-[12.65px]">
                20 % OFF
              </span>
              <del className="font-[lato] text-[14.06px] text-[#253D4E] leading-[21.09px]">
                $30.00
              </del>
            </div>
          </div>
          <p className="text-[#253D4E] pt-[27px] font-normal max-w-md w-full text-[12.65px] leading-[14.76px]">
            Liquid Nutritional Supplement of High Bio-available Calcium,
            Phosphorus and Vitamins
          </p>
          <ul className="list-disc list-inside pt-[27px] text-black font-normal leading-[14.76px] font-[lato] text-[14.76px]">
            <li>Fortified with Milk Enhancing Herb Extracts</li>
            <li>Colour : Erythrosine</li>
          </ul>
          <div className="flex gap-3.5 pt-[38.19px]">
            <div className="w-[99.12px] h-[31.87px] flex items-center rounded-[2.81px] border-[0.7px] border-[#939393] px-[7.73px] py-[8.44px]">
              Quantity:
              <input className="w-[39.55px] pl-1" type="number" value="1" readOnly />
            </div>
            <div className="w-[124.42px] h-[31.87px] border-[0.7px] rounded-[2.81px] border-[#939393] px-[7.73px] py-[ 8.44px] flex justify-center items-center">
              <p className="font-bold text-[#130027] font-[Quicksand] leading-[14.76px] text-[9.84px] ">
                Size / Weight:
              </p>
              <input
                className="bg-[#EFEFEF] font-bold text-[9.84px] leading-[12.65px] font-[quicksand] text-[#253D4E] pl-0.5 w-[38.17px] h-[14.41px]"
                type="text"
                value="150g"
                readOnly
              />
            </div>
          </div>
          <div className="flex gap-[8.44px] pt-[20.29px]">
            <button
              onClick={() => setActive(!active)}
              className=" cursor-pointer border-[0.7px] border-[#939393] w-[45px] h-[30.93px] flex justify-center items-center rounded-[2.81px]"
            >
              <Productlike active={active} />
            </button>
            <button className="cursor-pointer border-[0.7px] border-[#939393] w-[45px] h-[30.93px] flex justify-center items-center rounded-[2.81px] ">
              <Repost />
            </button>
            <button className="cursor-pointer w-[68.89px] h-[30.93px] bg-[#130017] flex justify-center items-center rounded-[2.81px] font-bold font-[quicksand] text-white text-[9.84px] hover:bg-[#F2F0F0] hover:text-black hover:border duration-300 ">
              Buy now
            </button>
            <button className="cursor-pointer w-[109.66px] h-[30.93px] bg-[#F2F0F0] flex justify-center items-center rounded-[2.81px] gap-[9.58px] font-bold font-[quicksand] text-[#130017] text-[9.84px] hover:bg-black hover:text-white hover:border duration-300 group   ">
              <span>
                <BuyNow />
              </span>
              Add To Cart
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DetailsHero;
