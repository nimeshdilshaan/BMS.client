import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaHome, FaUser, FaDoorOpen } from "react-icons/fa";


const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar 30% color */}
      <aside className="w-64 bg-white shadow-xl border-r border-gray-200">
        <Sidebar />
      </aside>

      {/* Main content 60% primary */}
      <div className="flex flex-col flex-1 bg-gray-100">

        {/* Navbar */}
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        {/* Page Content */}
        <main className="p-6 bg-gray-100">
          {children}
        </main>

      </div>
    </div>
  );
};

export default MainLayout;
