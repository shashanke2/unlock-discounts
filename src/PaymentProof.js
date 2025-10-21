import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

const PaymentProof = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.size > 10 * 1024 * 1024) {
      setError("File size should be less than 10MB");
      setFile(null);
      return;
    }
    setFile(selected);
    setError("");
  };

  const handleSubmit = () => {
    if (!file) {
      setError("Please upload your payment proof before proceeding.");
      return;
    }
    console.log("Form Submitted:", { file });
    navigate("/popupmsg");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 mx-4 shadow-xl">
        <h3 className="text-[20px] font-semibold text-gray-800 mb-5 text-center">
          Upload Payment Proof
        </h3>

        {/* Upload Section */}
        <div>
          <label className="bg-gray-100 border-2 border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 cursor-pointer hover:border-orange-400">
            <Upload className="text-orange-500 mb-2" size={22} />
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
            <p className="mt-2 text-sm text-green-600">Selected: {file.name}</p>
          )}
          {error && (
            <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => navigate(-1)} // go back / close popup
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-orange-400 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentProof;
