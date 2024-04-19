import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import SuccessfulPayment from "../components/UserPay/SuccessfulPayment";

function SuccessPayment() {
  return (
    <div className="container xl:max-w-7xl min-h-screen">
      <Navbar />
      <SuccessfulPayment />
      <Footer />
    </div>
  );
}

export default SuccessPayment;
