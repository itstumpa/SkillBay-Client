import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Briefcase, User, Tag, Mail, Calendar, ArrowLeft, Clock } from 'lucide-react';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch job details from MongoDB
    fetch(`http://localhost:3000/users/${id}`)
    
      .then(res => res.json())
      .then(data => {
        setJob(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching job:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900/30">
        <span className="loading loading-spinner loading-lg text-emerald-500"></span>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900/30">
        <div className="text-center">
          <p className="text-xl text-white mb-4">Job not found</p>
          <button
            onClick={() => navigate('/alljobs')}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-300"
          >
            Back to All Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900/30 flex items-center justify-center px-4 py-20">
      <div className="max-w-[1100px] w-full">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors duration-300 mb-6 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-semibold">Back</span>
        </button>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Cover Image Section */}
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src={job.coverImage}
              alt={job.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Job Title & Category Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="inline-block px-4 py-2 bg-emerald-500 rounded-full text-white text-sm font-semibold mb-4">
                {job.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {job.title}
              </h1>
            </div>
          </div>

          {/* Job Details Content */}
          <div className="p-6 md:p-10 lg:p-12">
            
            {/* Posted By & Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              
              {/* Posted By Card */}
              <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <User size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1 font-medium">Posted By</p>
                  <p className="text-xl font-bold text-gray-900">{job.postedBy}</p>
                </div>
              </div>

              {/* Contact Email Card */}
              <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail size={28} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600 mb-1 font-medium">Contact Email</p>
                  <a 
                    href={`mailto:${job.userEmail}`}
                    className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 block truncate"
                  >
                    {job.userEmail}
                  </a>
                </div>
              </div>

            </div>

            {/* Job Summary Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Job Description</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  {job.summary}
                </p>
              </div>
            </div>

            {/* Additional Info Bar */}
            <div className="flex flex-wrap items-center gap-6 mb-10 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3">
                <Tag size={20} className="text-emerald-600" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Category</p>
                  <p className="text-sm font-bold text-gray-900">{job.category}</p>
                </div>
              </div>
              
              <div className="h-8 w-px bg-gray-300"></div>
              
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-emerald-600" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Posted</p>
                  <p className="text-sm font-bold text-gray-900">
                    {job.postedDate ? new Date(job.postedDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    }) : 'Recently'}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                Apply Now
              </button>
              <button className="flex-1 px-8 py-4 rounded-xl bg-white border-2 border-gray-300 hover:border-emerald-500 hover:bg-emerald-50 text-gray-900 font-bold text-lg transition-all duration-300">
                Save for Later
              </button>
            </div>

            {/* Contact CTA */}
            <div className="p-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl text-center shadow-lg">
              <p className="text-white text-lg mb-3 font-medium">
                Ready to take the next step?
              </p>
              <p className="text-white/90 text-sm mb-4">
                Contact the job poster directly for more information
              </p>
              <a 
                href={`mailto:${job.userEmail}?subject=Application for ${job.title}`}
                className="inline-block px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
              >
                Send Email to {job.postedBy}
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;