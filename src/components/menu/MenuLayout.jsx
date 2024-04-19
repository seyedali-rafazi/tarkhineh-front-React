import React from "react";
import GeneralSwiper from "../../ui/GeneralSwiper";
import Navbar from "../../ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";

function MenuLayout({ children }) {
  return (
    <div className="container xl:max-w-7xl w-full min-h-screen">
      <Navbar />
      <GeneralSwiper />
      {children}
      <Outlet />
      <Footer />
    </div>
  );
}

export default MenuLayout;
