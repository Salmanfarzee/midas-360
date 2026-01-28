import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import midas1 from "../../public/assets/midas-mobile-1.svg"; // white mobile logo
import midas2 from "../../public/assets/midas-mobile-2.svg"; // color mobile logo

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // reset when not on home
      setScrolled(false);
    }
  }, [isHome]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 md:h-[110px] h-[75px] transition-all duration-300 flex items-center",
        isHome
          ? scrolled
            ? "bg-white shadow-md text-black"
            : "bg-transparent text-white"
          : "bg-white shadow-md text-black"
      )}
    >
      <div className="w-full flex flex-row justify-between items-center px-[6vw]">
        {/* Website logo (desktop) */}
        <a href="/" className="hidden md:block">
          {isHome && !scrolled ? (
            <img
              src="/assets/midas-white.svg"
              alt="Midas360 Home logo"
              className="transition-all duration-300 ease-in-out"
            />
          ) : (
            <img
              src="/assets/midas-color.svg"
              alt="Midas360 Home logo"
              className="transition-all duration-300 ease-in-out"
            />
          )}
        </a>

        {/* Mobile logo */}
        <a href="/" className="block md:hidden">
          {isHome && !scrolled ? (
            <img
              src={midas1}
              alt="Midas360 Mobile logo"
              className="transition-all duration-300 ease-in-out"
            />
          ) : (
            <img
              src={midas2}
              alt="Midas360 Mobile logo"
              className="transition-all duration-300 ease-in-out"
            />
          )}
        </a>

        {/* Navigation (desktop) */}
        <Navigation scrolled={scrolled} isHome={isHome} />

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="/assets/mobile-menu.svg" alt="Menu Icon" />
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && <MobileNavigation scrolled={scrolled} />}
    </header>
  );
};

export default Header;