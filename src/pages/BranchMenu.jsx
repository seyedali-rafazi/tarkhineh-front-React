import React from "react";
import MenuLayout from "../components/menu/MenuLayout";
import BranchBar from "../ui/BranchBar";
import NavbarOption from "../ui/NavbarOption";

function BranchMenu() {
  return (
    <MenuLayout>
      <BranchBar>
        <div className="container max-w-6xl flex gap-4 justify-center items-center lg:justify-start">
          <NavbarOption path="mainfood">غذای اصلی</NavbarOption>
          <NavbarOption path="Appetizer">پیش غذا</NavbarOption>
          <NavbarOption path="dessert">دسر</NavbarOption>
          <NavbarOption path="drink">نوشیدنی</NavbarOption>
        </div>
      </BranchBar>
    </MenuLayout>
  );
}

export default BranchMenu;
