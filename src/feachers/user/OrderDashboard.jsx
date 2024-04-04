import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { emptyPage } from "../../icons/dashboard-icon";

function OrderDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-5 border border-secondery-500 rounded-lg p-5">
      <button
        onClick={() => navigate(-1)}
        className="md:hidden flex justify-start w-full">
        <FaArrowRight />
      </button>
      <p className="flex justify-start w-full font-bold text-lg">سفارشات </p>
      <span className="w-full block h-0.5 bg-secondery-500 rounded-full"></span>
      <div className="w-full h-full relative">
        <div className="flex justify-center opacity-45">{emptyPage}</div>
        <div className="absolute inset-0 m-auto flex flex-col justify-center items-center gap-8">
          <p className="font-semibold text-secondery-600 text-center">
            شما در حال حاضر هیچ سفارشی ثبت نکرده اید !
          </p>
          <button className="border-2 font-semibold border-primary text-primary hover:bg-primary hover:text-secondery-50 duration-300 rounded-md px-10 py-2 w-1/3 min-w-48">
            منوی رستوران
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderDashboard;
