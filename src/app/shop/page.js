import BestSells from '@/components/shoppage/BestSells'
import { Hero } from '@/components/shoppage/Hero'
import PopularProducts from '@/components/shoppage/PopularProducts'
import Promotions from '@/components/shoppage/Promotions'
import ShopCategories from '@/components/shoppage/ShopCategories'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
       <ShopCategories/>
       <PopularProducts />
       <BestSells/>
       <Promotions/> 
    </div>
  )
}

export default page