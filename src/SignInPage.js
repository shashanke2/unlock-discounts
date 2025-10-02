import React, { useState } from "react";

export default function SignInPage() {
  const [firstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");

  const handleSkip = () => {
    console.log("Skipped sign-in");
  };

  const handleConfirm = () => {
    console.log("Confirm clicked:", firstName, Email);
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

      {/* Inputs */}
      <div className="flex flex-col gap-4">

        <p className="text-black-600 font-bold mt-4 text-left">Please enter your full name </p>

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
