import React from 'react';
import hero from '../../../assets/hero.jpg';
import { Link, NavLink } from 'react-router';
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
    <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh]">
      {/* Background Image */}
      <img
        src={hero}
        alt="Hero Background"
        className="w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Text Content */}
      <motion.div 
        className="absolute inset-0 z-20 flex items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-[1470px] px-4 sm:px-6 md:px-10 w-full text-left text-white mx-auto" variants={item}>
          <motion.h1 
            className="text-xl mt-18 sm:mt-18 md:mt-24 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold max-w-full md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] leading-tight sm:leading-snug md:leading-tight"
            variants={item}
          >
            Find the Perfect Freelancer for Every Project
          </motion.h1>

          <motion.p 
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-3 sm:mt-4 md:mt-5 max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] text-gray-200 hidden md:block"
            variants={item}
          >
            Connect with talented professionals ready to bring your ideas to life. 
            From web development to graphic design, find skilled experts in minutes.
          </motion.p>

          {/* Search Bar */}
          <motion.div className="relative w-full sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] mt-4 sm:mt-5 md:mt-6" variants={item}>
            <input
              type="search"
              placeholder="What service are you looking for? (e.g., logo design, web developer, etc...)"
              className="w-full pl-8 sm:pl-10 md:pl-12 pr-3 sm:pr-4 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-md border border-gray-300 bg-white focus:border-[#34a85a] focus:ring-2 focus:ring-[#34a85a]/30 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 text-xs sm:text-sm md:text-base"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
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
          <motion.div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8" variants={item}>
            <Link to='/addajob'>
              <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 btn-bg-button text-white font-semibold rounded-md transition-all duration-200 text-xs sm:text-sm md:text-base">
                Create a Job
              </button>
            </Link>
            <Link to='/login'>
              <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 btn-button font-semibold rounded-md transition-all duration-200 text-xs sm:text-sm md:text-base">
                Start Selling
              </button>
            </Link>
            {/* <NavLink className='bg-white' to={`/home}`}>Testing</NavLink> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;