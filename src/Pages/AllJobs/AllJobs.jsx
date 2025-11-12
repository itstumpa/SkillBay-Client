import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Loading from "../../components/Loading.jsx";
import { Briefcase } from "lucide-react";
import { CiSaveDown2 } from "react-icons/ci";
// import { toast } from "react-toastify";
import ApplyForm from "../../components/ApplyForm.jsx";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { toast } from "react-toastify";



const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
const { user: authuser } = useContext(AuthContext);


// sort 
 const [sortOrder, setSortOrder] = useState('desc');
  
  const sortedJobs = useMemo(() => {
    if (!jobs || jobs.length === 0) return [];
    
    return [...jobs].sort((a, b) => {
      if (!a.postedDate) return 1;
      if (!b.postedDate) return -1;
      
      const dateA = new Date(a.postedDate);
      const dateB = new Date(b.postedDate);
      
      if (isNaN(dateA)) return 1;
      if (isNaN(dateB)) return -1;
      
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
  }, [jobs, sortOrder]);






  // ✅ Fetch data from backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err))
      .finally(() => setLoading(false));
  }, []);


  const handleApply = async (job) => {
  if (!authuser?.email) {
    toast.warning("Please login to apply.");
    return;
  }

  // ✅ Prevent applying to own job
  if (authuser.email === job.userEmail) {
    toast.warning("You can’t apply to your own job!");
    return;
  }

  try {
    // ✅ Check if this user already applied for this job
    const res = await axios.get("http://localhost:3000/applications");
    const existing = res.data.find(
      (app) => app.jobId === job._id && app.userEmail === authuser.email
    );

    if (existing) {
      toast.info("You already applied for this job!");
      return;
    }

    // ✅ Otherwise open the modal
    setSelectedJob(job);
    setShowModal(true);
  } catch (err) {
    console.error(err);
    toast.error("Error checking applications.");
  }
};


  // ✅ Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-[1470px] mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold my-3 text-gray-900">
            All Jobs
          </h2>
         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
  <p className="text-gray-600 text-lg">
    Discover amazing opportunities from talented professionals
  </p>
  
  <select
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    className="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium text-gray-700 cursor-pointer hover:border-gray-400 transition-colors shadow-sm"
  >
    <option value="desc">📅 Newest First</option>
    <option value="asc">📅 Oldest First</option>
  </select>
</div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> */}
          {sortedJobs.map((job) => (
            <div
              key={job._id}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-emerald-300 transform hover:-translate-y-2"
            >
              {/* Cover Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={job.coverImage}
                  alt={job.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-4 bg-white rounded-full p-2 shadow-md">
                  <CiSaveDown2 className="w-6 h-6 text-emerald-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Posted By */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={job.provider_image}
                    alt={job.postedBy}
                    className="w-12 h-12 rounded-full border-2 border-emerald-200 object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white truncate">
                      {job.postedBy}
                    </h3>
                    <p className="text-sm text-gray-400 truncate">
                      {job.userEmail}
                    </p>
                    <p className="text-sm text-gray-400 truncate">
                      {job.postedDate}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-3 line-clamp-2 min-h-14">
                  {job.title}
                </h4>

                {/* Summary */}
                <p className="text-gray-400 text-base mb-4 line-clamp-3 min-h-[72px] leading-relaxed">
                  {job.summary}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Briefcase size={18} />
                    <span className="text-sm font-semibold">
                      {job.category}
                    </span>
                  </div>

                  {/* ✅ Apply Button */}
                  <button
                    onClick={() => handleApply(job)}
                    className="px-6 py-2.5 bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal (ApplyForm) */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/70 pt-16">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-4xl w-full relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Apply for {selectedJob?.title}
            </h2>

            <ApplyForm selectedJob={selectedJob} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllJobs;