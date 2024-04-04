import React from "react";
import Navbar from "../../ui/Navbar";
import SidebarLayout from "./SidebarLayout";
import AddressDashboard from "./addres-section/AddressDashboard";
import Loading from "../../ui/Loading";
import useUser from "../authentication/useUser";

function UserAddress() {
  const { isLoading, user } = useUser();

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="xl:max-w-7xl">
      <Navbar />
      <div className="container grid grid-cols-8 max-w-7xl gap-4 mt-10">
        <div className="hidden md:grid col-span-8 md:col-span-2 ">
          <SidebarLayout />
        </div>
        <div className=" col-span-8 md:grid md:col-span-6">
          <AddressDashboard user={user} />
        </div>
      </div>
    </div>
  );
}

export default UserAddress;
