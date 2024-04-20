import React from "react";
import Navbar from "../../ui/Navbar";
import SidebarLayout from "./SidebarLayout";
import EditDashboard from "./EditDashboard";
import useUser from "../authentication/useUser";
import Loading from "../../ui/Loading";


function UserProfileEdit() {
  const { isLoading, user } = useUser();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container xl:max-w-7xl">
      <Navbar  />
      <div className="container grid grid-cols-8 max-w-7xl gap-4 mt-10 px-5">
        <div className="hidden md:grid col-span-8 md:col-span-2 ">
          <SidebarLayout />
        </div>
        <div className="px-5 col-span-8 md:grid md:col-span-6">
          <EditDashboard user={user}/>
        </div>
      </div>
    </div>
  );
}

export default UserProfileEdit;
