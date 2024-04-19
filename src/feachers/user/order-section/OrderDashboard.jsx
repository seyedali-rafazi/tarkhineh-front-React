import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { emptyPage } from "../../../icons/dashboard-icon";
import EmptySection from "../../../ui/EmptySection";
import useUser from "../../authentication/useUser";
import OrderStatue from "./OrderStatue";
import Loading from "../../../ui/Loading";

function OrderDashboard() {
  const navigate = useNavigate();
  const { cart ,payments , isLoading } = useUser();

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="flex flex-col items-center gap-5 border border-secondery-500 rounded-lg p-5">
      <button
        onClick={() => navigate(-1)}
        className="md:hidden flex justify-start w-full"
      >
        <FaArrowRight />
      </button>
      <p className="flex justify-start w-full font-bold text-lg">سفارشات </p>
      <span className="w-full block h-0.5 bg-secondery-500 rounded-full"></span>
      {payments.length == 0 ? (
        <EmptySection text="شما در حال حاضر هیچ سفارشی ثبت نکرده اید !" />
      ) : (
        <OrderStatue payments={payments}/>
      )}
    </div>
  );
}

export default OrderDashboard;
