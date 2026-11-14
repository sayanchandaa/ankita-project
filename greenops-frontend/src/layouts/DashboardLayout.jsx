

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#F6F8F6] flex">

      <Sidebar />

      <div className="flex-1 min-w-0">
        <Navbar />

        <main className="p-6 md:p-8">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
