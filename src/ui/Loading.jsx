import React from "react";
import { Oval, ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export function LoadingBars({width}) {
  return (
    <div className="flex justify-center items-center h-full">
      <ThreeDots
        visible={true}
        height={width}
        width={width}
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
