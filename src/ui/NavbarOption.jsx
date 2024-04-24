import React from "react";
import { NavLink } from "react-router-dom";

function NavbarOption({ path, children, onClose }) {
  return (
    <NavLink
      onClick={onClose}
      to={path}
      className={({ isActive }) =>
        `${
          isActive ? "text-tint-700" : ""
        } py-2 text-sm text-secondery-700 font-semibold md:text-lg `
      }
    >
      {children}
    </NavLink>
  );
}

export default NavbarOption;
