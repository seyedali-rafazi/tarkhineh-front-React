import React from "react";
import Navbar from "../../ui/Navbar";
import SidebarLayout from "./SidebarLayout";
import OrderDashboard from "./order-section/OrderDashboard";

function UserOrders() {
  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center ">
        <div className="container grid grid-cols-8 max-w-7xl gap-4 mt-10 px-5">
          <div className="hidden lg:grid col-span-8 lg:col-span-2 ">
            <SidebarLayout />
          </div>
          <div className="px-5 col-span-8 lg:grid lg:col-span-6">
            <OrderDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOrders;
