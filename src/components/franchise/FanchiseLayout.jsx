import React from "react";
import FranchiseBanner from "./FranchiseBanner";
import FranchiseOptions from "./FranchiseOptions";
import Advatages from "./Advatages";
import Counseling from "./Counseling";
import CounselingForm from "./CounselingForm";

function FanchiseLayout() {
  return (
    <div className="flex flex-col gap-10">
      <FranchiseBanner />
      <FranchiseOptions />
      <div className="flex justify-center items-center">
        <span className="w-11/12 h-[1px] bg-secondery-400 "></span>
      </div>
      <Advatages />
      <div className="flex justify-center items-center">
        <span className="w-11/12 h-[1px] bg-secondery-400 "></span>
      </div>
      <Counseling />
      <div className="flex justify-center items-center">
        <span className="w-11/12 h-[1px] bg-secondery-400 "></span>
      </div>
      <CounselingForm />
    </div>
  );
}

export default FanchiseLayout;
