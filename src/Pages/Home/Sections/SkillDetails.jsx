import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import skillsData from '../../../../public/skills.json';
import "animate.css";


const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const selectedSkill = skillsData.find(skill => skill.skillId === parseInt(id));
    setSkill(selectedSkill);
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: '', email: '' });
    setShowForm(false);
  };

  if (!skill) return <div>Loading...</div>;

  return (
  <div className="p-4 sm:p-6 max-w-7xl mx-auto mt-20">
    <Toaster position="top-center" />

    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
      {skill.skillName} - Details
    </h1>

    {/* Skill Detail */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-64 sm:h-[500px] object-cover"
      />
      <div className="p-4 sm:p-6 space-y-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-center sm:text-left gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold">{skill.skillName}</h2>
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 text-sm sm:text-lg text-gray-600">
            <span>💲{skill.price}</span>
            <span>⭐ {skill.rating}</span>
            <span className="bg-amber-300 px-3 rounded-md">
              {skill.slotsAvailable} slots
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600">
          By {skill.providerName} ({skill.category})
        </p>
        <div className="text-sm text-gray-500">Email: {skill.providerEmail}</div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-gray-700 text-sm sm:text-base">{skill.description}</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#5754E8] hover:bg-[#3e3cbc] transition text-sm sm:text-base text-white px-5 py-2 rounded-md"
          >
            Book a Session
          </button>
        </div>
      </div>
    </div>

    {/* Popup Modal */}
    {showForm && (
      <div className="fixed inset-0 flex items-center px-10 justify-center backdrop-blur-sm bg-black/10 z-50">
        <div className="bg-white shadow-lg p-6  rounded-lg max-w-md w-full relative animate__animated animate__fadeInDown">
          {/* Close Button */}
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>

          <h2 className="text-2xl font-semibold mb-4 text-center">
            Book a Session
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#5754E8] text-white rounded-md font-semibold hover:bg-[#3e3cbc] transition text-sm sm:text-base py-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )}
  </div>
);

};

export default SkillDetails;
