import React from "react";

const categories = [
  {
    title: "AI & Vibe Coding",
    img: "https://i.ibb.co.com/QjDhFXjV/3dicons-computer-front-color.png",
  },
  {
    title: "Website Development",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/web-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats--frontend-website-ui-pack-design-icons-8523509.png",
  },
  {
    title: "Video Editing",
    img: "https://i.ibb.co.com/ch5cjzc8/3dicons-3d-coin-dynamic-color.png",
  },
  {
    title: "Software Development",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/software-development-3d-icon-download-in-png-blend-fbx-gltf-file-formats--developer-programming-code-engineering-pack-design-icons-8523443.png",
  },
  {
    title: "Book Publishing",
    img: "https://i.ibb.co.com/v6SLdRrd/3dicons-notebook-dynamic-gradient.png",
  },
  {
    title: "Architecture & Design",
    img: "https://i.ibb.co.com/x4bWTJW/3dicons-picture-dynamic-color.png",
  },
  {
    title: "Digital Marketing",
    img: "https://i.ibb.co.com/gZ5KYn9v/3dicons-folder-fav-dynamic-color.png",
  },
];

const TopCategory = () => {
  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1470px] mx-auto px-4 lg:px-10 md:px-6">
        <h2 className="text-4xl font-semibold mb-10 text-gray-900 dark:text-white">
          Top Categories
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative group bg-white/80 dark:bg-gray-800 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="h-36 w-full overflow-hidden rounded-t-2xl bg-[#1a9641]/10 dark:bg-[#1a9641]/20 flex items-center justify-center">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-gray-900 dark:text-white font-semibold text-base mb-2">
                  {cat.title}
                </h3>
                <div className="w-8 h-[3px] bg-[#1a9641] rounded-full group-hover:w-12 transition-all duration-300"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-[#1a9641]/5 rounded-2xl transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategory;
