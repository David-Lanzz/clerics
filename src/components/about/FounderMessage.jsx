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
          Director’s Message – Shaikh Abu Bakr Rashwan
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="italic text-lg"
        >
          As-salāmu ‘alaykum wa raḥmatullāh! Praise be to Allah who has made the Qur’an a light for mankind. It is my honour to welcome you to Quranique. My name is Shaikh Abu Bakr Rashwan, and as the Founder and Director of Quranique, I carry with me over 20 years of Qur’anic teaching experience from Cairo. Having graduated from Al-Azhar and been granted multiple Ijazahs in recitation, I started Quranique with a simple dream: to share Egypt’s blessed Qur’anic legacy with learners across the world.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
          className="mt-4 text-lg"
        >
         Growing up in Egypt, a land where the Qur’an’s melody fills the streets, I developed a deep love for recitation at a young age. I studied under illustrious teachers who traced their knowledge back to the Prophet ﷺ. Now, through Quranique, I wish to extend that chain to you. Our academy is built on sincerity, excellence, and personalization. We treat each student as part of our family, taking care to nurture your progress step by step – just as my own teachers did with me.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
          className="mt-6 font-semibold text-xl"
        >
          Shaikh Abu Bakr Rashwan
        </motion.p>
        <p className="text-lg">Director, Quranique</p>
        
        {/* <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
          className="mt-10 border-t border-primary pt-6"
        >
          <h3 className="text-2xl font-semibold">About the Director</h3>
          <p className="mt-4 text-lg">
            Ilyas Khan is a globally recognised strategist, senior advisor, and development expert, with decades of experience shaping policy and investment across the Middle East, Africa, and Europe.
          </p>
          <p className="mt-4 text-lg">
            Quranique reflects his commitment to authenticity, excellence, and meaningful impact, combining Egypt’s rich Qur’anic tradition with world-class digital access for learners everywhere.
          </p>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default FoundersMessage;