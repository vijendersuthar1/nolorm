"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CustomSwiper({
  slides = [],
  onSlideChange,
  autoplay = false,
  autoplayDelay = 5000,
  loop = false,
  spaceBetween = 30,
  slidesPerView = 1,
  children,
  paginationStyle = "bullets", // "bullets", "dots", "numbers", "both"
  showNavButtons = true,
  navigationPosition = "bottom", // "bottom", "sides"
  className = "",
  onSwiperReady,
}) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex || swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    if (onSlideChange) onSlideChange(swiper);
  };

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  const totalSlides = slides.length || React.Children.count(children);

  return (
    <div className={`custom-swiper-container ${className}`}>
      <Swiper
        ref={swiperRef}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        onSwiper={(swiper) => {
          if (onSwiperReady) onSwiperReady(swiper);
        }}
        onSlideChange={handleSlideChange}
        loop={loop}
        autoplay={
          autoplay
            ? { delay: autoplayDelay, disableOnInteraction: false }
            : false
        }
        className="swiper-wrapper"
      >
        {slides.length > 0
          ? slides.map((slide, idx) => (
              <SwiperSlide key={idx}>{slide}</SwiperSlide>
            ))
          : children}
      </Swiper>

      {/* Navigation Controls */}
      {showNavButtons && navigationPosition === "bottom" && (
        <div
          className="flex items-center justify-center gap-4 mt-6"
          role="group"
          aria-label="Slider controls"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <button
            onClick={goPrev}
            disabled={!loop && isBeginning}
            aria-label="Previous slide"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            ← Prev
          </button>

          {(paginationStyle === "bullets" || paginationStyle === "both") && (
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => swiperRef.current?.slideTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={activeIndex === idx ? "page" : undefined}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === idx
                      ? "bg-black scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}

          {(paginationStyle === "numbers" || paginationStyle === "both") && (
            <div className="text-sm font-medium min-w-12 text-center">
              {activeIndex + 1}/{totalSlides}
            </div>
          )}

          <button
            onClick={goNext}
            disabled={!loop && isEnd}
            aria-label="Next slide"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next →
          </button>
        </div>
      )}

      {/* Side Navigation */}
      {showNavButtons && navigationPosition === "sides" && (
        <>
          <button
            onClick={goPrev}
            disabled={!loop && isBeginning}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 px-3 py-2 bg-black/50 hover:bg-black/70 text-white rounded disabled:opacity-30 transition"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            disabled={!loop && isEnd}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 px-3 py-2 bg-black/50 hover:bg-black/70 text-white rounded disabled:opacity-30 transition"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
