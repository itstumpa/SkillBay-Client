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
    <div className=" sm:px-3 pb-8 md:pb-16">
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
                <h3 className="font-semibold text-md md:text-lg lg:text-xl">
                  {skill.skillName}
                </h3>
                <h4 className="text-md md:text-lg lg:text-xl font-bold text-green-400">
                  ${skill.price}
                </h4>
              </div>

              <div className="flex justify-between text-sm md:text-base text-gray-600 mt-auto pt-1">
                <span className="flex items-center gap-1 bg-[#e1e0ff] p-2 rounded-md text-red-600 font-semibold">
                  <Star className="w-4 h-4" />
                  {skill.rating}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToDetails(skill.skillId);
                  }}
                  className="flex items-center gap-1 bg-[#5754E8] p-2 rounded-md text-white font-semibold hover:bg-[#403eea] transition"
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
        <div className="text-center mt-4 md:mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-[#5754E8] text-white rounded-md font-semibold hover:bg-[#3e3cbc] transition text-sm sm:text-base"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PopularSkills;
