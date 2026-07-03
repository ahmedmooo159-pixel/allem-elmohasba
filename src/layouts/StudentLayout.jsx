import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Navbar from "../components/layout/Navbar/Navbar";

export default function StudentLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Student Sidebar */}
      <Sidebar role="student" isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content Wrap */}
      <div className="md:mr-[280px] min-h-screen flex flex-col transition-all duration-300">
        {/* Navbar */}
        <Navbar role="student" onMenuToggle={toggleSidebar} />

        {/* Page Outlet */}
        <main className="flex-1 p-margin-mobile md:p-margin-desktop max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}