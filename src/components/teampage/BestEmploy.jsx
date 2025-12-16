import Image from 'next/image'
import React from 'react'

const BestEmploy = () => {
  return (
    <>
    <div className='max-w-[1170px] w-full px-3 mx-auto py-[49px] max-md:py-8 max-sm:py-5'>
        <div className='flex justify-between gap-3 py-8 max-md:py-6 max-sm:py-4 max-md:flex-col '>
        <article className='max-w-[490px] w-full flex flex-col gap-6 max-md:gap-4 max-sm:gap-3 max-md:mx-auto'>
            <h2 className='font-bold text-[42px] max-md:text-[32px] max-sm:text-[26px] text-[#253D4E] leading-[50.4px] max-md:leading-[35px]  font-[quicksand] max-w-[369px] w-full #253D4E'>Best Employee of
            <span className='text-[#130017] max-md:text-[32px] max-sm:text-[26px]'> the Month</span></h2>
            <div className='flex flex-col gap-3 max-md:gap-1.5 font-[lato] text-[14px] text-[#253D4E] leading-[21px] max-sm:leading-[18px]'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p></div>
              <button className='bg-[#130017] hover:bg-[#253D4E] duration-150 w-[117.55px] max-sm:w-[90px] max-sm:h-7 max-sm:text-[14px] h-[47px] font-[quicksand] rounded-sm text-white cursor-pointer '>Learn More</button>
        </article>
        <aside className='max-md:mx-auto' >
            <Image src="/images/best-employe.png" alt='best-employe' height={526} width={570}/>
        </aside>
        </div>

    </div>
    </>
  )
}

export default BestEmploy