import React from 'react';
import { FaUserCheck, FaLock, FaHeadset, FaRocket } from 'react-icons/fa'; // icons

const ChooseSkillbay = () => {
  const features = [
    {
      icon: <FaUserCheck className="text-4xl text-[#34a85a]" />,
      title: "Verified Professionals",
      description:
        "All freelancers are vetted with verified skills, portfolios, and client reviews to ensure quality work",
    },
    {
      icon: <FaLock className="text-4xl text-[#34a85a]" />,
      title: "Secure Payments",
      description:
        "Your money is protected with escrow. Funds are released only when you approve the completed work",
    },
    {
      icon: <FaHeadset className="text-4xl text-[#34a85a]" />,
      title: "24/7 Support",
      description:
        "Our dedicated support team is always ready to help resolve any issues and ensure smooth transactions",
    },
    {
      icon: <FaRocket className="text-4xl text-[#34a85a]" />,
      title: "Quick Delivery",
      description:
        "Get your projects completed fast with freelancers committed to delivering on time, every time",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-[1470px] mx-auto px-4 md:px-6 lg:px-10 text-left">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          Why Choose SkillBay?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-start space-y-4"
            >
              <div>{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseSkillbay;
