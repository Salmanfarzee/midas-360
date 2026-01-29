import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUsPage";
import InsightsPage from "../pages/InsightsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/insights" element={<InsightsPage />} />
    </Routes>
  );
};
export default AppRoutes;
