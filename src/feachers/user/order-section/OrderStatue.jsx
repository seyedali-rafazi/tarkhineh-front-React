import React from "react";
import gregorianToPersian from "../../../utils/MonthFormater";
import { calender, tinyLocationIcon } from "../../../icons/dashboard-icon";
import { toPersianNumbersWithComma } from "../../../utils/FormatNumber";
import { totalOffAmount, totalPrice } from "../../../utils/Prices";
import UserOrderStatue from "./UserOrderStatue";

function OrderStatue({ payments }) {
  return payments.map((payment) => (
    <div
      className="border w-full border-red-100 p-5 rounded-lg  space-y-3"
      key={payment._id}
    >
      <div className="flex justify-between items-center ">
        <h2 className="text-secondery-600">شعبه اقدسیه</h2>
        <p className="text-sm p-2 rounded-md bg-rose-100 text-primary md:text-lg">
          {payment.status == "COMPLETED"
            ? "پرداخت موفقیت آمیز"
            : "پرداخت ناموفق"}
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start w-full">
        <div className="flex flex-col gap-2 text-xs text-secondery-600">
          <div className="flex gap-1">
            <span>{calender}</span>
            <span>{gregorianToPersian(payment.createdAt)}</span>
          </div>
          <div>
            <span>مبلغ: </span>
            <span>
              {toPersianNumbersWithComma(
                totalPrice(payment.cart.productDetail)
              )}
              &nbsp;تومان &nbsp;تومان
            </span>
          </div>
          <div>
            <span>تخفیف: </span>
            <span>
              {toPersianNumbersWithComma(
                totalOffAmount(payment.cart.productDetail)
              )}
              &nbsp;تومان
            </span>
          </div>
        </div>
        <p className="text-xs text-secondery-600 flex gap-1">
          <span>{tinyLocationIcon}</span>
          <span>اقدسیه٬شمیرانات٬متجمع شمیران</span>
        </p>
      </div>
      <UserOrderStatue orders={payment.cart.productDetail} />
    </div>
  ));
}

export default OrderStatue;
