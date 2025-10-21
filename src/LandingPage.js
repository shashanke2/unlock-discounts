import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlumberImg from "./assets/plu.png";
import CarpenterImg from "./assets/carpenter.png";
import PaintingImg from "./assets/painter.png";
import BathroomImg from "./assets/bathroom.png";
import BedroomImg from "./assets/bedroom.png";
import KitchenImg from "./assets/kitchen.png";
import SearchIcon from "./assets/search.png";
import HomeIcon from "./assets/home.png";
import BookingsIcon from "./assets/bookings.png";
import AccountIcon from "./assets/account.png";
import ServicePage from "./ServicePage";
import YellowImg from "./assets/yellow.png";
import BlueImg from "./assets/blue.png";
import RedImg from "./assets/red.png";
import GreenImg from "./assets/green.png";

const popularServices = [
  { id: 1, name: "Plumber", img: PlumberImg },
  { id: 2, name: "Carpenter", img: CarpenterImg },
  { id: 3, name: "Painting", img: PaintingImg },
];

const trendingHighlights = [
  { id: 1, name: "Bathroom Renovation", img: BathroomImg },
  { id: 2, name: "Kitchen Renovation", img: KitchenImg },
  { id: 3, name: "Bedroom Renovation", img: BedroomImg },
];

const whyChooseMendora = [
  {
    id: 1,
    title: "Your Feedback our Priority",
    desc: "We value your feedback, using it to deliver smarter deals and a smoother experience.",
    border: "border-yellow-500",
    bg: "bg-yellow-50",
    glow: "bg-yellow-400",
    img: YellowImg,
  },
  {
    id: 2,
    title: "Top-Rated Professionals",
    desc: "Our pros consistently receive excellent reviews from satisfied customers.",
    border: "border-blue-500",
    bg: "bg-blue-50",
    glow: "bg-blue-400",
    img: BlueImg,
  },
  {
    id: 3,
    title: "Flexible Scheduling",
    desc: "Book appointments at your convenience, with flexible scheduling options.",
    border: "border-red-500",
    bg: "bg-red-50",
    glow: "bg-red-400",
    img: RedImg,
  },
  {
    id: 4,
    title: "Background-Checked Pros",
    desc: "We thoroughly vet all our pros to ensure they meet our high standards.",
    border: "border-green-500",
    bg: "bg-green-50",
    glow: "bg-green-400",
    img: GreenImg,
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const [activeService, setActiveService] = useState(null);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
  const scrollContainer = scrollRef.current;
  if (!scrollContainer) return;

  const cards = Array.from(scrollContainer.children);
  if (cards.length === 0) return;

  const cardGap = 16; // Tailwind space-x-4
  const cardWidth = cards[0].offsetWidth + cardGap;

  let index = 0;

  const scrollStep = () => {
    index++;

    scrollContainer.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    // Reset index after last card
    if (index >= cards.length) {
      index = 0;
      scrollContainer.scrollTo({
        left: 0,
        behavior: "auto",
      });
    }
  };

  const interval = setInterval(scrollStep, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="min-h-screen bg-white px-4 py-4 flex flex-col relative">
      {/* Top Header */}
      <div className="w-full bg-orange-300 h-20 px-4 flex justify-between items-center fixed top-0 left-0">
        <div className="flex flex-col">
                 
        </div>
      </div>

      <div className="pt-20">
        {/* Search Bar */}
        <div className="flex items-center border-2 border-orange-400 rounded-xl p-3 mb-5">
          <img src={SearchIcon} alt="Search" className="w-4 h-4 mr-2" />
          <input
            type="text"
            placeholder="Search for services"
            className="flex-1 outline-none text-gray-700 text-sm"
          />
        </div>
      </div>

      {/* Popular Services */}
<div className="mb-8">
  <h2 className="text-xl font-bold text-gray-800 mb-4">
    <span className="text-black">Popular</span>
    <span className="text-orange-400"> Services</span>
  </h2>

  {/* White Card Wrapper */}
  <div className="bg-white rounded-xl shadow-md p-4">
    {/* Arriving in 30 mins */}
    <div>
      <span className="text-gray-800 text-medium font-medium">Arriving in </span>
      <span className="text-orange-400 text-medium font-bold">⚡30 mins</span>
    </div>

    {/* Horizontal scroll */}
    <div className="flex overflow-x-auto space-x-3 pb-2 hide-scrollbar">
      {popularServices.map((service) => (
        <div
          key={service.id}
          className="flex-shrink-0 w-44 h-44 flex flex-col items-center justify-center"
          onClick={() => { 
            setActiveService(service); 
            setIsServiceOpen(true); 
          }}
        >
          <img
            src={service.img}
            alt={service.name}
            className="w-25 h-25 rounded-xl object-contain mb-2"
          />
          <span className="text-sm font-medium text-gray-700">{service.name}</span>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Trending Highlights */}
<div className="mb-8">
  <h2 className="text-xl font-bold text-gray-800 mb-2">
    <span className="text-black">Trending</span>
    <span className="text-orange-400"> Highlights</span>
  </h2>

  {/* White Card Wrapper */}
  <div className="bg-white rounded-xl shadow-md p-4">
    <div className="flex overflow-x-auto space-x-3 pb-2 hide-scrollbar">
      {trendingHighlights.map((highlight) => (
        <div
          key={highlight.id}
          className="flex-shrink-0 w-44 h-44 flex flex-col items-center justify-center"
          onClick={() => { 
            setActiveService(highlight); 
            setIsServiceOpen(true); 
          }}
        >
          <img
            src={highlight.img}
            alt={highlight.name}
            className="w-25 h-25 rounded-xl object-contain mb-2"
          />
          <span className="text-sm font-medium text-gray-700 text-center">{highlight.name}</span>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Why Choose Mendora! */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          <span className="text-black">Why Choose </span>
          <span className="text-orange-400">Mendora!</span>
        </h2>

        <div ref={scrollRef} className="flex overflow-x-auto space-x-4 pb-2 scroll-smooth">
          {whyChooseMendora.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl shadow-md p-8 flex items-center w-full flex-shrink-0 border-2 overflow-hidden ${item.border} ${item.bg}`}
            >
              {/* Glow circle */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${item.glow} rounded-full blur-2xl opacity-60 transform translate-x-6 -translate-y-6`}></div>

              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 mr-4 relative z-10 flex-shrink-0"
              />

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-medium text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isServiceOpen && (
        <div
          className="fixed bottom-0 left-0 w-full h-[65%] bg-white rounded-t-3xl shadow-xl overflow-auto transition-transform duration-300"
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl text-black font-bold">{activeService?.name}</h2>
            <button
              onClick={() => setIsServiceOpen(false)}
              className="text-black text-3xl mr-2 font-bold"
            >
              ×
            </button>
          </div>

          {/* ServicePage content */}
          <div>
            <ServicePage service={activeService} />
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="bg-white z-50 flex justify-around items-center p-3 shadow-inner fixed bottom-0 left-0 w-full">
        <div
          className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition-colors duration-200 cursor-pointer"
          onClick={() => navigate("/landing-page")}
        >
          <img src={HomeIcon} alt="Home" className="w-6 h-6" />
          <span className="text-xs font-medium mt-1">Home</span>
        </div>
        <div
          className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition-colors duration-200 cursor-pointer"
          onClick={() => navigate("/bookings")}
        >
          <img src={BookingsIcon} alt="Bookings" className="w-6 h-6" />
          <span className="text-xs font-medium mt-1">Bookings</span>
        </div>
        <div
          className="flex flex-col items-center text-gray-700 hover:text-orange-500 transition-colors duration-200 cursor-pointer"
          onClick={() => navigate("/edit-profile")}
        >
          <img src={AccountIcon} alt="Account" className="w-6 h-6" />
          <span className="text-xs font-medium mt-1">Account</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
