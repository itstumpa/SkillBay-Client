// pages/Privacy.jsx
const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: When you create an account, we collect your name, email address, and password. If you make a purchase, we also collect payment information.",
        "Usage Data: We automatically collect information about how you use our platform, including pages visited, courses viewed, time spent on the platform, and your progress.",
        "Device Information: We collect information about the device you use to access SkillBay, including device type, operating system, browser type, and IP address.",
        "Cookies: We use cookies and similar technologies to enhance your experience, remember your preferences, and analyze platform usage.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our services",
        "To personalize your learning experience and recommend courses",
        "To process transactions and send related information",
        "To send promotional communications (with your consent)",
        "To detect, investigate, and prevent fraudulent or unauthorized activity",
        "To comply with legal obligations",
      ],
    },
    {
      title: "Information Sharing",
      content: [
        "With service providers who assist in our operations (payment processors, hosting services, analytics providers)",
        "With instructors for courses you enroll in (limited to necessary information)",
        "When required by law or to protect our rights",
        "In connection with a merger, acquisition, or sale of assets",
        "With your consent or at your direction",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information. This includes encryption of data in transit and at rest, regular security audits, and access controls.",
        "While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "Access: You can request a copy of the personal information we hold about you.",
        "Correction: You can update or correct your personal information at any time through your account settings.",
        "Deletion: You can request deletion of your account and personal information.",
        "Opt-out: You can opt out of promotional communications at any time.",
        "Data Portability: You can request your data in a portable format.",
      ],
    },
    {
      title: "Children's Privacy",
      content: [
        "SkillBay is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.",
      ],
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date. We encourage you to review this policy periodically.",
      ],
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="pb-20 pt-40 px-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-400">
            Last Updated: January 15, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <div className=" rounded-2xl p-6 shadow-lg mb-12 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#section-${index}`}
                    className=" hover:underline"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div key={index} id={`section-${index}`} className="mb-12">
              <h2 className="text-2xl font-bold mb-4 ">
                {index + 1}. {section.title}
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      {item.includes(":") ? (
                        <>
                          <strong className="text-gray-800 dark:text-gray-200">
                            {item.split(":")[0]}:
                          </strong>
                          {item.split(":").slice(1).join(":")}
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Contact */}
          <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you have any questions about this Privacy Policy, please
              contact us.
            </p>
            <a
              href="mailto:privacy@skillbay.com"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
            >
              privacy@skillbay.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
