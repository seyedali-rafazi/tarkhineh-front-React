import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function PanelSceleton() {
  return (
    <div className="flex flex-col items-center gap-5 border border-secondery-500 rounded-lg p-5 animate-pulse">
      <button
        onClick={() => navigate(-1)}
        className="md:hidden flex justify-start w-full"
      >
        <FaArrowRight />
      </button>
      <div className="flex w-full h-8 justify-start">
        <span className="w-24 h-6 bg-secondery-400 rounded-lg "></span>
      </div>
      <span className="w-full block h-0.5 bg-secondery-500 rounded-full"></span>

      <div className="w-full h-96 md:w-3/4  border rounded-lg border-secondery-500 p-2">
        <div className="w-full h-full bg-secondery-400 rounded-lg"></div>
      </div>
    </div>
  );
}

export default PanelSceleton;
