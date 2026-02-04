import React from "react";

import InsightsDetailBanner from "../components/InsightsDetail/InsightsDetailBanner";
import InsightsContent from "../components/InsightsDetail/InsightsContent";

const InsightsDetailPage = () => {
  return (
    <>
    {/* banner */}
     <InsightsDetailBanner />
     {/* card section */}
     <InsightsContent />
    </>
  );
};

export default InsightsDetailPage;
