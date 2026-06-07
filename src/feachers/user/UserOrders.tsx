import React from "react";
import SidebarLayout from "./SidebarLayout";
import OrderDashboard from "./order-section/OrderDashboard";

function UserOrders() {
  return (
    <div>
      <div className="flex w-full justify-center ">
        <div className="container grid grid-cols-8 max-w-7xl gap-4 mt-10 px-5">
          <div className="hidden lg:grid col-span-8 lg:col-span-2 ">
            <SidebarLayout />
          </div>
          <div className="col-span-8 lg:grid lg:col-span-6 lg:px-5">
            <OrderDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOrders;
