import React, { useState } from "react";
import { Element } from "react-scroll";

export default function ContactForm() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const [responseMessage, setResponseMessage] = useState("Send Message");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseMessage("Loading...");

        try {
            const response = await fetch("https://formspree.io/f/movwzypp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setResponseMessage("Form Submitted Successfully");
                setForm({ fullName: "", email: "", phone: "" });
            } else {
                setResponseMessage("Something went wrong!");
            }
        } catch (error) {
            setResponseMessage("Something went wrong!");
        } finally {
            setTimeout(() => setResponseMessage("Send Message"), 2000);
        }
    };

    return (
        <Element name="contact" className="w-full max-w-3xl mx-auto my-16 p-8 bg-white/90 rounded-3xl shadow-2xl border border-green-100">
            <h2 className="text-3xl font-semibold text-center text-emerald-800 mb-8 tracking-wide">
                Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-emerald-900 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-emerald-900"
                        placeholder="e.g. Ahmed Al-Karim"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-900 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-emerald-900"
                        placeholder="e.g. ahmed@example.com"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-emerald-900 mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-emerald-900"
                        placeholder="+1 234 567 8901"
                    />
                </div>

                {/* Buttons */}
                <div className="flex flex-col w-full gap-4">
                    <button
                        type="submit"
                        className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-2xl hover:bg-emerald-700 transition duration-300 shadow-md"
                    >
                        {responseMessage}
                    </button>
                    <a
                        href="https://wa.me/201113455676"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center py-3 bg-emerald-600 text-white font-semibold rounded-2xl hover:bg-emerald-700 transition duration-300 shadow-md"
                    >
                        Or Contact via WhatsApp
                    </a>
                </div>
            </form>
        </Element>
    );
}
