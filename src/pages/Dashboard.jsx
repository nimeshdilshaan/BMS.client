import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Students</h3>
          <p className="text-3xl font-bold text-blue-600">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Occupied Rooms</h3>
          <p className="text-3xl font-bold text-green-600">45</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Pending Fees</h3>
          <p className="text-3xl font-bold text-red-600">18</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Today's Attendance</h3>
          <p className="text-3xl font-bold text-purple-600">102</p>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-2">Recent Activity</h3>
        <ul className="space-y-2">
          <li>✔ New students registered</li>
          <li>✔ Rooms updated</li>
          <li>✔ Attendance completed</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
