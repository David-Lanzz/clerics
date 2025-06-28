import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signup } from '../auth';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordVerification: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { username, email, password, passwordVerification } = formData;

        if (!username.trim()) {
            toast.error('Username is required');
            return false;
        }
        if (!email.trim() || !email.includes('@')) {
            toast.error('Valid email is required');
            return false;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return false;
        }
        if (password !== passwordVerification) {
            toast.error('Passwords do not match');
            return false;
        }

        return true; // Returns true only if all checks pass
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        signup(formData).then(data => {
            console.log(data)
            navigate(`/verify/${data?.userEmail}`);
        })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-goldCardBg p-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-primary text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="password"
                        name="passwordVerification"
                        placeholder="Confirm Password"
                        value={formData.passwordVerification}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                    />
                    <button
                        type="submit"
                        className="w-full bg-primary text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <span className="text-primary cursor-pointer" onClick={() => navigate('/login')}>Log in</span>
                </p>
            </div>
        </div>
    );
};

export default Signup;