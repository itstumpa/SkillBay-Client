import axios from "axios";
import { Briefcase, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import Loading from "../../components/Loading.jsx";
import { useContext } from "react";
import { toast } from "react-toastify";
import ApplyForm from "../../components/ApplyForm.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { NavLink, useNavigate } from "react-router";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const { user: authuser } = useContext(AuthContext);

  // sort
  const [sortOrder, setSortOrder] = useState("desc");

  // ✅ Search state
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Category filter state
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;

  // ✅ Extract unique categories from jobs
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(jobs.map((job) => job.category))];
    return uniqueCategories.filter(Boolean); // Remove undefined/null
  }, [jobs]);

  // ✅ Filter and sort jobs
  const filteredAndSortedJobs = useMemo(() => {
    if (!jobs || jobs.length === 0) return [];

    let filtered = [...jobs];

    // Filter by search query (title)
    if (searchQuery.trim()) {
      filtered = filtered.filter((job) =>
        job.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((job) => job.category === selectedCategory);
    }

    // Sort by date
    filtered.sort((a, b) => {
      if (!a.postedDate) return 1;
      if (!b.postedDate) return -1;

      const dateA = new Date(a.postedDate);
      const dateB = new Date(b.postedDate);

      if (isNaN(dateA)) return 1;
      if (isNaN(dateB)) return -1;

      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  }, [jobs, sortOrder, searchQuery, selectedCategory]);

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredAndSortedJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredAndSortedJobs.slice(startIndex, endIndex);

  // ✅ Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortOrder]);

  // ✅ Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // ✅ Fetch data from backend
  useEffect(() => {
    axios
      .get("https://skill-bay-ass10-s.vercel.app/users")
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
      toast.warning("You can't apply to your own job!");
      return;
    }

    try {
      // ✅ Check if this user already applied for this job
      const res = await axios.get(
        "https://skill-bay-ass10-s.vercel.app/applications"
      );
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

  // - details button
  // const { user } = useContext(AuthContext);
  // const isLoggedIn = !!authuser;
  // const navigate = useNavigate();
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://skill-bay-ass10-s.vercel.app/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div className=" py-16 md:pt-20">
      <div className="max-w-[1470px] mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold my-3 ">All Jobs</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
            <p className="text-lg">
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

        {/* ✅ Search and Filter Section */}
        <div className="mb-8">
           {/* Search Bar */}
            <div className="relative flex-1 max-w-xl my-4">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search jobs by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
           

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-emerald-500 text-white shadow-md"
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-600"
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-emerald-500 text-white shadow-md"
                      : "bg-white border-2 border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            Showing {currentJobs.length} of {filteredAndSortedJobs.length} jobs
            {searchQuery && (
              <span className="ml-2">
                for "<span className="font-semibold">{searchQuery}</span>"
              </span>
            )}
            {selectedCategory !== "all" && (
              <span className="ml-2">
                in <span className="font-semibold">{selectedCategory}</span>
              </span>
            )}
          </div>
        </div>

        {/* Jobs Grid */}
        {currentJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {currentJobs.map((job) => (
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

                  {/* - view details */}
                  <NavLink
                    to={`/jobdetails/${job._id}`}
                    className="absolute top-3 right-4  rounded-full p-2 shadow-md"
                  >
                    <button className="px-3 py-1 border border-gray-300 bg-gray-800/60 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                      Details
                    </button>
                  </NavLink>
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
        ) : (
          // ✅ No Results Found
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              No Jobs Found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* ✅ Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white border-2 border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-600"
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-xl font-medium transition-all duration-300 ${
                      currentPage === page
                        ? "bg-emerald-500 text-white shadow-md"
                        : "bg-white border-2 border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-600"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white border-2 border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-600"
              }`}
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Page Info */}
        {totalPages > 1 && (
          <div className="mt-4 text-center text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
        )}
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