import React, { useState } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    navigate("/payment-proof");
  };

  const handleApplyCoupon = () => {
    if (coupon.trim() === "") {
      setError("Please enter a coupon code");
      return;
    }
    console.log("Coupon applied:", coupon);
    navigate("/popupmsg");
  };

  return (
    <div className="flex flex-col items-center px-6 py-8 bg-gray-50 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 text-center text-black">
        <span className="text-black">Subscribe to our</span>
        <span className="text-orange-400"> Plan</span>
      </h1>

      {/* Basic Plan Card */}
      <div className="relative bg-orange-100 rounded-2xl shadow-md p-6 w-full mb-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-400 rounded-full blur-2xl opacity-70 transform translate-x-8 -translate-y-8"></div>

        <h2 className="text-xl font-bold text-black mb-2 relative z-10">Basic</h2>

        <div className="flex items-baseline mb-2 relative z-10">
          <span className="text-4xl font-bold text-black">₹199</span>
          <span className="text-sm text-black ml-1">/month</span>
        </div>

        <p className="text-black font-medium mb-3 relative z-10">Choose Basic</p>

        <ul className="space-y-2 text-sm text-black mb-4 relative z-10">
          <li className="flex items-center">
            <Check className="w-4 h-4 mr-2" />
            Up to 10–15 leads per month
          </li>
          <li className="flex items-center">
            <Check className="w-4 h-4 mr-2" />
            Basic profile visibility
          </li>
          <li className="flex items-center">
            <Check className="w-4 h-4 mr-2" />
            Standard support
          </li>
        </ul>

        <button
          onClick={handleSubscribe}
          className="relative z-10 w-full border-2 border-orange-300 text-xl text-black rounded-full px-4 py-3 font-semibold hover:bg-orange-400 hover:text-white transition duration-200"
        >
          Subscribe
        </button>
      </div>

      {/* Coupon Code Card */}
      <div className="relative bg-orange-100 rounded-2xl shadow-md mt-4 p-6 w-full overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-400 rounded-full blur-2xl opacity-70 transform translate-x-8 -translate-y-8"></div>

        <h2 className="text-xl font-semibold text-center text-black mt-4 mb-4 relative z-10">
          Have a coupon code?
        </h2>

        <input
          type="text"
          placeholder="Enter your coupon code"
          value={coupon}
          onChange={(e) => {
            setCoupon(e.target.value);
            setError("");
          }}
          className="relative z-10 bg-gray-100 rounded-lg px-4 py-3 mt-3 mb-8 text-black w-full focus:outline-none hover:border-2 hover:border-gray-200"
        />
        {error && (
          <p className="text-red-600 text-sm mb-2 font-medium relative z-10">
            {error}
          </p>
        )}
        <button
          onClick={handleApplyCoupon}
          className="relative z-10 mb-4 mt-4 w-full border-2 border-orange-300 text-xl text-black rounded-full py-3 font-semibold hover:bg-orange-400 hover:text-white transition duration-200"
        >
          Apply code
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
