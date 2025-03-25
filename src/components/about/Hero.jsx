import React from 'react'

const Hero = () => {
    return (
        <div className='w-full flex justify-center relative px-4 md:px-[4rem] h-[50vh] md:h-[80svh] max-h-[40rem]'>
            <img src="/hand.jpg" alt="" className="absolute w-full h-full object-cover" />
            <span className="w-full h-full object-cover bg-black/50 absolute z-[2]" />
            <div className="w-full max-w-[90rem] mt-[5rem] z-[3] pb-[4rem] relative flex flex-col items-start">
                <h2 className="text-5xl text-secondary mt-auto font-semibold">ABOUT US</h2>
            </div>
        </div>
    )
}

export default Hero