import React from "react";
import Navbar from "../ui/Navbar";
import HomeLayout from "../components/home/HomeLayout";

function Home() {
  return (
    <div className="container xl:max-w-7xl min-h-screen">
      <Navbar />
      <HomeLayout />
    </div>
  );
}

export default Home;
