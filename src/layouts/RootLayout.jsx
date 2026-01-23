import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen bg-white text-gray-900 ">
      <Header scrolled={scrolled} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default RootLayout;
