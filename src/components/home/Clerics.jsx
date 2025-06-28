import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { getAllClerics } from '../../services';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Clerics = () => {
    const [clerics, setClerics] = useState([]);
    const scrollerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        getAllClerics().then(data => setClerics(data.clerics));
    }, []);

    return (
        <div className='w-full flex justify-center bg-greenBg py-16'>
            <div className="w-full max-w-[90rem] flex flex-col gap-12 items-center">
                {/* Section Title */}
                <div className="flex items-center gap-4 text-white">
                    <span className="bg-primary/50 rounded-full p-2"></span>
                    <h3 className="text-3xl md:text-5xl tracking-wide font-semibold">OUR TEACHERS</h3>
                    <span className="bg-primary/50 rounded-full p-2"></span>
                </div>
                
                {/* Scrolling Clerics Section */}
                <div ref={scrollerRef} className="w-full overflow-hidden relative">
                    <motion.div
                        animate={{ x: ["0%", "-80%"] }}
                        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                        className='flex gap-6 p-4 min-w-max'
                    >
                        {[...clerics, ...clerics].map((cleric, index) => (
                            <motion.div
                                key={index}
                                className='w-[24rem] h-96 cursor-pointer flex-shrink-0 overflow-hidden relative rounded-lg shadow-lg'
                                whileHover={{ scale: 1.05 }}
                                onClick={() => {
                                    navigate(`/cleric/${cleric?.id}`);
                                    setTimeout(() => {
                                        scroller.scrollTo('cleric', { smooth: true });
                                    }, 100);
                                }}
                            >
                                <img 
                                    src={cleric.image} 
                                    alt={cleric.name} 
                                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-110' 
                                />
                                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 text-center text-white transition-all duration-500 hover:bg-black/40">
                                    <p className="text-2xl font-bold mb-2">{cleric.name}</p>
                                    <p className='text-lg font-medium'>{cleric?.subTitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Clerics;