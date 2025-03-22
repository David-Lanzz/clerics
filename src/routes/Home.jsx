import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Clerics from '../components/home/Clerics'
import Testimonials from '../components/home/Testimonials'
import { Element } from 'react-scroll'

const Home = () => {
  return (
    <Element name='home' className=' flex flex-col overflow-hidden gap-[4rem] md:gap-[7rem]'>
        <Hero />
        <About />
        <Clerics />
        <Testimonials />
    </Element>
  )
}

export default Home