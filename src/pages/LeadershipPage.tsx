
import React from "react";
import LeadershipBanner from "../components/Leadership/LeadershipBanner";
import LeadershipAbout from "../components/Leadership/LeadershipAbout";
import OurLeadership from "../components/Leadership/OurLeadership";

const LeadershipPage = () => {
  return (
    <>
    {/* banner */}
     <LeadershipBanner/>
     {/* about section */}
     <LeadershipAbout/>
     <OurLeadership/>
    </>
  );
};

export default LeadershipPage;
