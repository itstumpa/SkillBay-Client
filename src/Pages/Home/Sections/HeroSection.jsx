import React from 'react';
import hero from '../../../assets/hero.jpg';
import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] mt-[70px]">
      {/* Background Image */}
      <img
        src={hero}
        alt="Hero Background"
        className="w-full h-full object-left "
        style={{ objectPosition: '10% 20% ' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex items-center px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1470px] w-full text-left text-white mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-[800px] leading-tight">
            Find the Perfect Freelancer for Every Project
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 max-w-[800px] text-gray-200">
            Connect with talented professionals ready to bring your ideas to life. 
            From web development to graphic design, find skilled experts in minutes.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-[600px] mt-6">
            <input
              type="search"
              placeholder="Search for Web Developer, Writer, Graphic Designer, etc..."
              className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 bg-white focus:border-[#34a85a] focus:ring-2 focus:ring-[#34a85a]/30 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to='/alljobs'>
            
            <button className="px-6 py-3 btn-bg-button text-white font-semibold rounded-md transition-all duration-200">
              Brouse Job
            </button>
            </Link>
            <Link to='/becomeafreelancer'>
            
            <button className="px-6 py-3 btn-button font-semibold rounded-md transition-all duration-200">
              Start Selling
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
