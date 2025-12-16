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
    <div className=" max-w-[1170px] w-full pt-24 items-center flex gap-5 mx-auto max-lg:pt-10 max-md:flex-col ">
      <div className="max-w-[430px] w-full mx-auto max-lg:max-w-[250px] max-lg:w-full">
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {swiperData.map((items, index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto w-fit"><img src={items.img} width={400} /></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-w-[573.3px] w-full px-4 max-lg:max-w-[495px] max-md:flex max-md:flex-col-reverse">
       <div>
         <h2 className="text-[42px] text-[#253D4E] font-semibold max-sm:text-[30px] max-sm:pt-5 max-lg:text-[35px] max-md:text-center ">
          Welcome to Lorem ip
        </h2>
        <ul className="pt-4 flex flex-col gap-2 text-[16px] max-sm:text-[12px]  max-sm:px-4 text-[#253D4E] leading-6 max-lg:text-[13px]">
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
       <div className="pt-5 max-w-[573px] w-full">
         <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={0}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {swiperData.map((items, index) => (
            <SwiperSlide key={index} >
              <Image src={items.img} width={167} height={178} alt="image" className="max-lg:max-w-[120px] max-lg:w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
       </div>
      </div>
    </div>
  );
}
