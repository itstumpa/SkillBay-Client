// pages/Terms.jsx
const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using SkillBay's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.",
    },
    {
      title: "Use License",
      content:
        "Permission is granted to temporarily access the materials (courses, content, information) on SkillBay's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or public display; attempt to decompile or reverse engineer any software contained on SkillBay's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server.",
    },
    {
      title: "Account Responsibilities",
      content:
        "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password. You must be at least 13 years old to use this service. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.",
    },
    {
      title: "Course Access and Completion",
      content:
        "Upon enrollment in a course, you will have access to the course materials for the duration specified in your subscription plan. Certificates of completion are issued only upon successful completion of all required course components. SkillBay reserves the right to modify, suspend, or discontinue any course at any time without notice.",
    },
    {
      title: "Payment and Refunds",
      content:
        "All payments are processed securely through our payment providers. Subscription fees are billed in advance on a monthly or annual basis. You may cancel your subscription at any time, but refunds are only provided within the first 14 days of your initial subscription. Enterprise customers may have different terms as specified in their service agreements.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on SkillBay, including but not limited to courses, videos, text, graphics, logos, and software, is the property of SkillBay or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of the content without prior written permission.",
    },
    {
      title: "User Content",
      content:
        "By posting content on SkillBay (such as forum posts, comments, or assignments), you grant SkillBay a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such content. You represent and warrant that you own or have the necessary rights to post the content and that it does not violate any third-party rights.",
    },
    {
      title: "Prohibited Conduct",
      content:
        "You agree not to: share your account credentials with others; access courses you haven't enrolled in; use automated systems to access the platform; harass, abuse, or harm other users; post false, misleading, or inappropriate content; attempt to circumvent any security measures; or use the platform for any illegal purposes.",
    },
    {
      title: "Disclaimer",
      content:
        "The materials on SkillBay's website are provided on an 'as is' basis. SkillBay makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      title: "Limitations of Liability",
      content:
        "In no event shall SkillBay or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SkillBay's website, even if SkillBay or a SkillBay authorized representative has been notified orally or in writing of the possibility of such damage.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the United States. Any disputes arising from these terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.",
    },
    {
      title: "Changes to Terms",
      content:
        "SkillBay reserves the right to revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the then-current version of these Terms of Service. We will notify users of any material changes via email or through a notice on our website.",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="pb-20 pt-40 px-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-gray-400">
            Effective Date: January 15, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Quick Summary */}
          <div className=" rounded-2xl p-6 mb-12 border-l-4 border-emerald-600">
            <h2 className="text-xl font-bold mb-2">Quick Summary</h2>
            <p className="text-gray-600 dark:text-gray-400">
              By using SkillBay, you agree to these terms. You must be 13+ to
              use our services. Don't share your account, respect intellectual
              property, and be kind to other learners. If you have questions,
              contact our legal team.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="pl-11">
                <p className=" leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}

         
        </div>
      </section>
    </div>
  );
};

export default Terms;
