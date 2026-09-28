import React from 'react'
import Hero from '../home/Hero'
import TheLoop from '../home/TheLoop'
import RecyclingDropOff from '../home/RecyclingDropOff'
import WastToEnergy from '../home/WastToEnergy'
import SiteEtiquette from '../home/Site'
import AboutCleanAbia from '../home/AboutCleanAbia'
import ContactSection from '../home/Contact'
import PickupSection from '../home/PickupSection'

export default function Home() {
  return (
    <div>
      <Hero/>
      <TheLoop/>
      <RecyclingDropOff/>
      <WastToEnergy/>
      <PickupSection/>
      <SiteEtiquette/>
      <AboutCleanAbia/>
      <ContactSection/>
    </div>
  )
}
