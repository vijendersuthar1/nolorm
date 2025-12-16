import DetailSwiper from '@/components/about/DetailSwiper'
import Newsletter from '@/components/about/Newsletter'
import OnlineStore from '@/components/about/OnlineStore'
import Ourteam from '@/components/about/Ourteam'
import Weprovide from '@/components/about/Weprovide'
import PageBanner from '@/components/common/PageBanner'

const page = () => {
  
  return (
    <div>
        <PageBanner title="About Us" />
        {/* <Details/> */}
        <DetailSwiper/>
        <Weprovide/>
        <Ourteam/>
        <OnlineStore/>
        <Newsletter title="About Us"/>
    </div>
  )
}
 
export default page