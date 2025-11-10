import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import Home from "../Pages/Home/Home.jsx";
import img404 from "../assets/img404.png"
const Error = () => {

const error = useRouteError()

  return (
    <>
    <Navbar/>
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen text-center p-6 bg-white">
  <img
    className="md:w-[400px] w-[300px] h-[300px] md:h-[400px] mb-6 lg:mb-0 lg:mr-8"
    src={img404}
    alt="404 Illustration"
  />
  <section className="max-w-md">
    <h2 className="mb-6 font-extrabold text-7xl text-gray-900">404</h2>
    <p className="text-2xl font-semibold md:text-3xl mb-2">
      Sorry, we couldn't find this page.
    </p>
    <p className="text-gray-600 mb-6">
      But don’t worry — you can find plenty of other things on our homepage.
    </p>
    <a
      href="/"
      className="px-8 py-3 font-semibold rounded-md bg-[#34a85a] text-white hover:bg-[#2f8d4d] transition"
    >
      Back to homepage
    </a>
  </section>
</div>
                  <Footer />
  </>
  
  )
}

export default Error;