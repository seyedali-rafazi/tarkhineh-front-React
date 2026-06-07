import React from "react";
const AdvatagesOptions = [
  {
    text: "استفاده از برند شناخته شده ترخینه",
    id: 1,
  },
  {
    text: "مشاوره در امور حقوقی، مالی و مالیاتی",
    id: 2,
  },
  {
    text: "به حداقل رساندن ریسک سرمایه گذاری",
    id: 3,
  },
  {
    text: "پشتیبانی بازاریابی و منابع انسانی",
    id: 4,
  },
  {
    text: "تسریع روند بازگشت سرمایه",
    id: 5,
  },
  {
    text: "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات",
    id: 6,
  },
  {
    text: "مشاوره های تخصصی جهت مدیریت رستوران",
    id: 7,
  },
  {
    text: "طرح های تشویقی برای ارتقا فروش",
    id: 8,
  },
];
function Advatages() {
  return (
    <div className="space-y-4">
      <h2 className="w-full text-center font-bold text-xl">
        مزیت دریافت نمایندگی
      </h2>
      <div className="flex w-full md:justify-center items-center justify-start px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {AdvatagesOptions.map((AdvatagesOption) => (
            <div
              className="flex justify-center items-center gap-5"
              key={AdvatagesOption.id}
            >
              <span className="h-4 w-4 rotate-45 rounded-sm border-2 border-primary"></span>
              <p className="w-full">{AdvatagesOption.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advatages;
