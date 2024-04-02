import React, { useState } from "react";
import Logo from "../ui/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import NavbarIcons from "./NavbarIcons";
import NavbarOptions from "./NavbarOptions";
import useUser from "../feachers/authentication/useUser";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, isLoading } = useUser();
  return (
    <div className="shadow-md">
      <div
        className={`flex justify-evenly py-5 items-center ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}>
        <button onClick={() => setOpen(true)} className="lg:hidden">
          <RxHamburgerMenu className="w-6 h-6" />
        </button>

        <Sidebar open={open} onClose={() => setOpen(false)} />
        <Logo />
        <div className="hidden lg:flex gap-3">
          <NavbarOptions />
        </div>
        <NavbarIcons user={user} />
      </div>
    </div>
  );
}

export default Navbar;
