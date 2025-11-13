// import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
// import { ThemeProvider } from '../../contexts/ThemeContext';

const MainLayouts = () => {
  
  const location = useLocation();
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      
      {/* Main Content with Gradient and Glow */}
      <div className={`flex-1 relative overflow-hidden ${
        theme === "light" 
          ? "bg-gradient-to-r from-gray-50 via-white to-gray-50" 
          : "bg-gradient-to-r from-gray-900 via-emerald-900/20 to-gray-900"
      }`}>
        
        {/* Emerald Glow Effect - Only in Dark Mode */}
        {theme === "dark" && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent pointer-events-none"></div>
        )}
        
        {/* Content */}
        <div className="relative z-10">
          <Outlet />
        </div>
      </div>
      <div className= {`flex-1 ${theme==="light" ? "bg-linear-to-r from-gray-100 via-white to-gray-100" : "bg-gradient-to-r from-gray-900 via-emerald-900/20 to-gray-900"}`}>
      <Footer />
    </div>
    </div>
  );
};

export default MainLayouts;