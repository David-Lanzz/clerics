import React from 'react'

const AboutComponent = () => {
    return (
        <div className='w-full flex justify-center px-4 md:px-[4rem]'>
            <div className="w-full max-w-[90rem] flex flex-col gap-4">
                <p>Our mission is simple: to help you grow in faith, knowledge, and confidence in your Islamic journey. We’re not just a learning platform; we’re your trusted space for authentic guidance, personalized lessons, and a deeper connection to Islam.</p>
                <p>At Quranique, we understand that every learner is unique. That’s why we tailor each lesson to fit your individual needs and goals. Whether you’re seeking to learn Quran recitation, deepen your understanding of Islamic teachings, or strengthen your connection to faith, our dedicated teachers are here to guide you every step of the way.</p>
                <p>Let us help you grow in knowledge and faith—every step of the way.</p>
                <span className="">
                    <button className="standardBtn">Book Now</button>
                </span>
            </div>
        </div>
    )
}

export default AboutComponent