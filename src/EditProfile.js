import React, { useState } from "react";
import { ArrowLeft } from "lucide-react"; // using lucide-react for icons

export default function ProfileEditPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");

  const handleSave = () => {
    console.log("Profile Saved:", { fullName, email, countryCode, mobile });
    alert("Profile information saved successfully!");
  };

  const handleBack = () => {
    console.log("Back button clicked");
    // later you can add navigation logic
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-6 py-4">
      
      {/* Header with Back button */}
      <div className="flex items-center mb-3">
        <button onClick={handleBack} className="text-black-400 mr-5">
          <ArrowLeft size={28} />
        </button>
        <h2 className="flex-1 text-left font-medium text-[20px] text-gray-800">
          Profile
        </h2>
      </div>

      <div className="-mx-6 mb-5">
        <hr className="border-t border-gray-300 shadow-lg" />
      </div>

      <p className="text-black-600 font-bold mt-5 mb-5 text-left">Edit Profile </p>

      {/* Form Content */}
      <div className="flex-1 flex flex-col ">
        <p className="text-black-600 mb-2 text-left text-sm">Full Name </p>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value.replace(/[^A-Za-z ]/g, ""))}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <p className="text-black-600 mt-3 mb-2 text-left text-sm">Email </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <p className="text-black-600 mt-3 mb-2 text-left text-sm">Phone Number </p>
        <div className="flex gap-2">
          <input
            type="text"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 w-24 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="tel"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value.replace(/[^0-9]/g, ""))
            }
            className="border border-gray-300 rounded-lg px-4 py-3 flex-1 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="mb-6">
        <button
          onClick={handleSave}
          className="w-full bg-orange-400 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-orange-600"
        >
          Save Information
        </button>
      </div>
    </div>
  );
}
