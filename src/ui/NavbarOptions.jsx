import React from "react";
import NavbarOption from "./NavbarOption";

export default function NavbarOptions() {
  return (
    <>
      <NavbarOption path="/">
        <div className="flex justify-start gap-2">
          <img className="lg:hidden" width="21" src="icons/home.svg" alt="" />
          <p>صفحه اصلی </p>
        </div>
      </NavbarOption>
      <NavbarOption path="/branch">
        <div className="flex justify-start gap-2">
          <img
            className="lg:hidden"
            width="21"
            src="icons/menu-board.svg"
            alt=""
          />
          <div className="flex justify-between w-full">
            <p>شعبه</p>
            <img
              className="hidden lg:block"
              width="18"
              src="icons/arrow-down.svg"
              alt=""
            />
          </div>
        </div>
      </NavbarOption>
      <NavbarOption path="/branch-menu">
        <div className="flex justify-start gap-2">
          <img
            className="lg:hidden"
            width="21"
            src="icons/home-hashtag.svg"
            alt=""
          />
          <div className="flex justify-between w-full">
            <p>منو</p>
            <img
              className="hidden lg:block"
              width="18"
              src="icons/arrow-down.svg"
              alt=""
            />
          </div>
        </div>
      </NavbarOption>
      <NavbarOption path="/franchise">
        <div className="flex justify-start gap-2">
          <img className="lg:hidden" width="21" src="icons/truck.svg" alt="" />
          <p>اعطای نمایندگی </p>
        </div>
      </NavbarOption>
      <NavbarOption path="/about-our-company">
        <div className="flex justify-start gap-2">
          <img
            className="lg:hidden"
            width="21"
            src="icons/profile-2user.svg"
            alt=""
          />
          <p>درباره ما </p>
        </div>
      </NavbarOption>
      <NavbarOption path="/call-us">
        <div className="flex justify-start gap-2">
          <img
            className="lg:hidden"
            width="21"
            src="icons/call-calling.svg"
            alt=""
          />
          <p>تماس با ما </p>
        </div>
      </NavbarOption>
    </>
  );
}
