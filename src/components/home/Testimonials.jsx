import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
    const testimonials = [
        { 
            name: "Amina S.", 
            text: "Alhamdulillah, Quranique has transformed my Quran recitation. My teacher’s patience and expertise helped me develop confidence in my Tajweed."
        },
        { 
            name: "Omar R.", 
            text: "I never imagined I could memorize so much of the Quran. The structured lessons and personal mentorship made my Hifz journey smooth and rewarding." 
        },
        { 
            name: "Hafsa B.", 
            text: "Earning my Ijazah through Quranique was a dream come true. The sanad is authentic, and the scholars are highly qualified. Highly recommended!" 
        },
        { 
            name: "Yusuf K.", 
            text: "The one-to-one sessions are incredibly effective. I appreciate the flexibility in scheduling, making it easy to learn even with a busy lifestyle." 
        },
        { 
            name: "Fatima L.", 
            text: "As a beginner, I was nervous, but Quranique made learning the Arabic alphabet and Tajweed so simple. My teacher was very supportive." 
        },
        { 
            name: "Abdullah M.", 
            text: "The depth of knowledge and the dedication of the instructors at Quranique is amazing. I feel blessed to be on this journey with them." 
        },
        { 
            name: "Maryam T.", 
            text: "Learning with Quranique has brought me closer to the Quran like never before. The lessons are engaging, and the guidance is truly invaluable." 
        },
    ];
    

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 720);

    useEffect(() => {
        const sizeHandler = () => setIsDesktop(window.innerWidth > 720);
        window.addEventListener("resize", sizeHandler);
        sizeHandler(); // Set initial state
        return () => window.removeEventListener("resize", sizeHandler);
    }, []);

    const visibleTestimonials = isDesktop ? 3 : 1;
    const maxIndex = Math.max(testimonials.length - visibleTestimonials, 0);
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev < (isDesktop ? maxIndex - 1 : maxIndex) ? prev + 1 : 0));
    const prevSlide = () => setIndex((prev) => (prev > 0 ? prev - 1 : isDesktop ? maxIndex - 1 : maxIndex));

    return (
        <div className="w-full flex justify-center px-4 md:px-16">
            <div className="w-full flex flex-col max-w-[90rem] gap-12 py-[4rem]">
                <span className="flex flex-col gap-2">
                    <p>Testimonials</p>
                <h2 className="text-2xl md:text-5xl font-semibold">WHAT OUR CLIENTS THINK</h2>
                </span>

                <div className="relative w-full flex items-center justify-center overflow-hidden">
                    {/* Left Chevron */}
                    <span
                        onClick={prevSlide}
                        className="rounded-full absolute left-0 p-3 cursor-pointer border border-primary bg-secondary shadow-md z-10"
                    >
                        <FaChevronLeft />
                    </span>

                    {/* Testimonials Container */}
                    <div className="w-full overflow-hidden">
                        <motion.div
                            className="flex gap-8"
                            animate={{ x: isDesktop ? `-${index * (100 / visibleTestimonials)}%` : `-${index * (100 / (visibleTestimonials * testimonials.length))}%` }}
                            transition={{ type: "spring", stiffness: 100, damping: 12 }}
                            style={{ width: `${(testimonials.length / visibleTestimonials) * 100}%` }}
                        >
                            {testimonials.map((testimonial, idx) => (
                                <div
                                    key={idx}
                                    className="w-[20rem] hover:bg-primary hover:text-secondary slowMo md:max-w-[30%] flex-grow flex flex-col gap-4 border border-primary p-6 px-8 bg-secondary shadow-lg"
                                >
                                    <p>"{testimonial.text}"</p>
                                    <h5 className="text-xl font-semibold">{testimonial.name}</h5>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Chevron */}
                    <span
                        onClick={nextSlide}
                        className="rounded-full absolute right-0 p-3 cursor-pointer border border-primary bg-secondary shadow-md z-10"
                    >
                        <FaChevronRight />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
