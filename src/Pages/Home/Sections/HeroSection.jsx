import React from 'react';
import hero from '../../../assets/hero.jpg';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Motion variants
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 2, 
        ease: 'easeOut',
        staggerChildren: 0.3
      } 
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: 'easeOut' } }
  };

  return (
    <div className="relative w-full  h-[60vh] sm:h-[65vh] md:h-[75vh] mt-[70px]">
      {/* Background Image */}
      <img
        src={hero}
        alt="Hero Background"
        className="w-full h-full "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Text Content */}
      <motion.div 
        className="absolute inset-0 z-20 flex items-center px-4 sm:px-6 md:px-8 lg:px-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-[1470px] px-4 md:px-10 w-full text-left text-white mx-auto" variants={item}>
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-full md:max-w-[800px] leading-snug md:leading-tight"
            variants={item}
          >
            Find the Perfect Freelancer for Every Project
          </motion.h1>

          <motion.p 
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4 max-w-full md:max-w-[800px] text-gray-200"
            variants={item}
          >
            Connect with talented professionals ready to bring your ideas to life. 
            From web development to graphic design, find skilled experts in minutes.
          </motion.p>

          {/* Search Bar */}
          <motion.div className="relative w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] mt-6" variants={item}>
            <input
              type="search"
              placeholder="What service are you looking for? (e.g., logo design, web developer, etc...)"
              className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 bg-white focus:border-[#34a85a] focus:ring-2 focus:ring-[#34a85a]/30 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 text-sm sm:text-sm md:text-base"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
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
          </motion.div>

          {/* Buttons */}
          <motion.div className="flex flex-wrap gap-4 mt-6 sm:mt-8" variants={item}>
            <Link to='/alljobs'>
              <button className="px-4 sm:px-6 py-2 sm:py-3 btn-bg-button text-white font-semibold rounded-md transition-all duration-200 text-sm sm:text-base">
                Create a Job
              </button>
            </Link>
            <Link to='/becomeafreelancer'>
              <button className="px-4 sm:px-6 py-2 sm:py-3 btn-button font-semibold rounded-md transition-all duration-200 text-sm sm:text-base">
                Start Selling
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
