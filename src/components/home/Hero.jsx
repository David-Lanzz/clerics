import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const images = [
    '/hero1.jpg', '/hero2.jpg', '/hero3.jpg', '/hero4.jpg', '/hero5.jpg',
    '/hero6.jpg', '/hero7.jpg', '/hero8.jpg', '/hero9.jpg', '/hero10.jpg', '/hero11.jpg'
];

const Hero = () => {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(0);
    const [zoomIn, setZoomIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setZoomIn((prev) => !prev); // Toggle zoom direction
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
            }, 1000); // Wait for fade transition before switching image
        }, 10000); // Each image lasts 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative w-full h-[90vh] md:h-[120svh] max-h-[58rem] flex justify-center items-center px-4 md:px-[4rem] overflow-hidden'>
            {/* Background Image Animation */}
            <AnimatePresence>
                <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt=''
                    className='absolute w-full h-full object-cover'
                    initial={{ scale: zoomIn ? 1.1 : 1, opacity: 0.5 }}
                    animate={{ scale: zoomIn ? 1 : 1.1, opacity: 1 }}
                    exit={{ opacity: 0.5 }}
                    transition={{ duration: 5, ease: 'easeInOut' }}
                />
            </AnimatePresence>
            
            {/* Content */}
            <motion.div 
                className='p-8 bg-black/80 w-max max-w-[40rem] mt-[5rem] pb-4 md:pb-[4rem] relative z-[5] text-secondary flex flex-col items-center text-center'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h3 className='text-lg md:text-2xl tracking-wide'>WELCOME TO</h3>
                <motion.h1 
                    className='text-5xl md:text-7xl font-semibold' 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    Quranique
                </motion.h1>

                {/* Refined Text Section */}
                <motion.p 
                    className='text-xl mt-6 max-w-3xl italic' 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    Learn from the world’s finest reciters and elevate your Qur’anic mastery.
                </motion.p>
                
                <motion.p 
                    className='text-lg mt-4 max-w-4xl leading-relaxed opacity-80' 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1.5, delay: 0.8 }}
                >
                    Unlock the secrets of expert recitation with personalized one-on-one guidance from Egypt’s top scholars. Embark on a journey of clarity, confidence, and spiritual growth.
                </motion.p>
                
                {/* Buttons */}
                <motion.div 
                    className='flex flex-col md:flex-row gap-4 mt-6' 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1 }}
                >
                    <button 
                        onClick={() => {
                            navigate('/about');
                            scroller.scrollTo('about', { smooth: true });
                        }} 
                        className='standardBtn flex gap-2 items-center'
                    >
                        Learn more
                        <FaChevronRight />
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
