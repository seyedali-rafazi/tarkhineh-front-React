import React, { useState } from "react";
import { toPersianNumbers } from "../../utils/FormatNumber";
import NavbarOption from "../../ui/NavbarOption";
import {
  likeSolidIcon,
  locationSolidIcon,
  userSolidIcon,
  walletSolidIcon,
} from "../../icons/dashboard-icon";
import { TbLogout } from "react-icons/tb";
import useUser from "../authentication/useUser";

import Exist from "../../ui/Exist";

function SidebarLayout() {
  const { isLoading, user } = useUser();
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen md:h-96 md:border md:border-secondery-500 rounded-lg p-4">
      <div className="space-y-3">
        {isLoading ? (
          <div className="flex gap-4 items-center animate-pulse">
            <div className="w-14 h-12 rounded-full bg-secondery-400"></div>
            <div className="flex flex-col gap-2 w-full">
              <span className="w-full h-3 bg-secondery-400 rounded-lg"></span>
              <span className="w-full h-3 bg-secondery-400 rounded-lg"></span>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <div className="w-14 h-14 rounded-full">
              <img
                src={user.avatarUrl ? user.avatarUrl : "/styles/avatar.png"}
                alt="عکس کاربر"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span> {user.name ? user.name : "کاربر ترخینه"}</span>
              <span className="text-sm text-secondery-500">
                {toPersianNumbers(user.phoneNumber)}
              </span>
            </div>
          </div>
        )}
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
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2  py-2"
          >
            <span>
              <TbLogout className="w-6 h-6 text-error-200" />
            </span>
            <p className="font-semibold text-error-200">خروج</p>
          </button>
          <Exist open={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}

export default SidebarLayout;
