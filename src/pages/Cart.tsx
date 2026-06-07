import React from "react";
import OrderStep from "../components/cart/OrderStep";
import Footer from "../ui/Footer";

function Cart() {
  return (
    <div className="flex flex-col min-h-screen xl:max-w-[1640px]">
      <main className="flex-grow">
        <OrderStep />
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
