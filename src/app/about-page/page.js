import AboutHero from '@/components/about/AboutHero'
import Details from '@/components/about/Details'
import DetailSwiper from '@/components/about/DetailSwiper'
import Newsletter from '@/components/about/Newsletter'
import OnlineStore from '@/components/about/OnlineStore'
import Ourteam from '@/components/about/Ourteam'
import OurteamSwiper from '@/components/about/OurteamSwiper'
import Weprovide from '@/components/about/Weprovide'
import Footer from '@/components/common/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutHero/>
        {/* <Details/> */}
        <DetailSwiper/>
        <Weprovide/>
        <Ourteam/>
        <OnlineStore/>
        <Newsletter/>
    </div>
  )
}

export default page