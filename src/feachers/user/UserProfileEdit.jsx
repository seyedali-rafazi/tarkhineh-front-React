import React from "react";
import Navbar from "../../ui/Navbar";
import SidebarLayout from "./SidebarLayout";
import EditDashboard from "./EditDashboard";

function UserProfileEdit() {
  return (
    <div className="xl:max-w-7xl">
      <Navbar />
      <div className="container grid grid-cols-8 max-w-7xl gap-4 mt-10">
      <div className="grid col-span-8 md:col-span-2">
          <SidebarLayout />
        </div>
        <div className="hidden md:grid md:col-span-6">
          <EditDashboard />
        </div>
      </div>
    </div>
  );
}

export default UserProfileEdit;
