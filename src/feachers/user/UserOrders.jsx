import React from "react";
import Navbar from "../../ui/Navbar";
import SidebarLayout from "./SidebarLayout";
import OrderDashboard from "./OrderDashboard";

function UserOrders() {
  return (
    <div className="xl:max-w-7xl">
      <Navbar />
      <div className="container grid grid-cols-8 max-w-7xl gap-4 mt-10">
        <div className="hidden md:grid col-span-8 md:col-span-2 ">
          <SidebarLayout />
        </div>
        <div className=" col-span-8 md:grid md:col-span-6">
          <OrderDashboard />
        </div>
      </div>
    </div>
  );
}

export default UserOrders;
