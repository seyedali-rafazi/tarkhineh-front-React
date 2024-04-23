import React from "react";
import useAddToCard from "../feachers/food/addToCart";
import Loading from "./Loading";
import useUser from "../feachers/authentication/useUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function OrderButton({ id }) {
  const { addFood, isPending } = useAddToCard();
  const { isLoading, user } = useUser();
  const navigate = useNavigate();
  const handleClick = (productId) => {
    addFood(productId);
  };

  const handelExistProduct = () => {
    navigate("/dashboard/user-orders");
  };

  const handelUser = () => {
    toast.error("وارد حساب کاربری خود شوید");
  };

  if (isPending) {
    return (
      <button className="text-xs sm:text-sm md:text-md bg-primary text-secondary-50 rounded-lg px-5 py-2 w-48">
        <p className="text-secondery-50">...</p>
      </button>
    );
  }

  if (!user) {
    return (
      <button
        onClick={handelUser}
        className="text-xs bg-primary text-secondery-50 rounded-lg px-5 py-2 w-28 sm:text-sm md:text-md md:w-48"
      >
        <p>افزودن</p>
      </button>
    );
  }

  if (user.cart.products.map((product) => product.productId).includes(id)) {
    return (
      <button
        onClick={handelExistProduct}
        className="text-xs sm:text-sm md:text-md bg-secondery-50 text-primary rounded-lg px-5 py-2 w-48 border border-primary "
      >
        <p>مشاهده سبد خرید</p>
      </button>
    );
  }

  return (
    <button
      onClick={() => handleClick(id)}
      className="text-xs bg-primary text-secondery-50 rounded-lg px-5 py-2 w-28 sm:text-sm md:text-md md:w-48"
    >
      <p>افزودن</p>
    </button>
  );
}
