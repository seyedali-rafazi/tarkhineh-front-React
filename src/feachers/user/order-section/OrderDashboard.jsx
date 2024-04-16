import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { emptyPage } from "../../../icons/dashboard-icon";
import EmptySection from "../../../ui/EmptySection";

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
      <EmptySection text="شما در حال حاضر هیچ سفارشی ثبت نکرده اید !" />
    </div>
  );
}

export default OrderDashboard;
