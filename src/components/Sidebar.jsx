import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers, FaBed, FaMoneyBillWave, FaClipboardList, FaDoorOpen } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen p-5 flex flex-col justify-between bg-white">

      {/* Top */}
      <div>
        <h1 className="text-2xl font-bold text-yellow-500 mb-8 tracking-wide">
          BMS Admin
        </h1>

        <nav className="space-y-3">

          <NavLink
            to="/dash"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive ? "bg-yellow-100 text-yellow-500" : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
              }`
            }
          >
            <MdDashboard size={22} />
            Dashboard
          </NavLink>

          <NavLink
            to="/students"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive ? "bg-yellow-100 text-yellow-500" : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
              }`
            }
          >
            <FaUsers size={20} />
            Students
          </NavLink>

          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive ? "bg-yellow-100 text-yellow-500" : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
              }`
            }
          >
            <FaBed size={20} />
            Rooms
          </NavLink>

          <NavLink
            to="/fees"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive ? "bg-yellow-100 text-yellow-500" : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
              }`
            }
          >
            <FaMoneyBillWave size={20} />
            Fees
          </NavLink>

          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive ? "bg-yellow-100 text-yellow-500" : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
              }`
            }
          >
            <FaClipboardList size={20} />
            Attendance
          </NavLink>

        </nav>
      </div>

      {/* Bottom Logout */}
      <div>
        <button className="flex items-center gap-3 w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition">
          <FaDoorOpen size={20} />
          Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
