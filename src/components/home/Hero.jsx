import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InfoSection from './Info';

const images = [
  '/hero1.jpg', '/hero2.jpg', '/hero3.jpg', '/hero4.jpg', '/hero5.jpg',
  '/hero6.jpg', '/hero7.jpg', '/hero8.jpg', '/hero9.jpg', '/hero10.jpg', '/hero11.jpg'
];

const Hero = () => {
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
    <div className="relative w-full h-[100vh] max-h-[58rem] overflow-hidden">
      {/* Background animation */}
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ scale: zoomIn ? 1.1 : 1, opacity: 0.5 }}
          animate={{ scale: zoomIn ? 1 : 1.1, opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 5, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] to-transparent z-10" />

      {/* Optional children can go here */}
      <div className="relative z-20">
        <InfoSection />
      </div>
    </div>
  );
};

export default Hero;
