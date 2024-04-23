import React from "react";
import NavbarOption from "./NavbarOption";
import {
  callCalling,
  home,
  homeHashtag,
  profile2user,
  truck,
} from "../icons/Sidebar-icon";

export default function NavbarOptions() {
  return (
    <>
      <NavbarOption path="/">
        <div className="flex justify-start items-center gap-2">
          <span className="lg:hidden">{home} </span>
          <p>صفحه اصلی </p>
        </div>
      </NavbarOption>
      <NavbarOption path="/branch-menu">
        <div className="flex justify-start items-center gap-2">
          <span className="lg:hidden">{homeHashtag} </span>
          <div className="flex justify-between w-full">
            <p>منو</p>
          </div>
        </div>
      </NavbarOption>
      <NavbarOption path="/franchise">
        <div className="flex justify-start items-center gap-2">
          <span className="lg:hidden">{truck} </span>
          <p>اعطای نمایندگی </p>
        </div>
      </NavbarOption>
      <NavbarOption path="/about">
        <div className="flex justify-start items-center gap-2">
          <span className="lg:hidden">{profile2user} </span>
          <p>درباره ما </p>
        </div>
      </NavbarOption>
      <NavbarOption path="/call-us">
        <div className="flex justify-start items-center gap-2">
          <span className="lg:hidden">{callCalling} </span>
          <p>تماس با ما </p>
        </div>
      </NavbarOption>
    </>
  );
}
