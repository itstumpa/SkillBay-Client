import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

const AddAJob = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    postedBy: user?.displayName || user?.name || "",
    category: "",
    summary: "",
    coverImage: "",
    userEmail: user?.email || "",
    provider_image: user.photoURL || "",
    skillsRequired: "",
    budgetAmount: "",
    budgetCurrency: "USD",
    locationType: "remote",
    applicationDeadline: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        postedBy: user.displayName || user.name || "",
        userEmail: user.email || "",
        provider_image: user.photoURL || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    // const { name, value } = e.target;

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare full object for MongoDB
    const jobData = {
      ...formData,
      skillsRequired: formData.skillsRequired
        .split(",")
        .map((skill) => skill.trim()),
      budget: {
        amount: Number(formData.budgetAmount),
        currency: formData.budgetCurrency,
      },
      postedDate: new Date().toISOString(),
      status: "open",
      proposalsCount: 0,
    };

    try {
      const res = await axios.post(
        "https://skill-bay-ass10-s.vercel.app/users",
        jobData
      );
      if (res.data.success) {
        toast.success("Job created successfully!");
        navigate("/"); // redirect to homepage
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create job!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900/30 flex items-center justify-center px-4 py-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white my-6 rounded-2xl shadow-xl w-full max-w-3xl p-8 space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Create New Job
        </h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400"
            placeholder="Enter job title"
          />
        </div>

        {/* Posted By */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Posted By
            </label>
            <input
              type="text"
              name="postedBy"
              required
              disabled
              value={formData.postedBy}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400"
              placeholder="Name of job poster"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              required
              disabled
              value={formData.userEmail}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400"
              placeholder="Email of poster"
            />
          </div>
        </div>

        {/* Category */}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 font-medium text-gray-700 cursor-pointer"
          >
            <option value="">Select a Category</option>
            <option value="Graphics Designer">🎨 Graphics Designer</option>
            <option value="Web Developer">💻 Web Developer</option>
            <option value="App Developer">📱 App Developer</option>
            <option value="Interior Designer">🏠 Interior Designer</option>
            <option value="Web Design">🖌️ Web Design</option>
            <option value="UI/UX Designer">✨ UI/UX Designer</option>
            <option value="Digital Marketing">📊 Digital Marketing</option>
            <option value="Content Writer">✍️ Content Writer</option>
            <option value="Video Editor">🎬 Video Editor</option>
            <option value="SEO Specialist">🔍 SEO Specialist</option>
            <option value="Data Analyst">📈 Data Analyst</option>
            <option value="Project Manager">📋 Project Manager</option>
            <option value="3D Designer">🎭 3D Designer</option>
            <option value="Blockchain Developer">
              ⛓️ Blockchain Developer
            </option>
            <option value="AI/ML Engineer">🤖 AI/ML Engineer</option>
            <option value="Game Developer">🎮 Game Developer</option>
            <option value="Cyber Security">🔐 Cyber Security</option>
            <option value="DevOps Engineer">⚙️ DevOps Engineer</option>
            <option value="Product Designer">🎯 Product Designer</option>
            <option value="Motion Graphics">🎞️ Motion Graphics</option>
          </select>
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Summary
          </label>
          <textarea
            name="summary"
            rows="3"
            required
            value={formData.summary}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400"
            placeholder="Describe the job details..."
          />
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cover Image URL
            </label>
            <input
              type="text"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Image URL"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Provider Image URL
            </label>
            <input
              type="text"
              disabled
              name="provider_image"
              value={formData.provider_image}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Profile image URL"
            />
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Skills Required (comma separated)
          </label>
          <input
            type="text"
            name="skillsRequired"
            value={formData.skillsRequired}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="React, Interior designer, Writer, Music..."
          />
        </div>

        {/* Budget */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Budget Amount
            </label>
            <input
              type="number"
              name="budgetAmount"
              value={formData.budgetAmount}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="5000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Currency
            </label>
            <select
              name="budgetCurrency"
              value={formData.budgetCurrency}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="USD">USD</option>
              <option value="BDT">BDT</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Application Deadline
          </label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location Type
          </label>
          <select
            name="locationType"
            value={formData.locationType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold text-lg shadow-lg transition-all"
          >
            {loading ? "Creating..." : "Create Job"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAJob;
