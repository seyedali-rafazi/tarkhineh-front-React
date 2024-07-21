import React from "react";
import GeneralSwiper from "../../ui/GeneralSwiper";
import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer";

function MenuLayout({ children }) {
  return (
    <div className="container xl:max-w-[1640px] min-h-screen max-w-full">
      <GeneralSwiper />
      {children}
      <Outlet />
      <Footer />
    </div>
  );
}

export default MenuLayout;
