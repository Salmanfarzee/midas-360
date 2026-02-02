import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUsPage";
import InsightsPage from "../pages/InsightsPage";
import HowItWorksPage from "../pages/HowItWorksPage";
import LeadershipPage from "../pages/LeadershipPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/howitworks" element={<HowItWorksPage />} />
      <Route path="/leadership" element={<LeadershipPage />} />
    </Routes>
  );
};
export default AppRoutes;
