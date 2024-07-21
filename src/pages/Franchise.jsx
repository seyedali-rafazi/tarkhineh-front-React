import React from "react";
import Footer from "../ui/Footer";
import FanchiseLayout from "../components/franchise/FanchiseLayout";

function Franchise() {
  return (
    <div className="container xl:max-w-[1640px] min-h-screen max-w-full">
      <FanchiseLayout />
      <Footer />
    </div>
  );
}

export default Franchise;
