// layouts/DashboardLayout.jsx
import { useState, useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  BookmarkCheck,
  Settings,
  User,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Bell,
  Search,
  PlusCircle,
  Users,
  BarChart3,
  MessageSquare,
  HelpCircle,
  Moon,
  Sun,
} from "lucide-react";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Handle logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Sidebar navigation items
  const sidebarItems = [
    {
      title: "Main",
      items: [
        {
          name: "Dashboard",
          path: "/dashboard",
          icon: <LayoutDashboard size={20} />,
        },
        {
          name: "My Added Jobs",
          path: "/dashboard/my-added-jobs",
          icon: <Briefcase size={20} />,
        },
        {
          name: "Add a Job",
          path: "/dashboard/add-job",
          icon: <PlusCircle size={20} />,
        },
      ],
    },
    {
      title: "Applications",
      items: [
        {
          name: "My Accepted Task",
          path: "/dashboard/accepted-task",
          icon: <FileText size={20} />,
        },
       //  {
       //    name: "Saved Jobs",
       //    path: "/dashboard/saved-jobs",
       //    icon: <BookmarkCheck size={20} />,
       //  },
       //  {
       //    name: "Messages",
       //    path: "/dashboard/messages",
       //    icon: <MessageSquare size={20} />,
       //    badge: 3,
       //  },
      ],
    },
//     {
//       title: "Analytics",
//       items: [
//         {
//           name: "Statistics",
//           path: "/dashboard/statistics",
//           icon: <BarChart3 size={20} />,
//         },
//         {
//           name: "Applicants",
//           path: "/dashboard/applicants",
//           icon: <Users size={20} />,
//         },
//       ],
//     },
    
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      {/* Sidebar Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              SkillBay
            </span>
          </NavLink>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="py-6 px-4 h-[calc(100vh-4rem)] overflow-y-auto">
          {/* User Info Card */}
          <div className="mb-6 p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl text-white">
            <div className="flex items-center gap-3">
              <img
                src={user?.photoURL || "https://via.placeholder.com/40"}
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-white/30 object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">
                  {user?.displayName || "User"}
                </h3>
                <p className="text-sm text-emerald-100 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <div className="flex-1 text-center p-2 bg-white/20 rounded-lg">
                <p className="text-lg font-bold">12</p>
                <p className="text-xs text-emerald-100">Jobs</p>
              </div>
              <div className="flex-1 text-center p-2 bg-white/20 rounded-lg">
                <p className="text-lg font-bold">48</p>
                <p className="text-xs text-emerald-100">Applied</p>
              </div>
              <div className="flex-1 text-center p-2 bg-white/20 rounded-lg">
                <p className="text-lg font-bold">5</p>
                <p className="text-xs text-emerald-100">Saved</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            {sidebarItems.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h4 className="px-3 mb-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <NavLink
                        to={item.path}
                        end={item.path === "/dashboard"}
                        onClick={() => setSidebarOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`
                        }
                      >
                        {item.icon}
                        <span className="flex-1">{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              <Menu size={24} />
            </button>

            {/* Search Bar */}
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 lg:w-80 bg-gray-100 dark:bg-gray-700 border-0 rounded-xl text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Notifications */}
            <button className="relative p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdown(!profileDropdown)}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <img
                  src={user?.photoURL || "https://via.placeholder.com/32"}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-200">
                  {user?.displayName?.split(" ")[0] || "User"}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform duration-200 ${
                    profileDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {profileDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setProfileDropdown(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                      <p className="font-semibold text-gray-800 dark:text-white truncate">
                        {user?.displayName || "User"}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {user?.email}
                      </p>
                    </div>
                    <NavLink
                      to="/dashboard/profile"
                      onClick={() => setProfileDropdown(false)}
                      className="flex items-center gap-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <User size={18} />
                      My Profile
                    </NavLink>
                    <NavLink
                      to="/dashboard/settings"
                      onClick={() => setProfileDropdown(false)}
                      className="flex items-center gap-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Settings size={18} />
                      Settings
                    </NavLink>
                    <div className="border-t border-gray-100 dark:border-gray-700 mt-2 pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="py-4 px-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} SkillBay. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Help
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;