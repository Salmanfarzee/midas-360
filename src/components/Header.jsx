import React, { useState } from "react";
import clsx from "clsx";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import midas1 from "/assets/midas-mobile-1.svg";
import midas2 from "/assets/midas-mobile-2.svg";

const Header = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 md:h-[110px] h-[75px] transition-all duration-300 flex items-center", // header fixed height + vertical centering
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      )}
    >
      <div className="w-full flex flex-row justify-between items-center px-[6vw]">
        {/* Website logo (desktop) */}
        <a href="/" className="hidden md:block">
          {scrolled ? (
            <img
              src="/assets/midas-color.svg"
              alt="Midas360 Home logo"
              className="transition-all duration-300 ease-in-out"
            />
          ) : (
            <img
              src="/assets/midas-white.svg"
              alt="Midas360 Home logo"
              className="transition-all duration-300 ease-in-out"
            />
          )}
        </a>

        {/* Mobile logo */}
        <a href="/" className="block md:hidden">
          {scrolled ? (
            <img
              src={midas2}
              alt="Midas360 Home logo"
              className="transition-all duration-300 ease-in-out"
            />
          ) : (
            <img
              src={midas1}
              alt="Midas360 Home logo"
              className="transition-all duration-300 ease-in-out"
            />
          )}
        </a>

        {/* Navigation (desktop) */}
        <Navigation scrolled={scrolled} />

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="/assets/mobile-menu.svg" alt="Menu Icon" />
          {/* <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg> */}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && <MobileNavigation scrolled={scrolled} />}
    </header>
  );
};

export default Header;