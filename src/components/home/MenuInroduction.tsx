import React from "react";
import {
  chart,
  homeWifi,
  menu,
  psersonel,
} from "../../icons/Introduction-icons";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const intoductionItems = [
  {
    icon: psersonel,
    text: "پرسنلی مجرب و حرفه‌ای",
    id: 1,
  },
  {
    icon: chart,
    text: "کیفیت بالای غذاها",
    id: 2,
  },
  {
    icon: homeWifi,
    text: "محیطی دلنشین و آرام",
    id: 3,
  },
  {
    icon: menu,
    text: "منو متنوغ",
    id: 4,
  },
];

function MenuInroduction() {
  const navigate = useNavigate();
  return (
    <div className="relative z-0 grid grid-cols-1 md:grid-cols-2 gap-5 p-6 bg-cover bg-center bg-home-intruduction min-h-80 rounded-xl mx-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col gap-6 animate-fade-in-up">
        <div className="flex flex-col gap-4 justify-start text-secondery-50">
          <h2 className="font-semibold text-lg">
            رستوران‌های زنجیره‌ای ترخینه
          </h2>
          <p className="text-justify text-sm leading-relaxed">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/about")}
            className="border border-secondery-50 text-secondery-50 rounded-md px-4 py-2 flex gap-2 items-center hover:bg-secondery-50 hover:text-secondery-800 transition-all duration-300"
          >
            <span>اطلاعات بیشتر</span>
            <span>
              <FaChevronLeft className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-2 gap-3 text-secondery-50">
        {intoductionItems.map((intoductionItem, index) => (
          <div
            key={intoductionItem.id}
            style={{ animationDelay: `${index * 80}ms` }}
            className="flex flex-col justify-center items-center gap-2 p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 animate-fade-in-up opacity-0"
          >
            <div>{intoductionItem.icon}</div>
            <span className="text-sm whitespace-nowrap">{intoductionItem.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuInroduction;
