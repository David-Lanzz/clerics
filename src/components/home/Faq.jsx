import React from 'react';
import { motion } from 'framer-motion';

const FAQs = () => {
  return (
    <div className="w-full flex justify-center bg-secondary py-16 px-6 text-primary">
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <motion.h2 
          className="text-3xl md:text-5xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          FAQs
        </motion.h2>

        {/* FAQ List */}
        <div className="w-full text-left">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index} 
              className="border-b border-secondary/70 py-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary">Q: {faq.question}</h3>
              <p className="text-primary mt-2">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "Do I need to know Arabic?",
    answer: "No – Quranique is tailored for non-Arabic speakers at all levels. We teach from the very basics, guiding you in fluent English."
  },
  {
    question: "Are the lessons live and one-to-one?",
    answer: "Yes – every lesson is live, personal, and tailored. No group classes, no recordings – just you and your expert teacher."
  },
  {
    question: "Can I obtain an Ijazah?",
    answer: "Yes – we offer Ijazah in Recitation and Hifz, certified by senior scholars with authentic Sanad."
  },
  {
    question: "What levels do you teach?",
    answer: "All levels – from complete beginners to advanced Ijazah students. We tailor everything to you."
  },
  {
    question: "Lesson timings?",
    answer: "Fully flexible – we serve students in all time zones. You choose the best times for you."
  }
];

export default FAQs;
