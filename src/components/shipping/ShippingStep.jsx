import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import EmptySection from "../../ui/EmptySection";
import { shippingBaner } from "../../icons/ShippingIcon";
import ShippingSection from "./ShippingSection";
import useUser from "../../feachers/authentication/useUser";
import Loading from "../../ui/Loading";

function ShippingStep() {
  const navigate = useNavigate();
  const { user, cart, isLoading } = useUser();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 my-5 w-full">
      <div className=" w-full p-5">
        <div className="hidden md:flex text-primary justify-center">
          {shippingBaner}
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

      <div className=" w-full flex justify-center px-5 md:px-12">
        {cart.productDetail.length == 0 ? (
          <div className="border border-red-100 rounded-lg w-full">
            <EmptySection text="شما هنوز محصولی انتخاب نکردید!" />
          </div>
        ) : (
          <ShippingSection user={user} products={cart.productDetail} />
        )}
      </div>
    </div>
  );
}

export default ShippingStep;
