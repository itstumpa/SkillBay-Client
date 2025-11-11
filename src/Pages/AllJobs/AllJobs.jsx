import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading.jsx";
import { Briefcase, DollarSign, X, Send } from "lucide-react";
import { CiSaveDown2 } from "react-icons/ci";
import { toast } from 'react-toastify';


const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    price: ""
  });

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => setJobs(res.data))
      .catch(err => console.error("Error fetching jobs:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
    setFormData({ name: "", details: "", price: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", {
      job: selectedJob,
      application: formData
    });
    
    //API call, etc later
      toast.success('Submitted successfully!');
    handleCloseModal();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) return <Loading />;

  return (
    <div>
      <div className="bg-linear-to-br bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1470px] mx-auto px-4 md:px-6 lg:px-10">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold my-3 text-gray-900">All Jobs</h2>
            <p className="text-gray-600 text-lg">Discover amazing opportunities from talented professionals</p>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {jobs.map(job => (
              <div
                key={job._id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-emerald-300 transform hover:-translate-y-2"
              >
                {/* Cover Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={job.coverImage}
                    alt={job.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-4">
                    <span className=" bg-white shadow-lg">
                      <CiSaveDown2 className="w-6 h-6 text-white"/>
                      
                      {/* {job.category} */}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  
                  {/* Posted By Section */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={job.provider_image}
                      alt={job.postedBy}
                      className="w-12 h-12 rounded-full border-2 border-emerald-200 object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 truncate">{job.postedBy}</h3>
                      <p className="text-sm text-gray-500 truncate">{job.userEmail}</p>
                    </div>
                  </div>

                  {/* Job Title */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[56px]">
                    {job.title}
                  </h4>

                  {/* Job Summary */}
                  <p className="text-gray-600 text-base mb-4 line-clamp-3 min-h-[72px] leading-relaxed">
                    {job.summary}
                  </p>

                  {/* Category Badge & Apply Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <Briefcase size={18} />
                      <span className="text-sm font-semibold">{job.category}</span>
                    </div>
                    
                    <button
                      onClick={() => handleApply(job)}
                      className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-emerald-500 to-green-600 p-6 flex items-center justify-between rounded-t-3xl">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Apply for Job</h3>
                <p className="text-emerald-100 text-sm">{selectedJob?.title}</p>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              
              {/* Job Info */}
              <div className="mb-8 p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={selectedJob?.provider_image}
                    alt={selectedJob?.postedBy}
                    className="w-16 h-16 rounded-full border-2 border-emerald-300"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{selectedJob?.postedBy}</h4>
                    <p className="text-sm text-gray-600">{selectedJob?.userEmail}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{selectedJob?.summary}</p>
              </div>

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
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

                {/* Details Offer Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Details & Offer *
                  </label>
                  <textarea
                    name="details"
                    required
                    value={formData.details}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Describe your proposal, experience, and what you can offer..."
                  />
                </div>

                {/* Asking Price Field */}
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
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}     
    </div>
  );
};

export default AllJobs;