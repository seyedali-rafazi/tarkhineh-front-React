import React from "react";
import GeneralSwiper from "../../ui/GeneralSwiper";
import Navbar from "../../ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";

function MenuLayout({ children }) {
  return (
    <div className="container xl:max-w-7xl min-h-screen max-w-full">
      <Navbar />
      <GeneralSwiper />
      {children}
      <Outlet />
      <Footer />
    </div>
  );
}

export default MenuLayout;
