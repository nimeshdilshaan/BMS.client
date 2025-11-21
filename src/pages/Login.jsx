import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const Log = () => {
  const navigate = useNavigate();

  // Temporary Login Handler
  const handleLogin = () => {
    // you can add validation later
    navigate("/dash"); // Navigate to Dashboard
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/log.jpg')" }}
    >
      {/* Blur Glass Card */}
      <div className="w-full max-w-md bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/40">
        
        <h2 className="text-3xl font-bold text-center text-white drop-shadow mb-6">
          BMS Login
        </h2>

        <div className="space-y-5">

          {/* Username */}
          <div>
            <label className="text-white font-medium drop-shadow">Username</label>
            <div className="flex items-center mt-2 px-3 py-2 bg-white/40 rounded-lg backdrop-blur-md">
              <FaUser className="text-gray-700" />
              <input
                type="text"
                placeholder="Enter username"
                className="ml-2 w-full bg-transparent text-white placeholder-white/70 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-white font-medium drop-shadow">Password</label>
            <div className="flex items-center mt-2 px-3 py-2 bg-white/40 rounded-lg backdrop-blur-md">
              <FaLock className="text-gray-700" />
              <input
                type="password"
                placeholder="Enter password"
                className="ml-2 w-full bg-transparent text-white placeholder-white/70 focus:outline-none"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600/80 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Login
          </button>

          <p className="text-center text-white text-sm drop-shadow">
            Don’t have an account?{" "}
            <Link to="/register" className="text-yellow-200 hover:underline">
              Register
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Log;
