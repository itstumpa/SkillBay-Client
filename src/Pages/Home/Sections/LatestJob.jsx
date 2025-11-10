// import React from 'react';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from '../../../components/Loading.jsx'

const Latestuser = () => {

        const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // axios get from backend
    axios.get("http://localhost:3000/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error("Error fetching users:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div><Loading/></div>;


  return (
    <div className="  bg-gray-50 py-10">
       <div className='max-w-[1470px] mx-auto md:px-6 px-4 lg:px-10'>

       
      <h2 className="text-4xl font-semibold mb-6 text-gray-900">
        Latest Jobs
      </h2>
      
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
        {users.map((user, index) => (
          <div
            key={user._id}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : 
              index === 3 ? 'lg:row-span-2' : 
              ''
            }`}
          >
            {/* Image */}
            <img
              src={user.coverImage}
              alt={user.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-md leading-tight mb-2">
                  {user.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div>
                     <img src= {user.provider_image} alt= {user.provider_image}  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm"/>
                   
                  </div>
                  <p className="text-white/90 font-medium">
                    {user.postedBy}
                  </p>
                </div>
                <div className="flex justify-between items-center text-center">


                <div>
                     <span className="inline-block px-3 py-1 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium">
                  {user.category}
                </span>
                </div>
                <div>
                     <button className="inline-block px-3 py-1 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium">Details</button>
              </div>
                </div>
              </div>
            </div>

            {/* Gradient Border Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-2xl ring-2 ring-emerald-500/50"></div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Latestuser;