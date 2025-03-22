import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
    const testimonials = [
        { name: "Bruce Wayne", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum sapiente aspernatur facilis enim voluptate a cupiditate sequi totam quasi assumenda hic? Modi iure at sequi quam nihil perferendis maxime?" },
        { name: "Clark Kent", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum sapiente aspernatur facilis enim voluptate a cupiditate sequi totam quasi assumenda hic? Modi iure at sequi quam nihil perferendis maxime?" },
        { name: "Diana Prince", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum sapiente aspernatur facilis enim voluptate a cupiditate sequi totam quasi assumenda hic? Modi iure at sequi quam nihil perferendis maxime?" },
        { name: "Barry Allen", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum sapiente aspernatur facilis enim voluptate a cupiditate sequi totam quasi assumenda hic? Modi iure at sequi quam nihil perferendis maxime?" },
        { name: "Hal Jordan", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum sapiente aspernatur facilis enim voluptate a cupiditate sequi totam quasi assumenda hic? Modi iure at sequi quam nihil perferendis maxime?" },
        { name: "Arthur Curry", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum sapiente aspernatur facilis enim voluptate a cupiditate sequi totam quasi assumenda hic? Modi iure at sequi quam nihil perferendis maxime?" },
        { name: "Paul Walker", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, illum sapiente aspernatur facilis enim voluptate a cupiditate sequi totam quasi assumenda hic? Modi iure at sequi quam nihil perferendis maxime?" },
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
            <div className="w-full flex flex-col max-w-[90rem] gap-12 items-center">
                <h2 className="text-2xl md:text-5xl text-center font-semibold">RECOMMENDATIONS</h2>

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
                                    className="w-[20rem] md:max-w-[30%] flex-grow flex flex-col gap-4 border border-primary p-6 px-8 bg-secondary shadow-lg"
                                >
                                    <p>{testimonial.text}</p>
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
