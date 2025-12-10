import BestEmploy from '@/components/teampage/BestEmploy'
import { OurTeam } from '@/components/teampage/OurTeam'
import SignUp from '@/components/teampage/SignUp'
import { TeamHero } from '@/components/teampage/TeamHero'
import React from 'react'

const page = () => {
  return (
    <>
    <TeamHero/>
    <BestEmploy/>
    <OurTeam/>
    <SignUp/>
    </>
  )
}

export default page