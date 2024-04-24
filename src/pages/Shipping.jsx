import React from "react";
import ShippingStep from "../components/shipping/ShippingStep";
import Footer from "../ui/Footer";

function Shipping() {
  return (
    <div className="container xl:max-w-7xl min-h-screen max-w-full">
      <ShippingStep />
      <Footer />
    </div>
  );
}

export default Shipping;
