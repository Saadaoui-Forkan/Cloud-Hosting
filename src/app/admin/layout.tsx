import React from "react"
import AdminSidebar from "../../components/admin/AdminSideBar";

interface AdminDashboardLayoutProps {
    children: React.ReactNode;
}

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  return (
    <div className="flex">
      {/* Sidebar with adjusted height and background color */}
      <div className="w-15 lg:w-1/5 bg-purple-600 text-white p-1 lg:p-5">
        <AdminSidebar />
      </div>

      {/* Content area with scrolling */}
      <div className="w-full lg:w-4/5 h-screen overflow-y-auto bg-gray-100 p-5">
        {children}
      </div>
    </div>
  )
}
export default AdminDashboardLayout