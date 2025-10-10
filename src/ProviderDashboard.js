import React, { useState } from "react";
import DeleteIcon from "./assets/delete.png";
import EditIcon from "./assets/edit.png";
import AddIcon from "./assets/add.png";
import HomeIcon from "./assets/home.png";
import BookingsIcon from "./assets/bookings.png";
import AccountIcon from "./assets/account.png";
import TickIcon from "./assets/tick.png";
import GreentickIcon from "./assets/greentick.png";
import { useNavigate } from "react-router-dom";

const ProviderDashboard = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([
    {
      id: 1,
      name: "Haircut",
      description: "Professional haircut service with styling and wash.",
      image:
        "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Massage",
      description: "Relaxing full-body massage for 60 minutes.",
      image:
        "https://via.placeholder.com/80",
    },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, request: "Request 1", done: false },
    { id: 2, request: "Request 2", done: false },
  ]);

  const [address, setAddress] = useState("123 Main Street, City");
  const [contact, setContact] = useState("+91 9876543210");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);

  // Add new service
  const handleAddService = () => {
    const name = prompt("Enter service name");
    const description = prompt("Enter service description");
    const image = prompt("Enter image URL (optional)") || "https://via.placeholder.com/80";

    if (name && description) {
      const newService = {
        id: Date.now(),
        name,
        description,
        image,
      };
      setServices([...services, newService]);
    }
  };

  // Delete service
  const handleDeleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  // Edit service
  const handleEditService = (id) => {
    const service = services.find((s) => s.id === id);
    const name = prompt("Edit service name", service.name);
    const description = prompt("Edit service description", service.description);
    const image = prompt("Edit image URL", service.image);

    if (name && description) {
      setServices(
        services.map((s) =>
          s.id === id ? { ...s, name, description, image } : s
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 space-y-3 pb-24">
      {/* Top Header */}
      <div className="bg-white p-5 flex justify-between items-center shadow-md mb-2">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome Back</h1>
        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-700">Full Name</span>
          <img
            src="/assets/profile.png"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-0">
      {/* Address Block */}
      <div className="bg-white mt-0 p-2 shadow-md relative">
        <h2 className="font-semibold text-gray-800 mb-1">Address</h2>
        <input
          type="text"
          className="w-full px-2 py-1 focus:outline-none"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          readOnly={!isEditingAddress}
        />
        <img
          src={EditIcon}
          alt="Edit"
          className="absolute bottom-3 right-3 w-4 h-4 cursor-pointer"
          onClick={() => setIsEditingAddress(!isEditingAddress)} 
        />
      </div>
      {/* Contact Block */}
      <div className="bg-white mt-0 mb-3 p-2 shadow-md relative">
        <h2 className="font-semibold text-gray-800 mb-1">Contact</h2>
        <input
          type="tel"
          className="w-full px-2 py-1 focus:outline-none"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          readOnly={!isEditingAddress}
        />
        <img
          src={EditIcon}
          alt="Edit"
          className="absolute bottom-3 right-3 w-4 h-4 cursor-pointer"
          onClick={() => setIsEditingAddress(!isEditingAddress)} 
        />
      </div>
      </div>
      
      {/* Two Empty Blocks */}
      <div className="flex flex-col gap-2 mx-2">
        {services.map((service) => (
        <div
          key={service.id}
          className="bg-white p-4 rounded-2xl shadow-md relative hover:shadow-lg transition-shadow duration-200 flex items-center justify-between"
        >
          {/* Delete Icon */}
          <img
            src={DeleteIcon}
            alt="Delete"
            className="absolute top-3 right-3 w-4 h-4 cursor-pointer"
            onClick={() => handleDeleteService(service.id)}
          />

          {/* Left - Service Info */}
          <div className="flex-1 pr-4">
            <h3 className="font-semibold text-gray-800">{service.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{service.description}</p>
          </div>

          {/* Right - Image */}
          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Edit Icon */}
          <img
            src={EditIcon}
            alt="Edit"
            className="absolute bottom-3 right-3 w-4 h-4 cursor-pointer"
            onClick={() => handleEditService(service.id)}
          />
        </div>
      ))}

        {/* Add new block button */}
        <div className="flex justify-center mt-1 mb-1">
          <img
            src={AddIcon}
            alt="Add"
            className="w-5 h-5 cursor-pointer"
            onClick={handleAddService}
          />
        </div>
      </div>

      {/* Task Logs Section */}
      <div className="bg-white mx-2 mt-0 p-4 rounded-2xl shadow-md">
        <h2 className="font-semibold text-gray-800 mb-3">Task Logs</h2>
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-2">
                <img
                  src={TickIcon}
                  alt="Tick"
                  className={`w-5 h-5 ${task.done ? "opacity-50" : ""}`}
                />
                <span className={`text-gray-700 ${task.done ? "line-through" : ""}`}>
                  {task.request}
                </span>
              </div>
              <button
                className="border border-orange-500 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700"
              >
                Done
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white flex justify-around items-center p-3 shadow-inner rounded-t-xl fixed bottom-0 left-0 w-full">
        <div 
        className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
        onClick={() => navigate("/")}
        >
          <img src={HomeIcon} alt="Home" className="w-6 h-6" />
          <span className="text-xs font-medium mt-1">Home</span>
        </div>
        <div
          className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
          onClick={() => navigate("/bookings")}
        >
          <img src={BookingsIcon} alt="Bookings" className="w-6 h-6" />
          <span className="text-xs font-medium mt-1">Bookings</span>
        </div>
        <div
          className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
          onClick={() => navigate("/edit-profile")}
        >
          <img src={AccountIcon} alt="Account" className="w-6 h-6" />
          <span className="text-xs font-medium mt-1">Account</span>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
