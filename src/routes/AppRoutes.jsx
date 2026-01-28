import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contactus" element={<ContactUsPage />} />

        </Routes>
    );
}
export default AppRoutes;   