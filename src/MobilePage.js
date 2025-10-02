import React, { useState } from "react";

export default function MobilePage() {
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSkip = () => {
    console.log("Skipped mobile page");
  };

  const handleGetCode = () => {
    if (!mobile.trim()) {
      setError("Mobile number is required");
    } else if (!/^\d{10}$/.test(mobile.trim())) {
      setError("Enter a valid 10-digit mobile number");
    } else {
      setError("");
      console.log("Verification code sent to:", countryCode + mobile);
      alert(`OTP sent to ${countryCode} ${mobile}`);
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

    <p className="text-black-600 font-bold mt-4 text-left"> Login or Sign up to continue </p>

    {/* Inputs */}
    <div className="flex gap-2 mt-2">
      <input
        type="tel"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>

    <p className="text-black-600 mt-4 text-left text-sm"> We will send you the OTP to confirm the number </p>

    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>

      {/* Get verification code button */}
      <div className="mb-6">
        <button
          onClick={handleGetCode}
          className="w-full bg-orange-400 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-orange-600"
        >
          Get Verification Code
        </button>
      </div>
    </div>
  );
}
