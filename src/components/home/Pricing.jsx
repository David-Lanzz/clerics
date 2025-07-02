import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="w-full bg-primary text-white py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center text-center gap-10">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pricing Options – Flexible Plans for Every Student
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-gray-300 max-w-3xl text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We offer flexible payment options tailored to your program, lifestyle, and location — without hard pricing on the site. Here’s how you can invest in your Qur’an journey:
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
          {pricingModels.map((item, index) => (
            <motion.div
              key={index}
              className="bg-greenCardBg p-6 rounded-xl shadow-lg flex flex-col gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 whitespace-pre-line">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What’s Included */}
        <motion.div
          className="bg-greenCardBg p-8 rounded-xl shadow-xl max-w-4xl text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold mb-3">What’s Included in Every Plan</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>1-on-1 personalized lessons with certified teachers</li>
            <li>Progress tracking and student portal access</li>
            <li>Community events, workshops & recitation circles</li>
            <li>Flexible scheduling and class durations (30–60 mins)</li>
            <li>No hidden fees or surprise renewals</li>
            <li>Custom plans available based on your goals</li>
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.button
          className="bg-primary hover:bg-primary/80 text-lg font-medium px-8 py-3 rounded-full mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Book Your Free Evaluation →
        </motion.button>
      </div>
    </div>
  );
};

const pricingModels = [
  {
    title: "Monthly Subscription Plan",
    description: `Pay monthly for a set number of weekly classes (e.g. 2x/week). Ideal for flexibility and short-term budgeting.\n\n✔ Pause or cancel with notice\n✔ Family discounts available\n✔ Includes all core features`,
  },
  {
    title: "One-Time Payment Packages",
    description: `Make a one-time payment for multi-month programs (e.g. 3-Month Tajweed or 6-Month Hifz).\n\n✔ Lower overall cost\n✔ Full schedule security\n✔ Flexible rescheduling during package`,
  },
];

export default Pricing;
