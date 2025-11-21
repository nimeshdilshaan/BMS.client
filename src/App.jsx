import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Log from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import Students from "./pages/Students/ManageStudents";
import Rooms from "./pages/Rooms/RoomList";
import Fees from "./pages/Fees/FeeStatus";
import Attendance from "./pages/Attendance/MarkAttendance";






const App = () => {
  return (
    <Routes>
      {/* Login page without layout */}
      <Route path="/" element={<Log />} />

      {/* Dashboard */}
      <Route
        path="/dash"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      {/* students */}
      <Route
        path="/students"
        element={
          <MainLayout>
            <Students />
          </MainLayout>
        }
      />

      {/* Rooms */}
      <Route
        path="/rooms"
        element={
          <MainLayout>
            <Rooms />
          </MainLayout>
        }
      />

      {/* Fees */}
      <Route
        path="/fees"
        element={
          <MainLayout>
            <Fees />
          </MainLayout>
        }
      />


      {/* Attendance */}
      <Route
        path="/attendance"
        element={
          <MainLayout>
            <Attendance />
          </MainLayout>
        }
      />






    </Routes>

    
  );
};

export default App;
