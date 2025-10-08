import React, { useState } from "react";
import { Briefcase, User, Phone, Mail, Home, Upload } from "lucide-react";

export default function ServiceProviderRegistration() {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({
    businessName: "",
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    serviceCategory: ""
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    const newErrors = {
      businessName: businessName.trim() ? "" : "Business name is required",
      ownerName: ownerName.trim() ? "" : "Owner name is required",
      phone: /^\d{10}$/.test(phone.trim()) ? "" : "Enter a valid 10-digit phone number",
      email: email.trim() ? "" : "Email is required",
      address: address.trim() ? "" : "Address is required",
      serviceCategory: serviceCategory.trim() ? "" : "Service category is required"
    };
    setErrors(newErrors);
    const hasError = Object.values(newErrors).some(err => err !== "");
    if (hasError) return;
    console.log("Form Submitted:", {
      businessName,
      ownerName,
      phone,
      email,
      address,
      file,
      serviceCategory
    });
  };

  return (
    <div className="min-h-screen bg-white px-6 py-4">
      {/* Header */}
      <div className="-mx-6 mb-6">
        <div className="bg-orange-100 rounded-none p-4 flex flex-col items-center w-full shadow">
          <Briefcase className="text-orange-500 mb-2" size={32} />
          <h2 className="text-xl font-bold text-black">
            Service provider registration
          </h2>
          <p className="text-gray-500 text-sm text-center">
            Join our platform and start growing your business today
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-5">
        {/* Business Name */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 text-sm font-bold">
            <User className="text-orange-500" size={18} />
            Business or Trade Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your business name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
        </div>

        {/* Owner Full Name */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 text-sm font-bold">
            <User className="text-orange-500" size={18} />
            Owner’s Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value.replace(/[^A-Za-z ]/g, ""))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.ownerName && <p className="text-red-500 text-sm mt-1">{errors.ownerName}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 text-sm font-bold">
            <Phone className="text-orange-500" size={18} />
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="Enter your contact number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 text-sm font-bold">
            <Mail className="text-orange-500" size={18} />
            E-mail ID<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your E-mail ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-20 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 font-semibold text-sm">
              Verify
            </button>
          </div>
        </div>

        {/* Business Address */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 text-sm font-bold">
            <Home className="text-orange-500" size={18} />
            Registered Business Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your business address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        {/* Upload Proof */}
        <div>
          <p className="text-gray-700 text-sm font-bold mb-2">
            Upload Address Proof
          </p>
          <label className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:border-orange-400">
            <Upload className="text-orange-500" size={20} />
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              onChange={handleFileChange}
            />
            <span className="text-gray-500 text-sm">
              Click to upload or drag and drop
            </span>
            <span className="text-gray-400 text-xs">
              PDF, JPG, PNG up to 10MB
            </span>
          </label>
          {file && (
            <p className="mt-2 text-sm text-green-600">
              Selected: {file.name}
            </p>
          )}
        </div>

        {/* Service Category */}
        <div>
          <label className="flex items-center gap-2 text-gray-700 text-sm font-bold">
            <Briefcase className="text-orange-500" size={18} />
            Service Category<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your service category"
            value={serviceCategory}
            onChange={(e) => setServiceCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.serviceCategory && <p className="text-red-500 text-sm mt-1">{errors.serviceCategory}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="w-full bg-orange-400 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-orange-600"
        >
          Submit Registration
        </button>
      </div>
    </div>
  );
}
