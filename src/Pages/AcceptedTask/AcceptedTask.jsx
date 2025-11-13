import axios from "axios";
import { Inbox, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../../components/Loading.jsx";



const AcceptedTask = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get(
          "https://skill-bay-ass10-s.vercel.app/applications"
        );
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
          `https://skill-bay-ass10-s.vercel.app/applications/${id}`
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
    <div className="min-h-screen py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-[1470px] mx-auto lg:px-10 md:px-6 px-4">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 relative">
          <div className="absolute "></div>
          <div className="relative text-center">
            <span className="mt-12 inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-green-500/10 border border-green-500/20 rounded-full text-[#1a9641] text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-sm">
              JOB MANAGEMENT
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 tracking-tight px-2">
              Accepted <span className="text-[#1a9641]">Jobs</span>
            </h1>
            <p className=" text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Review and manage all applications you have accepted for your
              jobs.
            </p>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-8 sm:p-12 md:p-16 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border-2 sm:border-4 border-gray-600">
                  <Inbox size={32} className="text-green-500 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                  No Applications Found
                </h3>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                  When you accept a task, it will appear here.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {applications.map((app, index) => (
              <div
                key={app._id}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute "></div>

                <div className="relative bg-gray-900 border border-gray-700 rounded-xl sm:rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300">
                  {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>

                <div className="relative bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300"> */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 sm:p-6 md:p-8 gap-4 sm:gap-6">
                    {/* Job Info Section */}
                    <div className="flex-1 w-full lg:w-auto">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 flex-shrink-0">
                          <span className="text-white font-black text-base sm:text-lg md:text-xl">
                            ✓
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-green-400 transition-colors duration-300 break-words">
                            {app.jobTitle}
                          </h3>
                          <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-[10px] sm:text-xs font-bold rounded-lg uppercase tracking-wider">
                            {app.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Applicant Info */}
                    <div className="flex flex-col sm:flex-row lg:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
                      <div className="text-left sm:text-left w-full sm:w-auto">
                        <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                          Applicant
                        </p>
                        <p className="text-white text-base sm:text-lg font-semibold break-words">
                          {app.name}
                        </p>
                      </div>

                      {/* Price Badge */}
                      <div className="relative w-full sm:w-auto">
                        <div className="absolute inset-0 bg-green-500 blur-xl opacity-30"></div>
                        <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-lg shadow-green-500/40">
                          <p className="text-gray-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                            Offer Price
                          </p>
                          <p className="text-white text-xl sm:text-2xl font-black">
                            ${app.price}
                          </p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                        <div className="px-4 sm:px-5 py-2 sm:py-3">
                          <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                            Status
                          </p>
                          <p className="text-green-400 text-lg sm:text-xl font-bold">
                            ✅ Done
                          </p>
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(app._id)}
                          className="group/btn w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-red-500 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/50 hover:scale-110 flex-shrink-0"
                          aria-label="Delete application"
                        >
                          <Trash2
                            className="text-gray-300 group-hover/btn:text-white transition-colors"
                            size={18}
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