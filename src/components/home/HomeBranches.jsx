import React from "react";
import Branches from "./Branches";

function HomeBranches() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="font-semibold text-xl">ترخینه گردی</h2>
      <Branches />
    </div>
  );
}

export default HomeBranches;
