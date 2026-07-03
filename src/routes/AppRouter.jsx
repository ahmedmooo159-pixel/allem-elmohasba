import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";

// Layouts
import StudentLayout from "../layouts/StudentLayout";
import AdminLayout from "../layouts/AdminLayout";

// Student Pages
import Dashboard from "../pages/student/Dashboard";
import Videos from "../pages/student/Videos";
import Questions from "../pages/student/Questions";
import Definitions from "../pages/student/Definitions";
import Journal from "../pages/student/Journal";
import AccountingCycle from "../pages/student/AccountingCycle";
import AI from "../pages/student/AI";
import Analytics from "../pages/student/Analytics";
import Settings from "../pages/student/Settings";
import Profile from "../pages/student/Profile";

// Admin Pages
import AdminDashboard from "../pages/admin/Dashboard";
import AdminVideos from "../pages/admin/Videos";
import AdminQuestions from "../pages/admin/Questions";
import AdminDefinitions from "../pages/admin/Definitions";
import AdminStudents from "../pages/admin/Students";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Route */}
        <Route path="/" element={<Login />} />

        {/* Student Panel Routes */}
        <Route element={<StudentLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/definitions" element={<Definitions />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/accounting-cycle" element={<AccountingCycle />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Admin Panel Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/videos" element={<AdminVideos />} />
          <Route path="/admin/questions" element={<AdminQuestions />} />
          <Route path="/admin/definitions" element={<AdminDefinitions />} />
          <Route path="/admin/students" element={<AdminStudents />} />
        </Route>

        {/* Wildcard Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}