import React from "react";
import Navbar from "../ui/Navbar";
import OrderStep from "../components/cart/OrderStep";
import Footer from "../ui/Footer";

function Cart() {
  return (
    <div className="container xl:max-w-7xl min-h-screen max-w-full">
      <Navbar />
      <OrderStep />
      <Footer />
    </div>
  );
}

export default Cart;
