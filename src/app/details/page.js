import DescriptionRew from '@/components/detailspage/DescriptionRew'
import DetailsHero from '@/components/detailspage/DetailsHero'
import Hero from '@/components/detailspage/DetailsHero'
import PromotinalGoods from '@/components/detailspage/PromotinalGoods'
import RatedProduct from '@/components/detailspage/RatedProduct'
import RatedProductSwiper from '@/components/detailspage/RatedProductSwiper'
import React from 'react'

const page = () => {
  return (
    <div>
        <DetailsHero/>
        <DescriptionRew/>
        <RatedProduct/>
        <PromotinalGoods/>
    </div>
  )
}

export default page