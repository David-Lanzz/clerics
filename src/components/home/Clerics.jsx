import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { getAllClerics } from '../../services';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
const Clerics = () => {

    useEffect(() => {
        getAllClerics().then(data => setClerics(data.clerics))
    }, [])

    const [clerics, setClerics] = useState([])

    const scrollerRef = useRef(null);

    const navigate = useNavigate()


    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-[90rem] flex flex-col gap-[3rem] items-center">
                <span className="flex items-center gap-4">
                    <span className="bg-primary/50 rounded-full p-1 md:p-2"></span>
                    <h3 className="text-2xl md:text-5xl tracking-[0.5rem] md:tracking-[1rem] font-semibold">OUR TEACHERS</h3>
                    <span className="bg-primary/50 rounded-full p-1 md:p-2"></span>
                </span>
                <div ref={scrollerRef} style={{ willChange: 'transform' }} className="w-full scroller">
                    <motion.div
                        animate={{ x: ["0%", "-80%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 200,
                            ease: "linear",
                        }}
                        className='min-w-max flex gap-8 p-4'>
                        {[...clerics, ...clerics, ...clerics, ...clerics, ...clerics, ...clerics].map((cleric, index) => (
                            <span onClick={() => {
                                navigate(`/cleric/${cleric?.id}`)
                                setTimeout(() => {
                                    scroller.scrollTo('cleric', { smooth: true })
                                }, 100);
                            }} key={index} className='w-[20rem] cursor-pointer flex-grow max-w-[22%] h-[20rem] overflow-hidden relative'>
                                <img src={cleric.image} className='relative w-full h-full top-0 left-0' alt="" />
                                <span className="w-full h-full absolute top-0 left-0 z-[2] flex flex-col justify-end items-center p-4 object-cover bg-gradient-to-t from-primary to-transparent">
                                    <p className="text-xl text-secondary">{cleric.name}</p>
                                </span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Clerics