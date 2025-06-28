import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const navigate = useNavigate();
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        offset: ['start end', 'end start'],
        target: ref
    });

    // Parallax & zoom effect
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Moves up slightly
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]); // Smooth zoom-in effect

    // Intersection Observers for fade-in animations
    const { ref: ref1, inView: inView1 } = useInView();
    const { ref: ref2, inView: inView2 } = useInView();
    const { ref: ref3, inView: inView3 } = useInView();

    return (
        <div ref={ref} className="relative w-full flex justify-center px-4 md:px-[4rem] py-[8rem] h-[120vh] max-h-[50rem] overflow-hidden">
            {/* Parallax Background Image */}
            <motion.div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: "url('/aboutt.jpg')",
                    scale,
                    y,
                }}
            />
            <span className="absolute inset-0 w-full h-full bg-greenCardBg/30" />

            {/* Content */}
            <motion.div
                className="relative z-10 w-full max-w-[90rem] text-white px-6 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="w-full h-full flex flex-col md:flex-row justify-between">
                    {/* About Section */}
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <h3 className="text-xl font-semibold">About Us</h3>
                        <motion.p
                            ref={ref1}
                            className={`mt-6 text-lg relative transition-all duration-1000 ease-in-out ${inView1 ? 'opacity-100 left-0' : 'opacity-0 left-[-5rem]'}`}
                        >
                            Quranique is a global online platform offering personalised one-to-one Quran learning from Egypt’s most esteemed and qualified reciters and scholars. Whether you’re a complete beginner, returning after years, or an advanced student seeking Ijazah or mastery of Maqamat, Quranique is built around your goals, your pace, and your life.
                        </motion.p>
                    </div>
                    
                    {/* Second Column */}
                    <div className="w-full md:w-1/2 flex mt-auto flex-col gap-4">
                        <motion.p
                            ref={ref2}
                            className={`mt-6 relative transition-all duration-1000 ease-in-out ${inView2 ? 'opacity-100 right-0' : 'opacity-0 right-[-5rem]'}`}
                        >
                            We pair you with elite Egyptian teachers trained in Al-Azhar tradition, fluent in English, and deeply experienced in guiding non-Arabic speakers of all ages. From Tajweed and Recitation to Hifz, Maqams, Tafseer, and Ijazah preparation – every lesson is live, tailored, and rooted in centuries of scholarly excellence.
                        </motion.p>
                        <motion.p
                            ref={ref3}
                            className={`mt-6 relative transition-all duration-1000 ease-in-out ${inView3 ? 'opacity-100 right-0' : 'opacity-0 right-[-5rem]'}`}
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
