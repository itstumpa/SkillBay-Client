import React, { useEffect, useRef, useState } from "react";
import Team from "../../../assets/Team.png";
import "animate.css";

const GroupStudy = () => {
  const [animate, setAnimate] = useState(false);
  const faqRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (faqRef.current) observer.observe(faqRef.current);
    return () => {
      if (faqRef.current) observer.unobserve(faqRef.current);
    };
  }, []);

  return (
    <section ref={faqRef} className="">
      <div className="mx-auto max-w-[1470px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
        {/* Images */}
        <div className="flex justify-center rounded-lg md:justify-start mb-6 md:mb-0">
          <img className="w-full rounded-lg max-w-2xl" src={Team} alt="dashboard image" />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl  sm:text-4xl font-bold tracking-tight  mb-4">
           Our Story:
          </h2>
          <p className=" sm:text-lg mb-6  ">
          
SkillBay was born from a simple belief: talented people deserve opportunities, and great projects deserve talented people. We created a marketplace where businesses of all sizes can find skilled freelancers, and where professionals can build thriving careers on their own terms.
          </p>
          <p>
            
          </p>
          <a
            href="/"
            style={{ animationDuration: "1.2s" }}dark
            className={`inline-flex items-center justify-center md:justify-start text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 :focus:ring-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 btn-bg-button text-center ${
              animate ? "animate__animated animate__shakeX animate__slow" : ""
            }`}
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GroupStudy;
