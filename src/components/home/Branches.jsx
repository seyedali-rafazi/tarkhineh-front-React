import React from "react";

const branches = [
  {
    imgstyle:
      "bg-cover bg-center bg-home-branch-1 w-full  h-full min-h-[112px] md:h-[230px]",
    nameBranch: "اکباتان",
    address: "شهرک اکباتان،فاز۳،مجتمع تجاری کوروش،طبقه سوم",
    id: 1,
  },
  {
    imgstyle:
      "bg-cover bg-center bg-home-branch-2 w-full  h-full min-h-[112px] md:h-[230px]",
    nameBranch: "چالوس",
    address: "چالوس،خیابان ۱۷ شهریور،بعد کوچه کوروش،جنب داروخانه دکتر میلانی",
    id: 2,
  },
  {
    imgstyle:
      "bg-cover bg-center bg-home-branch-3 w-full  h-full min-h-[112px] md:h-[230px]",
    nameBranch: "اقدسیه",
    address: "خیابان اقدسیه،نرسیده به میدان خیام،پلاک ۸",
    id: 3,
  },
  {
    imgstyle:
      "bg-cover bg-center bg-home-branch-4 w-full h-full min-h-[112px] md:h-[230px]",
    nameBranch: "ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    id: 4,
  },
];

function Branches() {
  return (
    <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mx-auto px-3 py-3 lg:px-12">
      {branches.map((branche) => (
        <div
          className="grid grid-rows-1 grid-cols-2 lg:grid-cols-1 gap-3 rounded-lg overflow-hidden  border border-secondery-500 z-30 hover:border-primary hover:shadow-lg duration-300"
          key={branche.id}>
          <div className={`${branche.imgstyle}`}></div>
          <div className="flex flex-col justify-center items-center gap-1 px-2 py-3">
            <p className="font-bold md:text-lg text-sm text-secondery-800 text-justify">
              شعبه {branche.nameBranch}
            </p>
            <p className="text-[10px] md:text-sm  text-secondery-600 leading-4 text-center">
              {branche.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Branches;
