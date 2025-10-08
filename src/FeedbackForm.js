import React, { useState } from "react";

const FeedbackForm = ({ onClose, onSubmit }) => {
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);

  const handleSubmit = () => {
    onSubmit({ review, stars });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 mx-4">
        <h3 className="text-[20px] font-medium text-black-600 mb-4">Feedback</h3>
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
        />
        <div className="flex items-center mb-6 ml-4">
          <span className="mr-5 text-black font-medium">Rating</span>
          {[1,2,3,4,5].map((star) => (
            <span
              key={star}
              className={`text-3xl cursor-pointer ${star <= stars ? "text-orange-400" : "text-gray-300"}`}
              onClick={() => setStars(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-orange-400 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-orange-600"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default FeedbackForm;
