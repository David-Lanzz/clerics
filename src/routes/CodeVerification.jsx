import React, { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { verify } from "../auth";

const CodeVerification = ({ }) => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const { email } = useParams()
    const navigate = useNavigate()

    if (!email) {
        toast.error('Please enter your email to use this page')
        navigate('/signup')
    }

    const handleChange = (index, value) => {
        if (!/^\d?$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Move to the next input field
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        if (code.some((digit) => digit === "")) {
            toast.error("Please enter the full 6-digit code");
            return;
        }
        const enteredCode = code.join("");
        verify({ email, code: enteredCode }).then(data => {
            localStorage.setItem('userId', data?.id)
            toast.success("Login successful!")
            navigate(`/mybookings/${data?.id}`);
            setTimeout(() => {
                scroller.scrollTo('mybookings', { smooth: true, offset: -100 })
            }, 100);
        })
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-goldCardBg p-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
                <h2 className="text-3xl font-semibold text-primary">Enter Verification Code</h2>
                <p className="text-gray-600 mt-2">We sent a code to your email. Please enter it below.</p>

                <div className="flex justify-center gap-3 mt-6">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            ref={(el) => (inputRefs.current[index] = el)}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-12 h-12 border-2 border-primary rounded-full text-xl font-semibold text-center focus:outline-none focus:border-green-500 transition-all"
                        />
                    ))}
                </div>

                <button
                    onClick={handleSubmit}
                    className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 w-full"
                >
                    Verify Code
                </button>
            </div>
        </div>
    );
};

export default CodeVerification;
