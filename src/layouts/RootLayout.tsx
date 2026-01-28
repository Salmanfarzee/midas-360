import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;