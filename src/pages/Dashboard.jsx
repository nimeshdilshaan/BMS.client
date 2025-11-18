import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">

      {/* Page Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500">Total Students</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500">Occupied Rooms</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">45</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500">Pending Fees</h3>
          <p className="text-4xl font-bold text-red-600 mt-2">18</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500">Today's Attendance</h3>
          <p className="text-4xl font-bold text-purple-600 mt-2">102</p>
        </div>

      </div>

      {/* Recent Activity Section */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-3 text-gray-700">
          <li>✔ 12 New Students Registered</li>
          <li>✔ Room 305 Fully Occupied</li>
          <li>✔ Attendance Marked for Today</li>
          <li>✔ 5 Pending Fee Reminders Sent</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;
