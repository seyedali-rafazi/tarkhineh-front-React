import React from "react";
import Loading from "../ui/Loading";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import useUser from "../feachers/authentication/useUser";
import PaymentStep from "../components/payment/PaymentStep";


function Payment() {
  const { user, cart, isLoading } = useUser();
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
      <PaymentStep cart={cart} user={user} />
      <Footer />
    </div>
  );
}

export default Payment;
