import React from "react";
import Navbar from "../ui/Navbar";
import SidebarLayout from "../feachers/user/SidebarLayout";

function UserProfile() {
  return (
    <div className="container xl:max-w-7xl">
      <Navbar />
      <div className="container grid grid-cols-8 max-w-7xl gap-4 mt-10">
        <div className="grid col-span-8 md:col-span-2">
          <SidebarLayout />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
