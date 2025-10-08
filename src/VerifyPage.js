import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function OtpVerificationPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const mobile = location.state?.mobile || "";

  const handleContinue = () => {
    if (!otp.trim()) {
      setError("OTP is required");
    } else if (!/^\d{4,6}$/.test(otp.trim())) {
      setError("Enter a valid OTP");
    } else {
      setError("");
      console.log("OTP entered:", otp);
      alert("OTP verified successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-6 py-4">
      <div className="flex-1 flex flex-col justify-center">
        {/* App Name */}
        <div className="flex flex-col items-center mt-2 mb-10">
          <h1 className="text-5xl font-bold text-center">
            <span className="text-black">Unlock</span>
            <span className="text-orange-400">Discounts</span>
          </h1>
        </div>

        <p className="text-black-600 font-bold mt-4 text-left">Verify to continue</p>
        {mobile && (
          <p className="text-green-600 font-bold text-sm mt-2 flex items-center">
            <span className="mr-1">✔️</span> OTP was sent to {mobile}
          </p>
        )}

        <input
          type="text"
          placeholder="Enter the OTP pin"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <div className="mb-6">
        <button
          onClick={handleContinue}
          className="w-full bg-orange-400 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-orange-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
