import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
<<<<<<< HEAD
import { Element } from "react-scroll";
=======
>>>>>>> 9257317298357d3379c4cc3eb1de1180e2e12346

const testimonials = [
  {
    name: "Sarah K.",
    location: "London, UK",
    countryFlag: "🇬🇧",
    content:
      "I’ve been Muslim all my life in the UK, but as a busy professional I never got beyond basic Qur’an reading. Quranique has truly been life-changing for me. In just 6 months, my Egyptian teacher helped me correct my Tajweed and I even memorized three new surahs – something I never thought I could do at 35! The one-on-one attention and the way they tied every lesson to real life made it so motivating. I now start each day by reviewing Qur’an, and it gives me peace and focus. My only regret is not starting sooner. Thank you, Quranique, for unlocking this treasure for me.",
  },
  {
    name: "Michael (Mikael) R.",
    location: "Los Angeles, USA",
    countryFlag: "🇺🇸",
    content:
      "As a recent convert to Islam here in California, I felt overwhelmed trying to learn the Qur’an from scratch. Quranique came to my rescue. They paired me with a kind, patient Ustadh who understood exactly where I was coming from. He not only teaches me how to read Arabic letters and recite, but also shares the beautiful meanings behind verses. I love how modern and organized the platform is – scheduling on the app, lesson reminders, even recordings of my recitation to track progress. Last week I finished reading my very first surah in Arabic! My heart soared.",
  },
  {
    name: "Aliya M.",
    location: "Sydney, Australia",
    countryFlag: "🇦🇺",
    content:
      "We enrolled our 10-year-old son in Quranique from Sydney, and it’s been fantastic. Finding a good local Quran teacher with authentic recitation was tough, but now he meets online with a certified Egyptian Qari three times a week. I occasionally listen in and I’m amazed at how engaged our son is. Despite the time zone difference, Quranique accommodated our schedule easily. The progress is evident: my child’s pronunciation has improved, and he actually looks forward to classes.",
  },
  {
    name: "Yusuf H.",
    location: "Toronto, Canada",
    countryFlag: "🇨🇦",
    content:
      "Quranique gave me the confidence to finally pursue my Ijazah. In Canada, I learned to read Qur’an as a youngster but never dreamed I could reach an advanced level. Under the mentorship of Shaikh Abu Bakr and my instructor, I embarked on the Ijazah program. We went page by page, and slowly I felt my skills sharpen. I just completed my final recitation of 30th Juz. Quranique isn’t just a school, it’s a guiding light. If you have a dream to excel in Qur’an, this is where it comes true.",
  },
];

const Testimonials = () => {
  return (
<<<<<<< HEAD
    <Element name="testimonials" className="w-full bg-gradient-to-br from-green-50 to-white py-20 px-4 md:px-[4rem]">
=======
    <section className="w-full bg-gradient-to-br from-green-50 to-white py-20 px-4 md:px-[4rem]">
>>>>>>> 9257317298357d3379c4cc3eb1de1180e2e12346
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-4"
        >
          Stories of Transformation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center max-w-3xl text-gray-700 text-lg mb-12"
        >
          Hear from students around the world who experienced the Quranique difference —
          diverse journeys, united by a deep connection to the Qur’an.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 w-full">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-gray-100"
            >
              <FaQuoteLeft className="text-green-500 text-2xl mb-4" />
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {t.content}
              </p>
              <div className="flex items-center gap-3">
                <div className="text-2xl">{t.countryFlag}</div>
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-2xl text-center text-gray-700 text-lg"
        >
          These are just a few of the many stories we receive. Whether you’re a beginner,
          a parent, or someone striving for Ijazah – your path begins here.{" "}
          <span className="font-semibold text-green-700">Join Quranique</span> and start
          your transformation today.
        </motion.p>
      </div>
<<<<<<< HEAD
    </Element>
=======
    </section>
>>>>>>> 9257317298357d3379c4cc3eb1de1180e2e12346
  );
};

export default Testimonials;
