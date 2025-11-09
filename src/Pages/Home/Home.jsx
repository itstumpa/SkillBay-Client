// import React, { useEffect } from "react";
import HeroSection from "./Sections/HeroSection";
import PopularSkills from "./Sections/PopularSkills";
import TopCourseMarquee from "./Sections/TopCourseMarquee";
import HowitWorks from "./Sections/HowitWorks";
import GroupStudy from "./Sections/GroupStudy";
import FAQ from "./Sections/FAQ";
import ChooseSkillbay from "./Sections/ChooseSkillbay";
import Category from "./Sections/Category";
import TopCategory from "./Sections/TopCategory";



const Home = () => {


  return (
    <div className="home-page">
      <HeroSection />
      <div>
        <Category />
      </div>
      <div>
        <TopCategory/>
      </div>
     <div>
      <PopularSkills/>
     </div>
      <div className="">

        <TopCourseMarquee/>
      </div>
      <div>
        <ChooseSkillbay/>
      </div>

      <div className=" bg-linear-to-r from-indigo-50 via-white to-indigo-50" >
        <HowitWorks/>
      </div>

      

      <div>
        <h1 className="text-2xl lg:mt-20 underline mt-10 text-center font-bold text-black/90 lg:text-4xl">Frequently Ask Question</h1>
        <FAQ/>
      </div>

      <div>
        <GroupStudy/>
      </div>
      
      
    </div>
  );
};

export default Home;
