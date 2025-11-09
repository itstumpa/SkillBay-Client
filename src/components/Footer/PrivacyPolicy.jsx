import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-900 py-12 px-6 mt-20 md:px-20 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="mb-6">
          At <strong>SearchSkill</strong>, your privacy is very important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Personal Information:</strong> When you sign up, we may collect your name, email address, phone number, and location.</li>
          <li><strong>Profile Data:</strong> Skills offered, skills desired, bio, profile photo, and availability.</li>
          <li><strong>Usage Data:</strong> Information on how you interact with the platform, including messages, ratings, and views.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>To create and manage user accounts</li>
          <li>To connect users for skill-sharing and communication</li>
          <li>To improve our services and personalize your experience</li>
          <li>To send notifications and respond to inquiries</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Information Sharing</h2>
        <p className="mb-6">
          We do not sell your data. We may share limited information:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>With other users when you interact with them</li>
          <li>With service providers who help operate the platform</li>
          <li>If required by law or to protect user safety</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Data Security</h2>
        <p className="mb-6">
          We use standard security practices to protect your information. However, no online system is 100% secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Your Choices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>You can update or delete your profile at any time</li>
          <li>You can opt out of marketing emails</li>
          <li>You may request access to the data we store about you</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. When we do, we will notify users through the platform or by email.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this policy, feel free to contact us at <strong>privacy@searchskill.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
