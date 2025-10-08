import React, { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import FeedbackForm from "./FeedbackForm";

const bookingsData = [
  { id: 1, service: "Haircut", date: "2025-10-05", status: "COMPLETED" },
  { id: 2, service: "Massage", date: "2025-10-04", status: "COMPLETED" },
];

const BookingsPage = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleTapToRate = (booking) => {
    setSelectedBooking(booking);
    setShowFeedback(true);
  };

  const handleFeedbackSubmit = ({ review, stars }) => {
    console.log("Feedback for", selectedBooking, ":", review, stars);
  };

  const handleBack = () => {
    console.log("Back clicked");
    // Add actual navigation if using react-router
  };

  return (
    <div className="min-h-screen bg-white px-6 py-4">

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
            <Check size={14} />
            <span>{booking.status}</span>
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
    </div>
  );
};

export default BookingsPage;
