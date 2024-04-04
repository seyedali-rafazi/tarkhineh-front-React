import React from "react";
import { Oval } from "react-loader-spinner";

function Loading() {
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

export default Loading;
