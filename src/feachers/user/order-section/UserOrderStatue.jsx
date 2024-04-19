import React from "react";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../utils/FormatNumber";

function UserOrderStatue({ orders }) {
  return (
    <div className="flex gap-2 whitespace-nowrap overflow-auto">
      {orders.map((userOrder) => (
        <div
          className="flex flex-col border-2 border-secondery-200 rounded-xl"
          key={userOrder._id}
        >
          <div className="relative">
            <img
              className="rounded-t-xl object-cover h-32 min-w-36"
              src={userOrder.imageLink}
              alt=""
            />
            <span className="absolute left-2 bottom-2 rounded-md px-2 bg-secondery-50 text-primary">
              <span className="text-xs">x</span>
              {toPersianNumbers(userOrder.quantity.quantity)}
            </span>
          </div>
          <div className="flex flex-col p-2 justify-center items-center text-sm text-secondery-700">
            <p>{userOrder.title}</p>
            <p>{toPersianNumbersWithComma(userOrder.offPrice)}&nbsp;تومان</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserOrderStatue;
