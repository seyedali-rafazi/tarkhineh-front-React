import React from "react";
import { useNavigate } from "react-router-dom";

function SuccessfulPayment() {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    // Replace the current entry in the history stack
    navigate(url, { replace: true });
  };

  return (
    <div className="flex  justify-center items-center bg-successful-payment bg-cover bg-center min-h-[calc((100vh_-_288px))]">
      <div className="w-full h-full flex gap-8 flex-col justify-center items-center">
        <img
          src="/styles/successful-payment.svg"
          className="w-[114px] md:w-[180px] lg:w-[256px]"
          alt=""
        />
        <div className="flex flex-col gap-3 items-center justify-center">
          <p className="font-bold text-xl md:text-2xl lg:text-5xl text-primary">
            پرداخت شما با موفقیت انجام شد!
          </p>
          <p className="text-primary text-sm lg:text-lg">
            کد رهگیری سفارش شما: ۶۲,۰۴۵
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => handleNavigate("/") }
            className="border rounded-md text-primary p-2 text-sm w-[150px] md:w-[215px] md:p-3"
          >
            بازشگت به صفحه اصلی
          </button>
          <button
            onClick={() => handleNavigate("/dashboard/user-orders")}
            className="border rounded-md text-secondery-50 bg-primary p-2 text-sm w-[150px] md:w-[215px] md:p-3"
          >
            پیگیری سفارش
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessfulPayment;
