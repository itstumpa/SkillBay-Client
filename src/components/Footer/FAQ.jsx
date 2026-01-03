// pages/FAQ.jsx
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is SkillBay?",
          answer:
            "SkillBay is an online learning platform that offers a wide range of courses designed to help you develop new skills, advance your career, and achieve your personal learning goals. We partner with industry experts and top instructors to deliver high-quality educational content.",
        },
        {
          question: "How do I get started?",
          answer:
            "Getting started is easy! Simply create a free account, browse our course catalog, and enroll in any course that interests you. You can start learning immediately with our free courses, or upgrade to a paid plan for access to premium content.",
        },
        {
          question: "Is there a mobile app available?",
          answer:
            "Yes! SkillBay is available on both iOS and Android devices. Download our app from the App Store or Google Play Store to learn on the go. Your progress syncs automatically across all your devices.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your current billing period. We don't offer refunds for partial months.",
        },
        {
          question: "Is there a free trial?",
          answer:
            "Yes! All paid plans come with a 14-day free trial. You won't be charged until the trial period ends, and you can cancel anytime during the trial.",
        },
        {
          question: "Do you offer discounts for students?",
          answer:
            "Yes, we offer a 50% discount for students with a valid .edu email address. We also offer discounts for non-profit organizations and bulk purchases for teams.",
        },
      ],
    },
    {
      category: "Courses & Certificates",
      questions: [
        {
          question: "Are certificates included?",
          answer:
            "Certificates of completion are included with Pro and Enterprise plans. Upon completing a course, you'll receive a downloadable certificate that you can share on LinkedIn or include in your resume.",
        },
        {
          question: "How long do I have access to courses?",
          answer:
            "With an active subscription, you have unlimited access to all courses in your plan. If your subscription ends, you'll lose access to premium courses but can continue with free courses.",
        },
        {
          question: "Can I download courses for offline viewing?",
          answer:
            "Yes, Pro and Enterprise subscribers can download courses for offline viewing through our mobile app. Downloaded content can be accessed without an internet connection.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What browsers are supported?",
          answer:
            "SkillBay works best on the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience.",
        },
        {
          question: "How do I contact support?",
          answer:
            "You can reach our support team through the Help Center, email at support@skillbay.com, or live chat. Pro and Enterprise users have access to priority support with faster response times.",
        },
        {
          question: "What if I forget my password?",
          answer:
            "Click the 'Forgot Password' link on the login page, enter your email address, and we'll send you a link to reset your password. The link expires after 24 hours for security.",
        },
      ],
    },
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pb-20 pt-40 px-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl  max-w-2xl mx-auto">
            Find answers to common questions about SkillBay, our courses,
            pricing, and more.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 px-4 -mt-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-6 py-4 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const isOpen =
                    openIndex === `${categoryIndex}-${questionIndex}`;
                  return (
                    <div
                      key={questionIndex}
                      className=" rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          toggleQuestion(categoryIndex, questionIndex)
                        }
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-semibold pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <FaChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can't find the answer you're looking for? Our support team is here
            to help.
          </p>
          <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
