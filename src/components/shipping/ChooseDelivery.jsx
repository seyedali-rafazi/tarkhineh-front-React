import React from "react";
import { shoppingBag, truck, truckFast } from "../../icons/ShippingIcon";

function ChooseDelivery() {
  return (
    <div className="flex flex-col items-start gap-3 p-3 lg:flex-row lg:gap-0 lg:justify-between lg:items-center border border-secondery-400 lg:px-4 lg:py-8 rounded-lg">
      <div className="flex border-b-2 w-full p-3 lg:p-0 lg:border-b-0 gap-1 lg:w-1/3">
        <span className="text-secondery-800">{truck}</span>
        <p className="text-secondery-800">روش تحویل سفارش</p>
      </div>
      <form className="flex flex-col w-full justify-start items-start lg:flex-row lg:justify-between lg:items-center lg:w-2/3">
        <div className="flex p-3 lg:p-0 gap-1">
          <input type="radio" name="delivery-method" className="text-primary" />
          <div className="flex items-center flex-col text-secondery-600">
            <p>ارسال توسط پیک</p>
            <p className="text-xs">توسط پیک ارسال میشود</p>
          </div>
          <span className="text-secondery-600">{truckFast}</span>
        </div>
        <div className="flex items-center p-3 lg:p-0 gap-1">
          <input type="radio" name="delivery-method" />
          <div className="flex flex-col text-secondery-600">
            <p>تحویل حضوری</p>
            <p className="text-xs">به یکی از شعب مراجعه کنید</p>
          </div>
          <span className="text-secondery-600">{shoppingBag}</span>
        </div>
      </form>
    </div>
  );
}

export default ChooseDelivery;
