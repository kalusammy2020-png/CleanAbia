import Action from '@/components/About/Action'
import FirstAbout from '@/components/About/FirstAbout'
import OurMission from '@/components/About/OurMission'
import Problem from '@/components/About/Problem'
import RoadMap from '@/components/About/RoadMap'
import Values from '@/components/About/Values'
import React from 'react'


function About() {
  return (
    <div>
      <FirstAbout />
      <Problem />
      <OurMission />
      <Values />
      <RoadMap />
      <Action />
    </div>
  )
}

export default About