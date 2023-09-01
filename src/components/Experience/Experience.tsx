import React from "react";
import FrontEndSection from "./FrontEndSection";
import BackEndSection from "./BackEndSection";

function Experience() {
  return (
    <div className="flex flex-col gap-10 md:gap-3 md:flex-row items-center justify-around">
      <FrontEndSection />
      <BackEndSection />
    </div>
  );
}

export default Experience;
