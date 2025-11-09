import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import '../../App.css';

const auth = getAuth();

function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const { user } = useAuth();

  const navbarClasses = `navbar px-4 md:px-8 lg:px-20 fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-between items-center ${
    isHome
      ? scrolled
        ? 'bg-black/30 backdrop-blur-md text-white shadow-md'
        : 'bg-transparent text-black'
      : 'bg-black/30 backdrop-blur-md text-white shadow-md'
  }`;

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className={navbarClasses}>
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${scrolled ? 'text-white' : 'text-black'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow ${
              scrolled ? 'bg-black/30 text-white' : 'bg-white text-black'
            }`}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {!user ? (
              <>
                <li><NavLink to="/alljobs">All Jobs</NavLink></li>
                <li><NavLink to="/addajob">Add a Job</NavLink></li>
                <li><NavLink to="/becomeafreelancer">Become a Freelancer</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
              </>
            ) : (
              <>
                <li><NavLink to="/myprofile">My Profile</NavLink></li>
                <li><NavLink to="/acceptedtask">My Accepted Task</NavLink></li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-center flex justify-center p-2 btn-ghost font-semibold mt-6 text-white hover:bg-red-700"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-6 w-6 md:h-10 md:w-10"
          />
          <span className={`text-lg md:text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-white' : 'text-black'}`}>
            SkillBay
          </span>
        </NavLink>
      </div>

      {/* Navbar End */}
      <div className={`navbar-end hidden lg:flex items-center font-semibold space-x-4 ${scrolled ? 'text-white' : 'text-black'}`}>
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!user ? (
            <>
              <li><NavLink to="/alljobs">All Jobs</NavLink></li>
              <li><NavLink to="/addajob">Add a Job</NavLink></li>
              <li><NavLink to="/becomeafreelancer">Become a Freelancer</NavLink></li>
              <li><NavLink to="/register">Register</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/myprofile" className="flex items-center text-center">
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user.displayName || "User"}
                  >
                    <img
                      src={user.photoURL || "/default-avatar.png"}
                      referrerPolicy="no-referrer"
                      alt="User Avatar"
                      className="w-8 h-8 border-2 rounded-full object-cover cursor-pointer"
                    />
                  </div>
                  <span className="ml-2">My Profile</span>
                </NavLink>

                <li><NavLink to="/acceptedtask">My Accepted Task</NavLink></li>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className={`btn btn-ghost ml-8 font-semibold transition-colors duration-300 ${
                    scrolled ? 'bg-white text-black hover:text-violet-600' : 'bg-white text-black hover:text-violet-600'
                  }`}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
