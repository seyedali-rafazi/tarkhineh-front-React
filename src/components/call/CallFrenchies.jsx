import React from "react";

const branches = [
  {
    image: "/styles/ekbatan.jpg",
    branchetitle: "شعبه اکباتان",
    brancheAdrress: "آدرس: شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    brancheNumber: "شماره تماس:۰۲۱-۵۴۵۶۴۳-۵۳",
    brancheWorkTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
    id: 1,
  },
  {
    image: "/styles/chalos.jpg",
    branchetitle: "شعبه چالوس",
    brancheAdrress:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    brancheNumber: "شماره تماس:۰۲۱-۵۲۵۲-۵۳",
    brancheWorkTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
    id: 2,
  },
  {
    image: "/styles/aghdasieh.jpg",
    branchetitle: "شعبه اقدسیه",
    brancheAdrress: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    brancheNumber: "شماره تماس:۰۲۱-۵۴۵۲۵۲-۵۳",
    brancheWorkTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
    id: 3,
  },
  {
    image: "/styles/vanak.jpg",
    branchetitle: "شعبه ونک",
    brancheAdrress: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    brancheNumber: "شماره تماس:۰۲۱-۵۵۴۶۲-۵۳",
    brancheWorkTime: "ساعت کاری: همه روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
    id: 4,
  },
];

function CallFrenchies() {
  return (
    <div className="flex flex-col px-3 md:px-10 gap-8">
      {branches.map((branche) => (
        <div
          key={branche.id}
          className="w-full h-fit border border-secondery-400 rounded-lg grid grid-cols-1 md:grid-cols-2 hover:shadow-lg hover:border hover:border-primary duration-300"
        >
          <div className="w-full h-32 md:h-72 rounded-lg">
            <img
              className="object-center object-cover w-full h-full rounded-t-lg md:rounded-r-lg md:rounded-tl-none"
              src={branche.image}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center p-4">
            <h2 className="text-lg mb-4">{branche.branchetitle}</h2>
            <div className="flex flex-col justify-center items-center text-secondery-500 text-xs md:text-sm text-center">
              <span>{branche.brancheAdrress}</span>
              <span>{branche.brancheNumber}</span>
              <span>{branche.brancheWorkTime}</span>
            </div>
            <div className="flex gap-3">
              <button className="text-primary bg-secondery-50 border border-primary rounded-md px-4 py-1 text-xs md:text-sm">
                صفحه شعبه
              </button>
              <button className="text-secondery-50 bg-primary rounded-md px-4 py-1 text-xs md:text-sm">
                دیدن در نقشه
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CallFrenchies;
