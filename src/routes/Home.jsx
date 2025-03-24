import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Clerics from '../components/home/Clerics'
import Testimonials from '../components/home/Testimonials'
import { Element } from 'react-scroll'
import Video from '../components/home/Video'
import Programmes from '../components/home/Programmes'
import IjazahProgramme from '../components/home/Ijazah'
import Pricing from '../components/home/Pricing'
import FAQs from '../components/home/Faq'

const Home = () => {
  
  return (
    <Element name='home' className=' flex flex-col overflow-hidden '>
        <Hero />
        <About />
        <Video />
        <Clerics />
        <Testimonials />
        <Programmes />
        <IjazahProgramme />
        <Pricing />
        <FAQs />
    </Element>
  )
}

export default Home