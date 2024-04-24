import React, { useEffect, useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import NavbarOptions from "./NavbarOptions";
import { TbX } from "react-icons/tb";

function Sidebar({ open, onClose }) {
  const modalRef = useOutsideClick(onClose);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      sidebarRef.current.classList.remove("translate-x-full");
    } else {
      document.body.classList.remove("overflow-hidden");
      sidebarRef.current.classList.add("translate-x-full");
    }
  }, [open]);

  return (
    <div
      className={`${
        open
          ? "backdrop-blur-sm absolute top-0 left-0 right-0 bottom-0 w-full h-screen bg-secondery-800 bg-opacity-30"
          : ""
      } lg:hidden fixed modal`}
    >
      <div
        className={`fixed  top-0 right-0  h-screen bg-secondery-800 bg-opacity-30 modal lg:hidden transition-transform duration-300 ease-in-out transform ${
          open ? "" : "translate-x-full"
        }`}
        ref={sidebarRef}
      >
        <div
          ref={modalRef}
          className="top-0 right-0 bg-secondery-50 max-w-[270px] sm:max-w-xs w-full h-screen transition-transform duration-300 ease-in-out transform"
        >
          <div>
            <div className="w-full h-32 relative">
              <img
                className="object-cover w-full h-full"
                src="/styles/sidebar-dark.png"
                alt=""
              />
              <img
                className="absolute top-12 right-4 "
                src="/styles/tarkineh-sidebar.png"
                alt=""
              />
              <button onClick={onClose}>
                <TbX className="w-6 h-6 absolute left-4 top-6 text-secondery-50 font-bold" />
              </button>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <NavbarOptions onClose={onClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
