// pages/Integrations.jsx
import {
  FaAws,
  FaDropbox,
  FaGithub,
  FaGoogle,
  FaMicrosoft,
  FaSlack,
  FaTrello,
  FaWordpress,
} from "react-icons/fa";
import { SiAsana, SiNotion, SiZapier, SiZoom } from "react-icons/si";

const Integrations = () => {
  const integrations = [
    {
      icon: <FaSlack className="w-10 h-10" />,
      name: "Slack",
      category: "Communication",
      description:
        "Get course notifications and updates directly in your Slack workspace.",
    },
    {
      icon: <FaGoogle className="w-10 h-10" />,
      name: "Google Workspace",
      category: "Productivity",
      description:
        "Sync with Google Calendar, Drive, and more for seamless workflow.",
    },
    {
      icon: <FaMicrosoft className="w-10 h-10" />,
      name: "Microsoft 365",
      category: "Productivity",
      description:
        "Integrate with Teams, OneDrive, and other Microsoft services.",
    },
    {
      icon: <SiZoom className="w-10 h-10" />,
      name: "Zoom",
      category: "Video",
      description:
        "Host live sessions and webinars directly within the platform.",
    },
    {
      icon: <FaGithub className="w-10 h-10" />,
      name: "GitHub",
      category: "Development",
      description:
        "Submit coding assignments and track projects with GitHub integration.",
    },
    {
      icon: <SiNotion className="w-10 h-10" />,
      name: "Notion",
      category: "Productivity",
      description:
        "Export notes and course materials to your Notion workspace.",
    },
    {
      icon: <FaTrello className="w-10 h-10" />,
      name: "Trello",
      category: "Project Management",
      description:
        "Manage learning tasks and track progress with Trello boards.",
    },
    {
      icon: <SiAsana className="w-10 h-10" />,
      name: "Asana",
      category: "Project Management",
      description: "Sync learning goals with your Asana projects and tasks.",
    },
    {
      icon: <FaDropbox className="w-10 h-10" />,
      name: "Dropbox",
      category: "Storage",
      description: "Access course materials and store downloads in Dropbox.",
    },
    {
      icon: <SiZapier className="w-10 h-10" />,
      name: "Zapier",
      category: "Automation",
      description: "Create custom automations with thousands of other apps.",
    },
    {
      icon: <FaWordpress className="w-10 h-10" />,
      name: "WordPress",
      category: "CMS",
      description: "Embed courses and content on your WordPress website.",
    },
    {
      icon: <FaAws className="w-10 h-10" />,
      name: "AWS",
      category: "Cloud",
      description:
        "Enterprise-grade cloud infrastructure for your organization.",
    },
  ];

  const categories = [...new Set(integrations.map((i) => i.category))];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Seamless Integrations
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Connect SkillBay with your favorite tools and platforms to create a
            unified learning ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Integrations
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our growing library of integrations designed to enhance
              your learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-colors">
                    {integration.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                      {integration.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-1">
                      {integration.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {integration.description}
                    </p>
                  </div>
                </div>
                <button className="mt-4 w-full py-2 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 rounded-lg font-medium hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-colors">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Integration */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Tool?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            We're constantly adding new integrations. Let us know what tools
            you'd like to see integrated.
          </p>
          <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
            Request an Integration
          </button>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
