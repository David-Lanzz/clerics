import React from 'react'
import { FaInstagram, FaPhone, FaTiktok } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'

const Touch = () => {

    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')

    return (
        <div className='w-full flex justify-center my-[5rem] relative overflow-hidden'>
            <img src="/touch.jpg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 object-cover w-full -translate-y-1/2" />
            <span alt="" className="absolute w-full h-full object-cover bg-primary/70 z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="w-full max-w-[90rem] relative z-[3] flex flex-col gap-8 items-center p-4 py-[4rem] md:p-[4rem]">
                <h2 className="text-2xl md:text-5xl text-center text-secondary font-semibold tracking-[0.5rem] md:tracking-[1rem]">GET IN TOUCH</h2>
                <span className="flex gap-8 text-xl text-secondary items-center">
                    <a className='border border-secondary rounded-full p-4' href="" target='_blank'><FaPhone /></a>
                    <a className='border border-secondary rounded-full p-4' href="" target='_blank'><FaInstagram /></a>
                    <a className='border border-secondary rounded-full p-4' href="" target='_blank'><FaTiktok /></a>
                </span>
                <button className='p-3 px-6 bg-secondary border border-transparent' onClick={() => {
                    navigate(`/booking/${userId}`)
                    setTimeout(() => {
                        scroller.scrollTo(`booking`, { smooth: true, offset: -100 })
                    }, 100);
                }}>Book Now</button>
            </div>
        </div>
    )
}

export default Touch