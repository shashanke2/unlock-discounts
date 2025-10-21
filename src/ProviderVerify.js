import React, { useState } from "react";
import GreentickIcon from "./assets/greentick.png";
import OtpSuccessImg from "./assets/otpSuccessful.png";
import { useNavigate } from "react-router-dom";

export default function OtpVerificationPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!otp.trim()) {
      setError("OTP is required");
    } else if (!/^\d{4,6}$/.test(otp.trim())) {
      setError("Enter a valid OTP");
    } else {
      setError("");
      console.log("OTP entered:", otp);

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        navigate("/subscribe");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-6 py-4 relative">
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-black-600 font-bold mt-4 text-left">
          Verify to continue
        </p>

        <input
          type="tel"
          maxLength={6}
          placeholder="Enter the OTP pin"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))}
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

      {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="relative bg-orange-100 rounded-2xl shadow-lg p-6 flex flex-col items-center max-w-xs w-full overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 rounded-full blur-2xl opacity-70 transform translate-x-8 -translate-y-8"></div>

          <img src={OtpSuccessImg} alt="Success" className="w-20 h-20 mb-4 relative z-10" />
          <p className="text-black font-bold flex items-center text-lg relative z-10">
            <img src={GreentickIcon} alt="Verified" className="w-5 h-5 mr-2" />
            OTP Verified Successfully
          </p>
        </div>
      </div>
      )}
    </div>
  );
}
