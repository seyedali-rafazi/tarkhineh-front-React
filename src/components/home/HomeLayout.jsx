import React from "react";
import MenuItems from "./MenuItems";
import MenuInroduction from "./MenuInroduction";
import HomeBranches from "./HomeBranches";
import Footer from "../../ui/Footer";
import GeneralSwiper from "../../ui/GeneralSwiper";

function HomeLayout() {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col gap-8 relative">
      <GeneralSwiper />
      <MenuItems />
      <MenuInroduction />
      <HomeBranches />
      <Footer />
    </div>
  );
}

export default HomeLayout;
