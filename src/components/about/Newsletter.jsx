import React from 'react'

const Newsletter = () => {
  return (
    <div className='max-w-[1170px] w-full mx-auto px-4 font-[poppins] mt-[100px] max-lg:mt-[50px] '>
        <h2 className='text-[36px] text-[#253D4E] font-bold text-center max-sm:text-[30px]'>Sign up for our newsletter</h2>
        <p className='text-[20px] text-[#253D4E] font-medium text-center pt-[15px] max-sm:text-[18px] '>Stay in the loop with everything you need to know.</p>
       <div className='flex gap-6 justify-center max-sm:flex-col'>
         <div className='flex flex-col items-center gap-[7px] mt-8 justify-center'>
            <input type="email" name="email" id="email" placeholder='Enter your email' className='px-3 border border-[#939393] rounded-lg p-[10.5px_15px_10.5px_15px] max-w-[320px] w-full outline-none' />
            <p className='text-[12px] text-[#253D4E] font-medium'>We care about your data in our privacy policy</p>  
        </div>
        
        <div className='flex items-center pt-2 max-sm:mx-auto'>
            <button className='max-w-[117px] font-[poppins] w-full text-[16px] bg-[#130017] rounded-md text-white p-[10px_18.4px_12px_18.6px] hover:bg-[#F2F0F0] hover:text-black duration-500 hover:font-medium  cursor-pointer'>Subscribe</button>
        </div>
       </div>
        
    </div>
  )
}

export default Newsletter