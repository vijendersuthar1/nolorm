"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { teamswiper } from "../common/Helper";
import { Leftarrow, Rightarrow } from "../common/icons";

export default function OurteamSwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
console.log(prevRef.current)
  return (
    <div className="max-w-[520px] w-full">
      <div className="flex justify-end mb-2.5">
        
          <div  ref={prevRef}
          className="custom-swiper-button-prev  py-1 cursor-pointer"><Leftarrow/></div>
        
        
         <div ref={nextRef}
          className="custom-swiper-button-next  py-1 cursor-pointer"><Rightarrow/></div>
        
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
