import React from "react";
import { emptyPage } from "../icons/dashboard-icon";
import { useNavigate } from "react-router-dom";

function EmptySection({ text }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full relative min-h-60">
      <div className="flex justify-center opacity-45">{emptyPage}</div>
      <div className="absolute inset-0 m-auto flex flex-col justify-center items-center gap-8">
        <p className="font-semibold text-secondery-600 text-center">{text}</p>
        <button
          onClick={() => navigate("/branch-menu/mainfood")}
          className="border-2 font-semibold border-primary text-primary hover:bg-primary hover:text-secondery-50 duration-300 rounded-md px-10 py-2 w-1/3 min-w-48">
          منوی رستوران
        </button>
      </div>
    </div>
  );
}

export default EmptySection;
