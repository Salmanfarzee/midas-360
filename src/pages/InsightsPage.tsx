import React from "react";
import InsightsBanner from "../components/Insights/InsightsBanner";
import InsightsCards from "../components/Insights/InsightsCards";

const InsightsPage = () => {
  return (
    <>
    {/* banner */}
     <InsightsBanner/>
     {/* card section */}
     <InsightsCards/>
    </>
  );
};

export default InsightsPage;
