"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { SoapSwiper } from "../common/icons";

export default function SoapHeroSwiper() {
  const slides = [
    "/images/soapHeroSwiper1.png",
    "/images/soapHeroSwiper1.png",
    "/images/soapHeroSwiper1.png",
  ];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="soap-hero-swiper w-[250px]">
      <Swiper
        spaceBetween={30}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <Image src={src} alt="Soap Slide" height={330} width={250} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="custom-pagination"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 12,
        }}
      >


        <div className="gap-2.5 w-fit mx-auto" style={{ display: "flex", }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.slideTo(idx)}
              className=" rounded-full"
              style={{

                background: activeIndex === idx ? "black" : "white",
                cursor: "pointer",
              }}

            > <SoapSwiper /></button>
          ))}

        </div>



      </div>
    </div>
  );
}
