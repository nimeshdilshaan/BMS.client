import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <h2 className="text-xl font-semibold text-gray-700">
        Boarding Management System
      </h2>

      <div className="flex items-center gap-6 text-gray-600">

        <FaBell size={22} className="cursor-pointer hover:text-yellow-500 transition" />

        <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-500">
          <FaUserCircle size={28} />
          <span className="font-medium text-gray-700">Admin</span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
