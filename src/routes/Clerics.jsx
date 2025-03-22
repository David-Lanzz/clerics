import React from 'react'
import { Element } from 'react-scroll'
import Hero from '../components/clerics/Hero'
import Description from '../components/clerics/Description.jsx'
import ClericList from '../components/clerics/ClericList.jsx'

const Clerics = () => {
  return (
    <Element name='clerics' className='w-full flex flex-col gap-[4rem] md:gap-[7rem]'>
        <Hero />
        <Description />
        <ClericList />
    </Element>
  )
}

export default Clerics