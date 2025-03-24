import React from 'react';
import { motion } from 'framer-motion';

const Programmes = () => {
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
          Our Programmes
        </motion.h2>

        {/* Programme List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {programmes.map((programme, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{programme.title}</h3>
              <p className="text-gray-300">{programme.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.button 
          className="px-6 py-3 text-lg font-semibold bg-primary hover:bg-primary/80 rounded-full mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Start Free Trial →
        </motion.button>
      </div>
    </div>
  );
};

const programmes = [
  {
    title: 'Beginner Programme',
    description: 'Arabic alphabet, basic pronunciation, and foundational Tajweed.',
  },
  {
    title: 'Intermediate Programme',
    description: 'Fluency building, advanced Tajweed, and short Surah memorisation.',
  },
  {
    title: 'Advanced Programme',
    description: 'Full memorisation (Hifz), Maqamat mastery, and Ijazah preparation.',
  },
  {
    title: 'Specialist Modules',
    description: 'Tajweed refreshers, Qira’at variations, and focused recitation skills.',
  }
];

export default Programmes;