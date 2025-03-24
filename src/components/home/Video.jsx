import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Video = () => {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleOverlayClick = () => {
    setOverlayVisible(false);
    setIsMuted(false);
    const video = document.getElementById("bg-video");
    if (video) {
      video.currentTime = 0; // Restart video
      video.play();
    }
  };

  return (
    <div className="relative w-full h-screen max-h-[50vh] md:max-h-screen flex justify-center items-center overflow-hidden">
      {/* Video Background */}
      <motion.video
        id="bg-video"
        className="absolute inset-0 w-full h-full object-cover"
        src="/cleric.mp4"
        autoPlay
        loop
        controls
        muted={isMuted}
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Overlay & Content */}
      <AnimatePresence>
        {overlayVisible && (
          <motion.div
            className="absolute inset-0 bg-black/50 cursor-pointer flex flex-col justify-center items-center text-white text-center px-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={handleOverlayClick}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Experience the Journey
            </motion.h1>
            <motion.p
              className="text-base md:text-lg mt-2 md:mt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              A timeless legacy, captured in motion.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Video;
