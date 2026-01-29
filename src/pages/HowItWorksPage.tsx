import React from "react";
import HowItWorksBanner from "../components/HowItWorks/HowItWorksBanner";
import HowItWorksSec2 from "../components/HowItWorks/HowItWorksSec2";
import HowItWorksSec4 from "../components/HowItWorks/HowItWorksSec4";
import HowItWorksSec3 from "../components/HowItWorks/HowItWorksSec3";

const HowItWorksPage = () => {
  return (
    <>
      <div >
        {/* banner */}
        <HowItWorksBanner />

        {/* sec2 */}
        <HowItWorksSec2 />

        {/* sec3 */}
        <HowItWorksSec3 />

        {/* sec4 */}
        <HowItWorksSec4 />
      </div>
    </>
  );
};

export default HowItWorksPage;
