import React from "react";
import CaseStudy from "../components/HomePage/CaseStudy";
import Benefits from "../components/HomePage/Benefits";
import SmartBanner from "../components/HomePage/SmartBanner";
import MetroCorporation from "../components/HomePage/MetroCorporation";
import AiIntelligence from "../components/HomePage/AiIntelligence";
import Banner from "../components/HomePage/Banner";
import LeadTheFuture from "../components/Common/LeadTheFuture";

const HomePage = () => {
  return (
    <>
      {/* Fullscreen Banner Section */}
      <Banner />

      {/* Ai intelligence Section */}
      <AiIntelligence />

      {/* Metro Corporation Section */}
      <MetroCorporation />

      {/* Smart Banner Section */}
      <SmartBanner />

      {/* Benifits Section */}
      <Benefits />

      {/* Case Study Carousel */}
      <CaseStudy />

      {/* Lead The Future Section */}
      <LeadTheFuture />
    </>
  );
};

export default HomePage;
