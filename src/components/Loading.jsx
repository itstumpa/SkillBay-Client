import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-green-500"></div>
    </div>
  );
};

export default Loading;
