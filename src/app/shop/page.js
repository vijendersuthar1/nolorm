import PageBanner from '@/components/common/PageBanner'
import { Hero } from '@/components/shoppage/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageBanner title="Shop" />
        <Hero/>
    </div>
  )
}

export default page