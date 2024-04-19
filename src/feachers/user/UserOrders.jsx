import React from "react";
import Navbar from "../../ui/Navbar";
import SidebarLayout from "./SidebarLayout";
import OrderDashboard from "./order-section/OrderDashboard";

function UserOrders() {
  return (
    <div>
      <Navbar  />
      <div className="container xl:max-w-7xl px-5">
        <div className=" w-full grid grid-cols-8 gap-8 my-10 ">
          <div className="hidden lg:grid lg:col-span-2 ">
            <SidebarLayout />
          </div>
          <div className="col-span-8 lg:col-span-6">
            <OrderDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOrders;
