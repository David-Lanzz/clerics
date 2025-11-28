import React from 'react'

const AboutComponent = () => {
    return (
        <div className='w-full flex justify-center px-4 md:px-[4rem]'>
            <div className="w-full max-w-[90rem] flex flex-col gap-4">
                <p>At Quranile, our mission is to preserve the noble tradition of Qur’anic learning while innovating for a new generation. We are a premium online platform dedicated to teaching the Holy Qur’an with excellence, authenticity, and accessibility. Our vision is global: to connect students from London to Los Angeles with Egypt’s renowned Qur’anic scholars in an interactive virtual classroom. We combine reverence for tradition – adhering to classical Tajweed rules and Sanad (chain of narration) – with modern learning tools that suit busy, contemporary lifestyles.</p>
                <p>Our approach centres on personal mentorship and a comprehensive curriculum. Each student’s journey is guided by an expert instructor who tailors lessons to individual goals, whether it’s learning the Arabic alphabet or earning an Ijazah certification. We prioritize correct pronunciation, deep understanding, and a spiritual connection to the words of Allah. By cultivating a supportive online community and employing proven teaching methodologies, Quranile aims to produce not just good reciters, but confident, enlightened Muslims grounded in the Qur’an. Join us, and become part of a global family committed to the Qur’an’s timeless guidance.</p>
                <p>Let us help you grow in knowledge and faith—every step of the way.</p>
                <span className="">
                    <button className="standardBtn">Book Now</button>
                </span>
            </div>
        </div>
    )
}

export default AboutComponent