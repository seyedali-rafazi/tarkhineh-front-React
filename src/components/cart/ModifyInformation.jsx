import React from "react";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/FormatNumber";
import { totalOffAmount, totalPrice } from "../../utils/Prices";
import { PiWarningOctagon } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import ModifyList from "./ModifyList";

function ModifyInformation({ products, children }) {
  return (
    <div className="w-full lg:w-2/5 flex flex-col h-fit gap-4 border border-secondery-400 rounded-lg p-4">
      <div className="md:hidden">
        <ModifyList products={products} />
      </div>
      <div className="flex items-center justify-between border-b-2 border-secondery-400 px-2 py-4">
        <div className="flex items-center gap-2">
          <p>سبد خرید</p>
          <span>({toPersianNumbers(products.length)})</span>
        </div>
        <button>
          <GoTrash className="w-6 h-6" />
        </button>
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
          <span>{toPersianNumbers(0)}&nbsp;تومان</span>
        </div>
        <div className="flex gap-2 items-start text-warning-300">
          <span>
            <PiWarningOctagon className="w-6 h-6" />
          </span>
          <p className="text-sm text-justify">
            هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
            محاسبه و به این مبلغ اضافه خواهد شد.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p> مبلغ قابل پرداخت</p>
          <span className="text-primary font-semibold">
            {toPersianNumbersWithComma(totalPrice(products))}&nbsp;تومان
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModifyInformation;
