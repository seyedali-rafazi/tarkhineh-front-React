import React from "react";
import { orderStep } from "../../icons/Cart-icons";
import EmptySection from "../../ui/EmptySection";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import useUser from "../../feachers/authentication/useUser";
import OrderSection from "./OrderSection";

function OrderStep() {
  const navigate = useNavigate();
  const { cart } = useUser();

  return (
    <div className="flex flex-col justify-center items-center gap-4 my-5 w-full">
      <div className=" w-full p-5">
        <div className="hidden md:flex text-primary justify-center">
          {orderStep}
        </div>
        <div className="flex justify-between md:hidden">
          <button onClick={() => navigate(-1)} className="text-secondery-500">
            <FaChevronRight />
          </button>
          <p className="font-semibold">سبد خرید</p>
          <button className="text-secondery-500">
            <GoTrash />
          </button>
        </div>
      </div>

      <div className=" w-full flex justify-center px-5 md:px-12 min-h-80">
        {cart?.productDetail?.length == 0 ? (
          <div className="border border-red-100 rounded-lg w-full ">
            <EmptySection text="شما هنوز محصولی انتخاب نکردید!" />
          </div>
        ) : (
          <OrderSection products={cart?.productDetail} />
        )}
      </div>
    </div>
  );
}

export default OrderStep;
