import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-6">BMS</h1>
      
      <ul className="space-y-4">
        <li><Link className="hover:text-indigo-400" to="/">Dashboard</Link></li>
        <li><Link className="hover:text-indigo-400" to="/students">Students</Link></li>
        <li><Link className="hover:text-indigo-400" to="/rooms">Rooms</Link></li>
        <li><Link className="hover:text-indigo-400" to="/attendance">Attendance</Link></li>
        <li><Link className="hover:text-indigo-400" to="/fees">Fees</Link></li>
      </ul>
    </div>
  );
}
