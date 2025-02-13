import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Slot Booking App
      </h1>
      <div className="flex gap-4">
        <Link
          to="/"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300"
        >
          Dashboard
        </Link>
        <Link
          to="/profile"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300"
        >
          Profile
        </Link>
        <Link
          to="/slots"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300"
        >
          Slots
        </Link>
        <Link
          to="/calendar"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300"
        >
          Calendar
        </Link>
      </div>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;