
"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ProductData } from "../common/Helper";
import {
  Abc,
  AddToCard,
  Nextarrow,
  PaginationBtn,
  Prewarrow,
  Productlike,
  ProductRatings,
} from "../common/icons";

export default function RatedProductSwiper() {
  const swiperRef = useRef(null);

  // Swiper active index
  const [activeIndex, setActiveIndex] = useState(0);

  //  Like button state (prop name = "active")
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="flex gap-2.5 justify-end -translate-y-[60px] max-sm:-translate-y-5 ">
        <button className="custom-swiper-button-prev cursor-pointer h-[25px] w-[25px] bg-black rounded-full flex items-center hover:bg-[#939393] justify-center shadow-[0px_0px_0.7px_rgba(9,30,66,0.31)]">
          <Prewarrow />
        </button>

        <div className="custom-swiper-button-next cursor-pointer h-[25px] w-[25px] bg-black rounded-full flex items-center hover:bg-[#939393] justify-center shadow-[0px_0px_0.7px_rgba(9,30,66,0.31)]">
          <Nextarrow />
        </div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="mySwiper"
      >
        {ProductData.map((items, index) => (
          <SwiperSlide key={index}>
            <div className="border-[#939393] border-[0.7px] rounded-[12.65px] max-w-[186.28px] w-full relative overflow-hidden max-md:mx-auto">
              <div className="h-[231px] flex justify-center items-center relative">
                <Image src={items.img} alt="product-img" fill />
              </div>

              <div className="p-[14.06px] flex flex-col gap-2">
                <span className="font-[Quicksand] text-[#253D4E] text-[9.84px]">
                  Category
                </span>

                <h3 className="font-bold font-[quicksand] text-[#253D4E] leading-[21.09px] text-[14.06px]">
                  {items.productname}
                </h3>

                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <ProductRatings key={i}/>
                  ))}
                  <p className="text-[#253D4E] text-[9.84px] ml-auto">5</p>
                </div>

                <p className="text-[#253D4E] text-[9.84px]">Price per kg</p>
                <div className="flex gap-2">
                  <p className="text-[11.25px] text-[#253D4E]">$24.00</p>
                  <del className="text-[11.25px]">$30.00</del>
                </div>

                <button className="w-[145.76px] h-[32.33px] flex gap-[5.54px] justify-center items-center rounded-[2.81px] bg-[#130017] text-white font-[Quicksand] font-bold mx-auto cursor-pointer hover:bg-[#939393]">
                  <AddToCard /> Add To Cart
                </button>
              </div>

              {/* product label */}
              <div
                className={`w-[85px] h-[25px] flex justify-center items-center text-white text-[11.25px] absolute -rotate-45 left-[-25px] top-[7px] ${
                  items.productlabel === "Sale"
                    ? "bg-[#FF0532]"
                    : items.productlabel === "New"
                    ? "bg-black"
                    : items.productlabel === "Hot" && "bg-[#F74B81]"
                }`}
              >
                {items.productlabel}
              </div>

              {/*  like icon */}
              <div
                onClick={() => setActive(!active)}
                className="absolute top-[7px] right-[7px] cursor-pointer">
                <Productlike active={active} />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* custom pagination */}
        <div className="custom-pagination gap-2 flex justify-center mt-3">
          {ProductData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.slideToLoop(idx)}
              className={`cursor-pointer rounded-full ${
                activeIndex === idx ? "bg-black" : "bg-white"
              }`}
            >
              <PaginationBtn />
            </button>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

