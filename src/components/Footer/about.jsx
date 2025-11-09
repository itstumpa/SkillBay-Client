import React from 'react';

const about = () => {
      return (
            <div className='mt-20 bg-amber-100'>
                   <div className="bg-white text-gray-900 py-12 px-6 md:px-20 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <p className="text-lg mb-6 font-semibold">
          Empowering Communities Through Skill Sharing
        </p>

        <p className="mb-6">
          In today’s fast-paced, digital world, we believe that some of the most valuable learning
          still happens face-to-face — in living rooms, community centers, and local parks. That’s why
          we created <span className="font-semibold">SearchSkill</span>: an interactive
          platform where people can offer, learn, and trade skills within their local area.
        </p>

        <p className="mb-6">
          Whether you’re looking to learn guitar from a neighbor, trade Spanish lessons for yoga
          sessions, or get coding help from someone nearby — our platform connects everyday experts
          with curious learners, right where they live.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
        <p className="mb-6">
          To make skill-sharing more accessible, personal, and community-driven. We aim to foster
          local connections, encourage lifelong learning, and empower individuals to both teach and grow.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>A Local Marketplace for Skills</strong> — Discover real people offering lessons, workshops, and training in everything from music and languages to fitness and tech.</li>
          <li><strong>Two-Way Learning</strong> — Not just a place to learn — a place to teach. Users can be both students and instructors, sharing what they know and gaining from others.</li>
          <li><strong>Trusted Connections</strong> — With user ratings and verified profiles, we help you find the right skill partner with confidence.</li>
          <li><strong>Flexible Exchanges</strong> — Pay, trade, or barter — our platform supports multiple models of exchange, so your knowledge can be as valuable as your wallet.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Why It Matters</h2>
        <p className="mb-10">
          Learning shouldn’t be limited by cost, access, or formality. Everyone has something to teach,
          and everyone has something they want to learn. By connecting people locally, we’re helping build
          stronger, smarter, and more connected communities — one skill at a time.
        </p>

        <div className="text-center">
          <button className="bg-[#5754E8] text-white px-6 py-3 rounded-lg shadow hover:bg-[#2d29fe] hover:shadow-lg transition">
            Join Us Today
          </button>
        </div>
      </div>
    </div>
            
            </div>
      );
};

export default about;