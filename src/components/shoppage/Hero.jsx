import React from 'react'

// import { Arrow } from '../common/icons'
import Image from 'next/image'
import SoapHeroSwiper from './SoapHeroSwiper'
import { Arrow } from '../common/icons'

export const Hero = () => {
  return (
    <div className='bg-[url(/images/shop-hero-img.png)] bg-center bg-no-repeat bg-cover'>
      <div className=' max-w-[1194px] w-full mx-auto px-3 flex  justify-between max-lg:flex-col max-lg:gap-2 '>
        <div className='max-w-[773px] flex justify-between max-md:flex-col max-md:gap-3 max-lg:mx-auto  w-full bg-[rgba(217,242,249,1)] p-[48px_8px_23px_24px]'>

          <div>
            <h2 className=' text-[56px] text-[rgba(37,61,78,1)] font-bold leading-[61.6px] font-[Quicksand]'>
              Luxury vapes
            </h2>
            <p className='text-[18px] text-[#253D4E] leading-[27px] py-[22px_32px] '>
              Up to 30% off your first order</p>
            <div className=' flex justify-between items-center pl-6  max-w-[420px] w-full bg-white border border-[rgba(212,238,226,1)] rounded-sm'>
              <input className='placeholder-[rgba(37,61,78,1)]' type="email" placeholder='Enter your email address' />
              <button className=' max-w-[106px] w-full h-[47px] bg-black text-white rounded-sm flex justify-center items-center font-bold leading-6 cursor-pointer'>

                Subscribe
              </button>
            </div>
          </div>
          <div className=' max-md:mx-auto '>
            {/* <SoapHeroSwiper /> */}
          </div>
        </div>
        <div className='max-w-[368px] w-full bg-[rgba(242,235,217,1)] pl-[30px] max-lg:mx-auto  flex justify-between relative py-[115px]'>
          <div>
            <h2 className=' leading-10 text-[32px] font-semibold text-[rgba(37,61,78,1)] max-w-[210px] w-full'>
              Free shipping
              on order over
              $100
            </h2>
            <button className='flex items-center justify-between max-w-[141px] font-bold text-[14px] leading-[21px] w-full p-[11px_20px_13px_20px] bg-black text-white rounded-sm cursor-pointer mt-8'>
              <p>
                Shop Now
              </p>
              <Arrow/>


            </button>
          </div>
          <div className=' absolute bottom-0 right-0'>
            <Image src="/images/soapAside.png" height={289} width={245} />
          </div>

        </div>


      </div>


    </div>
  )
}
