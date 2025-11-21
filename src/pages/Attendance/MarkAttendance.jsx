import React, { useState } from "react";

// Example student data (replace with API later)
const studentsList = [
  { id: 1, name: "John Doe", room: "101" },
  { id: 2, name: "Jane Smith", room: "102" },
  { id: 3, name: "Michael Brown", room: "103" },
  { id: 4, name: "Emily Johnson", room: "104" },
];

const Attendance = () => {
  const [attendance, setAttendance] = useState({});

  // Toggle attendance
  const handleCheck = (id) => {
    setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Save Attendance (temporary)
  const handleSave = () => {
    console.log("Attendance data:", attendance);
    alert("Attendance saved! (Check console)");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h2 className="text-3xl font-bold text-gray-800 mb-6">Mark Attendance</h2>

      <div className="bg-white p-6 rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Student Name</th>
              <th className="py-3 px-4">Room</th>
              <th className="py-3 px-4">Present</th>
            </tr>
          </thead>
          <tbody>
            {studentsList.map((student) => (
              <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">{student.id}</td>
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4">{student.room}</td>
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={attendance[student.id] || false}
                    onChange={() => handleCheck(student.id)}
                    className="w-5 h-5 text-yellow-500 rounded focus:ring-yellow-400"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={handleSave}
          className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Save Attendance
        </button>
      </div>
    </div>
  );
};

export default Attendance;
