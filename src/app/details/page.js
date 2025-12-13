import DescriptionRew from '@/components/detailspage/DescriptionRew'
import DetailsHero from '@/components/detailspage/DetailsHero'
import PromotinalGoods from '@/components/detailspage/PromotinalGoods'
import RatedProduct from '@/components/detailspage/RatedProduct'

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