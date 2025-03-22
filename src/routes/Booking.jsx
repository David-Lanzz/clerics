import React, { useEffect, useState } from "react";
import { createBooking, getAllClerics } from "../services";
import { motion } from "framer-motion";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Element } from "react-scroll";
import { getUser } from "../auth";

const Booking = () => {
    const [clerics, setClerics] = useState([]);
    const [searchParams] = useSearchParams()
    const { userId } = useParams()
    const navigate = useNavigate()
    if (!userId || userId === 'null') {
        navigate('/login')
    }


    const id = searchParams.get('id')
    const email = searchParams.get('email')

    const [formData, setFormData] = useState({
        email: email || '',
        message: ``,
        date: ``,
        priceSummary: []
    });

    const [selectedCleric, setSelectedCleric] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleFormData = (key, value) => {
        setFormData(prev => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    useEffect(() => {
        getAllClerics().then((data) => {
            setClerics(data?.clerics || [])
            setTimeout(() => {
                if (id) {
                    const cleric = data?.clerics.find(cleric => cleric?.id === id)
                    setSelectedCleric(cleric)
                }
            }, 1000);
        });

        getUser(userId).then(data => {
            setFormData({ ...formData, email: data?.user?.email })
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            createBooking({ ...formData, clericId: selectedCleric?.id, message: [{ role: 'user', message: formData?.message }], userId })
        }
    };

    const handleValidation = () => {
        console.log(formData)
        if (!formData.email) {
            toast.error("Enter your Email");
            return false;
        } else if (!selectedCleric.id) {
            toast.error("Select a cleric");
            return false;
        } else if (!formData.priceSummary?.length) {
            toast.error("Please select a price summary");
            return false;
        } else if (!formData.date) {
            toast.error("Schedule a date we can work with");
            return false;
        } else if (!formData.message) {
            toast.error("Please give us a brief description");
            return false;
        }

        toast.success('Validation success')
        return true;
    };


    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center px-6 md:px-[4rem] mt-[7rem]"
        >
            <Element name="booking" className="w-full max-w-[40rem] bg-white shadow-xl rounded-2xl p-4 py-6 md:p-10 flex flex-col items-center">
                <h3 className="text-2xl md:text-4xl font-semibold text-gray-800">BOOK A SESSION</h3>

                <form onSubmit={handleSubmit} className="w-full overflow-hidden mt-6 flex flex-col gap-4">
                    {/* Email Input */}
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            readOnly
                            onChange={(e) => handleFormData('email', e.target.value)}
                            className="w-full p-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Custom Cleric Dropdown */}
                    <div className="relative">
                        <label className="block text-gray-700 font-medium">Select Cleric</label>
                        <div
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full p-3 border border-secondary rounded-lg cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            {selectedCleric?.name || "Choose a cleric..."}
                        </div>
                        {/* Dropdown List */}
                        {isDropdownOpen && (
                            <motion.div
                                className="absolute w-full bg-white border z-[2] border-secondary rounded-lg mt-1 shadow-lg"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {clerics.map((cleric) => (
                                    <div
                                        key={cleric.id}
                                        onClick={() => {
                                            setSelectedCleric(cleric);
                                            setIsDropdownOpen(false); // Close dropdown after selection
                                        }}
                                        className="p-3 hover:bg-gray-200 cursor-pointer"
                                    >
                                        {cleric.name}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    <div className={`flex flex-col relative ${selectedCleric?.id ? 'left-0' : 'left-[-200vw]'} slowMo gap-4 border border-secondary p-4`}>
                        {selectedCleric?.priceList?.map((item, index) => (
                            <span key={index} className="w-full flex pb-2 justify-between border-b border-secondary">
                                <p>{item.key}</p>
                                <span className="flex gap-2 items-center">
                                    <p>£{item.value}</p>
                                    <input
                                        type="checkbox"
                                        checked={formData?.priceSummary?.some(sub => sub.key === item.key)} // Ensure checkbox reflects state
                                        onChange={() => {
                                            setFormData(prev => {
                                                const priceSummary = prev.priceSummary || [];
                                                return {
                                                    ...prev,
                                                    priceSummary: priceSummary.some(sub => sub.key === item.key)
                                                        ? priceSummary.filter(cleric => cleric.key !== item.key) // Remove if exists
                                                        : [...priceSummary, item] // Add if not exists
                                                };
                                            });
                                        }}
                                    />
                                </span>
                            </span>
                        ))}
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium">Select Preferred Cleric Date</label>
                        <input type="date" onChange={(e) => handleFormData('date', e.target.value)} className="w-full p-3 border border-secondary rounded-lg focus:outline-none" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">We'd love a brief description of the cleric you want</label>
                        <textarea onChange={(e) => handleFormData('message', e.target.value)} className="w-full p-3 border border-secondary rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary h-[15rem] resize-none" placeholder="Enter a brief description of what you want."></textarea>
                    </div>
                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full mt-4 p-3 bg-primary text-white font-medium text-lg rounded-lg shadow-lg hover:bg-primary-dark transition"
                    >
                        Book Now
                    </motion.button>
                </form>
            </Element>
        </motion.div>
    );
};

export default Booking;
