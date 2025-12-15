import React from 'react'
// import { PromotionsData } from '../common/Helper'
import { ProductRatings } from '../common/icons'
import { PromotionsData } from '../common/Helper'

const Promotions = () => {
    return (
        <div className=' max-w-[1194px] w-full px-3 mx-auto mt-[31px] '>
            <h3 className=' text-[42px] leading-[63px] font-semibold text-black  max-lg:text-[34px] max-md:text-[28px] max-sm:text-[24px] '>
                Hot <span className='text-[rgba(37,61,78,1)]'>Promotions </span>
            </h3>
            <div className=' grid grid-cols-3 gap-[30] mt-5'>
                {/* { PromotionsData.map((item, index)=>(

           )} */}
                {PromotionsData .map((items, index) => (
                    <div key={index}>
                        <h4 className='text-[32px] leading-10 font-bold'>
                            {items.heading}
                        </h4>
                        <div className=' border border-[rgba(147,147,147,1)]  max-w-[370px]  w-full my-[10px_30px] '>
                        </div>
                        {items.product.map((prod, idx) => (
                            <div key={idx} className=' flex gap-4 mb-[30px]'>
                                <div className=' border border-[rgba(147,147,147,1)] rounded-lg flex justify-center items-center max-w-[102px] w-full h-[92px]' >
                                    <img src={prod.img} alt={`promotion-product-${idx}`} />
                                </div>
                                <div className='max-w-[120px] w-full'>
                                    <h5 className=' text-[14px] leading-[21px] font-bold text-[rgba(37,61,78,1)]'>
                                        Product Name
                                    </h5>
                                    <div className='flex items-center'>
                                        <ProductRatings />
                                        <ProductRatings />
                                        <ProductRatings />
                                        <ProductRatings />
                                        <ProductRatings />
                                    </div>
                                    <p className=' text-[14px] leading-[21px] text-[rgba(37,61,78,1)]' >
                                        Additional text
                                    </p>
                                    <p className=' text-[14px] leading-[21px] font-bold text-[rgba(37,61,78,1)]' >
                                        $24.00
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>

                ))}

            </div>

        </div>
    )
}

export default Promotions