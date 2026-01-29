import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUsPage";
import InsightsPage from "../pages/InsightsPage";
import HowItWorksPage from "../pages/HowItWorksPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/howitworks" element={<HowItWorksPage />} />
    </Routes>
  );
};
export default AppRoutes;
