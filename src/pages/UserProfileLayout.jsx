import React from "react";
import Navbar from "../ui/Navbar";
import SidebarLayout from "../feachers/user/SidebarLayout";
import { Outlet } from "react-router-dom";

function UserProfileLayout() {
  return (
    <div className="xl:max-w-7xl">
      <Navbar />
      <div className="container grid grid-cols-7 max-w-5xl gap-4 mt-10">
        <div className="grid">
          <SidebarLayout />
        </div>
        <div className="!col-span-7 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserProfileLayout;
