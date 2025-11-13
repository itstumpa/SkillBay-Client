import axios from "axios";
import { Edit3, Loader2, Trash2 } from "lucide-react";
import { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthContext";

const MyAddedJobs = ({ userEmail }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const { user } = use(AuthContext);
  const [editData, setEditData] = useState({});

  // ✅ Fetch all jobs posted by the user
  useEffect(() => {
    axios
      .get(`https://skill-bay-ass10-s.vercel.app/users?email=${user.email}`)
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err))
      .finally(() => setLoading(false));
  }, [user.email]);

  // ✅ Delete a job
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        const res = await axios.delete(
          `https://skill-bay-ass10-s.vercel.app/users/${id}`
        );
        setJobs(jobs.filter((job) => job._id !== id));
        if (res.data.success) {
          Swal.fire(
            "Deleted!",
            "Your application has been deleted.",
            "success"
          );
        }
      } catch (error) {
        Swal.fire("Error!", "Failed to delete application.", "error");
        console.error(error);
      }
    }
  };

  // ✅ Start editing a job
  const handleEditClick = (job) => {
    setEditingJob(job._id);
    setEditData(job);
  };

  // ✅ Handle edit field change
  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // ✅ Submit updated data
  const handleUpdate = async (id) => {
    try {
      await axios.put(
        `https://skill-bay-ass10-s.vercel.app/users/${id}`,
        editData
      );
      setEditingJob(null);
      toast.success("Job updated successfully!");
      // refresh
      const res = await axios.get(
        `https://skill-bay-ass10-s.vercel.app/users?email=${user.email}`
      );
      setJobs(res.data);
    } catch (error) {
      toast.error("Failed to update job!");
      console.error(error);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
          <Loader2
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500"
            size={40}
          />
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-[1470px] lg:px-10 md:px-6 px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-16 relative">
          <div className="absolute "></div>
          <div className="relative text-center mt-8">
            <span className="inline-block px-6 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-[#1a9641] text-sm font-semibold mb-4 backdrop-blur-sm">
              JOB MANAGEMENT
            </span>
            <h2 className="text-6xl font-black text-gray-900 mb-4 tracking-tight">
              My Added <span className="text-[#1a9641]">Jobs</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Manage, edit, and track all your job postings in one place
            </p>
          </div>
        </div>

        {jobs.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-16 text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gray-600">
                  <svg
                    className="w-12 h-12 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  No Jobs Posted
                </h3>
                <p className="text-gray-400 text-lg">
                  You haven't posted any jobs yet. Start creating your first job
                  posting!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={job._id}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>

                <div className="relative bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300">
                  {editingJob === job._id ? (
                    <div className="p-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-green-400 text-sm font-bold mb-3 uppercase tracking-wider">
                            Cover Image
                          </label>
                          <input
                            name="coverImage"
                            value={editData.coverImage}
                            onChange={handleEditChange}
                            className="w-full bg-gray-900 border border-gray-600 focus:border-green-500 px-5 py-4 rounded-xl outline-none transition-all duration-300 text-white placeholder-gray-500"
                            placeholder="Enter Cover Image"
                          />
                        </div>
                        <div>
                          <label className="block text-green-400 text-sm font-bold mb-3 uppercase tracking-wider">
                            Job Title
                          </label>
                          <input
                            name="title"
                            value={editData.title}
                            onChange={handleEditChange}
                            className="w-full bg-gray-900 border border-gray-600 focus:border-green-500 px-5 py-4 rounded-xl outline-none transition-all duration-300 text-white placeholder-gray-500"
                            placeholder="Enter job title"
                          />
                        </div>
                        <div>
                          <label className="block text-green-400 text-sm font-bold mb-3 uppercase tracking-wider">
                            Category
                          </label>
                          <input
                            name="category"
                            value={editData.category}
                            onChange={handleEditChange}
                            className="w-full bg-gray-900 border border-gray-600 focus:border-green-500 px-5 py-4 rounded-xl outline-none transition-all duration-300 text-white placeholder-gray-500"
                            placeholder="Enter Category"
                          />
                        </div>
                        <div className="md:row-span-2">
                          <label className="block text-green-400 text-sm font-bold mb-3 uppercase tracking-wider">
                            Job Summary
                          </label>
                          <textarea
                            name="summary"
                            value={editData.summary}
                            onChange={handleEditChange}
                            rows="6"
                            className="w-full h-[calc(100%-2rem)] bg-gray-900 border border-gray-600 focus:border-green-500 px-5 py-4 rounded-xl outline-none transition-all duration-300 text-white placeholder-gray-500 resize-none"
                            placeholder="Enter job summary"
                          />
                        </div>
                      </div>
                      <div className="flex gap-4 mt-8">
                        <button
                          onClick={() => handleUpdate(job._id)}
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-wider shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
                        >
                          Update Job
                        </button>
                        <button
                          onClick={() => setEditingJob(null)}
                          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-wider"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="md:w-80 h-64 md:h-auto relative overflow-hidden flex-shrink-0">
                        <img
                          src={job.coverImage}
                          alt={job.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-lg uppercase tracking-wider shadow-lg">
                            {job.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                            {job.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed text-base line-clamp-2 mb-6">
                            {job.summary}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                          {/* Budget */}
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                              <span className="text-white font-black text-xl">
                                $
                              </span>
                            </div>
                            <div>
                              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                                Budget
                              </p>
                              <p className="text-white text-2xl font-black">
                                {job.budget?.amount}{" "}
                                <span className="text-sm text-gray-400 font-normal">
                                  {job.budget?.currency}
                                </span>
                              </p>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <button
                              onClick={() => handleEditClick(job)}
                              className="group/btn w-12 h-12 bg-gray-700 hover:bg-blue-500 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/50 hover:scale-110"
                              title="Edit job"
                            >
                              <Edit3
                                className="text-gray-300 group-hover/btn:text-white transition-colors"
                                size={20}
                              />
                            </button>
                            <button
                              onClick={() => handleDelete(job._id)}
                              className="group/btn w-12 h-12 bg-gray-700 hover:bg-red-500 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/50 hover:scale-110"
                              title="Delete job"
                            >
                              <Trash2
                                className="text-gray-300 group-hover/btn:text-white transition-colors"
                                size={20}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAddedJobs;
