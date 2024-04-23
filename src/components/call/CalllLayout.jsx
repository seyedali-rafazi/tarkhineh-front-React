import React from "react";
import CallBanner from "./CallBanner";
import CallFrenchies from "./CallFrenchies";

function CalllLayout() {
  return (
    <div className="flex flex-col gap-10">
      <CallBanner />
      <CallFrenchies />
    </div>
  );
}

export default CalllLayout;
