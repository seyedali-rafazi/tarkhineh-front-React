import React from "react";
import useUser from "../feachers/authentication/useUser";
import Loading from "../ui/Loading";
import Navbar from "../ui/Navbar";
import OrderStep from "../components/cart/OrderStep";
import Footer from "../ui/Footer";

function Cart() {
  const { user, isLoading } = useUser();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div className=" xl:max-w-7xl min-h-screen">
      <Navbar user={user} />
      <OrderStep />
      <Footer/>
    </div>
  );
}

export default Cart;
