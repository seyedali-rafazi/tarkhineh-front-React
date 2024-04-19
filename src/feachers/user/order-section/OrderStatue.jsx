import React from "react";
import gregorianToPersian from "../../../utils/MonthFormater";
import { tinyWalletIcon, calender } from "../../../icons/dashboard-icon";
import { toPersianNumbersWithComma } from "../../../utils/FormatNumber";
import { totalOffAmount, totalPrice } from "../../../utils/Prices";

function OrderStatue({ payments }) {
  console.log(payments[4].cart.productDetail);
  return (
    <div className="w-full flex flex-col gap-10">
      {payments.map((payment) => (
        <div className="border border-red-100 p-5 rounded-lg" key={payment._id}>
          <div className="flex justify-between items-center ">
            <h2 className="text-secondery-600">شعبه اقدسیه</h2>
            <p className="p-2 rounded-md bg-rose-100 text-primary">
              {payment.status == "COMPLETED"
                ? "پرداخت موفقیت آمیز"
                : "پرداخت ناموفق"}
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start w-full">
            <div className="flex  gap-2 text-xs text-secondery-600">
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
              <span>{tinyWalletIcon}</span>
              <span>اقدسیه٬شمیرانات٬متجمع شمیران</span>
            </p>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default OrderStatue;
