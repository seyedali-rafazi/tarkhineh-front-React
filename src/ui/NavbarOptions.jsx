import React from "react";
import NavbarOption from "./NavbarOption";
import { TbHome } from "react-icons/tb";
import { TbAlbum } from "react-icons/tb";
import { TbTruck } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";

const pageLinks = [
  {
    icon: <TbHome className="w-6 h-6" />,
    text: "صفحه اصلی ",
    path: "/",
    id: 1,
  },
  {
    icon: <TbAlbum className="w-6 h-6"/>,
    text: "منو",
    path: "/branch-menu",
    id: 2,
  },
  {
    icon: <TbTruck className="w-6 h-6"/>,
    text: "اعطای نمایندگی",
    path: "/franchise",
    id: 3,
  },
  {
    icon: <TbUsers className="w-6 h-6"/>,
    text: "درباره ما",
    path: "/about",
    id: 4,
  },
  {
    icon: <TbPhoneCall className="w-6 h-6"/>,
    text: "تماس با ما",
    path: "/call-us",
    id: 5,
  },
];

export default function NavbarOptions({onClose}) {
  return (
    <>
      {pageLinks.map((pageLink) => (
        <NavbarOption key={pageLink.id} path={pageLink.path} onClose={onClose}>
          <div className="flex justify-start items-center gap-2">
            <span className="lg:hidden">{pageLink.icon}</span>
            <p>{pageLink.text}</p>
          </div>
        </NavbarOption>
      ))}
    </>
  );
}
