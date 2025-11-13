import { ArrowLeft, Briefcase, Mail, Tag } from "lucide-react";
import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import ApplyForm from "../../../components/ApplyForm.jsx";
import Loading from "../../../components/Loading.jsx";
import { AuthContext } from "../../../contexts/AuthContext.jsx";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user: authuser } = use(AuthContext);

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // ✅ Fetch job details
  useEffect(() => {
    fetch(`https://skill-bay-ass10-s.vercel.app/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job:", error);
        setLoading(false);
      });
  }, [id]);
  console.log(user);
  // ✅ Open modal

  const handleApply = () => {
    // Check if logged-in user is the job poster
    if (authuser?.email === user?.userEmail) {
      toast.warning("You can’t apply to your own job!");
      return; // stop here
    }

    // Otherwise open the modal
    setShowModal(true);
  };

  // ✅ Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-semibold">Back</span>
        </button>

        {/* Job Details Card */}
        {user && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            {/* Cover Image */}
            <div className="relative h-[700px]">
              <img
                src={user.coverImage}
                alt={user.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-2 bg-emerald-500 rounded-full text-white text-sm font-semibold mb-3">
                  {user.category}
                </span>
                <h1 className="text-4xl font-bold text-white">{user.title}</h1>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Posted By Section */}
              <div className="flex  items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                <img
                  src={user.provider_image}
                  alt={user.postedBy}
                  className="w-16 h-16 rounded-full border-2 border-emerald-500 object-cover"
                />
                <div>
                  <p className="text-sm text-gray-500">Posted By :</p>
                  <p className="text-xl font-bold text-gray-900">
                    {user.postedBy}
                  </p>
                  <p className="text-sm text-gray-600">{user.userEmail}</p>
                </div>
              </div>

              {/* Category */}
              <div className="flex items-center gap-3 mb-6">
                <Tag size={20} className="text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {user.category}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={22} className="text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Job Description
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {user.summary}
                </p>
              </div>

              {/* Contact Email */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <Mail size={20} className="text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500">Contact Email</p>
                  <a
                    href={`mailto:${user.userEmail}`}
                    className="text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    {user.userEmail}
                  </a>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={handleApply}
                className="w-full px-8 py-4 rounded-xl bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply for this Job
              </button>
            </div>
          </div>
        )}

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
                Apply for {user.title}
              </h2>

              <ApplyForm selectedJob={user} onClose={handleCloseModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
