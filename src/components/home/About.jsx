import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const navigate = useNavigate();
    const ref = useRef();

    const { ref: ref1, inView: inView1 } = useInView();
    const { ref: ref2, inView: inView2 } = useInView();
    const { ref: ref3, inView: inView3 } = useInView();

    return (
        <div
            ref={ref}
            className="relative w-full flex justify-center items-center px-4 md:px-[4rem] py-[8rem] h-[80vh] max-h-[50rem] overflow-hidden bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: "url('/aboutt.jpg')",
            }}
        >
            {/* Overlay */}
            <span className="absolute inset-0 w-full h-full bg-greenCardBg/40 backdrop-blur-sm" />

            {/* Content */}
            <motion.div
                className="relative z-10 w-full max-w-[90rem] text-white px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Panel */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl font-bold mb-4">About <span className="text-accent">Quranique</span></h2>
                        <motion.p
                            ref={ref1}
                            className={`relative text-lg leading-relaxed bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg transition-all duration-1000 ease-in-out ${
                                inView1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                        >
                            Quranique is a global online platform offering personalised one-to-one Quran learning from Egypt’s most esteemed and qualified reciters and scholars. Whether you’re a complete beginner, returning after years, or an advanced student seeking Ijazah or mastery of Maqamat, Quranique is built around your goals, your pace, and your life.
                        </motion.p>
                    </div>

                    {/* Right Panel */}
                    <div className="flex flex-col gap-6">
                        <motion.p
                            ref={ref2}
                            className={`relative text-lg leading-relaxed bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg transition-all duration-1000 ease-in-out ${
                                inView2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                        >
                            We pair you with elite Egyptian teachers trained in Al-Azhar tradition, fluent in English, and deeply experienced in guiding non-Arabic speakers of all ages. From Tajweed and Recitation to Hifz, Maqams, Tafseer, and Ijazah preparation – every lesson is live, tailored, and rooted in centuries of scholarly excellence.
                        </motion.p>
                        <motion.p
                            ref={ref3}
                            className={`relative text-lg leading-relaxed bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg transition-all duration-1000 ease-in-out ${
                                inView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                        >
                            You’ll experience the rich Quranic culture of Egypt — where recitation is part of every street, home, and heart — from wherever you are in the world.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
