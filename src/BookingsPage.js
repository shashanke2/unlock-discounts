import React, { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import FeedbackForm from "./FeedbackForm";
import HomeIcon from "./assets/home.png";
import BookingsIcon from "./assets/bookings.png";
import AccountIcon from "./assets/account.png";
import GreentickIcon from "./assets/greentick.png";
import { useNavigate } from "react-router-dom";

const bookingsData = [
  { id: 1, service: "Haircut", date: "2025-10-05", status: "COMPLETED" },
  { id: 2, service: "Massage", date: "2025-10-04", status: "COMPLETED" },
];

const BookingsPage = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const navigate = useNavigate();

  const handleTapToRate = (booking) => {
    setSelectedBooking(booking);
    setShowFeedback(true);
  };

  const handleFeedbackSubmit = ({ review, stars }) => {
    console.log("Feedback for", selectedBooking, ":", review, stars);
  };

  const handleBack = () => {
    console.log("Back clicked");
    navigate("/landing-page")
  };

  return (
    <div className="min-h-screen bg-white px-6 py-4 flex flex-col relative">
      {/* Header */}
      <div className="flex items-center mb-3">
        <button onClick={handleBack} className="text-black-400 mr-5">
          <ArrowLeft size={28} />
        </button>
        <h2 className="flex-1 text-left font-medium text-[20px] text-black-600">
          Bookings
        </h2>
      </div>
      <div className="-mx-6 mb-5">
        <hr className="border-t border-gray-300 shadow-lg" />
      </div>

      {/* Booking Cards */}
      {bookingsData.map((booking) => (
        <div 
          key={booking.id} 
          className="relative border border-gray-300 rounded-xl p-4 mb-4 shadow-sm flex flex-col"
        >
          {/* Status at top-right */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
            <img
              src={GreentickIcon}
              alt="Greentick"
              className="w-4 h-4 cursor-pointer"
            />
            <span>{booking.status}
            </span>
          </div>

          {/* Service Info */}
          <p className="text-black-600 font-medium">{booking.service}</p>
          <p className="text-black-600 text-sm mt-1">{booking.date}</p>

          {/* Tap to Rate at bottom-right */}
          <button
            onClick={() => handleTapToRate(booking)}
            className="absolute bottom-3 right-3 text-grey-200 text-sm font-medium"
          >
            Tap to rate
          </button>
        </div>
      ))}

      {/* Feedback Modal */}
      {showFeedback && (
        <FeedbackForm
          onClose={() => setShowFeedback(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    {/* Bottom Navigation */}
    <div className="bg-white flex justify-around items-center p-3 shadow-inner fixed bottom-0 left-0 w-full">
      <div 
        className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition-colors duration-200 cursor-pointer"
        onClick={() => navigate("/landing-page")}
        >
        <img src={HomeIcon} alt="Home" className="w-6 h-6" />
        <span className="text-xs font-medium mt-1">Home</span>
      </div>
      <div
        className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition-colors duration-200 cursor-pointer"
        onClick={() => navigate("/bookings")}
      >
        <img src={BookingsIcon} alt="Bookings" className="w-6 h-6" />
        <span className="text-xs font-medium mt-1">Bookings</span>
      </div>
      <div 
        className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition-colors duration-200 cursor-pointer"
        onClick={() => navigate("/edit-profile")}
        >
        <img src={AccountIcon} alt="Account" className="w-6 h-6" />
        <span className="text-xs font-medium mt-1">Account</span>
      </div>
    </div>
    </div>
  );
};

export default BookingsPage;
