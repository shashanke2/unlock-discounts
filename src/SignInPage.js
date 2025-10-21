import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [firstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleConfirm = () => {
  if (!firstName.trim()) {
    setError("Full name is required");
  } else {
    setError("");
    console.log("Confirm clicked:", firstName, Email);
    navigate("/number");
  }
};

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-6 py-4">

      <div className="flex-1 flex flex-col justify-center">
        {/* App Name */}
      <div className="flex flex-col items-start mt-2 mb-10">
        <h1 className="text-5xl font-bold">
          <span className="text-black">Mend</span>
          <span className="text-orange-400">ora</span>
        </h1>
      </div>  

      {/* Inputs */}
      <div className="flex flex-col gap-4">

        <p className="text-black-600 font-bold mt-4 text-left">Please enter your details </p>

        <input
          type="text"
          placeholder="Enter Full Name"
          value={firstName}
          onChange={(e) => {
          // Allow only alphabets and spaces
          const val = e.target.value.replace(/[^A-Za-z\s]/g, "");
          setFirstName(val);
          }}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <div className="relative">
        <input
          type="text"
          placeholder="Enter Mail ID"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-16 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          Optional
        </span>
      </div>
      <p className="text-black text-sm mt-2">
            Are you a service provider?{" "}
            <span
              onClick={() => navigate("/provider-registration")}
              className="text-blue-500 cursor-pointer"
            >
              Register here
            </span>
          </p>
      </div>
      </div>
      
      {/* Confirm button */}
      <div className="mb-6">
        <button
          onClick={handleConfirm}
          className="w-full bg-orange-400 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-orange-600"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
