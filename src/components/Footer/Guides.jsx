// pages/Guides.jsx
import { FaArrowRight, FaClock, FaUser } from "react-icons/fa";

const Guides = () => {
  const guides = [
    {
      category: "Getting Started",
      items: [
        {
          title: "How to Create Your First Course",
          description:
            "A step-by-step guide to creating and publishing your first course on SkillBay.",
          author: "SkillBay Team",
          readTime: "10 min read",
          difficulty: "Beginner",
          image: "📚",
        },
        {
          title: "Setting Up Your Profile",
          description:
            "Customize your profile to showcase your skills and track your learning journey.",
          author: "SkillBay Team",
          readTime: "5 min read",
          difficulty: "Beginner",
          image: "👤",
        },
        {
          title: "Understanding the Dashboard",
          description:
            "Navigate your dashboard like a pro and make the most of all available features.",
          author: "SkillBay Team",
          readTime: "8 min read",
          difficulty: "Beginner",
          image: "📊",
        },
      ],
    },
    {
      category: "For Instructors",
      items: [
        {
          title: "Creating Engaging Video Content",
          description:
            "Tips and best practices for creating high-quality video lessons that keep students engaged.",
          author: "John Smith",
          readTime: "15 min read",
          difficulty: "Intermediate",
          image: "🎬",
        },
        {
          title: "Building Your Course Curriculum",
          description:
            "Learn how to structure your course for maximum student retention and satisfaction.",
          author: "Sarah Johnson",
          readTime: "12 min read",
          difficulty: "Intermediate",
          image: "📝",
        },
        {
          title: "Pricing Strategies for Success",
          description:
            "Find the right price point for your courses to maximize enrollments and revenue.",
          author: "Mike Brown",
          readTime: "10 min read",
          difficulty: "Advanced",
          image: "💰",
        },
      ],
    },
    {
      category: "For Developers",
      items: [
        {
          title: "API Authentication Best Practices",
          description:
            "Secure your API integrations with these authentication best practices.",
          author: "Dev Team",
          readTime: "8 min read",
          difficulty: "Intermediate",
          image: "🔐",
        },
        {
          title: "Building a Custom LMS with SkillBay API",
          description:
            "Create your own learning management system using our powerful API.",
          author: "Dev Team",
          readTime: "20 min read",
          difficulty: "Advanced",
          image: "🛠️",
        },
        {
          title: "Webhooks Integration Guide",
          description:
            "Set up webhooks to receive real-time notifications about events in your account.",
          author: "Dev Team",
          readTime: "10 min read",
          difficulty: "Advanced",
          image: "🔔",
        },
      ],
    },
    {
      category: "Tips & Tricks",
      items: [
        {
          title: "10 Ways to Learn Faster",
          description:
            "Science-backed techniques to accelerate your learning and retain more information.",
          author: "Learning Science Team",
          readTime: "7 min read",
          difficulty: "Beginner",
          image: "🚀",
        },
        {
          title: "Building a Consistent Learning Habit",
          description:
            "Create a sustainable learning routine that fits your lifestyle.",
          author: "SkillBay Team",
          readTime: "6 min read",
          difficulty: "Beginner",
          image: "📅",
        },
      ],
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Advanced":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="py-20 px-4 t">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Guides & Tutorials
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Learn how to make the most of SkillBay with our comprehensive guides
            and tutorials.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search guides..."
              className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Guides Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {guides.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-emerald-600 rounded-full"></span>
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((guide, guideIndex) => (
                  <article
                    key={guideIndex}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-4">{guide.image}</div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getDifficultyColor(
                          guide.difficulty
                        )}`}
                      >
                        {guide.difficulty}
                      </span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <FaUser className="w-4 h-4" />
                          <span>{guide.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaClock className="w-4 h-4" />
                          <span>{guide.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <button className="w-full flex items-center justify-center gap-2 py-3 border-2 border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400 rounded-xl font-medium hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-colors">
                        Read Guide
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get New Guides in Your Inbox
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Subscribe to our newsletter and never miss a new guide or tutorial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-1 max-w-md"
            />
            <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guides;
