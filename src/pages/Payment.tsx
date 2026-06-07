import React from "react";
import Footer from "../ui/Footer";
import PaymentStep from "../components/payment/PaymentStep";

function Payment() {
  return (
    <div className="container xl:max-w-[1640px] min-h-screen">
      <PaymentStep />
      <Footer />
    </div>
  );
}

export default Payment;
