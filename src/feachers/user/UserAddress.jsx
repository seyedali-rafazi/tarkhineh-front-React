import React from "react";
import SidebarLayout from "./SidebarLayout";
import AddressDashboard from "./addres-section/AddressDashboard";

function UserAddress() {
  return (
    <div className="container xl:max-w-7xl min-h-screen max-w-full">
      <div className="container grid grid-cols-8 max-w-7xl gap-4 mt-10 px-5">
        <div className="hidden lg:grid col-span-8 lg:col-span-2 ">
          <SidebarLayout />
        </div>
        <div className="col-span-8 lg:grid lg:col-span-6 lg:px-5">
          <AddressDashboard />
        </div>
      </div>
    </div>
  );
}

export default UserAddress;
