import React from 'react'

const SignUp = () => {
  return (
    <>
    <div className='max-w-[1170px] w-full mx-auto px-3 py-[49px] max-md:py-6 max-sm:py-2 max-sm:pb-2 flex flex-col justify-center items-center'>
        <h2 className='font-bold text-[36px] max-md:text-[28px] max-sm:text-[24px] leading-8
         max-md:leading-6 text-center font-[poppins] text-[#253D4E]'>Sign up for our newsletter</h2>
        <p className='text-[#253D4E] pt-[15px] max-md:pt-2 font-[poppins] text-[20px] max-md:[18px] max-sm:text-[16px] font-medium text-center leading-[30px] max-md:leading-5'>Stay in the loop with everything you need to know.</p>
        <div className='flex flex-col gap-7px'>
        <div className='max-w-[461px]  w-full flex justify-center items-center'>
            <div className='max-w-[461px] w-full flex justify-between pt-8 max-md:pt-6 max-sm:pt-4 gap-2'>
                <input className='max-w-[320px] w-full rounded-lg h-[46px] max-md:h-8 font-[poppins] border border-[#939393] placeholder:text-[#9CA3AF] max-sm:placeholder:text-[12px] pl-[15px]' type="email" placeholder='Enter your email' />
                <button className='bg-[#130017] hover:bg-[#253D4E] duration-150 cursor-pointer rounded-md text-white w-[117px] h-12  max-md:h-8'>Subscribe</button>
            </div>

        </div>
                 <p className=' font-medium pt-2 leading-[18px] text-[12px] font-[poppins] text-[#253D4E] '>We care about your data in our privacy policy</p>
                 </div>
    </div>
    </>
  )
}

export default SignUp