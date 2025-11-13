import React from 'react';
import { BriefcaseIcon, UserIcon, CurrencyDollarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const HowItWorks = () => {
 

  const clientSteps = [
    {
      title: "Post Project",
      description: "Post your project or browse freelancer profiles and services.",
      icon: <BriefcaseIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Review & Hire",
      description: "Review proposals, check portfolios, and hire the perfect match.",
      icon: <ShieldCheckIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Collaborate & Pay",
      description: "Collaborate, approve work, and pay securely through our platform.",
      icon: <CurrencyDollarIcon className="w-8 h-8 text-white" />,
    },
  ];

  const freelancerSteps = [
    {
      title: "Create Profile",
      description: "Create your profile and showcase your skills with a stunning portfolio.",
      icon: <UserIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Submit Proposals",
      description: "Browse projects and submit compelling proposals to clients.",
      icon: <ClockIcon className="w-8 h-8 text-white" />,
    },
    {
      title: "Deliver & Get Paid",
      description: "Deliver great work, get paid, and build your reputation.",
      icon: <CurrencyDollarIcon className="w-8 h-8 text-white" />,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const renderSteps = (steps) => (
    <motion.div
      className="flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          variants={cardVariants}
          className="flex items-start gap-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
            {step.icon}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
            <p className="text-gray-700 mt-1">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className="py-10">
      <div className="max-w-[1470px] mx-auto lg:px-10 md:px-6 px-4  text-left">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
         
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                        How It Works in 3 Simple Steps
          </h2>
        
        </motion.div>

        {/* Flex layout for clients and freelancers */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Clients */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <BriefcaseIcon className={`w-10 h-10 text-green-600`} />
              <h3 className="text-2xl font-semibold text-gray-900">For Clients</h3>
            </div>
            {renderSteps(clientSteps)}
          </div>

          {/* Freelancers */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <UserIcon className={`w-10 h-10 text-green-600`} />
              <h3 className="text-2xl font-semibold text-gray-900">For Freelancers</h3>
            </div>
            {renderSteps(freelancerSteps)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
