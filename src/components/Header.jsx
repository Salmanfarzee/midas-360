import React, { useState } from "react";
import clsx from "clsx";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      )}
    >
      <div
        className={clsx(
          "w-full flex flex-row justify-between",
          scrolled ? "mt-[5.4vh] mb-[6.2vh]" : "mt-[8.9vh] mb-[0]"
        )}
      >
        <div
          className={clsx(
            "relative w-[200px] h-[100px]",
            scrolled ? "ml-[6.9vw]" : "ml-[6.5vw]"
          )}
        >
          <a href="/" className="relative w-[200px] h-[100px] block">
            {scrolled ? (
              <img
                src="/assets/midas-logo.png"
                alt="Midas360 Home logo"
                className="absolute w-[188px] h-[93px] md:w-[150px] md:h-[75px] opacity-100 transition-all duration-300 ease-in-out"
              />
            ) : (
              <img
                src="/assets/midas-white-logo.png"
                alt="Midas360 Home logo"
                className="absolute w-[177px] h-[87.74px] md:w-[150px] md:h-[75px] opacity-100 transition-all duration-300 ease-in-out"
              />
            )}
          </a>
        </div>

        <Navigation />
        <button
          className="md:hidden focus:outline-none mr-[10vw]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      {menuOpen && <MobileNavigation scrolled={scrolled} />}
    </header>
  );
};

export default Header;
