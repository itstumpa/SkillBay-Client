import React, { useState } from "react";
import { Star } from "lucide-react";
import skills from "../../../../public/skills.json";
import { useNavigate } from "react-router";

const PopularSkills = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/skill-details/${id}`);
  };

  const visibleSkills = showAll ? skills : skills.slice(0, 4);

  return (
    
       <div className="bg-gray-50">
      <div className="max-w-[1470px] mx-auto md:px-6 lg:px-10 px-4 pt-6">

<h2 className="text-left text-2xl md:3xl lg:text-4xl text-gray-900 mb-4 font-semibold">
  Top Gigs
</h2>      
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleSkills.map((skill) => (
          <div
            key={skill.skillId}
            onClick={() => goToDetails(skill.skillId)}
            className="card bg-white shadow-md hover:shadow-lg hover:scale-105 transition ease-in-out duration-300 rounded-xl overflow-hidden cursor-pointer flex flex-col h-full"
          >
            <figure className="p-3 rounded-md">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="rounded-md h-56 sm:h-60 md:h-64 lg:h-72 w-full object-cover"
              />
            </figure>

            <div className="px-4 pb-4 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-3">
                <div>

                <h3 className="font-semibold text-md md:text-lg lg:text-xl">
                  {skill.skillName}
                </h3>
                <p>Seller: {skill.providerName}</p>
                </div>
                <h4 className="text-md md:text-lg lg:text-xl font-bold text-green-400">
                  ${skill.price}
                </h4>
              </div>

              <div className="flex justify-between text-sm md:text-base text-gray-600 mt-auto pt-1">
                <span className="flex items-center gap-1 bg-[#ebebeb] p-2 rounded-md text-green-600 font-semibold shadow-sm">
                  <Star className="w-4 h-4 " />
                  {skill.rating}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToDetails(skill.skillId);
                  }}
                  className="flex items-center gap-1 btn-bg-button p-2 rounded-md text-white font-semibold btn-bg-button:hover transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      {skills.length > 8 && (
        <div className="text-left mt-4 md:mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 btn-bg-button text-white rounded-md font-semibold btn-bg-button:hover transition text-sm sm:text-base"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
       </div>
    </div>
  );
};

export default PopularSkills;
