import Link from 'next/link'

import React from 'react'

import { AddToCard, Productlike, ProductRatings } from '../common/icons'
import { ProductData } from '../common/Helper'
import Image from 'next/image'

const PopularProducts = () => {
    return (
        <div className='mt-[88px] max-w-[1194px] w-full px-3 mx-auto'>

            <div className='flex justify-between'>
                <h2 className='text-[rgba(37,61,78,1)] font-semibold leading-[63px] text-[42px]'>
                    Popular <span className='text-black'>Products</span>

                </h2>

                <div className='max-w-[464px] w-full flex justify-between font-bold text-[20px] leading-[30px] items-center'>
                    <Link href="/">All</Link>
                    <Link href="/">E-liquid</Link>
                    <Link href="/">Disposable vapes</Link>
                    <Link href="/">Tanks</Link>
                    <Link href="/">Luxury</Link>
                </div>
            </div>

            {/* PRODUCT LIST GRID */}
            <div className='grid grid-cols-4 gap-5 mt-10'>
                {ProductData.map((items, index) => (
                    <div
                        key={index}
                        className='border-[#939393] border-[0.7px] rounded-[12.65px]  relative overflow-hidden'
                    >
                        <div className='  flex justify-center items-center relative'>
                            <Image src={items.img} width={268} height={220} alt='product' />
                        </div>

                        <div className='p-[14.06px] flex flex-col gap-2'>
                            <div>
                                <span className='font-[Quicksand] leading-[14.76px] text-[#253D4E] text-[9.84px]'>
                                    Category
                                </span>
                                <h3 className='font-bold font-[Quicksand] text-[#253D4E] leading-[21.09px] text-[14.06px]'>
                                    {items.productname}
                                </h3>
                            </div>

                            {/* RATINGS */}
                            <div className='flex items-center'>
                                <ProductRatings />
                                <ProductRatings />
                                <ProductRatings />
                                <ProductRatings />
                                <ProductRatings />
                                <p className=' text-[rgba(37,61,78,1)]  font-[lato] text-[14px] leading-[21px] ml-2'>5</p>
                            </div>

                            {/* PRICE */}

                            <p className='font-[lato] text-[14px] leading-[21px] text-[rgba(37,61,78,1)]'>
                                Price per kg
                            </p>
                            <div className=' flex justify-between'>

                                <div className='flex gap-2'>
                                    <p className='text-[14px] text-[rgba(37,61,78,1)] font-[lato] leading-[21px]'>$24.00</p>
                                    <del className='font-[lato] text-[14px] leading-[21px]'>$30.00</del>
                                </div>


                                <button className='w-[103px] p-[11px_20px] text-[14px] leading-[21px] font-bold h-11 flex gap-3 justify-center items-center rounded-1 bg-[rgba(242,240,240,1)] text-black font-[Quicksand] mx-auto'>
                                    <AddToCard /> Add
                                </button>
                            </div>
                        </div>


                        <div
                            className={`
                                w-[85.23px] h-[25.30px] flex justify-center items-center 
                                font-[Quicksand] text-white text-[11.25px] absolute 
                                -rotate-45 left-[-25px] top-[7px]
                                ${items.productlabel === "Sale" ? "bg-[#FF0532]" :
                                    items.productlabel === "New" ? "bg-black" :
                                        items.productlabel === "Hot" ? "bg-[#F74B81]" : ""}
                            `}
                        >
                            {items.productlabel}
                        </div>

                        {/* LIKE ICON */}
                        <div className='absolute top-[7px] right-[7px] cursor-pointer'>
                            <Productlike />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PopularProducts
