import React from 'react'
import Hero from '../components/about/Hero'
import AboutComponent from '../components/about/AboutComponent'
import Perks from '../components/about/Perks'
import Team from '../components/about/Team'
import { Element } from 'react-scroll'
import FoundersMessage from '../components/about/FounderMessage'

const About = () => {
  return (
    <Element name='about' className='w-full flex flex-col gap-[4rem] md:gap-[7rem]'>
        <Hero />
        <AboutComponent />
        <Perks />
        <Team />
        <FoundersMessage />
    </Element>
  )
}

export default About