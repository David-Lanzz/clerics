// components/FaqSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who are the Quranique instructors, and what are their qualifications?",
    answer: {
      type: "list",
      content: [
        "Most are graduates of Al-Azhar University or other respected Islamic institutions.",
        "All have memorized the entire Qur’an.",
        "Many hold advanced certifications such as Ijazah (some in multiple Qirā’āt).",
        "All instructors pass a rigorous screening process including:",
        [
          "Live demo lesson",
          "Communication assessment",
          "Tajweed evaluation"
        ],
        "Fluent in English and trained to teach with clarity, patience, and kindness."
      ]
    }
  },
  {
    question: "I don’t know any Arabic yet. Can I still join?",
    answer: {
      type: "list",
      content: [
        "Absolutely! No Arabic background is needed.",
        "Our Beginner Program covers:",
        [
          "Arabic alphabet",
          "Letter combinations",
          "Makharij (pronunciation)",
          "Step-by-step reading practice"
        ],
        "Instructors use visual aids, pronunciation drills, and interactive lessons.",
        "Most students start with zero Arabic and progress quickly."
      ]
    }
  },
  {
    question: "How are the online classes conducted? What technology do I need?",
    answer: {
      type: "list",
      content: [
        "Classes are conducted via Quranique’s web platform or Zoom.",
        "You’ll need:",
        [
          "Device: Computer, tablet, or smartphone (larger screen preferred)",
          "Stable internet connection (broadband or 4G/5G)",
          "Microphone and speakers/headphones",
          "Web browser (no installation needed)",
          "Webcam (optional but recommended)"
        ],
        "We help test your setup before your first class if needed."
      ]
    }
  },
  {
    question: "Are the classes one-on-one or group based? Can my kids and I learn together?",
    answer: {
      type: "list",
      content: [
        "Default: All classes are one-on-one for personalized learning.",
        "Optional: Semi-private groups (2–3 students) for siblings, spouses, or friends.",
        "We offer family-friendly scheduling and child-specialist instructors.",
        "Group learners can also attend bonus webinars and workshops."
      ]
    }
  },
  {
    question: "What if I need to miss or reschedule a class?",
    answer: {
      type: "list",
      content: [
        "We offer flexible rescheduling:",
        [
          "Notify us at least 6–12 hours in advance via portal or teacher.",
          "Emergencies? Let us know as soon as possible — we’ll accommodate.",
          "No penalty for occasional changes.",
          "Make-up classes can be arranged with your instructor."
        ],
        "If a teacher misses a class, we arrange a free make-up promptly."
      ]
    }
  },
  {
    question: "How long will it take me to learn to read Qur’an fluently or to memorize [X]?",
    answer: {
      type: "list",
      content: [
        "Depends on your goals and consistency. Common timelines:",
        [
          "**Reading with Tajweed**",
          "- 3–6 months: Basic reading (slow with support)",
          "- ~12 months: Fluent reading with confident Tajweed",
          "**Memorization (Hifz)**",
          "- 1 Juz: ~2–3 months with daily practice",
          "- Full Qur’an: ~2.5 to 4+ years",
          "**Tajweed Mastery**",
          "- 3–6 months for rules, 1–2 years for mastery in recitation"
        ],
        "We support steady, consistent progress at your pace."
      ]
    }
  },
  {
    question: "What if I find the course not meeting my needs? Do you have a refund or satisfaction policy?",
    answer: {
      type: "list",
      content: [
        "Yes, we offer a satisfaction guarantee:",
        [
          "Free evaluation lesson",
          "Unhappy in first 2 weeks? Switch instructors or request refund for unused sessions",
          "Cancel monthly plans anytime before next billing",
          "Long-term plans: Refunds calculated fairly based on usage"
        ],
        "We’ll always try to fix issues first – your comfort comes first."
      ]
    }
  },
  {
    question: "Do you offer any certificates or recognition for completing courses (if not aiming for Ijazah)?",
    answer: {
      type: "list",
      content: [
        "Yes! We issue certificates for key achievements:",
        [
          "Beginner: Reading with Tajweed",
          "Intermediate: Fluency and Tajweed proficiency",
          "Hifz: Surah or Juz memorization milestones",
          "Advanced: Tajweed mastery or review levels"
        ],
        "All certificates are digitally signed and sharable."
      ]
    }
  }
];

const renderAnswer = (answer) => {
  if (typeof answer === "string") return <p>{answer}</p>;

  const renderList = (items) =>
    items.map((item, i) =>
      Array.isArray(item) ? (
        <ul key={i} className="ml-6 list-disc text-sm text-gray-700 space-y-1">
          {item.map((sub, j) => (
            <li key={j}>{sub}</li>
          ))}
        </ul>
      ) : (
        <p key={i} className="mt-2 text-sm text-gray-700">
          {item}
        </p>
      )
    );

  if (answer.type === "list") {
    return <div className="space-y-2">{renderList(answer.content)}</div>;
  }

  return <p>{answer.content}</p>;
};

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      onClick={onClick}
      className="w-full text-left flex justify-between items-center"
    >
      <span className="text-lg font-medium text-gray-800">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-gray-600" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-600" />
      )}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mt-3"
        >
          {renderAnswer(answer)}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
