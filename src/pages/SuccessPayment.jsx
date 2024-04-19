import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Loading from "../ui/Loading";
import useUser from "../feachers/authentication/useUser";
import SuccessfulPayment from "../components/UserPay/SuccessfulPayment";

function SuccessPayment() {
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
      <SuccessfulPayment />
      <Footer />
    </div>
  );
}

export default SuccessPayment;
