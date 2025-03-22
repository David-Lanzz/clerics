import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { login } from "../auth"
import { scroller } from "react-scroll";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { email, password } = formData;
        if (!email.trim() || !email.includes("@")) {
            toast.error("Valid email is required");
            return false;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            login(formData).then(data => {
                localStorage.setItem('userId', data?.id)
                toast.success("Login successful!")
                navigate(`/mybookings/${data?.id}`);
                setTimeout(() => {
                    scroller.scrollTo('mybookings', { smooth: true, offset: -100 })
                }, 100);
            })
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-secondary px-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-semibold text-primary text-center">Welcome Back</h2>
                <p className="text-gray-600 mt-2 text-center">Login to your account</p>

                <form onSubmit={handleSubmit} className="mt-6">
                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        />
                    </div>

                    {/* Password Input with Eye Toggle */}
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 font-semibold">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary pr-10"
                            />
                            <button
                                type="button"
                                className="absolute top-3 right-3 text-gray-500 hover:text-primary"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiFillEyeInvisible size={22} /> : <AiFillEye size={22} />}
                            </button>
                        </div>
                    </div>

                    {/* Login Button */}
                    <div className="flex justify-between items-center mb-6">
                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
                        >
                            Login
                        </button>
                    </div>

                    {/* Forgot Password & Signup Links */}
                    <div className="text-center">
                        <p className="text-gray-600">
                            <button onClick={() => navigate("/forgot-password")} className="text-primary font-semibold hover:underline">
                                Forgot Password?
                            </button>
                        </p>
                        <p className="mt-3 text-gray-600">
                            Don't have an account?{" "}
                            <button onClick={() => navigate("/signup")} className="text-primary font-semibold hover:underline">
                                Sign Up
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
