import React from "react";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../utils/FormatNumber";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";

function UserOrderStatue({ orders }) {
  return (
    <div className="grid grid-cols-1 gap-2 whitespace-nowrap xl:max-w-[780px] lg:max-w-[620px] ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {orders.map((userOrder) => (
          <div className="w-10 p-52" key={userOrder._id}>
            <SwiperSlide className="flex flex-col border-2 border-secondery-200 rounded-xl ">
              <div className="relative w-full">
                <img
                  className="rounded-t-xl object-cover h-32 w-full"
                  src={userOrder.imageLink}
                  alt=""
                />
                <span className="absolute left-2 bottom-2 rounded-md px-2 bg-secondery-50 text-primary">
                  <span className="text-xs">x</span>
                  {toPersianNumbers(userOrder.quantity.quantity)}
                </span>
              </div>
              <div className="flex flex-col p-2 justify-center items-center text-sm text-secondery-700">
                <p>{userOrder.title}</p>
                <p>
                  {toPersianNumbersWithComma(userOrder.offPrice)}&nbsp;تومان
                </p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default UserOrderStatue;
