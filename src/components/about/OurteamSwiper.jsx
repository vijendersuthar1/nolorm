"use client";
import React, { useRef, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { teamswiper } from "../common/Helper";
import Image from "next/image";
import { Leftarrow, Rightarrow } from "../common/icons";

export default function OurteamSwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="max-w-[520px] w-full">
      <div className="flex justify-end gap-1 mb-[39px]">
        
          <div  ref={prevRef}
          className="custom-swiper-button-prev px-3 py-1"><Leftarrow/></div>
        
        
         <div ref={nextRef}
          className="custom-swiper-button-next px-3 py-1"><Rightarrow/></div>
        
      </div>

      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          // Bind navigation refs (Swiper needs the elements to be attached)
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper"
      >
        {teamswiper.map((items, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={items.img}
                alt={`team-${index}`}
                width={287}
                height={392.58}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
