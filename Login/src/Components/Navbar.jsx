import React from "react";
import { FaBell, FaUserCircle, FaCog } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Profile</div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600 text-xl cursor-pointer" />
        <FaCog className="text-gray-600 text-xl cursor-pointer" />
        <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};
export default Navbar;