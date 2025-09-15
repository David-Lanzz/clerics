import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const What = () => {
    return (
        <Element name='whatwedo' className="w-full flex justify-center px-4 md:px-[4rem] py-[6rem] bg-[#f9f9f9]">
            <div className="w-full max-w-[90rem] flex flex-col md:flex-row gap-12 items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <img
                        src="/aboutt.png"
                        alt="Quran Learning"
                        className="w-full h-auto rounded-2xl shadow-lg object-cover"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 flex flex-col gap-6 text-gray-800"
                >
                    <h2 className="text-4xl font-bold text-green-800">What We Do</h2>

                    <p className="text-lg leading-relaxed">
                        <strong>Qurania</strong> is a global online platform offering personalised one-to-one Quran learning from Egypt’s most esteemed and qualified reciters and scholars.
                        Whether you’re a complete beginner, returning after years, or an advanced student seeking <strong>Ijazah</strong> or mastery of <strong>Maqamat</strong>, Qurania is built around your goals, your pace, and your life.
                    </p>

                    <p className="text-lg leading-relaxed">
                        We pair you with elite Egyptian teachers trained in <strong>Al-Azhar tradition</strong>, fluent in English, and deeply experienced in guiding non-Arabic speakers of all ages.
                        From Tajweed and Recitation to Hifz, Maqams, Tafseer, and Ijazah preparation – every lesson is live, tailored, and rooted in centuries of scholarly excellence.
                    </p>

                    <p className="text-lg leading-relaxed">
                        You’ll experience the rich Quranic culture of Egypt — where recitation is part of every street, home, and heart — from wherever you are in the world.
                    </p>
                </motion.div>
            </div>
        </Element>
    );
};

export default What;
