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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6 bg-cover bg-center bg-home-intruduction min-h-96">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6  justify-start text-secondery-300">
          <h2 className="font-semibold text-xl text-secondery-300 ">
            رستوران‌های زنجیره‌ای ترخینه
          </h2>
          <p className="text-justify text-sm lg:text-lg">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
        </div>
        <div className="flex justify-end text-secondery-300">
          <button
            onClick={() => navigate("/about-our-company")}
            className="border border-secondery-300 rounded-md px-4 py-2 flex gap-2 items-center duration-300 transition-all">
            <span>اطلاعات بیشتر</span>
            <span>
              <FaChevronLeft className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-secondery-300">
        {intoductionItems.map((intoductionItem) => (
          <div
            key={intoductionItem.id}
            className="flex flex-col justify-center items-center gap-2">
            <div>{intoductionItem.icon}</div>
            <span className="text-sm whitespace-nowrap">{intoductionItem.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuInroduction;
