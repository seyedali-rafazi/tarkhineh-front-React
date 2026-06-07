import React from "react";

const options = [
  {
    imgage: "/styles/bank.png",
    text: "بیش از 20 شعبه فعال در سراسر کشور",
    id: 1,
  },
  {
    imgage: "/styles/wallet.png",
    text: "تسهیلات راه‌اندازی رستوران و تجهیز آن",
    id: 2,
  },
  {
    imgage: "/styles/chart.png",
    text: "طرح‌های تشویقی ارتقای فروش",
    id: 3,
  },
  {
    imgage: "/styles/book.png",
    text: "اعطای دستور العمل پخت غذاها",
    id: 4,
  },
];

function FranchiseOptions() {
  return (
    <div className="flex gap-1 items-center justify-center h-fit px-2 md:gap-5 md:px-5">
      {options.map((option) => (
        <div
          key={option.id}
          className="flex flex-col justify-between items-center gap-2 h-full"
        >
          <div>
            <img className="w-16 sm:w-24 md:w-28" src={option.imgage} alt="" />
          </div>
          <p className="text-secondery-700 text-[10px] text-center md:text-sm lg:text-[16px]">
            {option.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FranchiseOptions;
