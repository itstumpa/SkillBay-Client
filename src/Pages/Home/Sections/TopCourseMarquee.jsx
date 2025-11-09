import React from "react";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import topfakedata from "../../../../public/topfakedata.json"; 



const TopCourseMarquee = () => {
  return (
    <div className="pt-10 pb-3 md:py-10 bg-linear-to-r from-indigo-50 via-white to-indigo-50">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-[#5754E8]">
      Featured Top Rated Providers
      </h2>

      <Marquee speed={40} pauseOnHover gradient={false}>
        <div className="flex gap-6 px-4">
          {topfakedata.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-4 min-w-[250px] max-w-[250px] shrink-0 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={item.provider_image}
                  alt={item.provider_name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {item.provider_name}
                  </h3>
                  <p className="text-xs text-gray-500 italic">
                    “{item.advice}”
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-base text-gray-700 mb-2">
                {item.best_selling_course}
              </h4>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="ml-1">{item.rating}</span>
                </div>
                <p>{item.sold} sold</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TopCourseMarquee;
