// pages/Documentation.jsx
import { useState } from "react";
import {
  FaBook,
  FaCode,
  FaDatabase,
  FaLock,
  FaQuestionCircle,
  FaRocket,
} from "react-icons/fa";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("getting-started");

  const sections = [
    { id: "getting-started", icon: <FaRocket />, title: "Getting Started" },
    { id: "authentication", icon: <FaLock />, title: "Authentication" },
    { id: "api-reference", icon: <FaCode />, title: "API Reference" },
    { id: "data-models", icon: <FaDatabase />, title: "Data Models" },
    {
      id: "troubleshooting",
      icon: <FaQuestionCircle />,
      title: "Troubleshooting",
    },
  ];

  const content = {
    "getting-started": {
      title: "Getting Started with SkillBay API",
      content: (
        <div className="space-y-6">
          <p>
            Welcome to the SkillBay API documentation. This guide will help you
            get started with integrating our platform into your applications.
          </p>

          <h3 className="text-xl font-bold">Prerequisites</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>A SkillBay account (Pro or Enterprise plan)</li>
            <li>Basic knowledge of REST APIs</li>
            <li>Your preferred programming language/framework</li>
          </ul>

          <h3 className="text-xl font-bold">Quick Start</h3>
          <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              {`# Install the SDK
npm install @skillbay/api-client

# Initialize the client
import SkillBay from '@skillbay/api-client';

const client = new SkillBay({
  apiKey: 'your_api_key'
});

# Fetch courses
const courses = await client.courses.list();`}
            </pre>
          </div>

          <h3 className="text-xl font-bold">Base URL</h3>
          <code className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            https://api.skillbay.com/v1
          </code>
        </div>
      ),
    },
    authentication: {
      title: "Authentication",
      content: (
        <div className="space-y-6">
          <p>
            SkillBay API uses API keys for authentication. You can generate an
            API key from your dashboard.
          </p>

          <h3 className="text-xl font-bold">API Key Authentication</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Include your API key in the Authorization header:
          </p>
          <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              {`Authorization: Bearer YOUR_API_KEY`}
            </pre>
          </div>

          <h3 className="text-xl font-bold">OAuth 2.0</h3>
          <p className="text-gray-600 dark:text-gray-400">
            For user-level access, we support OAuth 2.0:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>Redirect users to our authorization endpoint</li>
            <li>User grants permission</li>
            <li>Receive authorization code</li>
            <li>Exchange code for access token</li>
          </ol>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="font-semibold text-yellow-800 dark:text-yellow-200">
              Security Note
            </p>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              Never expose your API key in client-side code. Always make API
              calls from your server.
            </p>
          </div>
        </div>
      ),
    },
    "api-reference": {
      title: "API Reference",
      content: (
        <div className="space-y-6">
          <p>Complete reference for all available API endpoints.</p>

          <h3 className="text-xl font-bold">Courses</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-sm font-bold">
                  GET
                </span>
                <code>/courses</code>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                List all courses
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-sm font-bold">
                  GET
                </span>
                <code>/courses/:id</code>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Get a specific course
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-sm font-bold">
                  POST
                </span>
                <code>/courses/:id/enroll</code>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Enroll in a course
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold">Users</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-sm font-bold">
                  GET
                </span>
                <code>/users/me</code>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Get current user profile
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-sm font-bold">
                  GET
                </span>
                <code>/users/me/enrollments</code>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Get user's enrolled courses
              </p>
            </div>
          </div>
        </div>
      ),
    },
    "data-models": {
      title: "Data Models",
      content: (
        <div className="space-y-6">
          <p>Understanding the data structures used in the API.</p>

          <h3 className="text-xl font-bold">Course Object</h3>
          <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              {`{
  "id": "string",
  "title": "string",
  "description": "string",
  "instructor": {
    "id": "string",
    "name": "string"
  },
  "duration_hours": "number",
  "modules": "array",
  "rating": "number",
  "enrolled_count": "number",
  "created_at": "datetime",
  "updated_at": "datetime"
}`}
            </pre>
          </div>

          <h3 className="text-xl font-bold">User Object</h3>
          <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              {`{
  "id": "string",
  "email": "string",
  "name": "string",
  "avatar_url": "string",
  "plan": "free | pro | enterprise",
  "created_at": "datetime"
}`}
            </pre>
          </div>
        </div>
      ),
    },
    troubleshooting: {
      title: "Troubleshooting",
      content: (
        <div className="space-y-6">
          <p>Common issues and how to resolve them.</p>

          <h3 className="text-xl font-bold">Common Errors</h3>
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="font-semibold text-red-800 dark:text-red-200">
                401 Unauthorized
              </p>
              <p className="text-red-700 dark:text-red-300 text-sm">
                Your API key is invalid or missing. Check that you're including
                it in the Authorization header.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="font-semibold text-red-800 dark:text-red-200">
                429 Too Many Requests
              </p>
              <p className="text-red-700 dark:text-red-300 text-sm">
                You've exceeded the rate limit. Wait a few minutes and try
                again, or upgrade your plan.
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="font-semibold text-red-800 dark:text-red-200">
                500 Internal Server Error
              </p>
              <p className="text-red-700 dark:text-red-300 text-sm">
                Something went wrong on our end. Please try again later or
                contact support.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold">Need Help?</h3>
          <p className="text-gray-600 dark:text-gray-400">
            If you're still having issues, contact our developer support team at{" "}
            <a
              href="mailto:developers@skillbay.com"
              className="text-emerald-600 hover:underline"
            >
              developers@skillbay.com
            </a>
          </p>
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero */}
      <section className="py-12 px-4 bg-gradient-to-br from-gray-900 to-green-900 text-white">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <FaBook className="w-10 h-10" />
          <div>
            <h1 className="text-3xl font-bold">Documentation</h1>
            <p className="text-gray-300">
              Everything you need to integrate with SkillBay
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700 sticky top-4">
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {section.icon}
                      <span className="font-medium">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6">
                  {content[activeSection].title}
                </h2>
                {content[activeSection].content}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
