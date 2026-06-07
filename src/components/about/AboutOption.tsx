import React from "react";
import { RiUser3Line } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import { RiHomeWifiLine } from "react-icons/ri";
import { SlNotebook } from "react-icons/sl";

const contents = [
  {
    text: "پرسنلی مجرب و حرفه‌ای",
    icon: <RiUser3Line className="w-6 h-6 md:w-10 md:h-10" />,
    id: 1,
  },
  {
    text: "کیفیت بالای غذاها",
    icon: <FaChartLine className="w-6 h-6 md:w-10 md:h-10" />,
    id: 2,
  },
  {
    text: "محیطی دلنشین و آرام",
    icon: <RiHomeWifiLine className="w-6 h-6 md:w-10 md:h-10" />,
    id: 3,
  },
  {
    text: "منوی متنوع",
    icon: <SlNotebook className="w-6 h-6 md:w-10 md:h-10" />,
    id: 4,
  },
];

function AboutOption() {
  return (
    <div className="flex justify-center gap-2 md:gap-12 bg-rose-100 p-5">
      {contents.map((content) => (
        <div
          className="flex flex-col justify-center items-center text-secondery-800"
          key={content.id}
        >
          <span className="text-lg ">{content.icon}</span>
          <span className="text-secondery-600 text-xs text-center">{content.text}</span>
        </div>
      ))}
    </div>
  );
}

export default AboutOption;
