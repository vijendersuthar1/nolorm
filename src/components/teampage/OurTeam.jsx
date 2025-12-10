import Image from 'next/image'
import React from 'react'

export const OurTeam = () => {
  return (
    <>
    <div className='max-w-[1170px] w-full mx-auto px-3'>
        <h2 className='font-semibold text-[42px] max-md:text-[32px] max-sm:text-[26px] text-[#253D4E] text-center leading-[63px] max-md:leading-[50px]  max-sm:leading-[33px] font-[quicksand] '>Our Team</h2>
        <p className='text-center text-[#253D4E] leading-6 max-md:leading-5 max-sm:text-[13px] font-[lato]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
            incididunt ut labore et dolore magna aliqua.</p>
        <div className='py-4 grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 '>
            <Image className='px-2 py-3' src="/images/member1.png" alt='first-member' height={281} width={417} />
            <Image className='px-2 py-3' src="/images/member2.png" alt='second-member' height={281} width={417} />
            <Image className='px-2 py-3' src="/images/member3.png" alt='third-member' height={281} width={417} />
            <Image className='px-2 py-3' src="/images/member4.png" alt='forth-member' height={281} width={417} />
            <Image className='px-2 py-3' src="/images/member-5.png" alt='fifth-member' height={281} width={417} />
            <Image className='px-2 py-3' src="/images/member6.png" alt='sixth-member' height={281} width={417} />
            <Image className='px-2 py-3' src="/images/member7.png" alt='seventh-member' height={281} width={417} />
            <Image className='px-2 py-3' src="/images/member8.png" alt='eighth-member' height={281} width={417} />
        </div>
    </div>
    </>
  )
}
