"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { swiperData } from "../common/Helper";

export default function DetailSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=" max-w-[1170px] w-full pt-24 max-xl:pt-5 items-center flex gap-5 mx-auto max-xl:flex-col">
      <div className="max-w-[570px] w-full mx-auto">
        
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {swiperData.map((items, index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto w-fit"><img src={items.img} /></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-w-[573.3px] w-full max-xl:flex max-xl:flex-col-reverse">
       <div>
         <h2 className="text-[42px] text-[#253D4E] font-semibold max-sm:text-[35px] max-xl:text-center max-sm:pt-5 ">
          Welcome to Lorem ip
        </h2>
        <ul className="pt-4 flex flex-col gap-2 text-[16px] max-sm:text-[12px] max-sm:text-center max-sm:px-4 text-[#253D4E] leading-6 ">
          <li className="max-w-[528px] w-full ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li className="max-w-[573px] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li className="max-w-[573.3px] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </li>
        </ul>
       </div>
       <div className="pt-5">
         <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {swiperData.map((items, index) => (
            <SwiperSlide key={index}>
              <img src={items.img} />
            </SwiperSlide>
          ))}
        </Swiper>
       </div>
      </div>
    </div>
  );
}
