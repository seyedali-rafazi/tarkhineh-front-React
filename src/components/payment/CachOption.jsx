import React from "react";
import { warning } from "../../icons/PaymentIcon";

function CachOption() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center bg-rose-50 p-5 rounded-lg border border-rose-100">
      <div className="flex text-secondery-800 gap-2 w-full lg:w-1/5 whitespace-nowrap border-b border-secondery-400 py-4 font-semibold lg:border-b-0 lg:py-0">
        <span>{warning}</span>
        <p>قابل توجه</p>
      </div>
      <div className="text-justify w-full text-sm text-secondery-600">
        هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل
        کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای
        پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.
      </div>
    </div>
  );
}

export default CachOption;
