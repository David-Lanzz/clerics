
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function SpecializedCourses() {
    const courses = [
        "Classical (Quranile) Arabic",
        "Modern Standard Arabic",
        "Colloquial Arabic",
        "Business Arabic",
        "Arabic for Children",
    ];

    const userId = useMemo(() => localStorage.getItem('userId'), []);
    const navigate = useNavigate()

    return (
        <div className="w-full bg-gradient-to-b from-emerald-50 to-white py-20 px-6 flex flex-col items-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-emerald-800 mb-10"
            >
                Specialized Courses
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {courses.map((course, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15, duration: 0.6 }}
                    >
                        <div className="rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white">
                            <div className="p-6 text-center text-lg font-medium text-gray-700">
                                {course}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mt-14"
            >
                <button className="standardBtn" onClick={() => {
                    userId ? navigate(`/booking/${userId}`) :
                        navigate('/login')
                }}>
                    Get Free 1hr Trial Lesson Now
                </button>
            </motion.div>
        </div>
    );
}
