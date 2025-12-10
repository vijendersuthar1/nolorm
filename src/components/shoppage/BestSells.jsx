import React from 'react'
import { Arrow } from '../common/icons'
import BestSellsSwiper from './BestSellsSwiper'


const BestSells = () => {
    return (
        <div className=' max-w-[1194px] w-full px-3 mx-auto mt-[114.71px] '>
            <div className=' flex justify-between'>
                <h2 className=' text-[42px] leading-[63px] font-semibold text-black '>
                    Daily <span className='text-[rgba(37,61,78,1)]'>Best Sells</span>

                </h2>
                <div>
                    {/* swiper button */}
                </div >

            </div>
            <div className=' mt-10 pl-4 flex gap-[29px]'>
                <div className='bg-no-repeat bg-center bg-cover rounded-[18px] max-w-[265px] w-full' style={{ backgroundImage: "url('/images/brustEnergy.png')" }}>
                    <div className='pt-[300px] pb-8 pl-5 '>
                        <h3 className='text-[42px] leading-[46.2pxpx] font-semibold text-white'>
                            A burst of energy
                        </h3>
                        <button className='max-w-[141px] w-full flex items-center justify-between font-bold text-[14px] leading-[21px] p-[11px_20px_13px_20px] bg-[rgba(19,0,23,1)] text-white rounded-sm cursor-pointer mt-8'>
                            Shop Now <Arrow />

                        </button>
                    </div>

                </div>




                <div className=' max-w-[789px] w-full' >
                    <BestSellsSwiper />
                </div>

            </div>

        </div>
    )
}

export default BestSells