import React from "react";
import MenuLayout from "../components/menu/MenuLayout";
import BranchBar from "../ui/BranchBar";
import NavbarOption from "../ui/NavbarOption";

function BranchMenu() {
  return (
    <MenuLayout>
      <BranchBar>
        <NavbarOption path="mainfood">غذای اصلی</NavbarOption>
        <NavbarOption path="Appetizer">پیش غذا</NavbarOption>
        <NavbarOption path="dessert">دسر</NavbarOption>
        <NavbarOption path="drink">نوشیدنی</NavbarOption>
      </BranchBar>
    </MenuLayout>
  );
}

export default BranchMenu;
