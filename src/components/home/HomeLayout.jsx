import React from "react";
import SwiperLayout from "../../ui/Swiper";
import { SwiperSlide } from "swiper/react";
import MenuItems from "./MenuItems";
import MenuInroduction from "./MenuInroduction";
import HomeBranches from "./HomeBranches";
import Footer from "../../ui/Footer";
import GeneralSwiper from "../../ui/GeneralSwiper";

function HomeLayout() {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col gap-8 ">
      <GeneralSwiper />
      <MenuItems />
      <MenuInroduction />
      <HomeBranches />
      <Footer />
    </div>
  );
}

export default HomeLayout;
