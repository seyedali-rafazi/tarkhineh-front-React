import React from "react";
import Navbar from "../../ui/Navbar";
import SidebarLayout from "./SidebarLayout";
import DashboardLayout from "./DashboardLayout";

function UserAddress() {
  return (
    <div className="xl:max-w-7xl">
      <Navbar />
      <div className="container grid grid-cols-7 max-w-5xl gap-4 mt-10">
        <div className="grid col-span-7 md:col-span-2">
          <SidebarLayout />
        </div>
        <div className="hidden md:grid md:col-span-5">
          <DashboardLayout />
        </div>
      </div>
    </div>
  );
}

export default UserAddress;
