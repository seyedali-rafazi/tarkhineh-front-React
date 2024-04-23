import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import CalllLayout from "../components/call/CalllLayout";

function Call() {
  return (
    <div className="container xl:max-w-7xl min-h-screen max-w-full">
      <Navbar />
      <CalllLayout />
      <Footer />
    </div>
  );
}

export default Call;
