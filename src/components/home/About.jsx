import React from 'react'
import { useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'

const About = () => {

    const navigate = useNavigate()

    return (
        <div className='w-full flex justify-center pl-4 md:pl-[4rem]'>
            <div className="w-full max-w-[90rem] pl-0 md:pl-[4rem] justify-between flex flex-col md:flex-row gap-8">
                <span className="flex flex-col gap-4 w-full md:w-1/2">
                    <h3 className="text-2xl md:text-4xl font-semibold">ABOUT BOOK A MUSLIM TEACHER</h3>
                    <p>At Book a Muslim Teacher, we connect you with knowledgeable Muslim teachers to guide you on your journey of learning Islam. Your spiritual growth and understanding are at the heart of our mission, where sincerity and dedication shape every step. We focus on providing authentic, high-quality education while ensuring a supportive and enriching learning experience. Our teachers are experienced, qualified, and committed to following Islamic principles, ensuring that you receive trustworthy and beneficial knowledge. When you learn with us, you’re not just gaining knowledge—you’re deepening your faith and strengthening your connection with Islam. Our goal is not just to teach, but to inspire and uplift you on your path to a meaningful and fulfilling Islamic life.</p>
                    <p>Book your session today and embark on a journey to deepen your knowledge of Islam with a dedicated Muslim teacher.</p>
                    <span className="flex gap-8 items-center">
                        <button className="standardBtn" onClick={() => {
                            navigate('/booking')
                            setTimeout(() => {
                                scroller.scrollTo('booking', { smooth: true, offset: -100 })
                            }, 100);
                        }}>Book Now</button>
                        <button className="p-3 px-6 border border-primary" onClick={() => {
                            navigate('/about')
                            setTimeout(() => {
                                scroller.scrollTo('about', { smooth: true, offset: -100 })
                            }, 100);
                        }}>Learn More</button>
                    </span>
                </span>
                <img src="/about.png" className='' alt="" />
            </div>
        </div>
    )
}

export default About