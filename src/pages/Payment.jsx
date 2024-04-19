import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import PaymentStep from "../components/payment/PaymentStep";

function Payment() {
  return (
    <div className="container xl:max-w-7xl min-h-screen">
      <Navbar />
      <PaymentStep />
      <Footer />
    </div>
  );
}

export default Payment;
