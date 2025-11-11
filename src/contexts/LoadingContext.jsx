import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <div id="global-loading"><div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"><div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div></div></div>}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
