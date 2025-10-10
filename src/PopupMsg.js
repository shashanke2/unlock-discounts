import React from "react";
import verifyIcon from "./assets/loading.png";

export default function PopupMsg() {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Corner icons */}
      <img
        src={verifyIcon}
        alt="verify icon"
        className="absolute top-40 left-10 w-20 h-20 -rotate-12"
      />
      <img
        src={verifyIcon}
        alt="verify icon"
        className="absolute top-10 right-10 w-20 h-20 rotate-12"
      />
      <img
        src={verifyIcon}
        alt="verify icon"
        className="absolute bottom-10 left-10 w-20 h-20 rotate-12"
      />
      <img
        src={verifyIcon}
        alt="verify icon"
        className="absolute bottom-40 right-10 w-20 h-20 -rotate-12"
      />

      {/* Center message */}
      <div className="bg-[#FFF9F0] text-center px-6 py-12 rounded-2xl shadow-sm">
        <p className="text-black font-semibold text-base leading-relaxed">
          Your verification is in progress. <br />
          You will receive an update within 24 hours.
        </p>
      </div>
    </div>
  );
}
