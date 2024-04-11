import React from "react";

import GeneralSwiper from "../../ui/GeneralSwiper";
import useUser from "../../feachers/authentication/useUser";
import Loading from "../../ui/Loading";
import Navbar from "../../ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer"

function MenuLayout({ children }) {
  const { user, isLoading } = useUser();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div className=" xl:max-w-7xl w-full min-h-screen">
      <Navbar user={user} />
      <GeneralSwiper />
      {children}
      <Outlet />
      <Footer/>
    </div>
  );
}

export default MenuLayout;
