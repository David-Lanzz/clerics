import React from 'react';

const WhatWeDo = () => {
    return (
        <div className='w-full flex justify-center p-4 md:p-0'>
            <div className="w-full flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <img src="/wwd.jpg" alt="Why Quranique" className=" shadow-lg w-full h-auto object-cover" />
                </div>
                <div className="w-full max-w-xl md:w-1/2 py-10">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Quranique?</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>1:1 Live Lessons</strong> — No group classes. All attention is on you.</li>
                        <li><strong>Native Egyptian Teachers</strong> — The gold standard in Quranic mastery.</li>
                        <li><strong>All Levels & Ages Welcome</strong> — From absolute beginners to Ijazah seekers.</li>
                        <li><strong>Structured, Goal-Based Learning</strong> — With progress tracking & personal mentorship.</li>
                        <li><strong>Flexible Scheduling</strong> — Lessons that fit your lifestyle and time zone.</li>
                        <li><strong>Optional Ijazah Certification</strong> — With rigorous, guided preparation.</li>
                        <li><strong>Rooted in Legacy</strong> — Proudly affiliated with Masjid Amr ibn al-As, Cairo.</li>
                    </ul>

                    <div className="mt-6 text-gray-800">
                        <p className="mb-4">
                            <strong>Join the Revival. Learn from the Source.</strong>
                        </p>
                        <p className="mb-4">
                            Quranique is about reading the Quran but also about living it — beautifully, correctly, and with a connection that transforms.
                        </p>
                        <p className="mb-4">
                            Begin your journey with teachers whose lives revolve around the Quran and whose only goal is to ignite that light in you.
                        </p>
                        <p>
                            <strong>Start your personalised Quran learning journey today.</strong>
                        </p>
                        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition duration-300">
                            Book Your Free Trial Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
