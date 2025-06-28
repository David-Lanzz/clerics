import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyQuranique = () => {
  return (
    <div className="w-full flex justify-center bg-greenBg py-20 px-6 text-white">
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-10">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Quranique?
        </motion.h2>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
          {benefits.map((item, index) => (
            <BenefitCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Closing Text */}
        <motion.div
          className="text-lg md:text-xl text-gray-300 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mb-4 font-light">
            Quranique is about reading the Quran but also about living it — beautifully,
            correctly, and with a connection that transforms.
          </p>
          <p className="font-light">
            Begin your journey with teachers whose lives revolve around the Quran and
            whose only goal is to ignite that light in you.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.a
          href="#"
          className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/80 rounded-full mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Book Your Free Trial →
        </motion.a>
      </div>
    </div>
  );
};

const BenefitCard = ({ item, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="bg-greenCardBg p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
      <p className="text-gray-300 mt-2">{item.description}</p>
    </motion.div>
  );
};

const benefits = [
  {
    title: "1:1 Live Lessons",
    description: "No group classes. All attention is on you.",
  },
  {
    title: "Native Egyptian Teachers",
    description: "The gold standard in Quranic mastery.",
  },
  {
    title: "All Levels & Ages Welcome",
    description: "From absolute beginners to Ijazah seekers.",
  },
  {
    title: "Structured, Goal-Based Learning",
    description: "With progress tracking & personal mentorship.",
  },
  {
    title: "Flexible Scheduling",
    description: "Lessons that fit your lifestyle and time zone.",
  },
  {
    title: "Optional Ijazah Certification",
    description: "With rigorous, guided preparation.",
  },
  {
    title: "Rooted in Legacy",
    description: "Proudly affiliated with Masjid Amr ibn al-As, Cairo.",
  },
];

export default WhyQuranique;
