import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const navigate = useNavigate();
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        offset: ['start end', 'end start'],
        target: ref
    });

    // Parallax & zoom effect
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Moves up slightly
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]); // Smooth zoom-in effect

    const { ref: ref1, inView: inView1 } = useInView()
    const { ref: ref2, inView: inView2 } = useInView()
    const { ref: ref3, inView: inView3 } = useInView()


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
            <span className="absolute inset-0 w-full h-full bg-black/70" />

            {/* Content */}
            <motion.div
                className="relative z-10 w-full max-w-[90rem] text-white px-6 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="w-full h-full flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <h3 className="text-xl font-semibold">About Us</h3>
                        <p
                            ref={ref1}
                            className={`mt-6 text-lg relative slowMo delay-200 ${inView1 ? 'left-0' : 'left-[-5rem]'}`}
                        >
                            Quranique is an elite online Qur’an teaching platform offering live, one-to-one lessons for students of all levels – from complete beginners to advanced learners seeking Ijazah. Our mission is to empower non-Arabic speaking Muslims in Western countries to access authentic, world-class Qur’an education.
                        </p>

                    </div>
                    <div className="w-full md:w-1/2 flex mt-auto flex-col gap-4">

                        <p ref={ref2} className={`mt-6 relative slowMo delay-200 ${inView2 ? 'right-0' : 'right-[-5rem]'}`}>
                            We combine Egypt’s unrivalled Qur’anic heritage with structured learning, flexible scheduling, and expert teachers fluent in English. Every student receives personalised attention, tailored lessons, and a clear path to Qur’anic excellence.
                        </p>
                        <p ref={ref3} className={`mt-6 relative slowMo delay-200 ${inView3 ? 'right-0' : 'right-[-5rem]'}`}>
                            Whether you are starting with the alphabet or preparing for Ijazah, Quranique will guide you – step by step – with care, precision, and passion.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
