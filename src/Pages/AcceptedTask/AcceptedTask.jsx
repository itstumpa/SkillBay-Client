import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading.jsx";
import { Trash2, Inbox, Info } from "lucide-react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

// --- NO CHANGES TO LOGIC, STATE, OR FUNCTIONS ---
const AcceptedTask = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get("http://localhost:3000/applications");
        setApplications(res.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
        toast.error("Failed to load applications!");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

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
          `http://localhost:3000/applications/${id}`
        );
        if (res.data.success) {
          Swal.fire(
            "Deleted!",
            "Your application has been deleted.",
            "success"
          );
          setApplications(applications.filter((app) => app._id !== id));
        }
      } catch (error) {
        Swal.fire("Error!", "Failed to delete application.", "error");
        console.error(error);
      }
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-[1470px] mx-auto lg:px-10 md:px-6 px-4">
        {/* Header Section */}
        <div className="mb-16 relative">
          <div className="absolute "></div>
          <div className="relative text-center">
            <span className=" mt-6 inline-block px-6 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-[#1a9641] text-sm font-semibold mb-4 backdrop-blur-sm">
              TASK MANAGEMENT
            </span>
            <h1 className="text-6xl font-black text-gray-900 mb-4 tracking-tight">
              Accepted <span className="text-[#1a9641]">Tasks</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Review and manage all applications you have accepted for your jobs.
            </p>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-16 text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gray-600">
                  <Inbox size={48} className="text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  No Applications Found
                </h3>
                <p className="text-gray-400 text-lg">
                  When you accept a task, it will appear here.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {applications.map((app, index) => (
              <div
                key={app._id}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute "></div>

                <div className="relative bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300">
                {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>

                <div className="relative bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300"> */}
                  <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                    {/* Job Info Section */}
                    <div className="flex-1 w-full md:w-auto">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 flex-shrink-0">
                          <span className="text-white font-black text-xl">
                            ✓
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                            {app.jobTitle}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold rounded-lg uppercase tracking-wider">
                            {app.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Applicant Info */}
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
                      <div className="text-center md:text-left">
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
                          Applicant
                        </p>
                        <p className="text-white text-lg font-semibold">
                          {app.name}
                        </p>
                      </div>

                      {/* Price Badge */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-500 blur-xl opacity-30"></div>
                        <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl px-6 py-3 shadow-lg shadow-green-500/40">
                          <p className="text-gray-200 text-xs font-bold uppercase tracking-wider mb-0.5">
                            Offer Price
                          </p>
                          <p className="text-white text-2xl font-black">
                            ${app.price}
                          </p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="flex items-center gap-3">
                        <div className=" px-5 py-3 ">
                          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-0.5">
                            Status
                          </p>
                          <p className="text-green-400 text-xl font-bold">
                            ✅ Done
                          </p>
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(app._id)}
                          className="group/btn w-12 h-12 bg-gray-700 hover:bg-red-500 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/50 hover:scale-110"
                          aria-label="Delete application"
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AcceptedTask;