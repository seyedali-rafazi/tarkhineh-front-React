import React, { useState } from "react";
import Logo from "../ui/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import NavbarIcons from "./NavbarIcons";
import NavbarOptions from "./NavbarOptions";
import useUser from "../feachers/authentication/useUser";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  return (
    <div className="shadow-sm w-full bg-white sticky top-0 z-[100] border-b border-secondery-300">
      <div className="container flex justify-between py-3 px-4 items-center max-w-7xl">
        <button onClick={() => setOpen(true)} className="lg:hidden">
          <RxHamburgerMenu className="w-6 h-6" />
        </button>

        <Sidebar open={open} onClose={() => setOpen(false)} />
        <Logo />
        <div className="hidden lg:flex gap-3">
          <NavbarOptions />
        </div>
        <NavbarIcons user={user}/>
      </div>
    </div>
  );
}

export default Navbar;
