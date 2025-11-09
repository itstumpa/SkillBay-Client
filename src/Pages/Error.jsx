import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from "../Pages/Home/Home.jsx";
import img404 from "../assets/img404.png"
const Error = () => {

const error = useRouteError()
  return (
    <>
    <Navbar/>
    <div className='flex justify-center mt-20 items-center lg:flex-row  md:flex-col'>
      <img className='md:w-[400px] w-[300px] h-[300px] md:h-[400px] md:flex items-center hidden mt-8' src={img404} alt="" />
                  <section className="flex items-center  h-full p-16  dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
			<a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</a>
		</div>
	</div>
</section>
    </div>
                  <Footer />
  </>
  
  )
}

export default Error;