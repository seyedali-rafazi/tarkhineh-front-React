import React from "react";
import Navbar from "../ui/Navbar";
import useUser from "../feachers/authentication/useUser";
import Loading from "../ui/Loading";
import HomeLayout from "../components/home/HomeLayout";

function Home() {
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
      <HomeLayout />
    </div>
  );
}

export default Home;
