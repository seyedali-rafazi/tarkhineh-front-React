import React, { useEffect } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import NavbarOptions from "./NavbarOptions";
import { TbX } from "react-icons/tb";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

function Sidebar({ open, onClose }: SidebarProps) {
  const modalRef = useOutsideClick<HTMLDivElement>(onClose);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[110] lg:hidden transition-opacity duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-secondery-800/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        className={`absolute top-0 right-0 h-screen w-full max-w-[270px] sm:max-w-xs bg-secondery-50 shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full h-32 relative">
          <img
            className="object-cover w-full h-full"
            src="/styles/sidebar-dark.png"
            alt=""
          />
          <img
            className="absolute top-12 right-4"
            src="/styles/tarkineh-sidebar.png"
            alt=""
          />
          <button onClick={onClose} aria-label="بستن منو">
            <TbX className="w-6 h-6 absolute left-4 top-6 text-secondery-50 font-bold" />
          </button>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <NavbarOptions onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
