import React from "react";
import { motion } from "framer-motion";

const FoundersMessage = () => {
  return (
    <section className="w-full bg-secondary text-primary py-16 px-6 md:px-16 flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Founder’s Message – Ilyas Khan
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="italic text-lg"
        >
          "In the Name of Allah, the Most Gracious, the Most Merciful"
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
          className="mt-4 text-lg"
        >
          Quranique was born from a vision: to make the world’s highest standard of Qur’an teaching available to every Muslim, anywhere in the world. Egypt’s legacy in Qur’anic recitation is unmatched – I created Quranique to bring that excellence to you, with personal attention and authentic tradition.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
          className="mt-6 font-semibold text-xl"
        >
          Ilyas Khan
        </motion.p>
        <p className="text-lg">Founder, Quranique</p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
          className="mt-10 border-t border-primary pt-6"
        >
          <h3 className="text-2xl font-semibold">About the Founder</h3>
          <p className="mt-4 text-lg">
            Ilyas Khan is a globally recognised strategist, senior advisor, and development expert, with decades of experience shaping policy and investment across the Middle East, Africa, and Europe.
          </p>
          <p className="mt-4 text-lg">
            Quranique reflects his commitment to authenticity, excellence, and meaningful impact, combining Egypt’s rich Qur’anic tradition with world-class digital access for learners everywhere.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FoundersMessage;