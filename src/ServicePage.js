import React from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import PlumberImg from "./assets/plu.png";

const services = [
  {
    id: 1,
    name: "Rakesh plumbing service",
    description: "Pipe installment, Hose fitting, Tap installation",
    rating: 4.3,
    img: PlumberImg,
  },
  {
    id: 2,
    name: "Kamal repairs",
    description: "Washing machine, Refrigerator, Mixer repair",
    rating: 4.7,
    img: PlumberImg,
  },
  {
    id: 3,
    name: "Deepa salon services",
    description: "Haircut, Spa, Facials, Bridal makeup",
    rating: 4.5,
    img: PlumberImg,
  },
];

export default function ServicePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg px-2 font-bold text-black">Services</h1>
      </div>

      {/* Service Cards */}
      <div className="space-y-5">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => navigate("/individual-service")}
            className="flex justify-between items-center bg-white rounded-2xl shadow-md p-3 cursor-pointer"
          >
            {/* Left Section */}
            <div className="flex flex-col space-y-1">
              <h2 className="text-lg font-semibold text-black">
                {service.name}
              </h2>
              <p className="text-gray-600 text-sm">{service.description}</p>

              <div className="flex items-center mt-2">
                <span className="text-yellow-400 font-semibold text-lg">
                  {service.rating}
                </span>
                <Star className="ml-1 text-yellow-400 fill-yellow-400" size={18} />
              </div>

              <p className="text-gray-400 mt-1 text-sm">View details</p>
            </div>

            {/* Right Section - Image */}
            <div className="ml-4 mr-4 flex-shrink-0 rounded-xl overflow-hidden">
              <img
                src={service.img}
                alt={service.name}
                className="w-36 h-36 rounded-xl object-cover mb-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
