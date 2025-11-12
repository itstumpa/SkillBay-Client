import React, { useState } from "react";
import axios from "axios";
import Loading from "../components/Loading.jsx";
import { DollarSign, X, Send } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { useContext } from "react";

const ApplyForm = ({ selectedJob, onClose }) => {
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  
const { user: authuser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    details: "",
    price: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    const applicationData = {
      ...formData,
      jobId: selectedJob?._id,
      jobTitle: selectedJob?.title,
      provider: selectedJob?.postedBy,
      category: selectedJob?.category,
      // userEmail: selectedJob?.userEmail,
      userEmail: authuser?.userEmail,
    provider_image: selectedJob?.provider_image,
    createdAt: new Date(),
    };

    try {
      const res = await axios.post("http://localhost:3000/applications", applicationData);

    if (res.status === 201) {
      toast.success("Application submitted successfully!");
      onClose();
       navigate("/alljobs");
    
    }
  } catch (error) {
    toast.error("Something went wrong!");
    console.error("Error submitting:", error);
  } finally {
    setLoading(false);
  }
};

  if (loading) return <Loading />;

  return (
    <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[70vh] overflow-y-auto animate-slideUp">
      {/* Header */}
      <div className="sticky top-0 bg-linear-to-r from-emerald-500 to-green-600 p-6 flex items-center justify-between rounded-t-3xl">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Apply for Job</h3>
          <p className="text-emerald-100 text-sm">{selectedJob?.title}</p>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-300"
        >
          <X size={24} />
        </button>
      </div>

      {/* Body */}
      <div className="p-8">
        {/* Job Info */}
        <div className="mb-4 p-6 bg-linear-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
          <div className="flex items-center gap-4 mb-2">
            <img
              src={selectedJob?.provider_image}
              alt={selectedJob?.postedBy}
              className="w-16 h-16 rounded-full border-2 border-emerald-300"
            />
            <div>
              <h4 className="text-lg font-bold text-gray-900">
                {selectedJob?.postedBy}
              </h4>
              <p className="text-sm text-gray-600">{selectedJob?.userEmail}</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {selectedJob?.summary}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Email *
            </label>
            <input
              type="email"
              name="applicator_email"
              required
              value={formData.applicator_email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Details */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Details & Offer *
            </label>
            <textarea
              name="details"
              required
              value={formData.details}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Describe your proposal..."
            />
          </div>
          {/* Details */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cover Letter *
            </label>
            <textarea
              name="cover_letter"
              required
              value={formData.cover_letter}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Write your cover letter..."
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Asking Price *
            </label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="number"
                name="price"
                required
                value={formData.price}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your price"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
