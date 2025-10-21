import React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "./assets/cart.png";
import { ArrowLeft } from "lucide-react";

const NoBookingsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/landing-page");
  };

  const handleExplore = () => {
    navigate("/landing-page");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-start px-6 py-4">
      {/* Header */}
      <div className="flex items-center mb-3">
        <button onClick={handleBack} className="text-gray-700 mr-5">
          <ArrowLeft size={28} />
        </button>
        <h2 className="flex-1 text-left font-medium text-[20px] text-gray-800">
          Bookings
        </h2>
      </div>

      <div className="-mx-6 mb-5">
        <hr className="border-t border-gray-300 shadow-lg" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center flex-1">
        <img src={CartIcon} alt="EmptyCart" className="w-20 h-20" />
        <h2 className="text-[20px] font-medium text-gray-800 mb-2 text-center">
          No Bookings Yet!
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Explore our services and book your first service.
        </p>
        <button
          className="w-full max-w-xs bg-orange-400 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-orange-500"
          onClick={handleExplore}
        >
          Explore Services
        </button>
      </div>
    </div>
  );
};

export default NoBookingsPage;
