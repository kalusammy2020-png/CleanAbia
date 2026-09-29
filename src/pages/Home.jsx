import AboutCleanAbia from '@/components/home/AboutCleanAbia'
import ContactSection from '@/components/home/Contact'
import Hero from '@/components/home/Hero'
import PickupSection from '@/components/home/PickupSection'
import RecyclingDropOff from '@/components/home/RecyclingDropOff'
import SiteEtiquette from '@/components/home/Site'
import TheLoop from '@/components/home/TheLoop'
import WasteToEnergy from '@/components/home/WastToEnergy'
import React from 'react'

function Home() {
  return (
    <div>
      <Hero />
      <TheLoop />
      <RecyclingDropOff />
      <WasteToEnergy />
      <PickupSection />
      <SiteEtiquette />
      <AboutCleanAbia />
      <ContactSection />
    </div>
  )
}

export default Home