import React, { useState } from "react";
import { coinWallet, roundedWallet, wallet } from "../../icons/PaymentIcon";

function ChooseBank({ setPaymentOption, paymentOption }) {
  return (
    <div className="flex flex-col items-start gap-3 p-3 lg:flex-row lg:gap-0 lg:justify-between lg:items-center border border-secondery-400 lg:px-4 lg:py-8 rounded-lg">
      <div className="flex border-b-2 w-full p-3 lg:p-0 lg:border-b-0 gap-1 lg:w-1/3">
        <span className="text-secondery-800">{coinWallet}</span>
        <p className="text-secondery-800">روش تحویل سفارش</p>
      </div>
      <form className="flex flex-col w-full justify-start items-start lg:flex-row lg:justify-between lg:items-center lg:w-2/3">
        <div className="flex items-center gap-2 p-3 lg:p-0 ">
          <input
            onClick={() => setPaymentOption("bank")}
            type="radio"
            checked={paymentOption === "bank"}
            name="delivery-method"
            value="bank"
            onChange={(e) => setPaymentOption(e.target.value)}
          />
          <div className="flex flex-col text-secondery-600">
            <p>پرداخت اینترنتی</p>
            <p className="text-xs">توسط پیک ارسال میشود</p>
          </div>
          <span className="text-secondery-600">{roundedWallet}</span>
        </div>
        <div className="flex items-center gap-2 p-3 lg:p-0">
          <input
            onClick={() => setPaymentOption("cach")}
            type="radio"
            checked={paymentOption === "cach"}
            name="delivery-method"
            value="cach"
            onChange={(e) => setPaymentOption(e.target.value)}
          />
          <div className="flex flex-col text-secondery-600">
            <p>پرداخت در محل</p>
            <p className="text-xs">به یکی از شعب مراجعه کنید</p>
          </div>
          <span className="text-secondery-600">{wallet}</span>
        </div>
      </form>
    </div>
  );
}

export default ChooseBank;
