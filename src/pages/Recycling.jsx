import AcceptedItems from '@/components/Recycling/AcceptedItems'
import Ctas from '@/components/Recycling/Ctas'
import Faqs from '@/components/Recycling/Faqs'
import HeroSection from '@/components/Recycling/HeroSection'
import ProcessSection from '@/components/Recycling/ProcessSection'
import ScheduleSection from '@/components/Recycling/ScheduleSection'
import Zones from '@/components/Recycling/Zones'
import React from 'react'

function Recycling() {
  return (
    <div>
      <HeroSection />
      <Zones />
      <ScheduleSection />
      <AcceptedItems />
      <ProcessSection />
      <Faqs />
      <Ctas />
    </div>
  )
}

export default Recycling