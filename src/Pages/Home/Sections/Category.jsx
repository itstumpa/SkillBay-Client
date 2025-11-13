import React from "react";
import { ComputerDesktopIcon, PaintBrushIcon, ChartBarIcon, PencilSquareIcon, VideoCameraIcon, PhotoIcon, MusicalNoteIcon, BriefcaseIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const categories = [
  { title: "Programming & Tech", icon: <ComputerDesktopIcon className="w-8 h-8 text-gray-700" /> },
  { title: "Graphics & Design", icon: <PaintBrushIcon className="w-8 h-8 text-gray-700" /> },
  { title: "Digital Marketing", icon: <ChartBarIcon className="w-8 h-8 text-gray-700" /> },
  { title: "Writing & Translation", icon: <PencilSquareIcon className="w-8 h-8 text-gray-700" /> },
  { title: "Video & Animation", icon: <VideoCameraIcon className="w-8 h-8 text-gray-700" /> },
  { title: "AI Services", icon: <PhotoIcon className="w-8 h-8 text-gray-700" /> },
  { title: "Music & Audio", icon: <MusicalNoteIcon className="w-8 h-8 text-gray-700" /> },
  { title: "Business", icon: <BriefcaseIcon className="w-8 h-8 text-gray-700" /> },
  { title: "Consulting", icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-gray-700" /> },
];

const Category = () => {
  return (
    <section className="pt-8 pb-8  bg-gray-50 dark:bg-gray-900">
      <div className="max-w-[1470px] mx-auto px-4 md:px-6 lg:px-10">
        {/* <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-left">
          Explore Categories
        </h2> */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#1a9641] transition-all duration-300 cursor-pointer text-center"
            >
              <div className="mb-3 ">{cat.icon}</div>
              <p className="text-gray-900 font-medium text-sm">{cat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
