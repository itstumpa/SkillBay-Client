// pages/API.jsx
import { useState } from "react";
import { FaCheck, FaCode, FaCopy } from "react-icons/fa";

const API = () => {
  const [copied, setCopied] = useState(null);

  const endpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/courses",
      description: "Retrieve a list of all available courses",
      example: `{
  "courses": [
    {
      "id": "course_123",
      "title": "Introduction to React",
      "instructor": "John Doe",
      "duration": "10 hours",
      "rating": 4.8
    }
  ],
  "total": 150,
  "page": 1
}`,
    },
    {
      method: "GET",
      endpoint: "/api/v1/courses/:id",
      description: "Get detailed information about a specific course",
      example: `{
  "id": "course_123",
  "title": "Introduction to React",
  "description": "Learn React from scratch",
  "modules": [...],
  "enrolled": 5420
}`,
    },
    {
      method: "POST",
      endpoint: "/api/v1/enrollments",
      description: "Enroll a user in a course",
      example: `{
  "enrollment_id": "enroll_456",
  "user_id": "user_789",
  "course_id": "course_123",
  "enrolled_at": "2025-01-15T10:30:00Z"
}`,
    },
    {
      method: "GET",
      endpoint: "/api/v1/users/:id/progress",
      description: "Get user's learning progress",
      example: `{
  "user_id": "user_789",
  "courses_completed": 5,
  "courses_in_progress": 2,
  "total_hours": 45
}`,
    },
  ];

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-green-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-4 py-1 bg-green-500/30 rounded-full text-green-300 text-sm font-medium mb-4">
                API v1.0
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build with SkillBay API
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Access our powerful API to integrate SkillBay's learning
                platform into your applications. Build custom learning
                experiences with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get API Key
                </button>
                <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Documentation
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gray-800 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-sm text-green-400 overflow-x-auto">
                  {`curl -X GET "https://api.skillbay.com/v1/courses" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaCode className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">RESTful API</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Clean, predictable REST endpoints that are easy to integrate.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Authentication</h3>
              <p className="text-gray-600 dark:text-gray-400">
                OAuth 2.0 and API key authentication for secure access.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">High Performance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Low latency responses with 99.9% uptime guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            API Endpoints
          </h2>
          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-lg text-sm font-bold w-fit ${
                        endpoint.method === "GET"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono">
                      {endpoint.endpoint}
                    </code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {endpoint.description}
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-500">
                      Response Example
                    </span>
                    <button
                      onClick={() => copyToClipboard(endpoint.example, index)}
                      className="text-gray-500 hover:text-emerald-600 transition-colors"
                    >
                      {copied === index ? (
                        <FaCheck className="w-5 h-5 text-green-500" />
                      ) : (
                        <FaCopy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <pre className="text-sm bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    {endpoint.example}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Rate Limits</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Plan</th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Requests/Hour
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">
                    Requests/Day
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4">Free</td>
                  <td className="px-6 py-4">100</td>
                  <td className="px-6 py-4">1,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Pro</td>
                  <td className="px-6 py-4">1,000</td>
                  <td className="px-6 py-4">10,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Enterprise</td>
                  <td className="px-6 py-4">Unlimited</td>
                  <td className="px-6 py-4">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default API;
