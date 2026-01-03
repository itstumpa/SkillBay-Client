
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Loading from "../../../components/Loading.jsx";
import { AuthContext } from "../../../contexts/AuthContext.jsx";

const LatestJob = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const { user: authuser } = useContext(AuthContext);
  const isLoggedIn = !!authuser;

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

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1470px] mx-auto md:px-6 px-4 lg:px-10">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            Latest Jobs
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {(showAll ? users : users.slice(0, 8)).map((user, index) => (
            <div
              key={user._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
            >
              {/* Image Container */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100">
                <img
                  src={user.coverImage}
                  alt={user.title}
                  className="w-full h-full object-cover"
                />
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-emerald-600 text-xs sm:text-sm font-semibold shadow-lg">
                    {user.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3rem]">
                  {user.title}
                </h3>

                {/* Provider Info */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                  <img
                    src={user.provider_image}
                    alt={user.postedBy}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-emerald-100"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-700 truncate">
                      {user.postedBy}
                    </p>
                    <p className="text-xs text-gray-500">Job Provider</p>
                  </div>
                </div>

                {/* Details Button */}
                <NavLink
                  // to={isLoggedIn ? `/jobdetails/${user._id}` : "/login"}
                  to={ `/jobdetails/${user._id}`}
                  className="block"
                >
                  <button className="w-full py-2.5 sm:py-3 btn-bg-button font-semibold rounded-lg shadow-md text-sm sm:text-base">
                    View Details
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className=" mt-8 sm:mt-12">
          <Link to="/alljobs">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 sm:px-8 py-3 sm:py-4 btn-bg-button font-semibold rounded-lg shadow-lg text-sm sm:text-base"
            >
              View All Jobs →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestJob;