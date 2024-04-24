import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import EmptySection from "../../../ui/EmptySection";
import useUser from "../../authentication/useUser";
import OrderStatue from "./OrderStatue";
import PanelSceleton from "../../../ui/PanelSceleton";

function OrderDashboard() {
  const navigate = useNavigate();
  const { payments, isLoading } = useUser();

  return isLoading ? (
    <PanelSceleton />
  ) : (
    <div className="flex flex-col w-full items-center gap-5 border border-secondery-500 rounded-lg p-2">
      <button
        onClick={() => navigate(-1)}
        className="lg:hidden flex justify-start w-full"
      >
        <FaArrowRight />
      </button>
      <p className="flex justify-start w-full font-bold text-lg">سفارشات </p>
      <span className="w-full block h-0.5 bg-secondery-500 rounded-full"></span>
      {payments.length == 0 ? (
        <EmptySection text="شما در حال حاضر هیچ سفارشی ثبت نکرده اید !" />
      ) : (
        <OrderStatue payments={payments} />
      )}
    </div>
  );
}

export default OrderDashboard;
