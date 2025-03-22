import React from 'react'
import { useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'

const Hero = () => {

    const navigate = useNavigate()

    return (
        <div className='w-full flex justify-center relative px-4 md:px-[4rem] h-[80vh] md:h-[120svh] bg-tertiary max-h-[58rem]'>
            <img src="/hand.jpg" alt="" className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2" />
            <span className="absolute inset-0 w-full h-full z-[2] bg-black/70 object-cover" />
            <div className="w-full max-w-[90rem] mt-[5rem] pb-4 md:pb-[4rem] relative z-[5] text-secondary flex flex-col items-center">
                <h3 className="text-lg md:text-2xl">WELCOME TO</h3>
                <h1 className="text-5xl md:text-7xl text-center font-semibold">BOOK A MUSLIM TEACHER</h1>

                <span className="flex flex-col mt-auto items-center gap-4">
                    <p className="text-xl">Expert care. Stunning results.</p>
                    <span className="flex flex-col md:flex-row gap-4 items-center">
                        <button onClick={()=> {
                            navigate('/booking')
                            scroller.scrollTo('booking', {smooth: true})
                        }} className="standardBtn">Book a Session</button>
                        <button className="p-3 px-6 bg-transparent text-secondary border border-secondary">Book a Consultation</button>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Hero