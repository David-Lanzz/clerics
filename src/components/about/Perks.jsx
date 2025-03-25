import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Perks = () => {
  const cards = [
    {
      title: "Expert Team",
      text: "Our team of experienced teachers has extensive knowledge and training in Islamic studies. We are committed to providing authentic and reliable guidance, ensuring you receive the best possible learning experience.",
      image: "/about/one.jpg",
    },
    {
      title: "Personalized Approach",
      text: "We understand that every learner is unique, which is why we take a personalized approach to every lesson. We’ll work with you to create a learning plan tailored to your specific needs and goals.",
      image: "/about/two.jpg",
    },
    {
      title: "Innovative Learning",
      text: "We use the most effective teaching methods and resources to ensure a meaningful and enriching learning experience, helping you achieve your goals with confidence.",
      image: "/about/middle.jpg",
    },
    {
      title: "Guidance Every Step",
      text: "We’re here to support you throughout your learning journey, providing continuous guidance and encouragement to help you grow in knowledge and faith.",
      image: "/about/three.jpg",
    },
    {
      title: "Commitment to Results",
      text: "We're dedicated to helping you achieve your learning goals. We'll guide you through every step of the journey and ensure you gain valuable knowledge and confidence in your faith.",
      image: "/about/four.jpg",
    },
  ];

  return (
    <div className="w-full flex justify-center px-4 md:px-[4rem]">
      <div className="w-full max-w-[90rem] flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-5xl font-semibold text-center">
          HERE'S WHAT SETS US APART
        </h2>
        <div className="flex flex-col gap-4 max-w-[80rem]">
          {cards.map((card, index) => (
            <PerkCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PerkCard = ({ card, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={`w-full p-8 flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      } gap-4 md:gap-8 items-center`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <img src={card.image} className="flex-grow h-[25rem]" alt={card.title} />
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <h4 className="text-lg md:text-2xl font-semibold">{card.title}</h4>
        <p>{card.text}</p>
      </div>
    </motion.div>
  );
};

export default Perks;
