import React from "react";
import Footer from "../ui/Footer";
import SuccessfulPayment from "../components/UserPay/SuccessfulPayment";

function SuccessPayment() {
  return (
    <div className="container xl:max-w-[1640px] min-h-screen max-w-full">
      <SuccessfulPayment />
      <Footer />
    </div>
  );
}

export default SuccessPayment;
