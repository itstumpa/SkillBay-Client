// import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



const MainLayouts = () => {

  const location = useLocation();

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
                  <div className='flex-1'>
                  <Outlet />

                  </div>
                  <Footer />
            </div>
      );
};

export default MainLayouts;