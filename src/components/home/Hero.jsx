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
            setZoomIn((prev) => !prev);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
            }, 1000);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[100vh] max-h-[58rem] overflow-hidden flex items-center justify-center">
            {/* Background */}
            <AnimatePresence>
                <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt=""
                    className="absolute w-full h-full object-cover"
                    initial={{ scale: zoomIn ? 1.1 : 1, opacity: 0.5 }}
                    animate={{ scale: zoomIn ? 1 : 1.1, opacity: 1 }}
                    exit={{ opacity: 0.5 }}
                    transition={{ duration: 5, ease: 'easeInOut' }}
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000bb] to-transparent z-10 backdrop-blur-sm" />

            {/* Content */}
            <motion.div
                className="relative z-20 text-center text-white px-6 md:px-12 py-12 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h3 className="text-base md:text-lg tracking-widest uppercase text-goldCardBg font-medium mb-2">
                    Welcome to
                </h3>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-md"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    Quranique
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl mt-6 italic max-w-3xl text-goldCardBg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    Online Quran Learning Platform – From the Heart of Egypt to Your Home.
                </motion.p>

                <motion.p
                    className="text-lg md:text-xl mt-4 max-w-3xl text-white/90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                >
                    Master the Quran with the World's Best — One Teacher, One Student, One Journey.
                </motion.p>

                <motion.div
                    className="mt-8 flex gap-4 flex-col sm:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1 }}
                >
                    <button
                        onClick={() => {
                            navigate('/about');
                            scroller.scrollTo('about', { smooth: true });
                        }}
                        className="bg-goldCardBg text-primary font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition-all flex items-center gap-2"
                    >
                        Learn More <FaChevronRight />
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
