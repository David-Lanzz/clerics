import React from 'react';
import { motion } from 'framer-motion';

const InfoSection = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Background image (optional) */}
            <img
                src="/hero6.jpg"
                alt="Background"
                className="absolute w-full h-full object-cover opacity-20"
            />

            {/* Overlay (optional for dim effect) */}
            <div className="absolute inset-0  z-0" />

            {/* Content aligned right inside a white box */}
            <motion.div
                className="relative z-10 w-full max-w-6xl px-6 md:px-12 flex justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-xl w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Elevate Your Quranic Journey
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Join Qurania for a truly personal learning experience — one teacher, one student, one beautiful path to mastering the Quran.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        From Egypt’s esteemed scholars to your home, our program offers unmatched depth, clarity, and connection.
                    </p>
                    <button className="bg-goldCardBg text-primary font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition-all">
                        Get Started
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default InfoSection;
