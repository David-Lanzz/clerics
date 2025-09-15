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
import WhyQurania from '../components/home/WHY'
import WhatWeDo from '../components/home/WhatWeDo'
import What from '../components/What'
import BookingSteps from '../components/home/Steps'
import Hero2 from '../components/home/Hero2'
import FooterClerics from './FooterClerics'
import ContactForm from '../components/home/Form'

const Home = () => {
  
  return (
    <Element name='home' className=' flex flex-col overflow-hidden '>
        <Hero />
        <What />
        <About />
        {/* <Clerics /> */}
        <WhatWeDo />
        {/* <Video /> */}
        <BookingSteps />
        {/* <WhyQurania /> */}
        {/* <Programmes /> */}
        {/* <IjazahProgramme /> */}
        <Pricing />
        <Testimonials />
        <FAQs />
        <FooterClerics />
        <ContactForm />
    </Element>
  )
}

export default Home