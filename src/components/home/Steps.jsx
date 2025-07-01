import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: "Fill Out Your Details",
        desc: "Start by providing your name, contact info, and time zone. You’ll also create your Quranique portal login.",
    },
    {
        title: "Tell Us Your Goals & Preferences",
        desc: "Let us know your learning goals, prior experience, availability, and preferred teacher type. We personalize everything for you.",
    },
    {
        title: "Schedule Your Free Evaluation",
        desc: "Choose a time that suits you. No payment or commitment. This free session lets us assess your level and answer your questions.",
    },
    {
        title: "Confirmation",
        desc: "Get an email with your meeting link and a welcome packet to prepare. No commitment or fees at this point.",
    },
    {
        title: "Meet & Evaluate",
        desc: "Discuss your goals with an instructor. Experience our teaching style. We’ll recommend the right plan and level for you.",
    },
    {
        title: "Enroll & Get Started",
        desc: "Only if you’re ready – finalize your schedule and pick a pricing plan. Then enjoy full access to our portal and classes.",
    },
];

const BookingSteps = () => {
    return (
        <div className="w-full bg-white py-[6rem] px-4 md:px-[4rem] flex justify-center">
            <div className="w-full max-w-[90rem] flex flex-col-reverse md:flex-row gap-16 items-center">
                {/* Left: Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 flex flex-col gap-8"
                >
                    <h2 className="text-4xl font-bold text-green-800">Booking – Simple Multi-Step Enrollment</h2>
                    <p className="text-lg text-gray-700">
                        Ready to embark on your Quranique journey? In just a few easy steps, you can schedule your first free session – no payment needed upfront.
                    </p>
                    <div className="flex flex-col gap-6">
                        {steps.map((step, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="text-white bg-green-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{step.title}</h3>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-6 w-fit bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-green-800 transition">
                        Enroll Now
                    </button>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <img
                        src="/quan2.jpg"
                        alt="Enrollment Process"
                        className="rounded-2xl shadow-lg w-full h-auto object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default BookingSteps;
