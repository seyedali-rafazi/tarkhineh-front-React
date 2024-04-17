import React from "react";
import { note } from "../../icons/ShippingIcon";

function UserDescription() {
  return (
    <div className="textField !border-secondery-400 flex">
      <span className="text-secondery-600 pt-2 ">{note}</span>
      <textarea
        name="ourMessage"
        type="text"
        id="ourMessage"
        autoComplete="off"
        placeholder="توضیحات شما (اختیاری)"
        className="w-full placeholder:text-secondery-400 mt-2 h-[141px]"
      />
    </div>
  );
}

export default UserDescription;
