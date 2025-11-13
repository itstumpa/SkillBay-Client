import React from 'react';
import { Link } from 'react-router';

const Discount = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-[1470px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-400 via-green-500 to-teal-600 p-0.5 shadow-2xl">
          <div className="relative rounded-3xl bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 px-8 py-12 md:py-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
              <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent leading-tight max-w-4xl">
                Discover talented freelancers ready to work on your project
              </h2>
              <Link to='/login'>
              
             
              <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">
                  Order Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
               </Link>
              
              {/* Trust indicators */}
              <div className="flex items-center gap-6 text-green-700 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Top Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;