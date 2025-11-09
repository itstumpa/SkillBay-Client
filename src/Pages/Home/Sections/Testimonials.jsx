import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className=" bg-linear-to-r from-indigo-50 via-white to-indigo-50">
      <h2 className="text-2xl pt-8 md:text-3xl lg:text-4xl font-bold text-center text-[#5754E8] mb-8">
        Success Stories
      </h2>

      <Marquee speed={40} pauseOnHover gradient={false} direction="right">
        <div className="flex gap-6 px-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-6 min-w-[280px] max-w-[280px] flex-shrink-0 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-xs text-gray-500 italic">“{item.quote}”</p>
                </div>
              </div>

              <h4 className="font-semibold text-base text-gray-700 mb-2">
                {item.course}
              </h4>

              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span>{item.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Testimonials;
