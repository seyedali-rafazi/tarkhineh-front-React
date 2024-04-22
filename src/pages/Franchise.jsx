import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import FanchiseLayout from "../components/franchise/FanchiseLayout";

function Franchise() {
  return (
    <div className="container xl:max-w-7xl min-h-screen max-w-full">
      <Navbar />
      <FanchiseLayout />
      <Footer />
    </div>
  );
}

export default Franchise;
