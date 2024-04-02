import React from "react";
import { NavLink } from "react-router-dom";

function NavbarOption({ path, children }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${
          isActive ? "text-tint-700" : ""
        } py-2 text-md text-secondery-700 font-semibold ` 
      }>
      {children}
    </NavLink>
  );
}

export default NavbarOption;
