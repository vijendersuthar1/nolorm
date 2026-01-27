import Link from 'next/link'
import React from 'react'
import { HomeIcon } from '../common/icons'

export const TeamHero = () => {
  return (
    <div className='bg-[url(/images/team-hero-bg.png)] bg-no-repeat bg-center mt-[49px]'>
        <div className='max-w-[1170px] w-full mx-auto px-3  '>
             <div className='flex flex-col gap-5 max-sm:gap-2 pt-[61px] max-md:pt-10 max-sm:pt-7'>
            <h1 className='font-bold font-[quicksand] leading-[84px] max-md:leading-[60px] max-sm:leading-10 text-[#253D4E] text-[56px] max-sm:text-[32px] max-md:text-[40px]'>Our Team</h1>
              <div className='flex pb-[81px] max-md:pb-[60px] max-sm:pb-[30px] leading-6 font-[lato]'>
             <Link className='flex items-center' href="/"> <HomeIcon/>   Home</Link>
             <p className='w-[27px] text-[#939393] flex justify-center  '>&gt;</p>
            <p className='text-[#253D4E]'>Our Team </p></div>
            </div>
           
        </div>
        
    </div>
  )
}
