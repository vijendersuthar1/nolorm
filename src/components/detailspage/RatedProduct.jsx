
import Image from 'next/image'
import React from 'react'
import { AddToCard, Nextbtn, Previbtn, Productlike, ProductRatings } from '../common/icons'
import { ProductData } from '../common/Helper'
import RatedProductSwiper from './RatedProductSwiper'

const RatedProduct = () => {
  return (
    <>
      <div className="max-w-[1170px] w-full mx-auto px-3 mt-[44.18px] mb-[26.27px]">
        <div className="flex justify-between relative">
          <h2 className="  font-semibold text-[29.52px] leading-[44.29px] font-[Quicksand] text-[#130017]">
            Related Products
          </h2>
        </div>
        <div className="  pt-[28.12px]">
          <RatedProductSwiper />
        </div>
      </div>
    </>
  );
}

export default RatedProduct