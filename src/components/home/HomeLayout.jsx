import React from "react";
import SwiperLayout from "../../ui/Swiper";
import { SwiperSlide } from "swiper/react";
import MenuItems from "./MenuItems";

function HomeLayout({ user }) {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col gap-8 ">
      <SwiperLayout>
        <SwiperSlide>
          <div className="bg-cover bg-home-slide-one bg-center w-full h-80 flex justify-center items-center">
            <div className="flex flex-col gap-6 w-full justify-center items-center my-auto">
              <h1 className="font-bold text-sm md:text-2xl text-secondery-50">
                تجربه غذای سالم و گیاهی به سبک ترخینه
              </h1>
              <button className="bg-primary w-fit text-secondery-50 rounded-lg px-5 py-2">
                سفارش آنلاین غذا
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover bg-home-slide-two bg-center h-80 w-full flex justify-center items-center">
            <div className="flex flex-col gap-6 w-full justify-center items-center my-auto">
              <h1 className="font-bold text-sm md:text-2xl text-secondery-50">
                طعم بینظیر طبیعت
              </h1>
              <button className="bg-primary w-fit text-secondery-50 rounded-lg px-5 py-2">
                سفارش آنلاین غذا
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover  bg-home-slide-three bg-center h-80 w-full flex justify-center items-center">
            <div className="flex flex-col gap-6 w-full justify-center items-center my-auto">
              <h1 className="font-bold text-sm md:text-2xl text-secondery-50">
                لذت غذای سالم و گیاهی را با ترخینه تجربه کنید
              </h1>
              <button className="bg-primary w-fit text-secondery-50 rounded-lg px-5 py-2">
                سفارش آنلاین غذا
              </button>
            </div>
          </div>
        </SwiperSlide>
      </SwiperLayout>
      <MenuItems />
    </div>
  );
}

export default HomeLayout;
