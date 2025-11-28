import React, { useState } from 'react'
import { FaUserSecret } from 'react-icons/fa'
import { FaInstagram, FaPhone, FaTiktok } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'

const Footer = () => {

    const tabs = [
        { title: "Home", link: "home" },
        { title: "About", link: "about" },
        { title: "What We Do", link: "whatwedo" },
        { title: "Why Quranile", link: "whyquranile" },
        { title: "Booking Steps", link: "bookingsteps" },
        // { title: "FAQs", link: "faqs" },
        // { title: "Contact", link: "contact" },
    ]

    const handleNavigate = (link) => {
        scroller.scrollTo(link, { smooth: "easeInOutQuart" });
    };

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const userId = localStorage.getItem('userId')


    return (
        <div className='w-full flex pb-[5rem] justify-center px-4 md:px-[4rem] mt-auto'>
            <div className="w-full max-w-[90rem] flex flex-col md:flex-row gap-[2rem] md:gap-[5rem]">
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl md:text-4xl font-semibold">Quranile</h3>
                    <p>Master the Quran with the World's Best</p>
                    {/* <span className="flex gap-8 text-xl items-center">
                        <a className='border border-primary rounded-full p-4' href="" target='_blank'><FaPhone /></a>
                        <a className='border border-primary rounded-full p-4' href="" target='_blank'><FaInstagram /></a>
                        <a className='border border-primary rounded-full p-4' href="" target='_blank'><FaTiktok /></a>
                    </span> */}
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-end gap-4">
                    <span className="flex gap-4 md:gap-8 justify-between">{
                        tabs.map((tab, index) => (
                            <span key={index} onClick={() => handleNavigate(tab.link)}>{tab.title}</span>
                        ))}
                    </span>
                    {/* <span className="w-full flex bg-primary/40 items-center justify-end">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} className="bg-transparent text-start text-textcolor flex-grow p-2 md:p-3 pl-3 md:pl-6" />
                        <button className="standardBtn" onClick={() => {
                            navigate(`/booking/${userId}/?email=${email}`)
                            setTimeout(() => {
                                scroller.scrollTo(`booking`, { smooth: true, offset: -100 })
                            }, 100);
                        }}>Book Now</button>
                    </span> */}
                    <span className="flex gap-2 items-center">
                        <p>©2023 H&T . All rights reserved</p>
                        <FaUserSecret className='cursor-pointer' size={20} onClick={() => navigate('/authorizeAdmin')} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer