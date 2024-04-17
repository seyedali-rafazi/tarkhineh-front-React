import React from "react";
import { GoTrash } from "react-icons/go";
import { totalOffAmount, totalPrice } from "../utils/Prices";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../utils/FormatNumber";
import ListLocation from "../components/shipping/ListLocation";

function InformationSection({ products, children, shippingPrice }) {
  return (
    <div className="w-full lg:w-3/5 flex flex-col h-fit gap-4 border border-secondery-400 rounded-lg p-4">
      <div className="flex items-center justify-between border-b-2 border-secondery-400 px-2 py-4">
        <div className="flex items-center gap-2">
          <p>سبد خرید</p>
          <span>({toPersianNumbers(products.length)})</span>
        </div>
        <button>
          <GoTrash className="w-6 h-6" />
        </button>
      </div>
      <div>
        <ListLocation products={products} />
      </div>
      <div className="flex items-center justify-between border-b-2 border-secondery-400 px-2 py-4 ">
        <p>تخفیف محصولات</p>
        <span>
          {toPersianNumbersWithComma(totalOffAmount(products))}&nbsp;تومان
        </span>
      </div>
      <div className="flex flex-col gap-2 border-b-2 border-secondery-400 px-2 py-4">
        <div className="flex justify-between items-center">
          <p>هزینه ارسال</p>
          <span>{toPersianNumbersWithComma(shippingPrice)}&nbsp;تومان</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p> مبلغ قابل پرداخت</p>
          <span className="text-primary font-semibold">
            {toPersianNumbersWithComma(totalPrice(products))}
            &nbsp;تومان
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default InformationSection;
