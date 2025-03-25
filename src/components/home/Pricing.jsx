import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Pricing = () => {

    const userId = localStorage.getItem('userId')
    const navigate = useNavigate()
    return (
        <div className="w-full flex justify-center bg-gray-900 py-16 px-6 text-white">
            <div className="max-w-5xl w-full flex flex-col items-center text-center gap-8">
                {/* Heading */}
                <motion.h2
                    className="text-3xl md:text-5xl font-bold tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Pricing AND Enrolment
                </motion.h2>

                {/* Pricing Table */}
                <div className="w-full overflow-x-auto">
                    <motion.table
                        className="w-full border-collapse border border-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 w-max">Package</th>
                                <th className="p-4 w-max">Lesson Length</th>
                                <th className="p-4 w-max">Sessions/Week</th>
                                <th className="p-4 w-max">Monthly Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricingPlans.map((plan, index) => (
                                <motion.tr
                                    key={index}
                                    onClick={() => {
                                        navigate(`/booking/${userId}`)
                                        setTimeout(() => {
                                            scroller.scrollTo('booking', {
                                                smooth: true,
                                                offset: -100
                                            })
                                        }, 100);
                                    }}
                                    className="border cursor-pointer border-gray-700 hover:bg-gray-800 transition"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                >
                                    <td className="p-4 w-max font-semibold">{plan.package}</td>
                                    <td className="p-4 w-max">{plan.lessonLength}</td>
                                    <td className="p-4 w-max">{plan.sessions}</td>
                                    <td className="p-4 w-max">{plan.price}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </motion.table>
                </div>

                {/* Additional Info */}
                <motion.p
                    className="text-gray-300 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    ✅ Free trial lesson | Flexible scheduling | Discounts for families
                </motion.p>

                {/* Call to Action */}
                <motion.button
                    className="px-6 py-3 text-lg font-semibold bg-primary hover:bg-primary/80 rounded-full mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    onClick={() => {
                        navigate(`/booking/${userId}`)
                        setTimeout(() => {
                            scroller.scrollTo('booking', {
                                smooth: true,
                                offset: -100
                            })
                        }, 100);
                    }}
                >
                    Start Free Trial →
                </motion.button>
            </div>
        </div>
    );
};

const pricingPlans = [
    {
        package: 'Starter Plan',
        lessonLength: '30 mins',
        sessions: '2',
        price: '£70 / $90',
    },
    {
        package: 'Standard Plan',
        lessonLength: '45 mins',
        sessions: '3',
        price: '£120 / $150',
    },
    {
        package: 'Intensive Plan',
        lessonLength: '60 mins',
        sessions: '5',
        price: '£220 / $270',
    },
];

export default Pricing;