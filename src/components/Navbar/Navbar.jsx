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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        : 'bg-transparent text-gray-900'
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
      <div className="w-full flex items-center justify-between">
        
        {/* Left: Hamburger Menu (Mobile & Tablet) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Center: Logo */}
        <div className="lg:flex-none flex-1 flex justify-center lg:justify-start">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-6 w-6 md:h-10 md:w-10"
            />
            <span className="text-lg md:text-2xl font-bold transition-colors duration-300">
              SkillBay
            </span>
          </NavLink>
        </div>

        {/* Right: Login/Register or Profile (Mobile & Tablet) */}
        <div className="lg:hidden">
          {!user ? (
            <NavLink 
              to="/login" 
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 transition-all duration-300"
            >
              Login
            </NavLink>
          ) : (
            <NavLink to="/myprofile" className="flex items-center">
              <img
                src={user.photoURL || "/default-avatar.png"}
                referrerPolicy="no-referrer"
                alt="User Avatar"
                className="w-8 h-8 border-2 border-white rounded-full object-cover"
              />
            </NavLink>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center font-semibold space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
            }
          >
            Home
          </NavLink>
          
          {!user ? (
            <>
              <NavLink 
                to="/alljobs" 
                className={({ isActive }) => 
                  `transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                All Jobs
              </NavLink>
              <NavLink 
                to="/addajob" 
                className={({ isActive }) => 
                  `transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                Add a Job
              </NavLink>
              <NavLink 
                to="/becomeafreelancer" 
                className={({ isActive }) => 
                  `transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                Become a Freelancer
              </NavLink>
              <NavLink 
                to="/register" 
                className={({ isActive }) => 
                  `transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                Register
              </NavLink>
              <NavLink 
                to="/login" 
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg"
              >
                Login
              </NavLink>
            </>
          ) : (
            <>
              <NavLink 
                to="/alljobs" 
                className={({ isActive }) => 
                  `transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                All Jobs
              </NavLink>
              <NavLink 
                to="/addajob" 
                className={({ isActive }) => 
                  `transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                Add a Job
              </NavLink>
              <NavLink 
                to="/acceptedtask" 
                className={({ isActive }) => 
                  `transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                My Accepted Task
              </NavLink>
              <NavLink 
                to="/myprofile" 
                className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-400"
              >
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  referrerPolicy="no-referrer"
                  alt="User Avatar"
                  className="w-8 h-8 border-2 border-white rounded-full object-cover"
                />
                <span>My Profile</span>
              </NavLink>
              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          <NavLink 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => 
              `block py-2 transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
            }
          >
            Home
          </NavLink>
          
          {!user ? (
            <>
              <NavLink 
                to="/alljobs" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block py-2 transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                All Jobs
              </NavLink>
              <NavLink 
                to="/addajob" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block py-2 transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                Add a Job
              </NavLink>
              <NavLink 
                to="/becomeafreelancer" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block py-2 transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                Become a Freelancer
              </NavLink>
              <NavLink 
                to="/register" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block py-2 transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink 
                to="/alljobs" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block py-2 transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                All Jobs
              </NavLink>
              <NavLink 
                to="/addajob" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block py-2 transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                Add a Job
              </NavLink>
              <NavLink 
                to="/acceptedtask" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block py-2 transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                My Accepted Task
              </NavLink>
              <NavLink 
                to="/myprofile" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `block py-2 transition-colors duration-300 hover:text-emerald-400 ${isActive ? 'text-emerald-400' : ''}`
                }
              >
                My Profile
              </NavLink>
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 text-red-400 hover:text-red-300 transition-colors duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;