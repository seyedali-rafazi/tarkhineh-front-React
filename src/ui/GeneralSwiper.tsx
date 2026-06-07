import React from "react";
import { useNavigate } from "react-router-dom";
import SwiperLayout from "./Swiper";
import { SwiperSlide } from "swiper/react";

const slides = [
  {
    bg: "bg-home-slide-one",
    title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
    maxW: "max-w-md",
  },
  {
    bg: "bg-home-slide-two",
    title: "طعم بینظیر طبیعت",
    maxW: "max-w-xs",
  },
  {
    bg: "bg-home-slide-three",
    title: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید",
    maxW: "max-w-md",
  },
];

function GeneralSwiper() {
  const navigate = useNavigate();

  return (
    <SwiperLayout>
      {slides.map((slide) => (
        <SwiperSlide key={slide.title}>
          <div
            className={`relative bg-cover ${slide.bg} bg-center w-full h-64 flex justify-center items-center overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 flex flex-col gap-4 w-full justify-center items-center px-4 animate-fade-in-up">
              <h1
                className={`font-bold text-base md:text-lg text-secondery-50 text-center ${slide.maxW}`}
              >
                {slide.title}
              </h1>
              <button
                onClick={() => navigate("/branch-menu/mainfood")}
                className="bg-primary text-sm w-fit text-secondery-50 rounded-lg px-5 py-2 hover:bg-shade-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
              >
                سفارش آنلاین غذا
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperLayout>
  );
}

export default GeneralSwiper;
