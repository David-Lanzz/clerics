import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IjazahProgramme = () => {
  return (
    <div className="w-full flex justify-center bg-secondary py-16 px-6 text-primary">
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ijazah Programme – Certified Qur’anic Mastery
        </motion.h2>

        {/* Introduction */}
        <motion.p
          className="text-lg text-primary max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Earn Your Ijazah and join the unbroken chain of Qur’anic transmission.
          An Ijazah is a sacred certification, linking you through a Sanad (chain of narration) back to the Prophet Muhammad ﷺ.
        </motion.p>

        {/* Programme Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
          {programmeDetails.map((detail, index) => (
            <IjazahDetail key={index} detail={detail} index={index} />
          ))}
        </div>

        {/* Ijazah Journey Steps */}
        <motion.div
          className="w-full max-w-3xl bg-secondary/80 p-6 rounded-lg shadow-lg text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Your Ijazah Journey</h3>
          <ul className="list-decimal list-inside text-primary space-y-2">
            {journeySteps.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ul>
        </motion.div>

        {/* Contact & CTA */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-primary">📧 info@quranique.com | 📱 +20 123 456 7890</p>
          <motion.button
            className="px-6 py-3 text-lg font-semibold bg-secondary hover:bg-secondary/80 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Start Free Trial →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

const IjazahDetail = ({ detail, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="bg-secondary/80 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-2">{detail.title}</h3>
      <p className="text-primary">{detail.description}</p>
    </motion.div>
  );
};

const programmeDetails = [
  { title: "Recitation (Tilawah)", description: "Master the art of Qur’anic recitation with precision and Tajweed." },
  { title: "Memorisation (Hifz)", description: "Commit the entire Qur’an to memory with expert guidance." },
  { title: "Specific Qira’at (on request)", description: "Specialised training in various Qira’at based on request." },
  { title: "Why Quranique?", description: "Certified Egyptian scholars, authentic Sanad, personalised mentorship, and global accessibility." },
];

const journeySteps = [
  "Assessment",
  "Customised Plan",
  "Full Recitation",
  "Final Review",
  "Signed Ijazah with Sanad",
];

export default IjazahProgramme;
