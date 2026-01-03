// pages/dashboard/DashboardHome.jsx
import {
  Briefcase,
  FileText,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { NavLink } from "react-router";

const Dashboard = () => {
  // Stats data
  const stats = [
    {
      title: "Total Jobs Posted",
      value: "12",
      change: "+2 this week",
      trend: "up",
      icon: <Briefcase className="w-6 h-6" />,
      color: "emerald",
    },
    {
      title: "Applications Received",
      value: "48",
      change: "+12 this week",
      trend: "up",
      icon: <FileText className="w-6 h-6" />,
      color: "blue",
    },
    {
      title: "Profile Views",
      value: "1,234",
      change: "+18% vs last month",
      trend: "up",
      icon: <Eye className="w-6 h-6" />,
      color: "purple",
    },
    {
      title: "Active Applicants",
      value: "24",
      change: "-3 this week",
      trend: "down",
      icon: <Users className="w-6 h-6" />,
      color: "orange",
    },
  ];

  // Recent applications
  const recentApplications = [
    {
      id: 1,
      jobTitle: "Senior React Developer",
      applicant: "John Doe",
      email: "john@example.com",
      date: "2 hours ago",
      status: "pending",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      jobTitle: "UI/UX Designer",
      applicant: "Sarah Smith",
      email: "sarah@example.com",
      date: "5 hours ago",
      status: "reviewed",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      jobTitle: "Full Stack Developer",
      applicant: "Mike Johnson",
      email: "mike@example.com",
      date: "1 day ago",
      status: "accepted",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      jobTitle: "Senior React Developer",
      applicant: "Emily Davis",
      email: "emily@example.com",
      date: "2 days ago",
      status: "rejected",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  // Recent jobs
  const recentJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      applications: 15,
      views: 234,
      status: "active",
      postedDate: "Jan 10, 2025",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      applications: 23,
      views: 456,
      status: "active",
      postedDate: "Jan 8, 2025",
    },
    {
      id: 3,
      title: "Backend Developer",
      applications: 8,
      views: 189,
      status: "closed",
      postedDate: "Jan 5, 2025",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "reviewed":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "accepted":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "rejected":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "active":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "closed":
        return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatColor = (color) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "blue":
        return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400";
      case "purple":
        return "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400";
      case "orange":
        return "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            Welcome back! 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Here's what's happening with your jobs today.
          </p>
        </div>
        <NavLink
          to="/dashboard/add-job"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
        >
          <Briefcase size={20} />
          Post New Job
        </NavLink>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${getStatColor(stat.color)}`}>
                {stat.icon}
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stat.title}
            </p>
            <p
              className={`text-xs mt-2 ${
                stat.trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              Recent Applications
            </h2>
            <NavLink
              to="/dashboard/applicants"
              className="text-sm text-emerald-500 hover:text-emerald-600 font-medium"
            >
              View All
            </NavLink>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {recentApplications.map((app) => (
              <div
                key={app.id}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={app.avatar}
                    alt={app.applicant}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 dark:text-white truncate">
                      {app.applicant}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      Applied for: {app.jobTitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">{app.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Jobs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              Your Jobs
            </h2>
            <NavLink
              to="/dashboard/my-jobs"
              className="text-sm text-emerald-500 hover:text-emerald-600 font-medium"
            >
              View All
            </NavLink>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {recentJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800 dark:text-white truncate pr-2">
                    {job.title}
                  </h4>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                      job.status
                    )}`}
                  >
                    {job.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <FileText size={14} />
                    {job.applications} apps
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={14} />
                    {job.views} views
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-2">{job.postedDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Ready to find your next hire?
            </h2>
            <p className="text-emerald-100">
              Post a new job and reach thousands of qualified candidates.
            </p>
          </div>
          <div className="flex gap-4">
            <NavLink
              to="/dashboard/add-job"
              className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Post a Job
            </NavLink>
            <NavLink
              to="/alljobs"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Browse Jobs
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;