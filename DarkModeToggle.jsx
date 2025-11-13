import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md transition border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default DarkModeToggle;
