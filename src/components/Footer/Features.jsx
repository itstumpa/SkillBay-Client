// pages/Features.jsx
import {
  FaBolt,
  FaChartLine,
  FaCloud,
  FaGlobe,
  FaMobile,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router";

const Features = () => {
  const features = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Fast Learning",
      description:
        "Accelerate your learning journey with our optimized course delivery system and personalized learning paths.",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Progress Tracking",
      description:
        "Monitor your progress with detailed analytics and insights to help you stay on track with your goals.",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Community Support",
      description:
        "Connect with fellow learners and instructors through our vibrant community forums and discussion groups.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Secure Platform",
      description:
        "Your data is protected with enterprise-grade security measures and end-to-end encryption.",
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Mobile Learning",
      description:
        "Learn on the go with our fully responsive platform and dedicated mobile applications.",
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud Storage",
      description:
        "Access your courses and materials anytime, anywhere with our reliable cloud infrastructure.",
    },
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: "Instant Access",
      description:
        "Get immediate access to courses upon enrollment with no waiting time or complicated setup.",
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Learn from instructors around the world and access courses in multiple languages.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative py-20 px-4 bg-emerald/300 dark:bg-emerald-900"> */}
      <section className="relative pt-40 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Powerful Features for Modern Learning
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Discover all the tools and features that make SkillBay the preferred
            platform for thousands of learners worldwide.
          </p>
          <Link
            to="/pricing"
            className="inline-block dark:bg-white bg-black text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className=" max-w-2xl mx-auto">
              Our comprehensive feature set is designed to provide the best
              learning experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className=" dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 mb-20 px-4 bg-emerald-600 dark:bg-emerald-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-emerald-100 mb-8">
            Join thousands of learners who are already transforming their
            careers with SkillBay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
            >
              View Pricing
            </Link>
            <Link
              to="/faq"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
