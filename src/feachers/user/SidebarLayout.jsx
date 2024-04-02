import React from "react";
import { NavLink } from "react-router-dom";
import { toPersianNumbers } from "../../utils/FormatNumber";
import NavbarOption from "../../ui/NavbarOption";

import {
  likeIcon,
  likeSolidIcon,
  locationIcon,
  locationSolidIcon,
  logOutIcon,
  userIcon,
  userSolidIcon,
  walletIcon,
  walletSolidIcon,
} from "../../icons/dashboard-icon";
import { TbLogout } from "react-icons/tb";

function SidebarLayout() {
  return (
    <div className="h-screen">
      <div className="space-y-3">
        <div className="flex gap-2 items-center">
          <div className="w-14 h-14 rounded-full">
            <img src="styles/avatar.png" alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <span>شماره کاربر</span>
            <span className="text-sm text-secondery-500">
              {toPersianNumbers("09782323654")}
            </span>
          </div>
        </div>

        <span className="w-full block h-0.5 bg-secondery-500 rounded-full "></span>
        <div className="flex flex-col">
          <NavbarOption path="/dashboard/profile">
            <div className="flex items-center gap-2 py-3\2">
              <span>{userSolidIcon}</span>
              <p>پروفایل</p>
            </div>
          </NavbarOption>
          <NavbarOption path="/dashboard/user-orders">
            <div className="flex items-center gap-2 py-2 ">
              <span>{walletSolidIcon}</span>
              <p>پیگیری سفارشات</p>
            </div>
          </NavbarOption>
          <NavbarOption path="/dashboard/user-favourits">
            <div className="flex items-center gap-2 py-2">
              <span>{likeSolidIcon}</span>
              <p>علاقه مندی ها</p>
            </div>
          </NavbarOption>
          <NavbarOption path="/dashboard/user-address">
            <div className="flex items-center gap-2 py-2">
              <span>{locationSolidIcon}</span>
              <p>آدرس های من</p>
            </div>
          </NavbarOption>
          <button className="flex items-center gap-2  py-2">
            <span>
              <TbLogout className="w-6 h-6 text-error-200" />
            </span>
            <p className="font-semibold text-error-200">خروج</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SidebarLayout;
