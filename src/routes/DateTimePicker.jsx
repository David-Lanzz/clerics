import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAdmin, updateAvailability } from "../auth";

// Days of the week
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Generate time slots in 15-minute intervals
const generateTimeSlots = () => {
  const times = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      const hour = String(h).padStart(2, "0");
      const minute = String(m).padStart(2, "0");
      times.push(`${hour}:${minute}`);
    }
  }
  return times;
};

const timeSlots = generateTimeSlots();

const AvailabilityPicker = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const { id } = useParams();

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleTime = (time) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  const handleSubmit = async () => {
    if (selectedDays.length === 0 || selectedTimes.length === 0) {
      alert("Please select at least one day and one time.");
      return;
    }

    try {
      await updateAvailability({
        availability: {
          selectedDays,
          selectedTimes,
        },
        id,
      });
      alert("Availability updated!");
    } catch (error) {
      console.error(error);
      alert("Failed to update availability.");
    }
  };

  const [adminData, setAdminData] = useState(null);

  useEffect(()=> {
    getAdmin(id).then(data=> {
      setAdminData(data?.admin)
      const availability = data?.admin?.availability || { selectedDays: [], selectedTimes: [] }
      setSelectedDays(availability?.selectedDays || [])
      setSelectedTimes(availability?.selectedTimes || [])
    })
  },[])


  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-center">Select Availability</h2>

        {/* Day selection */}
        <div>
          <label className="font-medium">Select Days:</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {weekdays.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`px-3 py-2 rounded-lg border ${
                  selectedDays.includes(day)
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-gray-700 border-gray-300"
                } hover:bg-green-400 hover:text-white transition`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Time selection */}
        <div>
          <label className="font-medium">Select Times:</label>
          <div className="flex flex-wrap gap-2 mt-2 max-h-64 overflow-y-auto">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => toggleTime(time)}
                className={`px-2 py-1 rounded-lg border text-sm ${
                  selectedTimes.includes(time)
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-gray-700 border-gray-300"
                } hover:bg-green-400 hover:text-white transition`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-green-900 text-white py-2 rounded-lg hover:bg-green-800 transition w-full mt-2"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default AvailabilityPicker;
