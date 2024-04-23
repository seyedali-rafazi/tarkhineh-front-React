import React from "react";
import AboutBanner from "./AboutBanner";
import AboutContent from "./AboutContent";
import AboutOption from "./AboutOption";

function AboutLayout() {
  return (
    <div className="flex flex-col gap-10">
      <AboutBanner />
      <AboutContent />
      <AboutOption />
    </div>
  );
}

export default AboutLayout;
