import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Element } from "react-scroll";
import { getAdmin, getUser } from "../auth";
import { createBooking } from "../services";

const Booking = () => {
  const [availableDays, setAvailableDays] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const { userId } = useParams();
  const navigate = useNavigate();

  if (!userId || userId === "null") {
    navigate("/login");
  }

  const [formData, setFormData] = useState({
    email: "",
    message: "",
    date: "",
  });

  // Fetch admin availability
  useEffect(() => {
    getAdmin().then((data) => {
      const availability = data?.admin?.availability || {
        selectedDays: [],
        selectedTimes: [],
      };
      setAvailableDays(availability.selectedDays);
      setAvailableTimes(availability.selectedTimes);
    });

    // Fetch user email
    getUser(userId).then((data) => {
      setFormData((prev) => ({
        ...prev,
        email: data?.user?.email || "",
      }));
    });
  }, [userId]);

  const handleFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      toast.error("Enter your Email");
      return;
    }
    if (!selectedDay || !selectedTime) {
      toast.error("Please choose a day and time");
      return;
    }
    if (!formData.message) {
      toast.error("Please give us a brief description");
      return;
    }

    const scheduledDate = `${selectedDay} at ${selectedTime}`;
    createBooking({
      ...formData,
      date: scheduledDate,
      userId,
      message: [{ role: "user", message: formData.message }],
    });
    navigate("/")
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center px-6 md:px-[4rem] mt-[7rem]"
    >
      <Element
        name="booking"
        className="w-full max-w-[40rem] bg-white shadow-xl rounded-2xl p-4 py-6 md:p-10 flex flex-col items-center"
      >
        <h3 className="text-2xl md:text-4xl font-semibold text-gray-800">
          BOOK A SESSION
        </h3>

        <form
          onSubmit={handleSubmit}
          className="w-full mt-6 flex flex-col gap-4"
        >
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={formData.email}
              readOnly
              className="w-full p-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Available Days */}
          <div>
            <label className="block text-gray-700 font-medium">
              Select Available Day
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {availableDays.length ? (
                availableDays.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedDay === day
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {day}
                  </button>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No available days found.</p>
              )}
            </div>
          </div>

          {/* Available Times */}
          <div>
            <label className="block text-gray-700 font-medium">
              Select Available Time
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {availableTimes.length ? (
                availableTimes.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedTime === time
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {time}
                  </button>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No available times found.</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium">
              Describe what you want from us
            </label>
            <textarea
              onChange={(e) => handleFormData("message", e.target.value)}
              className="w-full p-3 border border-secondary rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary h-[10rem] resize-none"
              placeholder="Enter a brief description of what you want."
            />
          </div>

          {/* Submit */}
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
