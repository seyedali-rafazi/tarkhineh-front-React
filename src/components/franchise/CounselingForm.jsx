import React from "react";
import UserInformation from "./UserInformation";

function CounselingForm() {
  return (
    <div className="flex flex-col border border-secondery-400 rounded-xl gap-4 mx-5 p-5">
      <h2 className="w-full text-center font-bold text-lg md:text-xl">فرم درخواست نمایندگی</h2>
      <UserInformation/>
    </div>
  );
}

export default CounselingForm;
