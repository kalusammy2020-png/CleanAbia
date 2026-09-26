import React from 'react'
import Waste from '../components/Waste-Energy/Waste'
import { Tracker } from '../components/Waste-Energy/Tracker'
import Process from '../components/Waste-Energy/Process'
import FAQwaste from '../components/Waste-Energy/FAQwaste'

function WastetoEnergy() {
  return (
    <div>
      <Waste />
      <Tracker />
      <Process />
      <FAQwaste />
    
    </div>
  )
}

export default WastetoEnergy